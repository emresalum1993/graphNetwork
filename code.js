var labelText = "SEAlyzer:UpdateProcess"

function main() {
    //Logger.log(extractKey("[P] [KW] [Productbrand] DE_n:DIOR_id:b0690_k:brandid","id","_"))
    //readFeed("https://get.cpexp.de/_pyD4j7ir73Ah8L-WaSTrqMEal9RLVGYdVHIxjmWqJaaH5v-UrsC3FXL-II6iSoC/douglasde_desmartmarkennametestde.csv")

    var url = "https://docs.google.com/spreadsheets/d/17wbKZL0S-qaJhlEqvNSYVxVPYb-bTO2T4vbXVsRRKCY/edit#gid=0"
    var ss = SpreadsheetApp.openByUrl(url);
    var sheet = ss.getSheetByName("SmartJobSettings").getDataRange().getValues();
    //Logger.log(sheet)
    var header2id = {}
    var id2header = {}
    var jobdata = {}
    var validaccounts = []
    var jobname = "SEAlyzer:UpdateProcess:Keyword"

    for (var i = 0; i < sheet.length; i++) {
        if (i == 0) {
            for (var j = 0; j < sheet[i].length; j++) {
                header2id[sheet[i][j]] = j
                id2header[j] = sheet[i][j]
            }
        }
        if (i > 0) {
            var customerid = sheet[i][header2id['Customerid']]
            if (!(customerid in jobdata)) {
                jobdata[customerid] = {}
                for (var j = 0; j < sheet[i].length; j++) {
                    jobdata[customerid][id2header[j]] = sheet[i][j]
                }
            }
        }

    }

    Logger.log(jobdata)
    for (customerid in jobdata) {
        Logger.log(customerid)
        if (jobdata[customerid][jobname] == 'Active') {
            validaccounts.push(customerid)
        }
    }
    Logger.log("Active Accounts: " + validaccounts)
    Logger.log("Starte Partitionierung...")

    var accountpartition = []
    var maximum_partition_size = 40
    Logger.log("Number of total accounts:" + validaccounts.length)
    var partition_number = Math.round((validaccounts.length / maximum_partition_size) + 0.5, 0)
    Logger.log("Partitions needed: " + partition_number)

    var d = new Date();
    var hourOfDay = d.getHours();


    for (var i = 0; i < validaccounts.length; i++) {
        //Logger.log(accountlist[i])
        if (validaccounts[i] % partition_number == hourOfDay % partition_number) {
            accountpartition.push(validaccounts[i])
        }
    }

    Logger.log("Set of accounts that should be processed this hour:")
    Logger.log(accountpartition)





    fetchAccounts(accountpartition, jobdata)
}

function fetchAccounts(customerids, settings) {
    Logger.log("Hole Acccounts")
    var accountSelector = MccApp.accounts()
        .withLimit(50) // Limit is 50 for processing in parallel
        //.withIds([5421473509]) 
        .withIds(customerids)

    accountSelector.executeInParallel("upsertCampaigns", null, JSON.stringify(settings));
}


function readFeed(url) {

    var response = UrlFetchApp.fetch(url);
    var data = new Array();
    data = response.getContentText().split(/\r?\n|\r/);

    return data

}


function loadInventory() {
    // Load existing campaigns
}


function upsertCampaigns(sharedParameter) {

    var account = AdWordsApp.currentAccount()
    if (!AdsApp.labels().withCondition("Name = '" + labelText + "'").get().hasNext()) {
        //Create label if not exists
        Logger.log("[" + account.getName() + " (" + account.getCustomerId() + ")] Created label (did not exist before)")
        AdsApp.createLabel(labelText);
    } else {
        Logger.log("[" + account.getName() + " (" + account.getCustomerId() + ")] Has label already")
    }


    var customerid = AdWordsApp.currentAccount().getCustomerId();
    customerid = customerid.replace(/-/g, "");
    var settings = JSON.parse(sharedParameter)
    Logger.log(settings)

    Logger.log(customerid)
        // Fetch Inventory
    var target_inventory = {}
    var keyword_inventory = {}


    var inventory = AdWordsApp.report(
            'SELECT campaign.name, ad_group.name FROM ad_group WHERE campaign.status = "ENABLED"')
        .rows();

    while (inventory.hasNext()) {
        var row = inventory.next();
        var key = row['campaign.name'] + ";" + row['ad_group.name']
            //Logger.log(row)
        target_inventory[key] = 1
            //Logger.log(key)
            //Logger.log(row['CampaignName']+";"+row['AdGroupName'] +";"+ row['Criteria'])


    }
    var inventory = AdWordsApp.report(
            'SELECT campaign.name, ad_group.name, ad_group_criterion.keyword.text, ad_group_criterion.keyword.match_type FROM keyword_view WHERE campaign.status = "ENABLED" AND ad_group_criterion.keyword.match_type IN ("EXACT","PHRASE")')
        .rows();
    while (inventory.hasNext()) {
        var row = inventory.next();
        var key = row['campaign.name'] + ";" + row['ad_group.name'] + ";" + row['ad_group_criterion.keyword.text']
            //Logger.log(row)
        keyword_inventory[key] = 1
            // Logger.log(key)
            //Logger.log("Keyword:"+row['Criteria'] + ":"+row['KeywordMatchType'])
            //Logger.log(row['CampaignName']+";"+row['AdGroupName'] +";"+ row['Criteria'])


    }


    // Fetch Feed Data
    //feeddata = readFeed("https://get.cpexp.de/_pyD4j7ir73Ah8L-WaSTrqMEal9RLVGYdVHIxjmWqJaaH5v-UrsC3FXL-II6iSoC/douglasde_desmartmarkennametestde.csv")
    //var feeddata = readFeed("https://europe-west1-sealyzer-data-science.cloudfunctions.net/feed_analyzer?groupby=id,k&url=https://get.cpexp.de/_pyD4j7ir73Ah8L-WaSTrqMEal9RLVGYdVHIxjmWqJaaH5v-UrsC3FXL-II6iSoC/douglasde_desmartmarkennametestde.csv")
    var feeddata = readFeed(settings[customerid]['Feed URL'])

    var headernames = {}
    var keyword_added = {}
    keyword_added['Phrase'] = {}
    keyword_added['Exact'] = {}
    var campaign_upload;
    var keyword_new = AdWordsApp.bulkUploads().newCsvUpload(["Action", "Campaign", "Ad group", "Keyword", "Match type", "Label"]);
    var customerName = AdWordsApp.currentAccount().getName()
    keyword_new.setFileName("Keywords|" + customerName + "SEAlyzer:UpdateProcess:KeywordProd_new")
    var countRow = 0
    for (var i = 0; i < feeddata.length - 1; i++) {
        if (i == 0) {
            row = feeddata[i].split('|')
            for (var c = 0; c < row.length; c++) {
                //Logger.log(row[c])
                headernames[row[c]] = c
            }
        } else {
            row = feeddata[i].split('|')
                //Logger.log("row:"+row)
            var matchtypes = ['Campaign_Name_Exact', 'Campaign_Name_Phrase']
            var campaign2adgroup = {}
            var campaign2keyword = {}
            campaign2adgroup['Campaign_Name_Exact'] = 'Adgroup_Name_Exact'
            campaign2adgroup['Campaign_Name_Phrase'] = 'Adgroup_Name_Phrase'
            campaign2keyword['Campaign_Name_Exact'] = 'Keyword_Exact'
            campaign2keyword['Campaign_Name_Phrase'] = 'Keyword_Phrase'

            for (var mtcount = 0; mtcount < matchtypes.length; mtcount++) {

                var campaignname = row[headernames[matchtypes[mtcount]]]
                var adgroupname = row[headernames[campaign2adgroup[matchtypes[mtcount]]]]
                var keyword = row[headernames[campaign2keyword[matchtypes[mtcount]]]]

                var key = campaignname + ";" + adgroupname
                var keywordkey = campaignname + ";" + adgroupname + ";" + keyword
                var mt = ""
                if (matchtypes[mtcount] == "Campaign_Name_Exact") {

                    mt = "Exact"
                }
                if (matchtypes[mtcount] == "Campaign_Name_Phrase") {
                    mt = "Phrase"
                }
                //Logger.log(mt)
                if ((key in target_inventory) && (!(keywordkey in keyword_inventory)) && (!(keyword in keyword_added[mt]))) {


                    Logger.log(campaignname)
                    Logger.log("\t" + adgroupname)
                    Logger.log("\t\t" + keyword)
                    Logger.log(key)
                    keyword_added[mt][keyword] = 1
                    keyword_new.append({
                        'Action': 'add',
                        'Campaign': campaignname,
                        'Ad group': adgroupname,
                        'Keyword': keyword,
                        'Match type': mt,
                        'Label': labelText
                    });
                    countRow++
                }


            }
        }




    }
    if (countRow > 0) {
        keyword_new.apply()
    }
}
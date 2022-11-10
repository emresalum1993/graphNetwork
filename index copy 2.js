var dirDist50 = "#E8544E",
    dirDist10 = "#FFD265",
    dirDistLess10 = "#2AA775";
var dataOccurrences = [{ "onegram": "google", "count": 175 }, { "onegram": "autocomplete", "count": 155 }, { "onegram": "search", "count": 151 }, { "onegram": "keyword", "count": 109 }, { "onegram": "keywords", "count": 86 }, { "onegram": "suggestions", "count": 49 }, { "onegram": "predictions", "count": 49 }, { "onegram": "tool", "count": 44 }, { "onegram": "seo", "count": 39 }, { "onegram": "content", "count": 30 }, { "onegram": "research", "count": 28 }, { "onegram": "find", "count": 28 }, { "onegram": "", "count": 24 }, { "onegram": "related", "count": 20 }, { "onegram": "results", "count": 20 }, { "onegram": "searches", "count": 20 }, { "onegram": "list", "count": 19 }, { "onegram": "autosuggest", "count": 19 }, { "onegram": "google's", "count": 19 }, { "onegram": "suggest", "count": 19 }, { "onegram": "type", "count": 18 }, { "onegram": "query", "count": 18 }, { "onegram": "data", "count": 18 }, { "onegram": "queries", "count": 17 }, { "onegram": "typing", "count": 17 }, { "onegram": "brand", "count": 17 }, { "onegram": "free", "count": 16 }, { "onegram": "intent", "count": 16 }, { "onegram": "searching", "count": 16 }, { "onegram": "click", "count": 16 }, { "onegram": "questions", "count": 16 }, { "onegram": "terms", "count": 15 }, { "onegram": "product", "count": 15 }, { "onegram": "start", "count": 14 }, { "onegram": "time", "count": 14 }, { "onegram": "term", "count": 14 }, { "onegram": "feature", "count": 13 }, { "onegram": "enter", "count": 13 }, { "onegram": "work", "count": 13 }, { "onegram": "entities", "count": 13 }, { "onegram": "important", "count": 13 }, { "onegram": "tools", "count": 13 }, { "onegram": "disable", "count": 13 }, { "onegram": "user", "count": 12 }, { "onegram": "box", "count": 12 }, { "onegram": "marketing", "count": 12 }, { "onegram": "strategy", "count": 12 }, { "onegram": "users", "count": 11 }, { "onegram": "engine", "count": 11 }, { "onegram": "\u2014", "count": 11 }, { "onegram": "keyboard", "count": 11 }, { "onegram": "youtube", "count": 10 }, { "onegram": "online", "count": 10 }, { "onegram": "reputation", "count": 10 }, { "onegram": "site", "count": 10 }, { "onegram": "popular", "count": 10 }, { "onegram": "prediction", "count": 10 }, { "onegram": "seed", "count": 9 }, { "onegram": "based", "count": 9 }, { "onegram": "topic", "count": 9 }, { "onegram": "report", "count": 9 }, { "onegram": "create", "count": 9 }, { "onegram": "management", "count": 9 }, { "onegram": "target", "count": 9 }, { "onegram": "bar", "count": 9 }, { "onegram": "ideas", "count": 8 }, { "onegram": "complete", "count": 8 }, { "onegram": "different", "count": 8 }, { "onegram": "topics", "count": 8 }, { "onegram": "words", "count": 8 }, { "onegram": "make", "count": 8 }, { "onegram": "for", "count": 8 }, { "onegram": "service", "count": 8 }, { "onegram": "relevant", "count": 8 }, { "onegram": "web", "count": 8 }, { "onegram": "longtail", "count": 8 }, { "onegram": "part", "count": 8 }, { "onegram": "real", "count": 8 }, { "onegram": "local", "count": 8 }, { "onegram": "pages", "count": 8 }, { "onegram": "branded", "count": 8 }, { "onegram": "website", "count": 7 }, { "onegram": "easy", "count": 7 }, { "onegram": "easily", "count": 7 }, { "onegram": "text", "count": 7 }, { "onegram": "negative", "count": 7 }, { "onegram": "trending", "count": 7 }, { "onegram": "makes", "count": 7 }, { "onegram": "phone", "count": 7 }, { "onegram": "set", "count": 7 }, { "onegram": "specific", "count": 7 }, { "onegram": "long", "count": 7 }, { "onegram": "back", "count": 7 }, { "onegram": "understand", "count": 7 }, { "onegram": "1", "count": 7 }, { "onegram": "panel", "count": 7 }, { "onegram": "customers", "count": 7 }, { "onegram": "domain", "count": 7 }, { "onegram": "suggestion", "count": 6 }, { "onegram": "choose", "count": 6 }, { "onegram": "business", "count": 6 }, { "onegram": "automatically", "count": 6 }, { "onegram": "select", "count": 6 }, { "onegram": "language", "count": 6 }, { "onegram": "impact", "count": 6 }, { "onegram": "inappropriate", "count": 6 }, { "onegram": "app", "count": 6 }, { "onegram": "niche", "count": 6 }, { "onegram": "include", "count": 6 }, { "onegram": "features", "count": 6 }, { "onegram": "great", "count": 6 }, { "onegram": "including", "count": 6 }, { "onegram": "idea", "count": 6 }, { "onegram": "example", "count": 6 }, { "onegram": "ways", "count": 6 }, { "onegram": "powerful", "count": 6 }, { "onegram": "menu", "count": 6 }, { "onegram": "*", "count": 6 }, { "onegram": "location", "count": 6 }, { "onegram": "cpc", "count": 6 }, { "onegram": "control", "count": 6 }, { "onegram": "turn", "count": 6 }, { "onegram": "api", "count": 6 }, { "onegram": "show", "count": 6 }, { "onegram": "android", "count": 6 }, { "onegram": "insights", "count": 5 }, { "onegram": "add", "count": 5 }, { "onegram": "traffic", "count": 5 }, { "onegram": "helps", "count": 5 }, { "onegram": "give", "count": 5 }, { "onegram": "trends", "count": 5 }, { "onegram": "process", "count": 5 }, { "onegram": "feedback", "count": 5 }, { "onegram": "phrases", "count": 5 }, { "onegram": "internet", "count": 5 }, { "onegram": "selected", "count": 5 }, { "onegram": "python", "count": 5 }, { "onegram": "entity", "count": 5 }, { "onegram": "products", "count": 5 }, { "onegram": "this", "count": 5 }, { "onegram": "digital", "count": 5 }, { "onegram": "page", "count": 5 }, { "onegram": "method", "count": 5 }, { "onegram": "searchers", "count": 5 }, { "onegram": "metrics", "count": 5 }, { "onegram": "left", "count": 5 }, { "onegram": "dominator", "count": 5 }, { "onegram": "marketers", "count": 5 }, { "onegram": "media", "count": 5 }, { "onegram": "away", "count": 5 }, { "onegram": "knowledge", "count": 5 }, { "onegram": "it", "count": 5 }, { "onegram": "more", "count": 5 }, { "onegram": "moz", "count": 5 }, { "onegram": "interesting", "count": 4 }, { "onegram": "intents", "count": 4 }, { "onegram": "csv", "count": 4 }, { "onegram": "ngram", "count": 4 }, { "onegram": "seconds", "count": 4 }, { "onegram": "html", "count": 4 }, { "onegram": "default", "count": 4 }, { "onegram": "identify", "count": 4 }, { "onegram": "multiple", "count": 4 }, { "onegram": "provide", "count": 4 }, { "onegram": "information", "count": 4 }, { "onegram": "phrase", "count": 4 }, { "onegram": "names", "count": 4 }, { "onegram": "brands", "count": 4 }, { "onegram": "bring", "count": 4 }, { "onegram": "things", "count": 4 }, { "onegram": "learn", "count": 4 }, { "onegram": "way", "count": 4 }, { "onegram": "tail", "count": 4 }, { "onegram": "competitors", "count": 4 }, { "onegram": "understanding", "count": 4 }, { "onegram": "lot", "count": 4 }, { "onegram": "extract", "count": 4 }, { "onegram": "open", "count": 4 }, { "onegram": "project", "count": 4 }, { "onegram": "manage", "count": 4 }, { "onegram": "to", "count": 4 }, { "onegram": "quickly", "count": 4 }, { "onegram": "above", "count": 4 }, { "onegram": "case", "count": 4 }, { "onegram": "etc", "count": 4 }, { "onegram": "2", "count": 4 }, { "onegram": "social", "count": 4 }, { "onegram": "video", "count": 4 }, { "onegram": "years", "count": 4 }, { "onegram": "mobile", "count": 4 }, { "onegram": "common", "count": 4 }, { "onegram": "history", "count": 4 }, { "onegram": "means", "count": 4 }, { "onegram": "organic", "count": 4 }, { "onegram": "searched", "count": 4 }, { "onegram": "highvalue", "count": 4 }, { "onegram": "stages", "count": 4 }, { "onegram": "name", "count": 4 }, { "onegram": "autofill", "count": 4 }, { "onegram": "remove", "count": 4 }, { "onegram": "essential", "count": 4 }, { "onegram": "personal", "count": 4 }, { "onegram": "recommendations", "count": 4 }, { "onegram": "account", "count": 4 }, { "onegram": "algorithm", "count": 4 }, { "onegram": "suggested", "count": 4 }, { "onegram": "making", "count": 4 }, { "onegram": "key", "count": 4 }, { "onegram": "success", "count": 4 }, { "onegram": "reflect", "count": 4 }, { "onegram": "users'", "count": 4 }, { "onegram": "and", "count": 4 }, { "onegram": "refinements", "count": 4 }, { "onegram": "serps", "count": 4 }, { "onegram": "comments", "count": 4 }, { "onegram": "tap", "count": 4 }, { "onegram": "notepad", "count": 4 }, { "onegram": "browse", "count": 3 }, { "onegram": "attributes", "count": 3 }, { "onegram": "21", "count": 3 }, { "onegram": "auto", "count": 3 }, { "onegram": "request", "count": 3 }, { "onegram": "directly", "count": 3 }, { "onegram": "shopping", "count": 3 }, { "onegram": "check", "count": 3 }, { "onegram": "analyze", "count": 3 }, { "onegram": "tied", "count": 3 }, { "onegram": "links", "count": 3 }, { "onegram": "suggests", "count": 3 }, { "onegram": "entered", "count": 3 }, { "onegram": "concept", "count": 3 }, { "onegram": "appropriate", "count": 3 }, { "onegram": "like", "count": 3 }, { "onegram": "finding", "count": 3 }, { "onegram": "targeted", "count": 3 }, { "onegram": "building", "count": 3 }, { "onegram": "typed", "count": 3 }, { "onegram": "popularity", "count": 3 }, { "onegram": "valuable", "count": 3 }, { "onegram": "scraper", "count": 3 }, { "onegram": "apis", "count": 3 }, { "onegram": "guide", "count": 3 }, { "onegram": "mentioned", "count": 3 }, { "onegram": "sources", "count": 3 }, { "onegram": "automated", "count": 3 }, { "onegram": "projects", "count": 3 }, { "onegram": "yes", "count": 3 }, { "onegram": "probably", "count": 3 }, { "onegram": "focus", "count": 3 }, { "onegram": "smart", "count": 3 }, { "onegram": "experts", "count": 3 }, { "onegram": "services", "count": 3 }, { "onegram": "rights", "count": 3 }, { "onegram": "cookies", "count": 3 }, { "onegram": "dropdown", "count": 3 }, { "onegram": "finishes", "count": 3 }, { "onegram": "workspace", "count": 3 }, { "onegram": "finally", "count": 3 }, { "onegram": "custom", "count": 3 }, { "onegram": "simply", "count": 3 }, { "onegram": "button", "count": 3 }, { "onegram": "3", "count": 3 }, { "onegram": "4", "count": 3 }, { "onegram": "import", "count": 3 }, { "onegram": "volume", "count": 3 }, { "onegram": "learning", "count": 3 }, { "onegram": "pull", "count": 3 }, { "onegram": "ninjas", "count": 3 }, { "onegram": "paid", "count": 3 }, { "onegram": "day", "count": 3 }, { "onegram": "power", "count": 3 }, { "onegram": "tasks", "count": 3 }, { "onegram": "faster", "count": 3 }, { "onegram": "chrome", "count": 3 }, { "onegram": "exploration", "count": 3 }, { "onegram": "determine", "count": 3 }, { "onegram": "put", "count": 3 }, { "onegram": "potential", "count": 3 }, { "onegram": "uncover", "count": 3 }, { "onegram": "signed", "count": 3 }, { "onegram": "guides", "count": 3 }, { "onegram": "fully", "count": 3 }, { "onegram": "priority", "count": 3 }, { "onegram": "problems", "count": 3 }, { "onegram": "manually", "count": 3 }, { "onegram": "sam", "count": 3 }, { "onegram": "hollingsworth", "count": 3 }, { "onegram": "currently", "count": 3 }, { "onegram": "personalized", "count": 3 }, { "onegram": "past", "count": 3 }, { "onegram": "on", "count": 3 }, { "onegram": "core", "count": 3 }, { "onegram": "match", "count": 3 }, { "onegram": "appearing", "count": 3 }, { "onegram": "generate", "count": 3 }, { "onegram": "additional", "count": 3 }, { "onegram": "optimization", "count": 3 }, { "onegram": "rank", "count": 3 }, { "onegram": "tracking", "count": 3 }, { "onegram": "competitive", "count": 3 }, { "onegram": "powered", "count": 3 }, { "onegram": "index", "count": 3 }, { "onegram": "authority", "count": 3 }, { "onegram": "top", "count": 3 }, { "onegram": "ranking", "count": 3 }, { "onegram": "instantly", "count": 3 }, { "onegram": "community", "count": 3 }, { "onegram": "journeys", "count": 3 }, { "onegram": "platform", "count": 3 }, { "onegram": "suggesting", "count": 3 }, { "onegram": "address", "count": 3 }, { "onegram": "insight", "count": 3 }, { "onegram": "answer", "count": 3 }, { "onegram": "continue", "count": 3 }, { "onegram": "question", "count": 3 }, { "onegram": "days", "count": 3 }, { "onegram": "considers", "count": 3 }, { "onegram": "prior", "count": 3 }, { "onegram": "slow", "count": 3 }, { "onegram": "branddriven", "count": 3 }, { "onegram": "edit", "count": 3 }, { "onegram": "slider", "count": 3 }, { "onegram": "enable", "count": 3 }, { "onegram": "autocompletions", "count": 3 }, { "onegram": "export", "count": 2 }, { "onegram": "large", "count": 2 }, { "onegram": "generator", "count": 2 }, { "onegram": "limits", "count": 2 }, { "onegram": "requests", "count": 2 }, { "onegram": "sorry", "count": 2 }, { "onegram": "copy", "count": 2 }, { "onegram": "source", "count": 2 }, { "onegram": "significant", "count": 2 }, { "onegram": "commercial", "count": 2 }, { "onegram": "nature", "count": 2 }, { "onegram": "input", "count": 2 }, { "onegram": "dealing", "count": 2 }, { "onegram": "eg", "count": 2 }, { "onegram": "categories", "count": 2 }, { "onegram": "belong", "count": 2 }, { "onegram": "analyzing", "count": 2 }, { "onegram": "created", "count": 2 }, { "onegram": "you", "count": 2 }, { "onegram": "particular", "count": 2 }, { "onegram": "generates", "count": 2 }, { "onegram": "usage", "count": 2 }, { "onegram": "crucial", "count": 2 }, { "onegram": "businesses", "count": 2 }, { "onegram": "offset", "count": 2 }, { "onegram": "situation", "count": 2 }, { "onegram": "offers", "count": 2 }, { "onegram": "deal", "count": 2 }, { "onegram": "accurate", "count": 2 }, { "onegram": "need", "count": 2 }, { "onegram": "speeds", "count": 2 }, { "onegram": "better", "count": 2 }, { "onegram": "localized", "count": 2 }, { "onegram": "desktop", "count": 2 }, { "onegram": "longpress", "count": 2 }, { "onegram": "option", "count": 2 }, { "onegram": "first", "count": 2 }, { "onegram": "purpose", "count": 2 }, { "onegram": "goal", "count": 2 }, { "onegram": "generating", "count": 2 }, { "onegram": "foot", "count": 2 }, { "onegram": "fast", "count": 2 }, { "onegram": "script", "count": 2 }, { "onegram": "60", "count": 2 }, { "onegram": "build", "count": 2 }, { "onegram": "level", "count": 2 }, { "onegram": "official", "count": 2 }, { "onegram": "bing", "count": 2 }, { "onegram": "amazon", "count": 2 }, { "onegram": "available", "count": 2 }, { "onegram": "full", "count": 2 }, { "onegram": "calls", "count": 2 }, { "onegram": "\u201cgoogle", "count": 2 }, { "onegram": "saved", "count": 2 }, { "onegram": "sending", "count": 2 }, { "onegram": "software", "count": 2 }, { "onegram": "surprised", "count": 2 }, { "onegram": "thinks", "count": 2 }, { "onegram": "market", "count": 2 }, { "onegram": "competition", "count": 2 }, { "onegram": "analysis", "count": 2 }, { "onegram": "situations", "count": 2 }, { "onegram": "combination", "count": 2 }, { "onegram": "that", "count": 2 }, { "onegram": "provided", "count": 2 }, { "onegram": "shown", "count": 2 }, { "onegram": "fill", "count": 2 }, { "onegram": "perfect", "count": 2 }, { "onegram": "pemavor", "count": 2 }, { "onegram": "performance", "count": 2 }, { "onegram": "datadriven", "count": 2 }, { "onegram": "ads", "count": 2 }, { "onegram": "347", "count": 2 }, { "onegram": "\u00a9", "count": 2 }, { "onegram": "2022", "count": 2 }, { "onegram": "reserved", "count": 2 }, { "onegram": "visit", "count": 2 }, { "onegram": "offered", "count": 2 }, { "onegram": "task", "count": 2 }, { "onegram": "found", "count": 2 }, { "onegram": "context", "count": 2 }, { "onegram": "settings", "count": 2 }, { "onegram": "moved", "count": 2 }, { "onegram": "word", "count": 2 }, { "onegram": "intended", "count": 2 }, { "onegram": "predict", "count": 2 }, { "onegram": "is", "count": 2 }, { "onegram": "human", "count": 2 }, { "onegram": "hundreds", "count": 2 }, { "onegram": "saves", "count": 2 }, { "onegram": "interested", "count": 2 }, { "onegram": "in", "count": 2 }, { "onegram": "camera", "count": 2 }, { "onegram": "your", "count": 2 }, { "onegram": "download", "count": 2 }, { "onegram": "file", "count": 2 }, { "onegram": "planner", "count": 2 }, { "onegram": "5", "count": 2 }, { "onegram": "distracting", "count": 2 }, { "onegram": "wrong", "count": 2 }, { "onegram": "issue", "count": 2 }, { "onegram": "closed", "count": 2 }, { "onegram": "issues", "count": 2 }, { "onegram": "here", "count": 2 }, { "onegram": "reporting", "count": 2 }, { "onegram": "coding", "count": 2 }, { "onegram": "encoder", "count": 2 }, { "onegram": "studio", "count": 2 }, { "onegram": "excellent", "count": 2 }, { "onegram": "interactive", "count": 2 }, { "onegram": "reports", "count": 2 }, { "onegram": "adword", "count": 2 }, { "onegram": "possible", "count": 2 }, { "onegram": "founder", "count": 2 }, { "onegram": "agency", "count": 2 }, { "onegram": "alexandre", "count": 2 }, { "onegram": "marotel", "count": 2 }, { "onegram": "websites", "count": 2 }, { "onegram": "smarter", "count": 2 }, { "onegram": "professionals", "count": 2 }, { "onegram": "benefit", "count": 2 }, { "onegram": "news", "count": 2 }, { "onegram": "offensive", "count": 2 }, { "onegram": "habits", "count": 2 }, { "onegram": "often", "count": 2 }, { "onegram": "saving", "count": 2 }, { "onegram": "movies", "count": 2 }, { "onegram": "shows", "count": 2 }, { "onegram": "properties", "count": 2 }, { "onegram": "messaging", "count": 2 }, { "onegram": "simple", "count": 2 }, { "onegram": "primary", "count": 2 }, { "onegram": "offering", "count": 2 }, { "onegram": "works", "count": 2 }, { "onegram": "millions", "count": 2 }, { "onegram": "avoid", "count": 2 }, { "onegram": "graph", "count": 2 }, { "onegram": "especially", "count": 2 }, { "onegram": "previously", "count": 2 }, { "onegram": "laborious", "count": 2 }, { "onegram": "engagement", "count": 2 }, { "onegram": "gaps", "count": 2 }, { "onegram": "early", "count": 2 }, { "onegram": "strategies", "count": 2 }, { "onegram": "quality", "count": 2 }, { "onegram": "ensure", "count": 2 }, { "onegram": "personalization", "count": 2 }, { "onegram": "offer", "count": 2 }, { "onegram": "brand's", "count": 2 }, { "onegram": "perform", "count": 2 }, { "onegram": "satisfy", "count": 2 }, { "onegram": "invaluable", "count": 2 }, { "onegram": "them", "count": 2 }, { "onegram": "optimized", "count": 2 }, { "onegram": "higher", "count": 2 }, { "onegram": "course", "count": 2 }, { "onegram": "one", "count": 2 }, { "onegram": "relate", "count": 2 }, { "onegram": "serp", "count": 2 }, { "onegram": "orm", "count": 2 }, { "onegram": "are", "count": 2 }, { "onegram": "generation", "count": 2 }, { "onegram": "competitor", "count": 2 }, { "onegram": "reasons", "count": 2 }, { "onegram": "\u201cbrand", "count": 2 }, { "onegram": "expand", "count": 2 }, { "onegram": "edge", "count": 2 }, { "onegram": "space", "count": 2 }, { "onegram": "prevent", "count": 2 }, { "onegram": "spam", "count": 2 }, { "onegram": "contain", "count": 2 }, { "onegram": "launched", "count": 2 }, { "onegram": "easier", "count": 2 }, { "onegram": "resources", "count": 2 }, { "onegram": "image", "count": 2 }, { "onegram": "helping", "count": 2 }, { "onegram": "lead", "count": 2 }, { "onegram": "activity", "count": 2 }, { "onegram": "policies", "count": 2 }, { "onegram": "introduced", "count": 2 }, { "onegram": "performing", "count": 2 }, { "onegram": "experience", "count": 2 }, { "onegram": "scrape", "count": 2 }, { "onegram": "however", "count": 2 }, { "onegram": "handy", "count": 2 }, { "onegram": "programmatically", "count": 2 }, { "onegram": "countries", "count": 2 }, { "onegram": "languages", "count": 2 }, { "onegram": "million", "count": 2 }, { "onegram": "subscriptions", "count": 2 }, { "onegram": "sharjah", "count": 2 }, { "onegram": "registration", "count": 2 }, { "onegram": "link", "count": 2 }, { "onegram": "visibility", "count": 2 }, { "onegram": "updates", "count": 2 }, { "onegram": "stay", "count": 2 }, { "onegram": "proven", "count": 2 }, { "onegram": "industry", "count": 2 }, { "onegram": "explore", "count": 2 }, { "onegram": "discover", "count": 2 }, { "onegram": "introduction", "count": 2 }, { "onegram": "trusted", "count": 2 }, { "onegram": "levels", "count": 2 }, { "onegram": "company", "count": 2 }, { "onegram": "track", "count": 2 }, { "onegram": "views", "count": 2 }, { "onegram": "referred", "count": 2 }, { "onegram": "instant", "count": 2 }, { "onegram": "seos", "count": 2 }, { "onegram": "change", "count": 2 }, { "onegram": "factor", "count": 2 }, { "onegram": "browsers", "count": 2 }, { "onegram": "customer", "count": 2 }, { "onegram": "rely", "count": 2 }, { "onegram": "actual", "count": 2 }, { "onegram": "ie", "count": 2 }, { "onegram": "solve", "count": 2 }, { "onegram": "extends", "count": 2 }, { "onegram": "extending", "count": 2 }, { "onegram": "itself", "count": 2 }, { "onegram": "finder", "count": 2 }, { "onegram": "chosen", "count": 2 }, { "onegram": "inside", "count": 2 }, { "onegram": "why", "count": 2 }, { "onegram": "public", "count": 2 }, { "onegram": "lots", "count": 2 }, { "onegram": "narrato", "count": 2 }, { "onegram": "evolving", "count": 2 }, { "onegram": "buying", "count": 2 }, { "onegram": "alternative", "count": 2 }, { "onegram": "cursor", "count": 2 }, { "onegram": "maps", "count": 2 }, { "onegram": "eye", "count": 2 }, { "onegram": "places", "count": 2 }, { "onegram": "drive", "count": 2 }, { "onegram": "company's", "count": 2 }, { "onegram": "visual", "count": 2 }, { "onegram": "carousels", "count": 2 }, { "onegram": "changes", "count": 2 }, { "onegram": "category", "count": 2 }, { "onegram": "ann", "count": 2 }, { "onegram": "smarty", "count": 2 }, { "onegram": "section", "count": 2 }, { "onegram": "commented", "count": 2 }, { "onegram": "2019", "count": 2 }, { "onegram": "24", "count": 2 }, { "onegram": "tailored", "count": 2 }, { "onegram": "capital", "count": 2 }, { "onegram": "adjust", "count": 2 }, { "onegram": "systems", "count": 2 }, { "onegram": "starts", "count": 2 }, { "onegram": "consider", "count": 2 }, { "onegram": "coming", "count": 2 }, { "onegram": "tablet", "count": 2 }, { "onegram": "googlecom", "count": 2 }, { "onegram": "begin", "count": 2 }, { "onegram": "pop", "count": 2 }, { "onegram": "ios", "count": 2 }, { "onegram": "preparing", "count": 1 }, { "onegram": "wait", "count": 1 }, { "onegram": "error", "count": 1 }, { "onegram": "occurred", "count": 1 }, { "onegram": "laterwould", "count": 1 }, { "onegram": "waiting", "count": 1 }, { "onegram": "paste", "count": 1 }, { "onegram": "snippet", "count": 1 }, { "onegram": "statistics", "count": 1 }, { "onegram": "totally", "count": 1 }, { "onegram": "howto", "count": 1 }, { "onegram": "transactional", "count": 1 }, { "onegram": "extractor", "count": 1 }, { "onegram": "wisely", "count": 1 }, { "onegram": "occur", "count": 1 }, { "onegram": "extracting", "count": 1 }, { "onegram": "received", "count": 1 }, { "onegram": "times", "count": 1 }, { "onegram": "reduce", "count": 1 }, { "onegram": "types", "count": 1 }, { "onegram": "completes", "count": 1 }, { "onegram": "userbased", "count": 1 }, { "onegram": "defined", "count": 1 }, { "onegram": "scam", "count": 1 }, { "onegram": "frustrating", "count": 1 }, { "onegram": "wastes", "count": 1 }, { "onegram": "suitable", "count": 1 }, { "onegram": "buy", "count": 1 }, { "onegram": "previous", "count": 1 }, { "onegram": "plus", "count": 1 }, { "onegram": "country", "count": 1 }, { "onegram": "\u201creport", "count": 1 }, { "onegram": "predictions\u201d", "count": 1 }, { "onegram": "appears", "count": 1 }, { "onegram": "deleted", "count": 1 }, { "onegram": "analyzed", "count": 1 }, { "onegram": "webbased", "count": 1 }, { "onegram": "sole", "count": 1 }, { "onegram": "marketeers", "count": 1 }, { "onegram": "lines", "count": 1 }, { "onegram": "other", "count": 1 }, { "onegram": "ready", "count": 1 }, { "onegram": "planning", "count": 1 }, { "onegram": "highquality", "count": 1 }, { "onegram": "fine", "count": 1 }, { "onegram": "scale", "count": 1 }, { "onegram": "20000", "count": 1 }, { "onegram": "familiar", "count": 1 }, { "onegram": "starting", "count": 1 }, { "onegram": "point", "count": 1 }, { "onegram": "urls", "count": 1 }, { "onegram": "accessed", "count": 1 }, { "onegram": "call", "count": 1 }, { "onegram": "parameters", "count": 1 }, { "onegram": "run", "count": 1 }, { "onegram": "javascript", "count": 1 }, { "onegram": "scalable", "count": 1 }, { "onegram": "disappointed", "count": 1 }, { "onegram": "then", "count": 1 }, { "onegram": "trends\u201d", "count": 1 }, { "onegram": "monitor", "count": 1 }, { "onegram": "below", "count": 1 }, { "onegram": "examples", "count": 1 }, { "onegram": "\u201csmart\u201d", "count": 1 }, { "onegram": "consulting", "count": 1 }, { "onegram": "group", "count": 1 }, { "onegram": "somehow", "count": 1 }, { "onegram": "sell", "count": 1 }, { "onegram": "solution\u2014then", "count": 1 }, { "onegram": "competition\u2014but", "count": 1 }, { "onegram": "bet", "count": 1 }, { "onegram": "comparisons", "count": 1 }, { "onegram": "about", "count": 1 }, { "onegram": "prtg", "count": 1 }, { "onegram": "a", "count": 1 }, { "onegram": "network", "count": 1 }, { "onegram": "monitoring", "count": 1 }, { "onegram": "solution", "count": 1 }, { "onegram": "view", "count": 1 }, { "onegram": "\u201cprtg", "count": 1 }, { "onegram": "vs", "count": 1 }, { "onegram": "\u201c", "count": 1 }, { "onegram": "answers", "count": 1 }, { "onegram": "lists", "count": 1 }, { "onegram": "running", "count": 1 }, { "onegram": "send", "count": 1 }, { "onegram": "\u201creview\u201d", "count": 1 }, { "onegram": "critical", "count": 1 }, { "onegram": "feeds", "count": 1 }, { "onegram": "approach", "count": 1 }, { "onegram": "ppc", "count": 1 }, { "onegram": "\u201cproduct", "count": 1 }, { "onegram": "names\u201d", "count": 1 }, { "onegram": "superior", "count": 1 }, { "onegram": "loves", "count": 1 }, { "onegram": "cover", "count": 1 }, { "onegram": "semantic", "count": 1 }, { "onegram": "aspects", "count": 1 }, { "onegram": "map", "count": 1 }, { "onegram": "comprehensive", "count": 1 }, { "onegram": "packages", "count": 1 }, { "onegram": "requirements", "count": 1 }, { "onegram": "automation", "count": 1 }, { "onegram": "campaign", "count": 1 }, { "onegram": "bidding", "count": 1 }, { "onegram": "contacts", "count": 1 }, { "onegram": "infoatpemavorcom", "count": 1 }, { "onegram": "49", "count": 1 }, { "onegram": "911", "count": 1 }, { "onegram": "54", "count": 1 }, { "onegram": "gustavwei\u00dfkopfstra\u00dfe", "count": 1 }, { "onegram": "12", "count": 1 }, { "onegram": "90768", "count": 1 }, { "onegram": "f\u00fcrth", "count": 1 }, { "onegram": "copyright", "count": 1 }, { "onegram": "stores", "count": 1 }, { "onegram": "computer", "count": 1 }, { "onegram": "stored", "count": 1 }, { "onegram": "visitor", "count": 1 }, { "onegram": "protection", "count": 1 }, { "onegram": "read", "count": 1 }, { "onegram": "imprint", "count": 1 }, { "onegram": "agree", "count": 1 }, { "onegram": "accept", "count": 1 }, { "onegram": "order", "count": 1 }, { "onegram": "harvest", "count": 1 }, { "onegram": "engines", "count": 1 }, { "onegram": "prospective", "count": 1 }, { "onegram": "variations", "count": 1 }, { "onegram": "featuring", "count": 1 }, { "onegram": "ranktracker", "count": 1 }, { "onegram": "covers", "count": 1 }, { "onegram": "from", "count": 1 }, { "onegram": "hit", "count": 1 }, { "onegram": "table", "count": 1 }, { "onegram": "seoppc", "count": 1 }, { "onegram": "checked", "count": 1 }, { "onegram": "selecting", "count": 1 }, { "onegram": "rightclicking", "count": 1 }, { "onegram": "sort", "count": 1 }, { "onegram": "setting", "count": 1 }, { "onegram": "filters", "count": 1 }, { "onegram": "adjusting", "count": 1 }, { "onegram": "visible", "count": 1 }, { "onegram": "columns", "count": 1 }, { "onegram": "save", "count": 1 }, { "onegram": "close", "count": 1 }, { "onegram": "rerun", "count": 1 }, { "onegram": "sandbox", "count": 1 }, { "onegram": "field", "count": 1 }, { "onegram": "technical", "count": 1 }, { "onegram": "speed", "count": 1 }, { "onegram": "interaction", "count": 1 }, { "onegram": "amazing", "count": 1 }, { "onegram": "thing", "count": 1 }, { "onegram": "therefore", "count": 1 }, { "onegram": "telling", "count": 1 }, { "onegram": "guess", "count": 1 }, { "onegram": "period", "count": 1 }, { "onegram": "unlocking", "count": 1 }, { "onegram": "unlocks", "count": 1 }, { "onegram": "emulating", "count": 1 }, { "onegram": "repeatedly", "count": 1 }, { "onegram": "presents", "count": 1 }, { "onegram": "textbox", "count": 1 }, { "onegram": "entering", "count": 1 }, { "onegram": "toddler", "count": 1 }, { "onegram": "toys", "count": 1 }, { "onegram": "king", "count": 1 }, { "onegram": "size", "count": 1 }, { "onegram": "bedding", "count": 1 }, { "onegram": "asterisk", "count": 1 }, { "onegram": "blanks", "count": 1 }, { "onegram": "try", "count": 1 }, { "onegram": "money", "count": 1 }, { "onegram": "help", "count": 1 }, { "onegram": "cooking", "count": 1 }, { "onegram": "corresponding", "count": 1 }, { "onegram": "listed", "count": 1 }, { "onegram": "move", "count": 1 }, { "onegram": "by", "count": 1 }, { "onegram": "nice", "count": 1 }, { "onegram": "clicking", "count": 1 }, { "onegram": "choice", "count": 1 }, { "onegram": "adwords", "count": 1 }, { "onegram": "lastly", "count": 1 }, { "onegram": "2009", "count": 1 }, { "onegram": "icons", "count": 1 }, { "onegram": "trademarks", "count": 1 }, { "onegram": "respective", "count": 1 }, { "onegram": "owners", "count": 1 }, { "onegram": "helpful", "count": 1 }, { "onegram": "methods", "count": 1 }, { "onegram": "subclass", "count": 1 }, { "onegram": "parent", "count": 1 }, { "onegram": "overwrite", "count": 1 }, { "onegram": "variables", "count": 1 }, { "onegram": "big", "count": 1 }, { "onegram": "info", "count": 1 }, { "onegram": "might", "count": 1 }, { "onegram": "propose", "count": 1 }, { "onegram": "updated", "count": 1 }, { "onegram": "successfully", "count": 1 }, { "onegram": "errors", "count": 1 }, { "onegram": "encountered", "count": 1 }, { "onegram": "creating", "count": 1 }, { "onegram": "figured", "count": 1 }, { "onegram": "covering", "count": 1 }, { "onegram": "have", "count": 1 }, { "onegram": "thus", "count": 1 }, { "onegram": "duplicate", "count": 1 }, { "onegram": "existing", "count": 1 }, { "onegram": "guidelines", "count": 1 }, { "onegram": "happy", "count": 1 }, { "onegram": "jrieken", "count": 1 }, { "onegram": "mjbvz", "count": 1 }, { "onegram": "branches", "count": 1 }, { "onegram": "developed", "count": 1 }, { "onegram": "facilitates", "count": 1 }, { "onegram": "publication", "count": 1 }, { "onegram": "gds", "count": 1 }, { "onegram": "visualization", "count": 1 }, { "onegram": "dashboards", "count": 1 }, { "onegram": "beautiful", "count": 1 }, { "onegram": "share", "count": 1 }, { "onegram": "schedule", "count": 1 }, { "onegram": "zambonin", "count": 1 }, { "onegram": "swapping", "count": 1 }, { "onegram": "say", "count": 1 }, { "onegram": "combine", "count": 1 }, { "onegram": "obtain", "count": 1 }, { "onegram": "combinations", "count": 1 }, { "onegram": "twaino", "count": 1 }, { "onegram": "passionate", "count": 1 }, { "onegram": "author", "count": 1 }, { "onegram": "numerous", "count": 1 }, { "onegram": "publications", "count": 1 }, { "onegram": "channel", "count": 1 }, { "onegram": "aims", "count": 1 }, { "onegram": "entrepreneurs", "count": 1 }, { "onegram": "referenced", "count": 1 }, { "onegram": "processes", "count": 1 }, { "onegram": "controversial", "count": 1 }, { "onegram": "letter", "count": 1 }, { "onegram": "populates", "count": 1 }, { "onegram": "managers", "count": 1 }, { "onegram": "keywordfocused", "count": 1 }, { "onegram": "intentexploring", "count": 1 }, { "onegram": "hand", "count": 1 }, { "onegram": "funny", "count": 1 }, { "onegram": "peculiar", "count": 1 }, { "onegram": "constantly", "count": 1 }, { "onegram": "thousands", "count": 1 }, { "onegram": "blamed", "count": 1 }, { "onegram": "political", "count": 1 }, { "onegram": "coverups", "count": 1 }, { "onegram": "spoiling", "count": 1 }, { "onegram": "tv", "count": 1 }, { "onegram": "games", "count": 1 }, { "onegram": "inform", "count": 1 }, { "onegram": "asking", "count": 1 }, { "onegram": "optimize", "count": 1 }, { "onegram": "clients'", "count": 1 }, { "onegram": "up", "count": 1 }, { "onegram": "superhelpful", "count": 1 }, { "onegram": "daytoday", "count": 1 }, { "onegram": "\u201cdesigned", "count": 1 }, { "onegram": "beginning", "count": 1 }, { "onegram": "type\u201d", "count": 1 }, { "onegram": "integrated", "count": 1 }, { "onegram": "alphabet", "count": 1 }, { "onegram": "\u201comnibox\u201d", "count": 1 }, { "onegram": "estimates", "count": 1 }, { "onegram": "cumulatively", "count": 1 }, { "onegram": "200", "count": 1 }, { "onegram": "average", "count": 1 }, { "onegram": "reduces", "count": 1 }, { "onegram": "25", "count": 1 }, { "onegram": "percent", "count": 1 }, { "onegram": "cut", "count": 1 }, { "onegram": "spends", "count": 1 }, { "onegram": "builtin", "count": 1 }, { "onegram": "late", "count": 1 }, { "onegram": "2004", "count": 1 }, { "onegram": "timesaving", "count": 1 }, { "onegram": "devices", "count": 1 }, { "onegram": "device", "count": 1 }, { "onegram": "bit", "count": 1 }, { "onegram": "tougher", "count": 1 }, { "onegram": "keyboards", "count": 1 }, { "onegram": "grown", "count": 1 }, { "onegram": "accustomed", "count": 1 }, { "onegram": "welcomed", "count": 1 }, { "onegram": "providing", "count": 1 }, { "onegram": "assistance", "count": 1 }, { "onegram": "many", "count": 1 }, { "onegram": "leverage", "count": 1 }, { "onegram": "exgoogler", "count": 1 }, { "onegram": "kevin", "count": 1 }, { "onegram": "gibbs", "count": 1 }, { "onegram": "originally", "count": 1 }, { "onegram": "called", "count": 1 }, { "onegram": "suggest\u201d", "count": 1 }, { "onegram": "former", "count": 1 }, { "onegram": "googler", "count": 1 }, { "onegram": "marissa", "count": 1 }, { "onegram": "mayer", "count": 1 }, { "onegram": "\u201csuggest\u201d", "count": 1 }, { "onegram": "thoughtful", "count": 1 }, { "onegram": "caring", "count": 1 }, { "onegram": "completions", "count": 1 }, { "onegram": "\u201cpredictions\u201d", "count": 1 }, { "onegram": "\u201csuggestions\u201d", "count": 1 }, { "onegram": "supposed", "count": 1 }, { "onegram": "sentence", "count": 1 }, { "onegram": "intending", "count": 1 }, { "onegram": "\u2013", "count": 1 }, { "onegram": "\u201ci'm", "count": 1 }, { "onegram": "feeling", "count": 1 }, { "onegram": "lucky\u201d", "count": 1 }, { "onegram": "update", "count": 1 }, { "onegram": "adapt", "count": 1 }, { "onegram": "stories", "count": 1 }, { "onegram": "autocomplete's", "count": 1 }, { "onegram": "behavior", "count": 1 }, { "onegram": "computergenerated", "count": 1 }, { "onegram": "collected", "count": 1 }, { "onegram": "takes", "count": 1 }, { "onegram": "points", "count": 1 }, { "onegram": "manual", "count": 1 }, { "onegram": "removal", "count": 1 }, { "onegram": "procedures", "count": 1 }, { "onegram": "influence", "count": 1 }, { "onegram": "2008", "count": 1 }, { "onegram": "built", "count": 1 }, { "onegram": "optin", "count": 1 }, { "onegram": "tedious", "count": 1 }, { "onegram": "foundation", "count": 1 }, { "onegram": "strategies\u2013", "count": 1 }, { "onegram": "longer", "count": 1 }, { "onegram": "explicitly", "count": 1 }, { "onegram": "tackled", "count": 1 }, { "onegram": "carried", "count": 1 }, { "onegram": "creates", "count": 1 }, { "onegram": "shortcomings", "count": 1 }, { "onegram": "strengths", "count": 1 }, { "onegram": "weaknesses", "count": 1 }, { "onegram": "place", "count": 1 }, { "onegram": "developing", "count": 1 }, { "onegram": "calendars", "count": 1 }, { "onegram": "general", "count": 1 }, { "onegram": "along", "count": 1 }, { "onegram": "resource", "count": 1 }, { "onegram": "thirdparty", "count": 1 }, { "onegram": "databases", "count": 1 }, { "onegram": "considering", "count": 1 }, { "onegram": "monthly", "count": 1 }, { "onegram": "frequency", "count": 1 }, { "onegram": "costperclick", "count": 1 }, { "onegram": "pricing", "count": 1 }, { "onegram": "justice", "count": 1 }, { "onegram": "shining", "count": 1 }, { "onegram": "advantages", "count": 1 }, { "onegram": "ability", "count": 1 }, { "onegram": "commonly", "count": 1 }, { "onegram": "measure", "count": 1 }, { "onegram": "realtime", "count": 1 }, { "onegram": "value", "count": 1 }, { "onegram": "lies", "count": 1 }, { "onegram": "plethora", "count": 1 }, { "onegram": "keywordlevel", "count": 1 }, { "onegram": "hard", "count": 1 }, { "onegram": "enough", "count": 1 }, { "onegram": "always", "count": 1 }, { "onegram": "limit", "count": 1 }, { "onegram": "unbiased", "count": 1 }, { "onegram": "incredibly", "count": 1 }, { "onegram": "fulfilling", "count": 1 }, { "onegram": "endless", "count": 1 }, { "onegram": "possibilities", "count": 1 }, { "onegram": "blog", "count": 1 }, { "onegram": "posts", "count": 1 }, { "onegram": "educational", "count": 1 }, { "onegram": "layout", "count": 1 }, { "onegram": "imagery", "count": 1 }, { "onegram": "involved", "count": 1 }, { "onegram": "taking", "count": 1 }, { "onegram": "consumption", "count": 1 }, { "onegram": "overlap", "count": 1 }, { "onegram": "tough", "count": 1 }, { "onegram": "surrounding", "count": 1 }, { "onegram": "recognize", "count": 1 }, { "onegram": "traditional", "count": 1 }, { "onegram": "two", "count": 1 }, { "onegram": "threeword", "count": 1 }, { "onegram": "allencompassing", "count": 1 }, { "onegram": "there", "count": 1 }, { "onegram": "realm", "count": 1 }, { "onegram": "too", "count": 1 }, { "onegram": "remember", "count": 1 }, { "onegram": "see", "count": 1 }, { "onegram": "business's", "count": 1 }, { "onegram": "dog", "count": 1 }, { "onegram": "washers", "count": 1 }, { "onegram": "inc", "count": 1 }, { "onegram": "\u201closes", "count": 1 }, { "onegram": "dog\u201d", "count": 1 }, { "onegram": "feel", "count": 1 }, { "onegram": "keen", "count": 1 }, { "onegram": "bringing", "count": 1 }, { "onegram": "bath", "count": 1 }, { "onegram": "restaurant", "count": 1 }, { "onegram": "ted's", "count": 1 }, { "onegram": "seaford", "count": 1 }, { "onegram": "spot", "count": 1 }, { "onegram": "\u201ce", "count": 1 }, { "onegram": "coli\u201d", "count": 1 }, { "onegram": "pretty", "count": 1 }, { "onegram": "eating", "count": 1 }, { "onegram": "tonight", "count": 1 }, { "onegram": "ignored", "count": 1 }, { "onegram": "working", "count": 1 }, { "onegram": "balance", "count": 1 }, { "onegram": "connections", "count": 1 }, { "onegram": "made", "count": 1 }, { "onegram": "vigilant", "count": 1 }, { "onegram": "exploring", "count": 1 }, { "onegram": "alongside", "count": 1 }, { "onegram": "writing", "count": 1 }, { "onegram": "faqs", "count": 1 }, { "onegram": "\u201cwho\u201d", "count": 1 }, { "onegram": "\u201cwhat\u201d", "count": 1 }, { "onegram": "\u201cwhere\u201d", "count": 1 }, { "onegram": "\u201cwhen\u201d", "count": 1 }, { "onegram": "\u201cwhy\u201d", "count": 1 }, { "onegram": "brandrelated", "count": 1 }, { "onegram": "faq\u2013", "count": 1 }, { "onegram": "vs\u201d\u2013", "count": 1 }, { "onegram": "and\u201d", "count": 1 }, { "onegram": "finds", "count": 1 }, { "onegram": "there\u2013", "count": 1 }, { "onegram": "covered", "count": 1 }, { "onegram": "grow", "count": 1 }, { "onegram": "\u201chow", "count": 1 }, { "onegram": "works\u201d", "count": 1 }, { "onegram": "filling", "count": 1 }, { "onegram": "wildcard", "count": 1 }, { "onegram": "accounts", "count": 1 }, { "onegram": "backlash", "count": 1 }, { "onegram": "due", "count": 1 }, { "onegram": "considered", "count": 1 }, { "onegram": "facilitate", "count": 1 }, { "onegram": "advocate", "count": 1 }, { "onegram": "piracy", "count": 1 }, { "onegram": "legal", "count": 1 }, { "onegram": "so", "count": 1 }, { "onegram": "clear", "count": 1 }, { "onegram": "removes", "count": 1 }, { "onegram": "abovementioned", "count": 1 }, { "onegram": "medical", "count": 1 }, { "onegram": "scientific", "count": 1 }, { "onegram": "malicious", "count": 1 }, { "onegram": "improvements", "count": 1 }, { "onegram": "consistently", "count": 1 }, { "onegram": "instance", "count": 1 }, { "onegram": "demographic", "count": 1 }, { "onegram": "hateful", "count": 1 }, { "onegram": "discovered", "count": 1 }, { "onegram": "incorporate", "count": 1 }, { "onegram": "reveals", "count": 1 }, { "onegram": "featured", "count": 1 }, { "onegram": "shutterstockfonstra", "count": 1 }, { "onegram": "native", "count": 1 }, { "onegram": "yorker", "count": 1 }, { "onegram": "efforts", "count": 1 }, { "onegram": "moving", "count": 1 }, { "onegram": "off", "count": 1 }, { "onegram": "experiences", "count": 1 }, { "onegram": "turned", "count": 1 }, { "onegram": "recent", "count": 1 }, { "onegram": "these", "count": 1 }, { "onegram": "customization", "count": 1 }, { "onegram": "right", "count": 1 }, { "onegram": "violates", "count": 1 }, { "onegram": "reported", "count": 1 }, { "onegram": "2007", "count": 1 }, { "onegram": "basically", "count": 1 }, { "onegram": "performed", "count": 1 }, { "onegram": "scenes", "count": 1 }, { "onegram": "sophisticated", "count": 1 }, { "onegram": "attempts", "count": 1 }, { "onegram": "generally", "count": 1 }, { "onegram": "10", "count": 1 }, { "onegram": "displayed", "count": 1 }, { "onegram": "immediately", "count": 1 }, { "onegram": "convenient", "count": 1 }, { "onegram": "note", "count": 1 }, { "onegram": "function", "count": 1 }, { "onegram": "significantly", "count": 1 }, { "onegram": "utility", "count": 1 }, { "onegram": "uses", "count": 1 }, { "onegram": "fact", "count": 1 }, { "onegram": "involvement", "count": 1 }, { "onegram": "gaining", "count": 1 }, { "onegram": "showing", "count": 1 }, { "onegram": "test", "count": 1 }, { "onegram": "now", "count": 1 }, { "onegram": "mundane", "count": 1 }, { "onegram": "timeconsuming", "count": 1 }, { "onegram": "press", "count": 1 }, { "onegram": "plug", "count": 1 }, { "onegram": "present", "count": 1 }, { "onegram": "clean", "count": 1 }, { "onegram": "format", "count": 1 }, { "onegram": "number", "count": 1 }, { "onegram": "append", "count": 1 }, { "onegram": "prepend", "count": 1 }, { "onegram": "letters", "count": 1 }, { "onegram": "numbers", "count": 1 }, { "onegram": "single", "count": 1 }, { "onegram": "restrictions", "count": 1 }, { "onegram": "regions", "count": 1 }, { "onegram": "enables", "count": 1 }, { "onegram": "750", "count": 1 }, { "onegram": "recommend", "count": 1 }, { "onegram": "short", "count": 1 }, { "onegram": "generic", "count": 1 }, { "onegram": "supported", "count": 1 }, { "onegram": "countrylanguage", "count": 1 }, { "onegram": "no", "count": 1 }, { "onegram": "encounter", "count": 1 }, { "onegram": "maintain", "count": 1 }, { "onegram": "apps", "count": 1 }, { "onegram": "llc", "count": 1 }, { "onegram": "city", "count": 1 }, { "onegram": "uae", "count": 1 }, { "onegram": "1906623", "count": 1 }, { "onegram": "971", "count": 1 }, { "onegram": "6501", "count": 1 }, { "onegram": "2028", "count": 1 }, { "onegram": "limited", "count": 1 }, { "onegram": "25th", "count": 1 }, { "onegram": "floor", "count": 1 }, { "onegram": "workington", "count": 1 }, { "onegram": "tower", "count": 1 }, { "onegram": "78", "count": 1 }, { "onegram": "bonham", "count": 1 }, { "onegram": "strand", "count": 1 }, { "onegram": "sheung", "count": 1 }, { "onegram": "wan", "count": 1 }, { "onegram": "hong", "count": 1 }, { "onegram": "kong", "count": 1 }, { "onegram": "64668937", "count": 1 }, { "onegram": "852", "count": 1 }, { "onegram": "5803", "count": 1 }, { "onegram": "8880", "count": 1 }, { "onegram": "toolset", "count": 1 }, { "onegram": "audits", "count": 1 }, { "onegram": "raise", "count": 1 }, { "onegram": "directory", "count": 1 }, { "onegram": "distribution", "count": 1 }, { "onegram": "review", "count": 1 }, { "onegram": "listing", "count": 1 }, { "onegram": "analytics", "count": 1 }, { "onegram": "stat", "count": 1 }, { "onegram": "agile", "count": 1 }, { "onegram": "fresh", "count": 1 }, { "onegram": "trillions", "count": 1 }, { "onegram": "40", "count": 1 }, { "onegram": "trillion", "count": 1 }, { "onegram": "backlinks", "count": 1 }, { "onegram": "anchor", "count": 1 }, { "onegram": "score", "count": 1 }, { "onegram": "trafficdriving", "count": 1 }, { "onegram": "500", "count": 1 }, { "onegram": "result", "count": 1 }, { "onegram": "stepbystep", "count": 1 }, { "onegram": "broaden", "count": 1 }, { "onegram": "skill", "count": 1 }, { "onegram": "upskill", "count": 1 }, { "onegram": "certified", "count": 1 }, { "onegram": "ondemand", "count": 1 }, { "onegram": "courses", "count": 1 }, { "onegram": "certifications", "count": 1 }, { "onegram": "modern", "count": 1 }, { "onegram": "practices", "count": 1 }, { "onegram": "discussions", "count": 1 }, { "onegram": "500000", "count": 1 }, { "onegram": "decisions", "count": 1 }, { "onegram": "remains", "count": 1 }, { "onegram": "earn", "count": 1 }, { "onegram": "clients", "count": 1 }, { "onegram": "unparalleled", "count": 1 }, { "onegram": "drives", "count": 1 }, { "onegram": "roi", "count": 1 }, { "onegram": "record", "count": 1 }, { "onegram": "everchanging", "count": 1 }, { "onegram": "world", "count": 1 }, { "onegram": "scoop", "count": 1 }, { "onegram": "latest", "count": 1 }, { "onegram": "greatest", "count": 1 }, { "onegram": "author's", "count": 1 }, { "onegram": "entirely", "count": 1 }, { "onegram": "excluding", "count": 1 }, { "onegram": "event", "count": 1 }, { "onegram": "hypnosis", "count": 1 }, { "onegram": "developments", "count": 1 }, { "onegram": "appeared", "count": 1 }, { "onegram": "seos'", "count": 1 }, { "onegram": "radar", "count": 1 }, { "onegram": "ago", "count": 1 }, { "onegram": "huge", "count": 1 }, { "onegram": "turning", "count": 1 }, { "onegram": "predictive", "count": 1 }, { "onegram": "own", "count": 1 }, { "onegram": "extensions", "count": 1 }, { "onegram": "dynamic", "count": 1 }, { "onegram": "behaviors", "count": 1 }, { "onegram": "instinctively", "count": 1 }, { "onegram": "meant", "count": 1 }, { "onegram": "delivers", "count": 1 }, { "onegram": "bars", "count": 1 }, { "onegram": "firefox", "count": 1 }, { "onegram": "safari", "count": 1 }, { "onegram": "chrome's", "count": 1 }, { "onegram": "autocompletes", "count": 1 }, { "onegram": "imagine", "count": 1 }, { "onegram": "plumbercom", "count": 1 }, { "onegram": "cases", "count": 1 }, { "onegram": "prompted", "count": 1 }, { "onegram": "intention", "count": 1 }, { "onegram": "patterns", "count": 1 }, { "onegram": "tend", "count": 1 }, { "onegram": "next", "count": 1 }, { "onegram": "factors", "count": 1 }, { "onegram": "searcher's", "count": 1 }, { "onegram": "user's", "count": 1 }, { "onegram": "driven", "count": 1 }, { "onegram": "messing", "count": 1 }, { "onegram": "disabling", "count": 1 }, { "onegram": "cleaner", "count": 1 }, { "onegram": "ages", "count": 1 }, { "onegram": "discovering", "count": 1 }, { "onegram": "hitting", "count": 1 }, { "onegram": "narrowing", "count": 1 }, { "onegram": "initial", "count": 1 }, { "onegram": "angles", "count": 1 }, { "onegram": "deeper", "count": 1 }, { "onegram": "three", "count": 1 }, { "onegram": "plugins", "count": 1 }, { "onegram": "wordpress", "count": 1 }, { "onegram": "post", "count": 1 }, { "onegram": "editor", "count": 1 }, { "onegram": "ideation", "count": 1 }, { "onegram": "identifying", "count": 1 }, { "onegram": "challenges", "count": 1 }, { "onegram": "experiencing", "count": 1 }, { "onegram": "routinely", "count": 1 }, { "onegram": "how", "count": 1 }, { "onegram": "where", "count": 1 }, { "onegram": "front", "count": 1 }, { "onegram": "trick", "count": 1 }, { "onegram": "mindmap", "count": 1 }, { "onegram": "implement", "count": 1 }, { "onegram": "onsite", "count": 1 }, { "onegram": "base", "count": 1 }, { "onegram": "attract", "count": 1 }, { "onegram": "empower", "count": 1 }, { "onegram": "support", "count": 1 }, { "onegram": "team", "count": 1 }, { "onegram": "refresh", "count": 1 }, { "onegram": "optimizing", "count": 1 }, { "onegram": "outdated", "count": 1 }, { "onegram": "launch", "count": 1 }, { "onegram": "seriesplaylist", "count": 1 }, { "onegram": "reuse", "count": 1 }, { "onegram": "elsewhere", "count": 1 }, { "onegram": "creation", "count": 1 }, { "onegram": "collaboration", "count": 1 }, { "onegram": "allowing", "count": 1 }, { "onegram": "integrate", "count": 1 }, { "onegram": "consolidate", "count": 1 }, { "onegram": "magnets", "count": 1 }, { "onegram": "landing", "count": 1 }, { "onegram": "utilized", "count": 1 }, { "onegram": "journey", "count": 1 }, { "onegram": "traditionally", "count": 1 }, { "onegram": "nowadays", "count": 1 }, { "onegram": "refine", "count": 1 }, { "onegram": "loads", "count": 1 }, { "onegram": "\u201csearch", "count": 1 }, { "onegram": "refinements\u201d", "count": 1 }, { "onegram": "exercise", "count": 1 }, { "onegram": "concepts", "count": 1 }, { "onegram": "specify", "count": 1 }, { "onegram": "problem", "count": 1 }, { "onegram": "delay", "count": 1 }, { "onegram": "instead", "count": 1 }, { "onegram": "earth", "count": 1 }, { "onegram": "person", "count": 1 }, { "onegram": "session", "count": 1 }, { "onegram": "implications", "count": 1 }, { "onegram": "towns", "count": 1 }, { "onegram": "cities", "count": 1 }, { "onegram": "area", "count": 1 }, { "onegram": "similar", "count": 1 }, { "onegram": "plumber", "count": 1 }, { "onegram": "located", "count": 1 }, { "onegram": "halfmoon", "count": 1 }, { "onegram": "ny", "count": 1 }, { "onegram": "targeting", "count": 1 }, { "onegram": "clifton", "count": 1 }, { "onegram": "park", "count": 1 }, { "onegram": "ballston", "count": 1 }, { "onegram": "spa", "count": 1 }, { "onegram": "glenville", "count": 1 }, { "onegram": "distinct", "count": 1 }, { "onegram": "interestingly", "count": 1 }, { "onegram": "be", "count": 1 }, { "onegram": "plumbers", "count": 1 }, { "onegram": "locations", "count": 1 }, { "onegram": "1030", "count": 1 }, { "onegram": "minutes", "count": 1 }, { "onegram": "\u201cplaygrounds\u201d", "count": 1 }, { "onegram": "town", "count": 1 }, { "onegram": "fiveminute", "count": 1 }, { "onegram": "contains", "count": 1 }, { "onegram": "figure", "count": 1 }, { "onegram": "worth", "count": 1 }, { "onegram": "obviously", "count": 1 }, { "onegram": "sales", "count": 1 }, { "onegram": "funnel", "count": 1 }, { "onegram": "tricky", "count": 1 }, { "onegram": "controllable", "count": 1 }, { "onegram": "prompt", "count": 1 }, { "onegram": "distract", "count": 1 }, { "onegram": "\u201cideas\u201d", "count": 1 }, { "onegram": "minds", "count": 1 }, { "onegram": "extend", "count": 1 }, { "onegram": "all", "count": 1 }, { "onegram": "rankings", "count": 1 }, { "onegram": "naturally", "count": 1 }, { "onegram": "listings", "count": 1 }, { "onegram": "convinced", "count": 1 }, { "onegram": "boxes", "count": 1 }, { "onegram": "tweets", "count": 1 }, { "onegram": "wellorganized", "count": 1 }, { "onegram": "sections", "count": 1 }, { "onegram": "elements", "count": 1 }, { "onegram": "ping", "count": 1 }, { "onegram": "changemonitoring", "count": 1 }, { "onegram": "alert", "count": 1 }, { "onegram": "anything", "count": 1 }, { "onegram": "notified", "count": 1 }, { "onegram": "images", "count": 1 }, { "onegram": "videos", "count": 1 }, { "onegram": "pulled", "count": 1 }, { "onegram": "3pack", "count": 1 }, { "onegram": "integrating", "count": 1 }, { "onegram": "organizations", "count": 1 }, { "onegram": "books", "count": 1 }, { "onegram": "celebrities", "count": 1 }, { "onegram": "logo", "count": 1 }, { "onegram": "associating", "count": 1 }, { "onegram": "with", "count": 1 }, { "onegram": "registering", "count": 1 }, { "onegram": "namify", "count": 1 }, { "onegram": "domains", "count": 1 }, { "onegram": "deciding", "count": 1 }, { "onegram": "identified", "count": 1 }, { "onegram": "neighboring", "count": 1 }, { "onegram": "newly", "count": 1 }, { "onegram": "yet", "count": 1 }, { "onegram": "customers'", "count": 1 }, { "onegram": "reason", "count": 1 }, { "onegram": "manager", "count": 1 }, { "onegram": "cofounder", "count": 1 }, { "onegram": "viral", "count": 1 }, { "onegram": "buzz", "count": 1 }, { "onegram": "myblogu", "count": 1 }, { "onegram": "tagfee", "count": 1 }, { "onegram": "etiquette", "count": 1 }, { "onegram": "burning", "count": 1 }, { "onegram": "head", "count": 1 }, { "onegram": "qa", "count": 1 }, { "onegram": "conversation", "count": 1 }, { "onegram": "ubersuggest", "count": 1 }, { "onegram": "22", "count": 1 }, { "onegram": "frequent", "count": 1 }, { "onegram": "richer", "count": 1 }, { "onegram": "endpoints", "count": 1 }, { "onegram": "effectively", "count": 1 }, { "onegram": "0", "count": 1 }, { "onegram": "bali182", "count": 1 }, { "onegram": "feb", "count": 1 }, { "onegram": "27", "count": 1 }, { "onegram": "vscodebot", "count": 1 }, { "onegram": "bot", "count": 1 }, { "onegram": "zamboni", "count": 1 }, { "onegram": "frequently", "count": 1 }, { "onegram": "asked", "count": 1 }, { "onegram": "allinone", "count": 1 }, { "onegram": "suite", "count": 1 }, { "onegram": "enterprise", "count": 1 }, { "onegram": "backlink", "count": 1 }, { "onegram": "surf", "count": 1 }, { "onegram": "lock", "count": 1 }, { "onegram": "super", "count": 1 }, { "onegram": "bird", "count": 1 }, { "onegram": "savings", "count": 1 }, { "onegram": "mozcon", "count": 1 }, { "onegram": "conclusion", "count": 1 }, { "onegram": "max", "count": 1 }, { "onegram": "low", "count": 1 }, { "onegram": "scroll", "count": 1 }, { "onegram": "system", "count": 1 }, { "onegram": "advanced", "count": 1 }, { "onegram": "service24", "count": 1 }, { "onegram": "eki", "count": 1 }, { "onegram": "2021", "count": 1 }, { "onegram": "rankbrain", "count": 1 }, { "onegram": "component", "count": 1 }, { "onegram": "machine", "count": 1 }, { "onegram": "deep", "count": 1 }, { "onegram": "autocorrect", "count": 1 }, { "onegram": "swift", "count": 1 }, { "onegram": "iphone", "count": 1 }, { "onegram": "difference", "count": 1 }, { "onegram": "replace", "count": 1 }, { "onegram": "elasticsearch", "count": 1 }]
var dataDummy = [
    [
        ["google", "autocomplete"], 52
    ],
    [
        ["keyword", "tool"], 23
    ],
    [
        ["keyword", "research"], 18
    ],
    [
        ["google", "search"], 17
    ],
    [
        ["google", "suggest"], 17
    ],
    [
        ["search", "engine"], 11
    ],
    [
        ["autocomplete", "predictions"], 11
    ],
    [
        ["search", "box"], 11
    ],
    [
        ["autocomplete", "keyword"], 11
    ],
    [
        ["keyword", "suggestions"], 10
    ],
    [
        ["autocomplete", "suggestions"], 10
    ],
    [
        ["google's", "autocomplete"], 9
    ],
    [
        ["search", "term"], 9
    ],
    [
        ["search", "terms"], 8
    ],
    [
        ["search", "bar"], 8
    ],
    [
        ["disable", "keyboard"], 8
    ],
    [
        ["online", "reputation"], 7
    ],
    [
        ["search", "queries"], 7
    ],
    [
        ["seed", "keywords"], 6
    ],
    [
        ["reputation", "management"], 6
    ],
    [
        ["autocomplete", "google"], 6
    ],
    [
        ["search", "intent"], 5
    ],
    [
        ["related", "keywords"], 5
    ],
    [
        ["predictions", "google"], 5
    ],
    [
        ["search", "query"], 5
    ],
    [
        ["research", "tool"], 5
    ],
    [
        ["keyword", "list"], 5
    ],
    [
        ["searching", "for"], 5
    ],
    [
        ["google", "keyword"], 5
    ],
    [
        ["tool", "dominator"], 5
    ],
    [
        ["search", "feature"], 5
    ],
    [
        ["search", "predictions"], 5
    ],
    [
        ["keyboard", "suggestions"], 5
    ],
    [
        ["search", "intents"], 4
    ],
    [
        ["free", "keyword"], 4
    ],
    [
        ["keyword", "topic"], 4
    ],
    [
        ["google", "autosuggest"], 4
    ],
    [
        ["trending", "searches"], 4
    ],
    [
        ["related", "searches"], 4
    ],
    [
        ["longtail", "keywords"], 4
    ],
    [
        ["autocomplete", "work"], 4
    ],
    [
        ["long", "tail"], 4
    ],
    [
        ["tail", "keywords"], 4
    ],
    [
        ["autocomplete", "service"], 4
    ],
    [
        ["click", "search"], 4
    ],
    [
        ["searches", "google"], 4
    ],
    [
        ["user", "intent"], 4
    ],
    [
        ["search", "results"], 4
    ],
    [
        ["autocomplete", "research"], 4
    ],
    [
        ["personal", "results"], 4
    ],
    [
        ["search", "refinements"], 4
    ],
    [
        ["predictions", "show"], 4
    ],
    [
        ["search", "attributes"], 3
    ],
    [
        ["ngram", "21"], 3
    ],
    [
        ["google", "trends"], 3
    ],
    [
        ["keyword", "search"], 3
    ],
    [
        ["google", "app"], 3
    ],
    [
        ["important", "products"], 3
    ],
    [
        ["autocomplete", "tools"], 3
    ],
    [
        ["target", "keywords"], 3
    ],
    [
        ["typing", "keyword"], 3
    ],
    [
        ["enter", "search"], 3
    ],
    [
        ["internet", "marketing"], 3
    ],
    [
        ["marketing", "ninjas"], 3
    ],
    [
        ["seo", "strategy"], 3
    ],
    [
        ["social", "media"], 3
    ],
    [
        ["content", "ideas"], 3
    ],
    [
        ["determine", "predictions"], 3
    ],
    [
        ["real", "searches"], 3
    ],
    [
        ["signed", "google"], 3
    ],
    [
        ["questions", "content"], 3
    ],
    [
        ["keywords", "search"], 3
    ],
    [
        ["sam", "hollingsworth"], 3
    ],
    [
        ["predictions", "recommendations"], 3
    ],
    [
        ["google", "account"], 3
    ],
    [
        ["search", "google"], 3
    ],
    [
        ["queries", "match"], 3
    ],
    [
        ["keyword", "google"], 3
    ],
    [
        ["tool", "google"], 3
    ],
    [
        ["seo", "metrics"], 3
    ],
    [
        ["users'", "searching"], 3
    ],
    [
        ["autocomplete", "seo"], 3
    ],
    [
        ["google", "considers"], 3
    ],
    [
        ["branded", "search"], 3
    ],
    [
        ["cpc", "keywords"], 3
    ],
    [
        ["control", "panel"], 3
    ],
    [
        ["panel", "select"], 3
    ],
    [
        ["select", "search"], 3
    ],
    [
        ["engine", "edit"], 3
    ],
    [
        ["edit", "click"], 3
    ],
    [
        ["search", "features"], 3
    ],
    [
        ["features", "menu"], 3
    ],
    [
        ["menu", "left"], 3
    ],
    [
        ["left", "click"], 3
    ],
    [
        ["click", "autocomplete"], 3
    ],
    [
        ["autocomplete", "click"], 3
    ],
    [
        ["click", "slider"], 3
    ],
    [
        ["slider", "set"], 3
    ],
    [
        ["set", "enable"], 3
    ],
    [
        ["enable", "autocomplete"], 3
    ],
    [
        ["keyword", "autocomplete"], 3
    ],
    [
        ["keyboard", "autocomplete"], 3
    ],
    [
        ["interesting", "search"], 2
    ],
    [
        ["keyword", "ideas"], 2
    ],
    [
        ["keyword", "suggestion"], 2
    ],
    [
        ["21", "ngram"], 2
    ],
    [
        ["auto", "complete"], 2
    ],
    [
        ["complete", "keywords"], 2
    ],
    [
        ["start", "keyword"], 2
    ],
    [
        ["google", "shopping"], 2
    ],
    [
        ["dealing", "product"], 2
    ],
    [
        ["product", "categories"], 2
    ],
    [
        ["keywords", "tool"], 2
    ],
    [
        ["tool", "easily"], 2
    ],
    [
        ["autocomplete", "feature"], 2
    ],
    [
        ["query", "predictions"], 2
    ],
    [
        ["brand", "product"], 2
    ],
    [
        ["predictions", "based"], 2
    ],
    [
        ["keywords", "keyword"], 2
    ],
    [
        ["offset", "negative"], 2
    ],
    [
        ["links", "find"], 2
    ],
    [
        ["situation", "google"], 2
    ],
    [
        ["product", "service"], 2
    ],
    [
        ["relevant", "keywords"], 2
    ],
    [
        ["web", "users"], 2
    ],
    [
        ["suggests", "search"], 2
    ],
    [
        ["search", "process"], 2
    ],
    [
        ["process", "makes"], 2
    ],
    [
        ["report", "prediction"], 2
    ],
    [
        ["longpress", "prediction"], 2
    ],
    [
        ["tool", "free"], 2
    ],
    [
        ["free", "autocomplete"], 2
    ],
    [
        ["phrase", "find"], 2
    ],
    [
        ["searches", "phrase"], 2
    ],
    [
        ["suggestions", "related"], 2
    ],
    [
        ["brand", "names"], 2
    ],
    [
        ["keywords", "selected"], 2
    ],
    [
        ["start", "building"], 2
    ],
    [
        ["foot", "seo"], 2
    ],
    [
        ["seo", "keyword"], 2
    ],
    [
        ["keywords", "autocomplete"], 2
    ],
    [
        ["python", "script"], 2
    ],
    [
        ["specific", "search"], 2
    ],
    [
        ["keywords", "autosuggest"], 2
    ],
    [
        ["keyword", "topics"], 2
    ],
    [
        ["entities", "business"], 2
    ],
    [
        ["thinks", "searching"], 2
    ],
    [
        ["extract", "important"], 2
    ],
    [
        ["products", "brand"], 2
    ],
    [
        ["users", "searching"], 2
    ],
    [
        ["product", "names"], 2
    ],
    [
        ["directly", "google"], 2
    ],
    [
        ["digital", "marketing"], 2
    ],
    [
        ["rights", "reserved"], 2
    ],
    [
        ["typing", "query"], 2
    ],
    [
        ["enter", "topic"], 2
    ],
    [
        ["topic", "keywords"], 2
    ],
    [
        ["enter", "keyword"], 2
    ],
    [
        ["above", "click"], 2
    ],
    [
        ["search", "suggestions"], 2
    ],
    [
        ["searching", "google"], 2
    ],
    [
        ["dominator", ""], 2
    ],
    [
        ["terms", "google"], 2
    ],
    [
        ["time", "search"], 2
    ],
    [
        ["your", "keyword"], 2
    ],
    [
        ["list", "panel"], 2
    ],
    [
        ["keywords", "csv"], 2
    ],
    [
        ["csv", "file"], 2
    ],
    [
        ["import", "keywords"], 2
    ],
    [
        ["keyword", "planner"], 2
    ],
    [
        ["search", "volume"], 2
    ],
    [
        ["suggestions", "autocomplete"], 2
    ],
    [
        ["autocomplete", "text"], 2
    ],
    [
        ["html", "encoder"], 2
    ],
    [
        ["data", "studio"], 2
    ],
    [
        ["adword", "seo"], 2
    ],
    [
        ["alexandre", "marotel"], 2
    ],
    [
        ["seo", "professionals"], 2
    ],
    [
        ["autocomplete", "makes"], 2
    ],
    [
        ["autocomplete", "powerful"], 2
    ],
    [
        ["tool", "seo"], 2
    ],
    [
        ["google", "including"], 2
    ],
    [
        ["autocomplete", "dropdown"], 2
    ],
    [
        ["intent", "exploration"], 2
    ],
    [
        ["suggest", "search"], 2
    ],
    [
        ["search", "history"], 2
    ],
    [
        ["knowledge", "graph"], 2
    ],
    [
        ["important", "part"], 2
    ],
    [
        ["engagement", "\u2014"], 2
    ],
    [
        ["content", "gaps"], 2
    ],
    [
        ["search", "strategy"], 2
    ],
    [
        ["longtail", "phrases"], 2
    ],
    [
        ["autocomplete", "understand"], 2
    ],
    [
        ["intent", "keyword"], 2
    ],
    [
        ["stages", "intent"], 2
    ],
    [
        ["highvalue", "keywords"], 2
    ],
    [
        ["results", "page"], 2
    ],
    [
        ["prediction", "finishes"], 2
    ],
    [
        ["predictions", "are"], 2
    ],
    [
        ["content", "generation"], 2
    ]
]

var x = 10
var dataPrepared = [];
var objOccurrences = [];

//{
//      id: "Busan",
//       marker: {
//        radius: 30
//       },
//     color: dirDist50
//   },

dataDummy.forEach(f => {
    dataPrepared.push(f[0])
})


dataOccurrences.forEach(f => {
    var obj = {
        id: f.onegram,
        marker: {
            radius: Math.log1p(f.count) * Math.log1p(f.count)
        }
    }

    if (dataPrepared.filter(x => x.includes(f.onegram)).length > 0) {

        objOccurrences.push(obj)
    }

})
console.log(objOccurrences)
var chart = Highcharts.chart("container", {
    chart: {
        styleMode: true,
        credits: {
            enabled: false
        },
        type: "networkgraph",
        marginTop: 80,
        load: () => {
            console.log("loaded")
        }
    },
    credits: {
        enabled: false
    },
    title: {
        text: "South Korea domestic flight routes"
    },

    tooltip: {
        formatter: function() {
            var info = "";
            switch (this.color) {
                case dirDist50:
                    console.log(dirDist50);
                    info = "is an aiport <b>more than 50</b> direct distinations";
                    break;
                case dirDist10:
                    console.log(dirDist10);
                    info = "is an aiport <b>more than 10</b> direct distinations";
                    break;
                case dirDistLess10:
                    console.log(dirDistLess10);
                    info = "is an aiport <b>less than 10</b> direct distinations";
                    break;
            }
            return "<b>" + this.key + "</b>: " + info;
        }
    },

    plotOptions: {
        networkgraph: {
            keys: ["from", "to"],
            layoutAlgorithm: {
                enableSimulation: false,
                linkLength: 100,
                integration: 'verlet',
                approximation: 'barnes-hut',

                initialPositionRadius: 10,

            },

            allowPointSelect: true,
            draggable: false,
            stickyTracking: true

        }
    },

    states: {
        hover: {
            halo: {
                opacity: 1,
            },
            marker: {
                lineColor: "red"
            }
        }
    },
    series: [{
        events: {
            click: (event) => {

                var clicked = event.point
                if (event.point.selected && event.point.state == "select") {
                    //not selected

                    alert("1")
                } else {

                    alert("2")
                    chart.series[0].points.forEach(f => {

                        if (clicked.id == f.fromNode.id || clicked.id == f.toNode.id) {

                            f.graphic.css({
                                fill: 'yellow',
                                opacity: 1,
                            });
                            f.fromNode.graphic.css({
                                fill: 'yellow',
                                opacity: 1,
                            });
                            f.toNode.graphic.css({
                                fill: 'yellow',
                                opacity: 1,
                            });
                        } else {
                            f.graphic.css({
                                fill: '#7cb5ec',
                                opacity: .85,
                            });
                            f.fromNode.graphic.css({
                                fill: '#7cb5ec',
                                opacity: .85,
                            });
                            f.toNode.graphic.css({
                                fill: '#7cb5ec',
                                opacity: .85,
                            });
                        }
                    })

                    //selected
                    event.point.linksTo.forEach(f => {
                        f.graphic.css({
                            fill: 'red',
                            opacity: 1,

                        });
                        f.fromNode.graphic.css({
                            fill: 'red',
                            opacity: 1,

                        });

                    })
                    event.point.linksFrom.forEach(f => {
                        f.graphic.css({
                            fill: 'red',
                            opacity: 1,

                        });

                        f.toNode.graphic.css({
                            fill: 'red',
                            opacity: 1,

                        });
                        console.log(f.graphic)
                    })


                }

            }

        },
        marker: {
            radius: 13,

            states: {
                hover: {

                    radiusPlus: 10,
                    lineWidthPlus: 4,
                    lineColor: "red",
                    opacity: 1
                }
            }
        },
        link: {
            color: "#e7e7e7"
        },
        dataLabels: {
            enabled: true,
            linkFormat: "",
            allowOverlap: false,
            style: {
                textOutline: false
            }
        },
        data: dataPrepared,
        nodes: objOccurrences,
        zones: [{
            value: 0,
            color: '#f7a35c'
        }, {
            value: 10,
            color: '#7cb5ec'
        }, {
            color: '#90ed7d'
        }]
    }]
});
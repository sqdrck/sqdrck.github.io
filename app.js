var WORDS_LIST_PATH = "file://wordslist.txt";
//todo lower the size of txt

// The standard measure of WPM is(5 * number of characters) / (time taken).By that measurement, "quick brown fox" is 15 characters, including spaces.

var lettersTypedSession = 0;
var timePastSession = 0;

function getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}

function startSession() {}

function stopSession() {}

var textToType = "Type this text for a check.";
var lettersTyped = 0;

function populate() {
    textToType = getRandom(words, 7).join(" ");

    var inputDiv = document.getElementById("input");
    console.log("populate");
    spans = "";

    spans +=
        '<span class="uncompleted next-letter">' + textToType[0] + "</span>";
    for (var i = 1; i < textToType.length; i++) {
        spans += '<span class="uncompleted">' + textToType[i] + "</span>";
    }

    inputDiv.innerHTML = spans;
}

function clear() {
    var inputDiv = document.getElementById("input");
    console.log("clear");
    inputDiv.innerHTML = "";
}

function nextLine() {
    lettersTyped = 0;
    clear();
    populate();
}

document.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
        return;
    }
    var inputDiv = document.getElementById("input");

    // check if all letters have been typed
    if (lettersTyped >= textToType.length) {
        nextLine();
        return;
    }

    var key = event.key || event.keyCode;
    //!actual key
    if (key.length <= 1) {
        //check if its correct letter
        var correct = key == textToType[lettersTyped];
        var currentLetterSpan = inputDiv.childNodes[lettersTyped];
        //make span swap
        if (correct) {
            currentLetterSpan.className = "correct";
        } else {
            currentLetterSpan.className = "incorrect";
            // currentLetterSpan.textContent = key;
        }

        //make next letter render curretku
        if (lettersTyped != textToType.length - 1) {
            var nextLetterSpan = inputDiv.childNodes[lettersTyped + 1];
            nextLetterSpan.className = "uncompleted next-letter";
        } else {
            currentLetterSpan.className += " last";
        }
        // if (lettersTyped > 0)
        //     inputDiv.childNodes[
        //         lettersTyped - 1
        //     ].className = inputDiv.childNodes[lettersTyped].className.split(
        //         " "
        //     )[0];
        lettersTyped += 1;
        //todo handle out of range
    }
    //!backspace
    else if (
        event.keyCode == 8 ||
        key == "Backspace" ||
        event.code == "Backspace"
    ) {
        if (lettersTyped < 1) return;
        //make span swap backwards
        currentLetterSpan = inputDiv.childNodes[lettersTyped - 1];
        currentLetterSpan.textContent = textToType[lettersTyped - 1];
        currentLetterSpan.className = "uncompleted";
        inputDiv.childNodes[lettersTyped - 1].className += " next-letter";
        inputDiv.childNodes[lettersTyped].className = inputDiv.childNodes[
            lettersTyped
        ].className.split(" ")[0];
        console.log(lettersTyped);

        lettersTyped -= 1;
    }
    //!start over
    else if (event.keyCode == 9 || key == "Tab" || event.key == "Tab") {
        event.preventDefault();
        lettersTyped = 0;
        nextLine();
    }
});

window.addEventListener(
    "blur",
    function (event) {
        console.log("blur");

        var inputDiv = document.getElementById("input");
        var currentLetterSpan = inputDiv.childNodes[lettersTyped];
        currentLetterSpan.className = "uncompleted next-letter-unfocus";
    },
    false
);

window.addEventListener(
    "focus",
    function (event) {
        console.log("focus");

        var inputDiv = document.getElementById("input");
        var currentLetterSpan = inputDiv.childNodes[lettersTyped];
        currentLetterSpan.className = "uncompleted next-letter";
    },
    false
);

var words = [
    "a",
    "absolute",
    "accessed",
    "accounting",
    "acm",
    "activists",
    "add",
    "adjusted",
    "adsl",
    "advise",
    "affiliates",
    "agents",
    "aims",
    "albert",
    "align",
    "almost",
    "alumni",
    "american",
    "analyst",
    "angels",
    "announcement",
    "anticipated",
    "apartments",
    "applicable",
    "approval",
    "arcade",
    "arise",
    "arrested",
    "asbestos",
    "assembly",
    "association",
    "athletic",
    "attempting",
    "auction",
    "authority",
    "average",
    "b",
    "baghdad",
    "bands",
    "barely",
    "basin",
    "bbs",
    "beats",
    "before",
    "beliefs",
    "benefit",
    "betty",
    "bigger",
    "biological",
    "blackberry",
    "blocking",
    "blvd",
    "bondage",
    "boots",
    "bound",
    "brad",
    "breakfast",
    "bright",
    "broke",
    "brunswick",
    "bugs",
    "bureau",
    "butter",
    "cabinet",
    "calendar",
    "cameras",
    "candidate",
    "capture",
    "carlo",
    "cartridge",
    "catalogue",
    "cbs",
    "cemetery",
    "certified",
    "champagne",
    "char",
    "charming",
    "cheese",
    "chief",
    "chosen",
    "cia",
    "citation",
    "clan",
    "cleanup",
    "clinton",
    "club",
    "coating",
    "collar",
    "colonial",
    "combining",
    "commission",
    "communities",
    "competing",
    "compliant",
    "computed",
    "conclusions",
    "config",
    "connecting",
    "considerations",
    "constitutes",
    "contacts",
    "continuing",
    "controller",
    "conviction",
    "cope",
    "corporate",
    "costume",
    "couple",
    "cox",
    "creations",
    "critics",
    "ct",
    "currency",
    "cv",
    "dallas",
    "darwin",
    "dayton",
    "deaths",
    "declared",
    "defend",
    "delegation",
    "democrat",
    "departmental",
    "des",
    "desired",
    "determination",
    "deviant",
    "diamonds",
    "difference",
    "dinner",
    "disabled",
    "discrete",
    "dispatched",
    "distributor",
    "dk",
    "doe",
    "donation",
    "down",
    "dramatically",
    "driven",
    "dts",
    "dutch",
    "early",
    "ebony",
    "edges",
    "ee",
    "ejaculation",
    "elephant",
    "embedded",
    "employer",
    "encyclopedia",
    "engineer",
    "enrolled",
    "entrance",
    "equal",
    "es",
    "estimate",
    "ev",
    "everyone",
    "exceed",
    "exclusive",
    "existence",
    "expensive",
    "explicitly",
    "extension",
    "fabrics",
    "failure",
    "fans",
    "fate",
    "fears",
    "fees",
    "fi",
    "filename",
    "find",
    "fired",
    "fitted",
    "flex",
    "flow",
    "fog",
    "footwear",
    "form",
    "fossil",
    "frame",
    "freely",
    "frontier",
    "functional",
    "furthermore",
    "gallery",
    "gary",
    "gdp",
    "generic",
    "geology",
    "gift",
    "global",
    "going",
    "gov",
    "graduates",
    "gratis",
    "grew",
    "gs",
    "guided",
    "habits",
    "handbags",
    "happening",
    "harris",
    "hayes",
    "healing",
    "heel",
    "her",
    "higher",
    "hire",
    "hold",
    "homeless",
    "hopes",
    "hosting",
    "howard",
    "human",
    "husband",
    "icq",
    "ieee",
    "imaging",
    "importance",
    "incentive",
    "incorrect",
    "indians",
    "industrial",
    "informational",
    "inn",
    "insights",
    "institutions",
    "integration",
    "interesting",
    "intervention",
    "investigate",
    "involvement",
    "irs",
    "ist",
    "jacket",
    "jar",
    "jersey",
    "jobs",
    "joseph",
    "judicial",
    "justify",
    "keen",
    "keyboard",
    "kinda",
    "knit",
    "ky",
    "laid",
    "lanka",
    "latina",
    "lawyer",
    "league",
    "leg",
    "lenses",
    "levels",
    "libs",
    "lightweight",
    "linear",
    "listings",
    "living",
    "locate",
    "logo",
    "loose",
    "love",
    "lucy",
    "machines",
    "magnitude",
    "majority",
    "management",
    "many",
    "marina",
    "mart",
    "match",
    "maui",
    "means",
    "medicare",
    "member",
    "merchandise",
    "metabolism",
    "mg",
    "midnight",
    "million",
    "ministers",
    "missile",
    "mls",
    "modification",
    "monday",
    "mood",
    "motels",
    "move",
    "msg",
    "murray",
    "myers",
    "namibia",
    "natural",
    "nearest",
    "neither",
    "new",
    "nh",
    "nil",
    "nomination",
    "nose",
    "novel",
    "numbers",
    "o",
    "obtain",
    "oclc",
    "offices",
    "olive",
    "onto",
    "opinion",
    "oracle",
    "organizational",
    "other",
    "outputs",
    "owns",
    "packs",
    "palestinian",
    "para",
    "parliament",
    "partnership",
    "paste",
    "paxil",
    "pe",
    "penis",
    "performances",
    "permitted",
    "petersburg",
    "phentermine",
    "photoshop",
    "pickup",
    "pins",
    "placement",
    "plastics",
    "pleased",
    "podcast",
    "polished",
    "popularity",
    "portsmouth",
    "postcards",
    "powder",
    "pray",
    "pregnancy",
    "presented",
    "previous",
    "printer",
    "probe",
    "producers",
    "programmer",
    "promote",
    "proposed",
    "prototype",
    "ps",
    "publishing",
    "purple",
    "qc",
    "quebec",
    "quotations",
    "rage",
    "range",
    "rather",
    "reaction",
    "rear",
    "recent",
    "recorded",
    "reducing",
    "reflected",
    "regime",
    "rejected",
    "relevant",
    "remedies",
    "reno",
    "reported",
    "republic",
    "reservation",
    "resource",
    "restoration",
    "retired",
    "revenues",
    "rhythm",
    "rights",
    "rna",
    "rogers",
    "roommates",
    "routers",
    "rubber",
    "rv",
    "sail",
    "samoa",
    "saskatchewan",
    "saw",
    "schedule",
    "scope",
    "scripting",
    "seasonal",
    "securely",
    "select",
    "senators",
    "separately",
    "services",
    "sexual",
    "shaped",
    "shelf",
    "shock",
    "shots",
    "siemens",
    "silk",
    "singer",
    "size",
    "sleep",
    "sluts",
    "snowboard",
    "solaris",
    "somerset",
    "souls",
    "span",
    "specially",
    "spell",
    "spokesman",
    "spy",
    "stage",
    "started",
    "status",
    "stereo",
    "stood",
    "strategies",
    "strip",
    "studies",
    "sublime",
    "substantially",
    "sufficiently",
    "summit",
    "suppliers",
    "surgeons",
    "suse",
    "swingers",
    "synopsis",
    "tag",
    "tampa",
    "taxes",
    "technical",
    "telephone",
    "tender",
    "terry",
    "th",
    "themselves",
    "thick",
    "thou",
    "throw",
    "tied",
    "tin",
    "tn",
    "ton",
    "tops",
    "towers",
    "tracy",
    "training",
    "translate",
    "traveller",
    "tremendous",
    "trinidad",
    "trust",
    "tumor",
    "tvs",
    "uc",
    "und",
    "union",
    "unnecessary",
    "upon",
    "usd",
    "utilization",
    "valley",
    "variety",
    "vehicles",
    "verse",
    "vic",
    "viewpicture",
    "virginia",
    "vitamins",
    "von",
    "wagner",
    "walt",
    "warrant",
    "watershed",
    "weather",
    "weekend",
    "west",
    "white",
    "wikipedia",
    "wings",
    "with",
    "wooden",
    "world",
    "wrapped",
    "www",
    "yale",
    "yields",
    "zambia",
];

var __RAM__regionStorage = [];

function isLocalStorage() {
    let truth = false;
    if (typeof localStorage !== 'undefined') {
	//so browser supports
	//but check if feature is disabled
	try {
	    localStorage.setItem('__feature_test', 'ahoy');
	    if (localStorage.getItem('__feature_test') ==  'ahoy') {
		localStorage.removeItem('__feature_test')
		truth = true;
	    }
	    else { truth = false; }
	} catch (exception) {
	    //we crackled on something, like, say, localStorage being
	    //only cool on some domains and not ours
	    truth = false;
	}
    } else { truth = false; }
}

function registerRegion(regionHandle) {
    __RAM__regionStorage.push(regionHandle);
    console.log("Registered DOM region element.");
}
function saveData( inputObject ) {
    
    let jiffy = JSON.stringify(inputObject) ;
    console.log("Serialized :\n\t\t" + jiffy + "\n");
    console.log("Attempting to jam it into localStorage");
    if (isLocalStorage == false) {
	alert("You lack a cool web browser so nothing can be saved.");
    }
    else
    {
	localStorage.setItem("jiffy", jiffy);
	console.log("Stored.");
    }
    
}

function createBody(cm) {
    let h = document.createElement("form");
    h.setAttribute("id", "__phrasebook");
    regions = cm.schema;
    regions.forEach(function(region) {
	createRegion(h, region);
    } );
    document.body.appendChild(h);
}

function buildSexyJSON() {
    // go through the regions and create region objects
    // then for each text thing, create an entry
    // each entry consists of schema-ref + actual UTF-8 text field
    
}
function createRegion(parentElement, region) {

    let re = document.createElement("div")
    let entryList = region.entries;
    let regionName = region.name;
    console.log("Building region " + region.name);
  
    re.setAttribute("name", regionName);
    re.setAttribute("id", "__region__" + regionName);

    re.appendChild(createRegionHeader(regionName));
    
    entryList.forEach(function(li) { 
	let text = li;
	let item = createText(text);
	re.appendChild(item.label);
	re.appendChild(item.input);
	re.appendChild(document.createElement("br"));
    } );
    
    //add to parent
    parentElement.appendChild(re);
    //register in RAM
    registerRegion(re);
}

function createRegionHeader(name) {
    let regionHeader = document.createElement("div");
    let h2 = document.createElement("h2");
    h2.appendChild(document.createTextNode(name));
    regionHeader.appendChild(h2);
    return regionHeader;
}
function insertRegionName(text) {
    let d = document.createElement("div");
    d.setAttribute("name", "__region_" + text);
    document.body
}

function createText(text) {
    let label = document.createElement("label");
    let input = document.createElement("input");
    let name = "__text__" + text;

    input.setAttribute("type", "text");
    input.setAttribute("name", name);
    label.appendChild(document.createTextNode(text));
    
    let union = { "label" : label, "input" : input }
    return union
}

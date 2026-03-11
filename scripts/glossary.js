/* glossary.js
* 
* ColonelKai (c) 2026 
* All Rights Reserved
*
* Imports all of the JSON data and lists them alphabetically.
*/

import jsonData from '/elements/fruaglossary/glossary.json' with { type: 'json' };

console.log(jsonData)

const SOURCES = jsonData["sources"];
const DEFINITIONS = Object.values(jsonData["definitions"]).sort((a, b) =>
    a["name"].localeCompare(b["name"])
);

const TARGET_DIV = document.getElementById("content");
let result = "<hr>";

for (let i = 0; i < DEFINITIONS.length; i++) {
    const DEFINITION = DEFINITIONS[i]
    console.log(DEFINITION)
    result += "<h3>"
    result += DEFINITION["name"];
    result += "</h3>"
    result += `<b>Source:</b><a href="${SOURCES[DEFINITION["source"]]["link"]}">${SOURCES[DEFINITION["source"]]["title"]}</a>`;
    result += `<p>${DEFINITION["description"]}</p>`;
    result += "<hr>"
}

TARGET_DIV.innerHTML = result;


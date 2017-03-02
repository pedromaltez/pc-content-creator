var fs = require('fs');
var file = 'template.md';
fs.readFile(file, 'utf8', processFile);

function processFile(err, data) {
  if (err) {
    return console.log(err);
  }
  console.log(renderOutput(data));
}

function renderOutput(data) {
  var output = [renderSummary(data),
                renderOurVerdict(data),
                renderWeLove(data),
                renderFeaturesInDetail(data),
                renderBoxDetails(data),
                renderAccessories(data),
                renderCTA(data)
            ].join("")
  return output
}

function renderTextualSection(data, regex) {
  // if data section which matches regex includes match for ##
  // use text that comes after on same line as title for section
  // else use defaultTitle, then use text
}

function renderSectionHeading(defaultHeading, headingLevel) {}

function renderSummary(data) {
  return renderSectionHeading("", "h2") + renderTextualSection(data)
}
function renderOurVerdict(data) {
  return renderTextualSection(data)
}
function renderWeLove(data) {}
function renderFeaturesInDetail(data) {}
function renderBoxDetails(data) {}
function renderAccessories(data) {}
function renderCTA(data) {}

// There is no reason for the name here except as an
// example of how to set something for the POST - arbitrary data example. could be anything in theory
const name = 'unknown';

const hostIndex = (req, res) => {

};

const hostPage1 = (req, res) => {

};

const hostPage2 = (req, res) => {

};

const getName = (req, res) => {

};

const setName = (req, res) => {

};

const notFound = (req, res) => {
return res.status(404).sendFile(path.resolve(`${__dirname}/../../views/notFound.html`)) // this would return a static HTML file. we don't have that, but it would if it could.
};

module.exports = {
  index: hostIndex,
  page1: hostPage1,
  page2: hostPage2,
  getName,
  setName,
  notFound,
};

const superagent = require('superagent');
const Marvel = require('../models/starter.model');
async function superagentData(req, res) {
  const superagentAPI = `http://gateway.marvel.com/v1/public/characters?apikey=8aeb8a15ef7885a31524ad0e64619942&hash=6c9790ac345260cee79e198eafcfae55&ts=1`;
  let returndData = [];
  superagent.get(superagentAPI).then(data => {
    returndData = data.body.data.results.map(mapingData => {
      return new Marvel(mapingData);
    })
    res.send(returndData);
  })
}
module.exports = superagentData;
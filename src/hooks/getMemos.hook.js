const { default: axios } = require("axios");

async function FetchData(url) {
    let backendData = await fetch(url).then(res =>  res.json())
    return backendData;
}

module.exports = {
    FetchData
}

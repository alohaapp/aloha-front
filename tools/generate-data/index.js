const fetch = require("node-fetch");
const workersData = require("./fixtures/workers.json");

const API_URL = "http://ivancea.xyz/api/v1";

// Workers
workersData.forEach(worker => {
  fetch(`${API_URL}/worker`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(worker)
  }).catch(error => console.error(error));
});

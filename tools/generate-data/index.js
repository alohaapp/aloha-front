const fetch = require("node-fetch");
const workersData = require("./fixtures/workers.json");
const officesData = require("./fixtures/offices.json");
const floorsData = require("./fixtures/floors.json");

const API_URL = "http://ivancea.xyz/api/v1";

// Workers
workersData.forEach(worker => {
  fetch(`${API_URL}/Workers`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(worker)
  })
    .then(response => console.log(response))
    .then(response => console.log(response))
    .catch(error => console.error(error));
});

// Offices
officesData.forEach(office => {
  fetch(`${API_URL}/Workers`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(office)
  })
    .then(response => console.log(response))
    .then(response => console.log(response))
    .catch(error => console.error(error));
});

// Floors
floorsData.forEach(floor => {
  fetch(`${API_URL}/Workers`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(floor)
  })
    .then(response => console.log(response))
    .then(response => console.log(response))
    .catch(error => console.error(error));
});

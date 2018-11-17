import React, { useState, useEffect } from "react";
import "./Workers.scss";

function Workers(props) {
  const [workers, setWorkers] = useState([{}]);

  useEffect(() => {
    fetch("https://aloha-back.azurewebsites.net/api/v1/Worker", {
      mode: "cors",
      headers: {
        "Content-type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*"
      }
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setWorkers(myJson);
      });

    // const workersTemp = [
    //   {
    //     id: 1,
    //     name: "Iván",
    //     surname: "Cea Fontenla",
    //     photoUrl: null,
    //     email: null,
    //     notes: null,
    //     userId: null,
    //     workstationId: null
    //   },
    //   {
    //     id: 2,
    //     name: "David",
    //     surname: "Vázquez",
    //     photoUrl: "http://fotito.guay",
    //     email: "david@david.com",
    //     notes: "aaa",
    //     userId: null,
    //     workstationId: null
    //   }
    // ];
    // setWorkers(workersTemp);
  });

  return (
    <div className="Workers">
      <ul>
        {workers.map((worker, index) => (
          <li key={index}>
            {worker.id} - {worker.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Workers;

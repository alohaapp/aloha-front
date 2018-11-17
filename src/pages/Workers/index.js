import React from "react";
import useAPI from "../../hooks/useAPI";
import "./Workers.scss";

function Workers(props) {
  const workers = useAPI({ url: "/Worker" });

  return workers ? (
    <ul>
      {workers.map((worker, index) => (
        <li key={index}>
          <div>{worker.photoUrl}</div>
          <div>{worker.name}</div>
          <div>{worker.surname}</div>
          <div>{worker.email}</div>
          <div>{worker.notes}</div>
          <div>Techs</div>
          <div>Projects</div>
        </li>
      ))}
    </ul>
  ) : (
    <h2>Loading...</h2>
  );
}

export default Workers;

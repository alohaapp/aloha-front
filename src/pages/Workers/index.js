import React from "react";
import useAPI from "../../hooks/useAPI";
import WorkerList from "./WorkerList";
import "./Workers.scss";

function Workers(props) {
  const workers = useAPI({ url: "/Worker" });

  return workers ? <WorkerList workers={workers} /> : <h2>Loading...</h2>;
}

export default Workers;

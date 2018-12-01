import React, { useContext } from "react";
import FilterContext from "../../components/FilterContext";
import WorkerList from "./WorkerList";
import Layout from "../Layout";
import "./Workers.scss";

function Workers() {
  const { workers } = useContext(FilterContext);

  const content = workers ? (
    <WorkerList workers={workers} />
  ) : (
    <h2>Loading...</h2>
  );

  return (
    <div className="workers">
      <Layout content={content} />
    </div>
  );
}

export default Workers;

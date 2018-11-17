import React from "react";
import useAPI from "../../hooks/useAPI";
import WorkerList from "./WorkerList";
import Layout from "../Layout";
import "./Workers.scss";

function Workers(props) {
  const workers = useAPI({ url: "/Worker" });

  const content = workers ? (
    <WorkerList workers={workers} />
  ) : (
    <h2>Loading...</h2>
  );

  const sidebar = <div>SIDEBAR</div>;

  return <Layout sidebar={sidebar} content={content} />;
}

export default Workers;

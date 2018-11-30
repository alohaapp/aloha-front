import React from "react";
import useAPI from "../../hooks/useAPI";
import WorkerList from "./WorkerList";
import Layout from "../Layout";
import "./Workers.scss";

function Workers(props) {
  const queryString = props.location.search && props.location.search.slice(1);
  const workers = useAPI({ url: "/Workers" });

  const content = workers ? (
    <WorkerList workers={workers} />
  ) : (
    <h2>Loading...</h2>
  );

  const sidebar = <div>SIDEBAR</div>;

  return (
    <Layout sidebar={sidebar} content={content} queryString={queryString} />
  );
}

export default Workers;

import "./Workers.scss";
import React, { Fragment } from "react";
import useAPI from "../../hooks/useAPI";
import WorkerList from "./WorkerList";
import WorkerFilter from "./WorkerFilter";
import Layout from "../Layout";

function Workers(props) {
  const workers = useAPI({ url: "/Worker" });

  const content = workers ? (
    <Fragment>
      <WorkerFilter />
      <WorkerList workers={workers} />
    </Fragment>
  ) : (
    <h2>Loading...</h2>
  );

  const sidebar = <div>SIDEBAR</div>;

  return <Layout sidebar={sidebar} content={content} />;
}

export default Workers;

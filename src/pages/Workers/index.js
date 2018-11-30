import React, { useContext } from "react";
import CRUDContext from "../../components/CRUDContext";
import WorkerList from "./WorkerList";
import Layout from "../Layout";
import "./Workers.scss";

function Workers(props) {
  const queryString = props.location.search && props.location.search.slice(1);
  const { workersCRUD } = useContext(CRUDContext);
  const workers = workersCRUD.store;

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

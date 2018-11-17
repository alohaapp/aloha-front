import React, { useState } from "react";
import PropTypes from "prop-types";
import { Field, Label, Control, Input, Icon, Help } from "bloomer";
import "./WorkerFilter.scss";

function WorkerFilter(props) {
  const [wordsSearch, setWordsSearch] = useState("");

  const onChangeInput = () => {
    console.log("aaa");
  };

  return (
    <Field>
      <Input type="Search" placeholder="Search" onChange={onChangeInput} />
    </Field>
  );
}

export default WorkerFilter;

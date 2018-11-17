import React from "react";
import PropTypes from "prop-types";
import { Field, Label, Control, Input, Icon, Help } from "bloomer";
import "./WorkerFilter.scss";

function WorkerFilter(props) {
  return (
    <Field>
      <Control hasIcons>
        <Input type="Search" placeholder="Search" />
      </Control>
    </Field>
  );
}

export default WorkerFilter;

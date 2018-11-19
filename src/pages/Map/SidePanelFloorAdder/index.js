import React from "react";
import {
  Card,
  CardHeader,
  CardHeaderIcon,
  CardHeaderTitle,
  Icon
} from "bloomer";

const SidePanelFloorAdder = () => {
  return (
    <div className="SidePanel-floor-adder">
      <Card>
        <CardHeader>
          <CardHeaderIcon>
            <Icon isSize="large" className="mdi mdi-add mdi-36px" />
          </CardHeaderIcon>
          <CardHeaderTitle>Add another floor</CardHeaderTitle>
        </CardHeader>
      </Card>
    </div>
  );
};

export default SidePanelFloorAdder;

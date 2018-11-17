import React from "react";
import { Card, CardHeader, CardHeaderTitle, CardContent } from "bloomer";
import { Link } from "react-router-dom";

const SidePanelFloor = ({ floor }) => {
  return (
    <div className="SidePanel-floor">
      <Link>
        <Card>
          <CardHeader>
            <CardHeaderTitle>{floor.name}</CardHeaderTitle>
          </CardHeader>
          <CardContent>Contents</CardContent>
        </Card>
      </Link>
    </div>
  );
};

export default SidePanelFloor;

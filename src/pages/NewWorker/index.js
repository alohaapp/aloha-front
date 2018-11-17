import React, { useState } from "react";
import WorkerDialog from "./WorkerDialog";

export default function(props) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <div>
      <button onClick={openDialog}>Open dialog</button>
      <WorkerDialog isActive={isDialogOpen} closeDialog={closeDialog} />
    </div>
  );
}

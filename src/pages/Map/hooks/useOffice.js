import { useState } from "react";
import useAPI from "../../../hooks/useAPI";

const findOffice = (offices, floorId) =>
  offices.find(office => office.floors.find(floor => floor.id === floorId));

const formatFloors = floors => {
  const floorsObject = {};
  floors.forEach(floor => {
    floorsObject[floor.id] = floor;
  });
  return floorsObject;
};

export default function(floorId) {
  const offices = useAPI({ url: "/office" });
  const office =
    floorId && offices ? findOffice(offices, floorId) : offices && offices[0];
  const floors = office
    ? useAPI({ url: `/office/${office.id}` })
    : offices && [];

  return [
    { offices: offices || [], floors: floors || {} },
    !offices || (office && !floors)
  ];
}

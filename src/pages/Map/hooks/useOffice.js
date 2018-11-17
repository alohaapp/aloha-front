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
  const [loading, setLoading] = useState(true);
  const [map, setMap] = useState({ offices: [], floors: {} });

  const offices = useAPI({ url: "/offices" });
  const office =
    floorId && offices ? findOffice(offices, floorId) : offices && offices[0];
  const floors = office
    ? useAPI({ url: `/offices/${office.id}` })
    : offices && [];

  if (offices && (!office || floors)) {
    setLoading(false);
    setMap({ offices, floors: formatFloors(floors) });
  }
  return [map, loading];
}

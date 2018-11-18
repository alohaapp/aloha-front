import React from "react";
import Site from "./Site";
import NotFound from "../NotFound";
import useAPI from "../../hooks/useAPI";

const getFloors = offices => {
  const floorsObject = {};
  offices.forEach(office => {
    office.floors.forEach(floor => {
      floorsObject[floor.id] = floor;
    });
  });
  return floorsObject;
};

const findOffice = (offices, floorId) =>
  offices.find(office => office.floors.find(floor => floor.id === floorId));

function Map({ floorId }) {
  // TODO: Borrar
  // const offices = useAPI({ url: "/offices" });
  const offices = [
    {
      id: 1,
      name: "Corune",
      floors: [
        {
          id: 1,
          name: "Bajo",
          imageUrl: "http://archivos.coru.net/aloha/corunet.svg",
          officeId: 1,
          workstations: null
        },
        {
          id: 2,
          name: "Primero",
          imageUrl: "http://archivos.coru.net/aloha/corunet.svg",
          officeId: 1,
          workstations: null
        }
      ]
    }
  ];
  const office =
    floorId && offices ? findOffice(offices, floorId) : offices && offices[0];

  if (offices && !office) {
    return <NotFound />;
  }

  return (
    <div className={`Map${!offices ? " loading" : ""}`}>
      {offices && (
        <Site
          floorId={floorId || (office.floors[0] && office.floors[0].id)}
          floors={getFloors(offices)}
          offices={offices}
        />
      )}
    </div>
  );
}

export default Map;

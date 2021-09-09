import React, { useState } from "react";
import PlantCard from "./PlantCard";

function PlantList({ plantsToDisplay }) {

  const PlantCards = plantsToDisplay.map(plant =>
    <PlantCard
      key={plant.id}
      plant={plant}
    />
    )

  return (
    <ul className="cards">{PlantCards}</ul>
  );
}

export default PlantList;

import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [filterBy, setFilterBy] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(res => res.json())
    .then(setPlants)
  }, [])

  function handleAddPlant(newPlant) {
    setPlants([...plants, newPlant])
  }

  function handleFilterChange(event) {
    setFilterBy(event.target.value)
  }

  const plantsToDisplay = plants.filter(plant => {
    if (filterBy === "") {
      return true
    } else {
      return plant.name === filterBy
    }
  })


  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search handleFilterChange={handleFilterChange}/>
      <PlantList plantsToDisplay={plantsToDisplay}/>
    </main>
  );
}

export default PlantPage;

import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ShowAnimals from "./ShowAnimals";

export default function Animals() {

  const [animals, setAnimals] = useState([]);

  // read external data
  useEffect(() => {
    const getAnimales = async (db) => {
      // use the collection in the firestore
      const animalsCollection = collection(db, "Animals");
      // gets all the docs of the collection
      const animalsSnapshot = await getDocs(animalsCollection);
      const animalsList = await animalsSnapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }));
      setAnimals(animalsList);
    };
    getAnimales(db);
  }, [animals]);


  // function getUserChoise() {
  //   let animalTypeArray = document.getElementsByName('animalType')
  //   for (const animalType of animalTypeArray) {
  //     setAnimals({ animalType: animalType.value })
    
  //   }
  // }


  return (
    <>
      <div>
        <Navbar />
        <div className="container">
          <h3>Here you can choose which animals you desire to see between the following categories from our zoo</h3>
          <hr />
          <Link to='/landAnimals'>
            <button className="btn btn-warning" style={{ marginRight: "2em", width: 200, height: 50, border: "solid black 2px" }} value="landAnimals" name="animalType">For Land Animals</button>
          </Link>
          <button className="btn btn-info" style={{ marginRight: "2em", width: 200, height: 50, border: "solid black 2px" }} value="seaAnimals" name="animalType">For Sea Animals</button>
          <button className="btn btn-success" style={{ marginRight: "2em", width: 200, height: 50, border: "solid black 2px" }} value="airAnimals" name="animalType">For Air Animals</button>
        </div>
      </div>
      <Footer />
    </>
  );
}

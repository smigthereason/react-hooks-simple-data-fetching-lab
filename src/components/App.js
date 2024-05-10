import React, {useState, useEffect } from "react";
 const App = () => {
    const [dogImage, setDogImage]= useState(null);
    const [isLoading, setIsLoading]= useState(true);

    useEffect(() =>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(data => {
            setDogImage(data.message)
            setIsLoading(false)
        })
    })
    return (
        <>
        <h1>Random Dog Image</h1>
        {isLoading? (
            <p>Loading...</p>
        ):(
            <img src={dogImage} alt="A Random Dog"/>
        )}
        </>
    )
 }
 export default App;
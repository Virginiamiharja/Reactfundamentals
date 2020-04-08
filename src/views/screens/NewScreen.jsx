import React from 'react';

const KomponenAku = () => {
    const btnHandler = () => {
        alert("You clicked me!")
    }

    let hello = "Testing"

    return (
        <div>
            <input onClick={btnHandler} type="button" value="Click Me!"/>
            <p>{hello}</p>
        </div>
    )
}

const NewScreen = () => {
    return (
        <div>
            <h1> Hallo aku screen baru !</h1>
            <KomponenAku/>
        </div>
    )
}

export default NewScreen;
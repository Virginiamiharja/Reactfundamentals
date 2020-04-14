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
            <h6> Hallo aku screen baru !</h6>
        </div>
    )
}

export default NewScreen;
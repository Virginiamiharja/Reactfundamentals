import React from 'react';
// Karena gue design buttonnya ada di app.css kalo kakaknya dia bikin button.css
// Tapi sebenernya kl dia udh di import di app.jsx gausah diimport disini lg karena dia udh ke apply ke semua file
// Tapi kata kakanya biar rapi aja gitu
import './App.css';

const Button = ({disabled, children}) => {
    // Kalau props tidak lgsg di desctructor di tempat parameter dia gabakal muncul di suggestion (ctrl+space)
    // Utk case ini children itu isinya string BUY NOW, karena button itu bukan tag self closing 
    return (
        <div></div>
    )
}
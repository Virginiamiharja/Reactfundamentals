import React from 'react';
import logo from './logo.svg';
import NewScreen from "./views/screens/NewScreen"
// Ini cara import file di jsx kalo di html kan link rel stylesheet
import './App.css';
import TableProduct from './views/components/TableProduct';

// Mirip html tapi bukan html melainkan jsx
// Awalnya kan extensionnya itu app.js trs ubah app.jsx jadi h1 nya bisa auto complete
function App() {
  let arr = ["Bandung", "Jakarta", "Tangerang"]

  const renderArr = () => {
    return arr.map(val => {
      return (
        <>
          <p>{val}</p>
          <NewScreen/>
        </>
      )
    })
  }

  return (
    // className ini buat yang styling
    <div className="App">
     <h1> UNICORN </h1>
     {/* Inline styling di react */}
     <h2 style={{ border : "1px solid red", marginTop: "30px"}}> 
     Test styling 
     </h2>
     {/* {renderArr()} */}

     <TableProduct/>
    </div>
  );
}

export default App;

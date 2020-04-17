import React from "react";
import logo from "./logo.svg";

import "./App.css";
import "./bootstrap.css";

import TableProduct from "./views/components/TableProduct";
import CounterScreen from "./views/components/CounterScreen";
import ProductCard from "./views/components/ProductCard";
import InputScreen from "./views/screens/InputScreen";
import AuthScreen from "./views/screens/AuthenticationScreenLect";
import LifescycleScreen from "./views/screens/LifecycleScreen";
import NewScreen from "./views/screens/NewScreen";
import HomeScreen from "./views/screens/HomeScreen";
import PageNotFound from "./views/screens/PageNotFound";
import ProfileScreen from "./views/screens/ProfileScreen";

// Screen weekend task
import UserListScreen from "./views/screens/WTUserListScreen";
import LoginScreen from "./views/screens/WTLoginScreen";
import RegistrationScreen from "./views/screens/WTRegistrationScreen";
import ProfileScreen1 from "./views/screens/WTProfileScreen";

// Untuk routing kita install dulu packagenya di terminal pake commad npm install react-router-dom kalo ini tidak global hanya berlaku di folder react-fundamentals aja
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import navbar from "./views/components/Navbar";
import Navbar from "./views/components/Navbar";

// Trs untuk install json server -> buat ambil data dari server, npm install -g json-server dan -g artinya global bisa digunakan dimana saja
// Trs npm install axios
// Trs cara start json npx json-server db.json -p 2000 tapi pastiin terminalnya di db.json filenya

// Cara import gambar
// import Handmaid from './images/handmaid.png'

// Mirip html tapi bukan html melainkan jsx
// Awalnya kan extensionnya itu app.js trs ubah app.jsx jadi h1 nya bisa auto complete
function App() {
  let arr = ["Bandung", "Jakarta", "Tangerang"];

  //  const renderArr = () => {
  //   return arr.map(val => {
  //     return (
  //       <CounterScreen kota={val}/>
  //     )
  //   })
  // }

  let arrProducts = [
    {
      nama: "Sepatu Basket",
      harga: 23000,
      desc: "Sepatu basket terjelek yang pernah ada didunia jangan dibeli",
      discount: 20,
      stock: 10
    },
    {
      nama: "Kaos Polo",
      harga: 13000,
      desc: "Kaos polo terjelek yang pernah ada didunia jangan dibeli",
      discount: 40,
      stock: 5
    },
    {
      nama: "Celana Jeans",
      harga: 28000,
      desc: "Celana jeans terjelek yang pernah ada didunia jangan dibeli",
      discount: 0,
      stock: 0
    }
  ];

  const renderProduct = () => {
    return arrProducts.map(val => {
      return <ProductCard product={val} />;
    });
  };

  let arrBooks = [
    {
      author: "Margaret Atwood",
      title: "The handmaid's tale",
      review: 4,
      desc: `This novel can be interpreted as a double narrative, Offred's tale and the handmaids' tales. The night...`,
      price: 18.99,
      discount: 60,
      image: "img/handmaid.png",
      // image: Handmaid,
      stock: 7
    },
    {
      author: "Kevin Kwan",
      title: "Crazy rich asians",
      review: 5,
      desc: `The outrageously funny debut novel about three super-rich, pedigreed Chinese families and the gossip...`,
      price: 24.12,
      discount: 80,
      image: "img/crazyRich.png",
      // image: Crazy,
      stock: 0
    },
    {
      author: "Aldous Huxley",
      title: "Brave new world",
      review: 3,
      desc: `Dystopian novel written in 1931 by English author Aldous Huxley, and published in 1932. Largely set in...`,
      price: 18.99,
      discount: 60,
      image: "img/brave.png",
      // image: Brave,
      stock: 3
    },
    {
      author: "Tara Westover",
      title: "Educated",
      review: 4.5,
      desc: `It is a tale of fierce family loyalty and of the grief that comes with severing the closest of ties. With...`,
      price: 34.21,
      discount: 0,
      image: "img/educated.png",
      // image: Educated,
      stock: 3
    }
  ];

  const renderBook = () => {
    return arrBooks.map(val => {
      return <ProductCard book={val} />;
    });
  };

  // return (
  //   // className ini buat yang styling
  //   <div className="App">
  //    <h1> UNICORN </h1>
  //    {/* Inline styling di react */}
  //    <h2 style={{ border : "1px solid red", marginTop: "30px"}}>
  //    Test styling
  //    </h2>
  //    {renderArr()}
  //    {/* <TableProduct/> */}
  //    {/* <CounterScreen/> */}
  //   </div>
  // );

  return (
    <div className="App">
      {/* <h1 className='p-2 mt-5 mb-5'>Virginia's Book Store</h1> */}

      {/* <div className="row justify-content-center"> 
        {renderBook()}
      </div> */}

      {/* <div className="row justify-content-center">
        <TableProduct/>
      </div> */}

      {/* <CounterScreen/> */}

      {/* <h1 className='p-2 m-3'> Unicorn Fan Club</h1> */}
      {/* <InputScreen/> */}
      {/* <AuthScreen/> */}
      {/* <LifescycleScreen/> */}

      {/* <BrowserRouter> */}
      {/* Disini diletakan komponen yang selalu ada di tiap web page contohnya navbar */}
      {/* <Navbar /> */}
      {/* <Switch> */}
      {/* exact ini buat pastiin bener2 di path itu kl ga pake exact kalo misalnya kita buka /registartion masih kebukanya home screen */}
      {/* <Route exact path="/" component={HomeScreen} /> */}
      {/* <Route exact path="/registration" component={AuthScreen} /> */}
      {/* <Route exact path="/counter" component={CounterScreen} /> */}
      {/* <Route exact path="/input" component={InputScreen} /> */}
      {/* Karena si username itu bukan exact pathnya gitu dan : itu adalah route params */}
      {/* <Route exact path="/profile/:username" component={ProfileScreen} /> */}
      {/* Bintang itu artinya semua, tapi dia hrs ditaro paling bawah gitu karena switch itu ngecek satu2 dari atas  */}
      {/* <Route path="*" component={PageNotFound} /> */}
      {/* </Switch> */}

      {/* </BrowserRouter> */}

      {/* Weekend Task */}
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/registration" component={RegistrationScreen} />
        <Route exact path="/login" component={LoginScreen} />
        <Route exact path="/userlist" component={UserListScreen} />
        <Route exact path="/profile/:username" component={ProfileScreen1} />
      </Switch>
    </div>
  );
}

// With router ini kan harus didalem browser router jadi otak atik index.js nya, with router buat bisa akses url yang ada di link di atas navbar google search itu
export default withRouter(App);

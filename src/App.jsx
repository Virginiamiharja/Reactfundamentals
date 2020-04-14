import React from 'react';
import logo from './logo.svg';
import NewScreen from "./views/screens/NewScreen"
import './App.css';
import TableProduct from './views/components/TableProduct';
import CounterScreen from './views/components/CounterScreen';
import ProductCard from './views/components/ProductCard';
import'./bootstrap.css';
import InputScreen from "./views/screens/InputScreen"
// Cara import gambar
// import Handmaid from './images/handmaid.png'

// Mirip html tapi bukan html melainkan jsx
// Awalnya kan extensionnya itu app.js trs ubah app.jsx jadi h1 nya bisa auto complete
function App() {
  let arr = ["Bandung", "Jakarta", "Tangerang"]

  //  const renderArr = () => {
  //   return arr.map(val => {
  //     return (
  //       <CounterScreen kota={val}/>
  //     )
  //   })
  // }

  let arrProducts = [
  {
    nama: 'Sepatu Basket',
    harga: 23000,
    desc: 'Sepatu basket terjelek yang pernah ada didunia jangan dibeli',
    discount:20,
    stock:10,
  },
  {
    nama: 'Kaos Polo',
    harga: 13000,
    desc: 'Kaos polo terjelek yang pernah ada didunia jangan dibeli',
    discount:40,
    stock:5,
  },
  {
    nama: 'Celana Jeans',
    harga: 28000,
    desc: 'Celana jeans terjelek yang pernah ada didunia jangan dibeli',
    discount:0,
    stock:0
  },
  ]

  const renderProduct = () => {
    return arrProducts.map(val => {
      return <ProductCard product={val}/>
    })
  }

  let arrBooks = [
    {
      author: "Margaret Atwood",
      title: "The handmaid's tale",
      review: 4,
      desc: `This novel can be interpreted as a double narrative, Offred's tale and the handmaids' tales. The night...`,
      price: 18.99,
      discount: 60,
      image: 'img/handmaid.png',
      // image: Handmaid,
      stock: 7,
    },
    {
      author: "Kevin Kwan",
      title: "Crazy rich asians",
      review: 5,
      desc: `The outrageously funny debut novel about three super-rich, pedigreed Chinese families and the gossip...`,
      price: 24.12,
      discount: 80,
      image: 'img/crazyRich.png',
      // image: Crazy,
      stock: 0,
    },
    {
      author: "Aldous Huxley",
      title: "Brave new world",
      review: 3,
      desc: `Dystopian novel written in 1931 by English author Aldous Huxley, and published in 1932. Largely set in...`,
      price: 18.99,
      discount: 60,
      image: 'img/brave.png',
      // image: Brave,
      stock: 3,
    },
    {
      author: "Tara Westover",
      title: "Educated",
      review: 4.5,
      desc: `It is a tale of fierce family loyalty and of the grief that comes with severing the closest of ties. With...`,
      price: 34.21,
      discount: 0,
      image: 'img/educated.png',
      // image: Educated,
      stock: 3,
    },
  ];

  const renderBook = () => {
    return (
      arrBooks.map(val => {
        return <ProductCard book={val}/>
      })
    )
  }

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
    <div className='App'>
      {/* <h1 className='p-2 mt-5 mb-5'>Virginia's Book Store</h1> */}
    
      {/* <div className="row justify-content-center"> 
        {renderBook()}
      </div> */}

      {/* <div className="row justify-content-center">
        <TableProduct/>
      </div> */}

      {/* <CounterScreen/> */}

      <h1 className='p-2 m-3'> Unicorn Fan Club</h1>
      <InputScreen/>
    </div>
  )
}

export default App;

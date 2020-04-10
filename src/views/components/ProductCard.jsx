import React from 'react'

const ProductCard = (props) => {
    // const {product} = props
    // const {nama, harga, desc, discount, stock} = product

    // let potonganHarga = (discount/100) * harga
    // let finalPrice = harga - potonganHarga
    
    // // Conditional rendering
    // const renderItem = () => {
    //     // Stock yang 0 akan terhitung false
    //     if (stock) {
    //         return (
    //         <>
    //         <h3> Nama Product : {nama} </h3>
    //         <h3> Harga : {harga} </h3>
    //         {
    //             discount > 0 ? 
    //             <h4> Diskon : {discount}% menjadi {finalPrice}</h4> : null
    //         }
    //         <p>    
    //         Description : 
    //         {desc}
    //         </p>
    //         </>
    //         )
    //     } else {
    //         return <h2> Stock Kosong !</h2>
    //     }
    // }

    // return (
    //     <div style={{
    //         width:"240px", 
    //         padding:"16px", 
    //         border:"1px solid black", 
    //         borderRadius:"7px",
    //         margin:"20px"}}>
            
    //         {renderItem()}
    //     </div>
    // )

    const {book} = props
    const {author, title, review, desc, price, discount, image, stock} = book

    let disc = (discount/100) * price
    let finalPrice = price - disc

    const renderButton = () => {
        if (!stock) {
            return (
                <div className="d-flex justify-content-center">
                    <input className="my-btn border" style={{height:"50px", width:"280px"}} type="button" value="Buy Now" disabled/>
                </div>
            )
        } else {
            return (
                <div className="d-flex justify-content-center" >
                    <input className="my-btn" style={{height:"50px", width:"280px"}} type="button" value="Buy Now"/>
                </div>
            )
        }
    }

    const renderPrice = () => {
        if (discount) {
            return (
            <div className="d-flex">
                <h5 className="mr-4"> ${finalPrice.toFixed(2)} </h5>
                <h5 style={{textDecoration:"line-through", opacity:"0.7"}}> ${price} </h5>
            </div>
        
            )   
        } else {
            return (
            <>
            <h5> ${price} </h5>
            </>
            )
        }
    }

    return (
        <div className="d-flex col-5 m-2 mb-5 text-left">
            <div className="d-flex justify-content-center col-5" style={{height:"294px"}}>
                {/* Ini cara versi html */}
                <img style={{height:"100%"}} src={image} alt=""/>
            </div>
            <div className="col-7">
                <p style={{opacity:"0.8"}}> {author} </p>
                <h3 style={{fontWeight:"bold"}}> {title} </h3>
                <p> {review}/5 Review </p>
                <p style={{opacity:"0.8"}}> {desc} </p>
                {renderPrice()}
                {renderButton()}
            </div>
        </div>
    )
} 

export default ProductCard
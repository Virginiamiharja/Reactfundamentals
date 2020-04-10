import React from 'react'

// Functional component
// const CounterScreen = (props) => {
//     return (
//         <div>
//             <h1>{props.kota}</h1>
//         </div>
//     )
// }

// Class component
class CounterScreen extends React.Component {
    render() {
        return (
            <div>
                {/* <h1>{this.props.terserah}</h1>
                <h1>{this.props.nama}</h1> */}
                <h1>{this.props.kota}</h1>
            </div>
        )
    }
}

// Props itu buat parsing data antar component
export default CounterScreen
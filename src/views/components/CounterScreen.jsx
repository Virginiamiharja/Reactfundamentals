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
// class CounterScreen extends React.Component {
//     render() {
//         return (
//             <div>
//                 {/* <h1>{this.props.terserah}</h1>
//                 <h1>{this.props.nama}</h1> */}
//                 <h1>{this.props.kota}</h1>
//             </div>
//         )
//     }
// }

class CounterScreen extends React.Component {
    // State itu untuk nyimpen data yang berubah2, bentuknya kaya object aja
    // Dan awalnya dia cuma bisa dipake di class component, functional component gaada jadi pake props gitu loh
    // Nah itu dia pake hooks
    state = {
        counter1:0,
        counter2:0,
        counter3:0
    }

    render() {
        return (
        <div>
        <div className="d-flex">
            <div className="col-4">
            <h1> Counter 1 = {this.state.counter1} </h1>

            <input className="btn btn-primary" 
            type="button" 
            value="+"
            // Ini bakal langsung ke trigger kalo yang function() gitu karena ada tutup buka kurungnya
            // onClick={this.setState({counter:2})}
            // Makanya dibikin begini
            onClick={() => this.setState({counter1:this.state.counter1 + 1 })}
            />

            <input className="btn btn-danger ml-2" 
            type="button" 
            value="-"
            onClick={() => this.setState({counter1:this.state.counter1 - 1 })}
            />
            </div>

            <div className="col-4">
            <h1> Counter 2 = {this.state.counter2} </h1>
            <input className="btn btn-primary" 
            type="button" 
            value="+"
            onClick={() => this.setState({counter2:this.state.counter2 + 1 })}
            />

            <input className="btn btn-danger ml-2" 
            type="button" 
            value="-"
            onClick={() => this.setState({counter2:this.state.counter2 - 1 })}
            />
            </div>

            <div className="col-4">
            <h1> Counter 3 = {this.state.counter3} </h1>
            <input className="btn btn-primary" 
            type="button" 
            value="+"
            onClick={() => this.setState({counter3:this.state.counter3 + 1 })}
            />

            <input className="btn btn-danger ml-2" 
            type="button" 
            value="-"
            onClick={() => this.setState({counter3:this.state.counter3 - 1 })}
            />
            </div>
            </div>

            <h5> All Counters </h5>
            <input className="btn btn-primary" 
            type="button" 
            value="+"
            onClick={() => this.setState({
                counter3:this.state.counter3 + 1,
                counter2:this.state.counter2 + 1,
                counter1:this.state.counter1 + 1 
            })}
            />

            <input className="btn btn-danger ml-2" 
            type="button" 
            value="-"
            onClick={() => this.setState({
                counter3:this.state.counter3 - 1,
                counter2:this.state.counter2 - 1,
                counter1:this.state.counter1 - 1
            })}
            />

            <input className="btn btn-secondary" 
            type="button" 
            value="Reset"
            onClick={() => this.setState({
                counter3: 0,
                counter2: 0,
                counter1: 0
            })}
            />
        </div>
        )
    }
}

// Props itu buat parsing data antar component
export default CounterScreen
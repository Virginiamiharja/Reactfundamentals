import React from 'react'

class LifescycleScreen extends React.Component {
    // Function here
    // Lifecycle itu dari hidup - mati pagenya 

    state = {
        username: "",
        // New date disini hasil dr pertama kali render jd hasilnya fix gitu
        time: new Date()
    }

    // Urutan life cycle
    // render -> did mount
    // re render != did mount
    // Salah satu method di lifecycle, dan did mount ini terpanggil setelah render pertama

    componentDidMount() {
        // alert("Ini did mount")
        this.setState({username:"doraemon"})
        // Pokoknya jangan pake set state disini karena bakal rusak jd dia kaya looping trs gt
        // this timer ini kaya function yang timer = () => gitu tapi penulisannya langsung begini
        // Nah ini kan set interval itu dia selalu ngetrigger fungsi tiap 1000ms 
        this.timer = setInterval(() => this.triggerClock(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    triggerClock = () => {
        // Dia ngeset time tiap trigger ini function
        this.setState({time : new Date()})
    }

    // componentDidUpdate() {
    //     alert("Anda mengubah state")
    // }

    // componentWillMount() {
    //     alert("Ini will mount")
    // }

    render() {
        return (
            <div>
                <h1> Ini adalah LifescycleScreen </h1>
                {/* <h2> Welcome, {this.state.username}</h2>
                <input type="text" name="" id="" 
                onChange={(e) => this.setState({username: e.target.value})}/> */}
                <h4> {this.state.time.toLocaleTimeString()} </h4>
            </div>
        )
    }
}

export default LifescycleScreen
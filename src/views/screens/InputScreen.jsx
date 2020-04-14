import React from 'react'
import NewScreen from './NewScreen'

class InputScreen extends React.Component {
    // state = {
    //     username : "",
    //     email:"",
    //     wordCounter : 0,
    //     textBox : ""
    // }

    // render () {
    //     // Destructor
    //     const {username, email, wordCounter, textBox} = this.state

    //     const inputHandler = (event, field) => {
    //         // Biar dia dinamis makanya pake bracket notation yang dia nerima string itu loh ["Username"]
    //         this.setState({[field]:event.target.value})
    //         // this.setState({username:event.target.value})

            
    //     }

    //     return (
    //         <div>
    //         <h1> Hallo ini input screen </h1>
    //         <h3> Welcome {username} and {email}</h3>
    //         <input 
    //         onChange={(e) => inputHandler(e, "username")}
    //         // Bisa penulisan kaya gini
    //         // onChange={inputHandler} 
    //         type="text" placeholder="Username" 
    //         name="" id=""/>

    //         <br />
            
    //         <input 
    //         onChange={(e) => inputHandler(e, "email")}
    //         // Bisa penulisan kaya gini
    //         // onChange={inputHandler} 
    //         type="text" placeholder="Email" 
    //         name="" id=""/>

    //         <br />

    //         {/* Atau bikin fungsi lagi juga ora opo */}
    //         <textarea 
    //         // onChange={(e) => this.setState({wordCounter:this.state.wordCounter + 1})} 
    //         // Cara kak theo 
    //         onChange={(e) => inputHandler(e, "textBox")}
    //         name="" id="" cols="30" rows="10">
    //         </textarea>

    //         <br />
    //         {/* <p> {wordCounter} / 100 </p> */}
    //         <p> {textBox.length} / 100 </p>
    //         </div>
    //     )
    // }

    constructor(props) {
        super(props)
        this.state = {
            person : [],
            username : "",
            password : "",
            rptPassword : "",
            text : "Login dulu deh"
        }
    }

    render() {
        // Ini buat ambil value dari input field register
        const registerHandler = (event, field) => {
            this.setState({[field]:event.target.value})
        }

        const submitInput = (event) => {
            const newUsername = this.state.username.toLowerCase();
            const newPassword = this.state.password;
            const rptPassword = this.state.rptPassword;
            const objPerson = {'username':newUsername, 'password':newPassword};
            
            {rptPassword == newPassword ? this.setState({ person: [objPerson, ...this.state.person] }) : alert("Password belum cocok")}

            document.getElementById("my-form").reset() 
        }

        // Ini buat ambil value dari input field login
        const loginHandler = (event, field) => {
            this.setState({[field]:event.target.value})
        }

        const login = () => {
            const inputUsername = this.state.username.toLowerCase();
            const inputPassword = this.state.password;

            let fndUser = this.state.person.find(val => {
                return val.username == inputUsername && val.password == inputPassword
            })

            let idxUser = this.state.person.findIndex(val => {
                return val.username == inputUsername
            })
            
            let idxPass = this.state.person.findIndex(val => {
                return val.password == inputPassword
            })

            console.log(this.state.person)

            {idxUser == idxPass && fndUser ? this.setState({text : "Hai selamat datang " + inputUsername}) : alert("Username atau password salah")}
        }

        return(
            <div className="d-flex flex-column align-items-center">
                <h3 className="mb-4"> Join Us </h3>
                <div className="d-flex flex-column align-items-center justify-content-center border" style={{width:"500px", borderRadius:"5px"}}>
                    <h5 className="mb-4"> Register </h5>
                        <div className="form-group">
                            <form id="my-form">
                                <input className="form-control mb-3" onChange={(e) => registerHandler(e, "username")} type="text" name="" id="newUsername" placeholder="Username"/>
                                <input className="form-control mb-3" onChange={(e) => registerHandler(e, "password")} type="text" name="" id="newPassword" placeholder="Password"/>
                                <input className="form-control mb-3" onChange={(e) => registerHandler(e, "rptPassword")} type="text" name="" id="repeatPassword" placeholder="Repeat Password"/>
                                <input  className="btn btn-primary"  onClick={() => submitInput()}  type="button" value="Register" style={{width:"100%"}}/>
                            </form>
                        </div>
                </div>

                <div className="d-flex flex-column align-items-center justify-content-center border mt-3 mb-5" style={{width:"500px", borderRadius:"5px"}}>
                    <h5 className="mb-4"> Login </h5>
                        <div className="form-group">
                            <input className="form-control mb-3"  onChange={(e) => loginHandler(e, "username")} type="text" name="" id="" placeholder="Username"/>
                            <input className="form-control mb-3"  onChange={(e) => loginHandler(e, "password")} type="text" name="" id="" placeholder="Password"/>
                            <input className="btn btn-primary mb-4" onClick={() => login()} type="button" value="Login" style={{width:"100%"}}/>
                        </div>

                    <h6> {this.state.text} </h6>
                </div>
            </div>
        )
    }
}

export default InputScreen

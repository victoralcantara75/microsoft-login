import {React, useEffect} from 'react'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import "./LoginDTI.css"
import "./Login.css"
import api from "./api"
 
export default (props) => {

    useEffect(() => {
        document.title = "Entrar em sua conta"
    }, [])

    const email = props.location.email

    const save = (email) => {

        const name = email ? email.split(".") : ["", ""]

        const obj = {name: name[0], email: email}

        api.post("users", obj)
    }

    var input = document.getElementById("input2");
    input && input.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            const button = document.getElementById("button2")
            button && button.click()
        }
    });

    return (
        <div className="background2">
            <div className="container2">
                <div className="containerEmail">
                    <Link to={"/microsoft"}>
                        <a style={{
                            color: "#666",
                            textDecoration:"none"
                        }}>{email}</a>
                    </Link>
                </div>
                <div className="low">
                    <input id="input2" className="input" type="password" placeholder="Senha" autoFocus/>
                    <br /><br />
                    <a style={{marginLeft: "25px", fontSize:"14px", textDecoration:"none"}} href="Login">Esqueci minha senha </a>
                    <br /> <br />
                    <Link to={{pathname: "/redirect"}}>
                        <button id="button2" className="button" onClick={() => save(email)}>Entrar</button>
                    </Link>
                </div>
            </div>
        </div>
      );
}
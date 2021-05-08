import {React} from 'react'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import "./LoginDTI.css"
import "./Login.css"

export default (props) => {

    const email = props.location.email

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
                    <button id="button2" className="button" onClick={() => console.log("done")} >Entrar</button>
                </div>
            </div>
        </div>
      );
}
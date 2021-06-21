import {React,  useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import "./Login.css"

export default () => {

    useEffect(() => {
        document.title = "Entrar em sua conta"
    }, [])

    const [email, setEmail] = useState("");

    var input = document.getElementById("input");
    
    input && input.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            const button = document.getElementById("button")
            button && button.click()
        }
    });

    return (
        <div className="background">
            <div className="container">
                <input id="input" className="input" type="email" placeholder="Email, telefone ou Skype" onChange={(event) => setEmail(event.target.value)} autoFocus/>
                <br /><br />
                <a style={{marginLeft: "25px", fontSize:"14px"}}>Não tem uma conta? </a>
                <a style={{marginLeft: "1px", fontSize:"14px", textDecoration:"none"}} href="fff"> Crie uma! </a>
                <br /> <br />
                <a style={{marginLeft: "25px", fontSize:"14px", textDecoration:"none"}} href="ddd"> Não consegue acessar sua conta? </a>
                <br /> <br />
                <Link to={{pathname:"/dtidigital", email:email}} >
                    <button id="button" className="button">Avançar</button>
                </Link>
            </div>
        </div>
      );
}
import {React} from 'react'
import "./Redirect.css"

export default () => {

    return (

        <html lang="en">

            <head>
                <meta charset="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>dtidigital</title>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Odibee+Sans&display=swap" rel="stylesheet"/>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700"/>
                <link rel="stylesheet" href="redirect.css"/>
            </head>

            <body className="body-redirect">
                <div class="panel">

                    <div class="pricing-plan">
                        <img src="./dti.png" alt="" class="pricing-img" id="lockImage"/>
                        <h2 class="pricing-header">SEUS DADOS PODEM SER EXPOSTOS!</h2>
                        <ul class="pricing-features">
                            <li class="pricing-features-item">Voce acabou de cair em um phishing realizado pela guilda de segurança da dti.</li>
                            <li class="pricing-features-item">Fique tranquilo, sua senha <span style={{color: "red"}}>NÃO</span> FOI capturada! Este foi um teste para ver se estava atento aos perigos da internet.</li>
                            <li class="pricing-features-item">Mais informações serão divulgadas em breve e pedimos para que mantenha segredo até a divulgação!</li>
                        </ul>
                        <span class="pricing-price">Tenha mais cuidado ao colocar seus dados via qualquer email, mensagem ou pessoa te falando para fazer. Fique atento!</span>
                        <a href="https://dtidigital.sharepoint.com/teams/util/SitePages/LGPD.aspx" class="pricing-button">Saiba mais!</a>
                    </div>

                </div>

            </body>

        </html>

    )

}
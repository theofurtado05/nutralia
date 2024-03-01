import React, {useState, useEffect} from "react";
import {Footer} from './styles'

import LogoHorizontal from '../../../assets/logoHorizontal.png'

const FooterLp = () => {
    const [isMobile, setIsMobile] = useState()

    useEffect(()=>{
        setIsMobile(window.innerWidth <= 769)
    }, [])

    return(
        <>

        {isMobile ?

            <Footer>

                <div className="divPai">
                    
                    <div className="company">
                        <img src={LogoHorizontal}/>

                        <span>
                            © 2023 Dieta Automática. <br/>
                            Todos os direitos reservados.
                        </span>

                    </div>

                    <div className="linksUteis">
                        <a href="/termosDeUso">
                            Termos de Uso
                        </a>

                        <a href="/politicas">
                            Políticas de Privacidade
                        </a>

                        <a href="/faq">
                            Perguntas frequentes
                        </a>

                    </div>

                </div>
        
            </Footer>
        
        :

            <Footer>
                <div className="divPai">

                
                    <div className="company">
                        <img src={LogoHorizontal}/>

                        <span>
                            © 2023 Dieta Automática. <br/>
                            Todos os direitos reservados.
                        </span>

                    </div>

                    <div className="linksUteis">
                        <a href="/termosDeUso">
                            Termos de Uso
                        </a>

                        <a href="/politicas">
                            Políticas de Privacidade
                        </a>

                        <a href="/faq">
                            Perguntas frequentes
                        </a>

                    </div>
                </div>
            </Footer>

        }

        </>
    )
}

export default FooterLp
import logoFooter from '../assets/logo__footer.png'; 

function Footer() {
    return(
        <footer className="footer">
            <div className="footer__container">
                <h2 className="footer__logo">
                    <img src={logoFooter} alt="Kasa" />
                </h2>
                <p>© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer;
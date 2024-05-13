import LogoComponent from "../shared/Logo"
import Divider from "../shared/Divider"

const Footer = () => {
  return (
    <footer className="footer">
        <Divider />
        <div className="footer-container">
            <div className="footer-information">
                <LogoComponent /> 
                <div>
                  <h4 className="footer-contact-heading">Kontakt</h4>
                  <address className="footer-contact">070-668 19 21 <span className="e-mail">torbjorn@skrivhornan.se</span></address>
                </div>
            </div>           
        </div>
        <p className="copyright">&copy; 2024 Vårsagor AB</p>
    </footer>
  )
}

export default Footer
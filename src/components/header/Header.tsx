import LogoComponent from "../shared/Logo";
import Divider from "../shared/Divider";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="header">
        <LogoComponent />
        <Divider /> 
        <Navbar /> 
    </header>
  )
}

export default Header; 
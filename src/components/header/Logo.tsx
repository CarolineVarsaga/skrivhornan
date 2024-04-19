import Logo from '../../assets/svg/skrivhornan-svg.svg';

const LogoComponent = () => {
  return (
    <img className="logo" src={Logo} alt="Logotyp: Skrivhörnan Torbjörn Vårsaga" width="282" height="91" />
  );
};

export default LogoComponent;
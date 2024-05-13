import Logo from '../../assets/svg/skrivhornan-logo.svg';

const LogoComponent = () => {
  return (
    <img className="logo" src={Logo} alt="Logotyp: Skrivhörnan Torbjörn Vårsaga" width="592" height="100" />
  );
};

export default LogoComponent;
import ListItem from "./ListItem";

const Navbar = () => {
    const menuLinks = ['Om mig', 'Portfolio', 'Kontakta mig']

  return (
    <nav className="navbar">
        <ul className="menu-list">
            {menuLinks.map((menuLink, index) => {
                return <ListItem key={index} menuLink={menuLink} href={`#${menuLink.toLowerCase()}`}/>
            })}
        </ul>
    </nav>
  )
}

export default Navbar;
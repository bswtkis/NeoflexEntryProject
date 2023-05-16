import { useContext } from 'react';
import { HeaderContext } from '../../context/HeaderContext';
import {Logo} from "./Logo/Logo";
import {NavButtons} from "./NavButtons/NavButtons";
export function NavBar() {
  const headerData = useContext(HeaderContext);
  return (
    <nav>
      <Logo value={headerData.logo} />
      <NavButtons navButtonsData={headerData.navButtonsData} />
    </nav>
  )
}
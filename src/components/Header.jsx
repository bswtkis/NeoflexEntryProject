import { Logo } from './Header/Logo/Logo'
import { NavButtons } from './Header/NavButtons/NavButtons'
import styles from './header.module.sass';
export function Header({headerData}) {
  return (
    <header>
      <nav id={styles.header_container}>
        <Logo value={headerData.logo} />
        <NavButtons navButtonsData={headerData.navButtonsData} />
      </nav>
    </header>
  )
}
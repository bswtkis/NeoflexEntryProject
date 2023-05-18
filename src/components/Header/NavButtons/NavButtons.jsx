import { NavButton } from './NavButton/NavButton'
import styles from './navButtons.module.sass';
export function NavButtons({navButtonsData}) {
  const buttons = navButtonsData.map(
    (buttonData) => <NavButton key={buttonData.id} src={buttonData.src} count={buttonData.count}/>);
  return (
    <div id={styles.navButtons}>
      {buttons}
    </div>
  )
}
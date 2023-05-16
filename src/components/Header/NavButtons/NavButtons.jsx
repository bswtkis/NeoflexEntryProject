import { NavButton } from './NavButton/NavButton'

export function NavButtons({navButtonsData}) {
  const buttons = navButtonsData.map(
    (buttonData) => <NavButton key={buttonData.id} src={buttonData.src} count={buttonData.count}/>);
  return (
    <div className="navButtons">
      {buttons}
    </div>
  )
}
import "../styles/nav-rail-item.component.css"
const NavRailItem = ({icon, title, onClick}) => {

    const handleClick = () => {
        onClick()
    }
    return(
        <div className="navigation-item" onClick={handleClick}>
            <div className="navigation-item__icon">{icon}</div>
            <div className="navigation-item__title">{title}</div>
        </div>
    )
}

export default NavRailItem
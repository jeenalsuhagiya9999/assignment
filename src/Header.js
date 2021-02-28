
function Header(props){
    return(
        <div className="header">
            <p>Click on the following button to see the shapes.</p>
            <button onClick={props.displayCube}>cube</button>
            <button onClick={props.displaySphere}>sphere</button>
            <button onClick={props.displayCylinder}>cylinder</button>
        </div>
    )
}
export default Header;
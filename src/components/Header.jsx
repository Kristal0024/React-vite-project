import '../styles/components/_Header.scss'; 
function Header({heading,subheading}){
    return (
        <>
        <div className="headerwrapper">
            <h2>{heading}</h2>
            <h3>{subheading}</h3>
        </div>
        </>
    )
}

export default Header;
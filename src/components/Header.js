const Header = () => {
    return (
        <div>
            <h1 className="text-center py-3" style={headerStyle}>BOITE A IDEE</h1>
        </div>
    );
}

const headerStyle = {
    backgroundColor:"#ce0033",
    color:"#fff",
    padding:"12px",
    fontWeight:"700"
}
export default Header;
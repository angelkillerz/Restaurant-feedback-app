import PropTypes from 'prop-types'
function Header( 
    { text = 'Restaurant Feedback', 
    bgColor = 'rgba(0, 0, 0, 0.4)', 
    textColor = '#ff6a95',

    } ) {
    
    const headerStyle = {
        backgroundColor: bgColor, 
        color: textColor,
    }
    return (
        
        <header style={headerStyle}>
            <div className="container">
                <h2>{text}</h2>
            </div>
        </header>

    )
}



Header.propTypes = {

    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string
};

export default Header;
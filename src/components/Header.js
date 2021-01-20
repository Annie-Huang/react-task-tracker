import PropTypes from 'prop-types';

const Header = ({ title }) => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};

Header.defaultProps = {
  title: 'Task Tracker',
};
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// CSS in JS. You generally only use inline style for dynamic variables
// <h1 style={{color: 'red', backgroundColor: 'black'}}>{title}</h1>
/*<h1 style={headingStyle}>{title}</h1>
const headingStyle = { color: 'red', backgroundColor: 'black' };*/

export default Header;

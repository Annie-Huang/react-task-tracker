import { Link } from 'react-router-dom';

// Use <Link> rather <a> to stop full page reload.
const About = () => {
  return (
    <div>
      <h4>Version 1.0.0</h4>
      {/*<a href='/'>Go Back</a>*/}
      <Link to='/'>Go Back</Link>
    </div>
  );
};

export default About;

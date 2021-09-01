import { Link } from 'react-router-dom';

import classes from './SideNav.module.css';

function SideNav(props) {
  return (
    <div className={classes.wrapper}>
      <nav className={classes.nav}>
        <ul className={classes.navlist}>
          <li onClick={props.onClick}>
            <Link to='/'>Home</Link>
          </li>
          <li onClick={props.onClick}>
            <Link to='/articles'>Articles</Link>
          </li>
          <li onClick={props.onClick}>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SideNav;

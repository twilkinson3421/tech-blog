import { AiOutlineMenu } from 'react-icons/ai';

import classes from './MainNavigation.module.css';

function MainNavigation(props) {
  return (
    <header className={classes.header}>
      <h1>TITLE</h1>
      <button className={classes.menubtn} onClick={props.onClick}>
        <AiOutlineMenu />
      </button>
    </header>
  );
}

export default MainNavigation;

import { Switch, Route } from 'react-router-dom';
import { useState } from 'react';

import Home from './pages/Home';
import Articles from './pages/Articles';
import Contact from './pages/Contact';

import MainNavigation from './components/MainNavigation';
import SideNav from './components/SideNav';

function App() {
  const [sideNavIsOpen, setSideNavOpen] = useState(false);

  function openSideNavHandler() {
    setSideNavOpen(true);
  }

  function closeSideNavHandler() {
    setSideNavOpen(false);
  }

  return (
    <div className='App'>
      {!sideNavIsOpen && <MainNavigation onClick={openSideNavHandler} />}
      {sideNavIsOpen && <MainNavigation onClick={closeSideNavHandler} />}
      {sideNavIsOpen && <SideNav onClick={closeSideNavHandler} />}
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/articles' component={Articles} />
        <Route path='/contact' component={Contact} />
      </Switch>
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TabMenuList from './TabMenuList';
import TabContent from './TabContent';
import GithubBanner from './GithubBanner';

const App = () => {
  const routes = [
    {
      path: '%PUBLIC_URL%/',
      exact: true,
      component: TabContent,
    },
    {
      path: '%PUBLIC_URL%/progress',
      component: TabContent,
    },
    {
      path: '%PUBLIC_URL%/completed',
      component: TabContent,
    },
  ];

  return (
    <Router>
      <div className="container">
        <GithubBanner />
        <TabMenuList />
        {routes.map((route, index) => (
          <Route key={index} path={route.path} exact={route.exact} component={route.component} />
        ))}
      </div>
    </Router>
  );
};

export default App;

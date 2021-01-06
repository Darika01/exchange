//@flow
import React, { useState } from 'react';
// import API from 'api';
import { BrowserRouter as Router, Route, Switch, Redirect, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import commonTheme from 'utils/themeConfig/themes/commonTheme';
import lightTheme from 'utils/themeConfig/themes/lightTheme';
import GlobalStyle from 'utils/themeConfig/globalStyle';
import Dashboard from 'components/pages/Dashboard/Dashboard';
import NotFound from 'components/pages/NotFound/NotFound';
import VerticalNavbar from 'components/core/VerticalNavbar/VerticalNavbar';

function App() {
    const { pathname } = useLocation();
    return (
        <div style={{ marginTop: '8.4rem' }}>
            <Switch>
                <Redirect from="/:url*(/+)" to={pathname.slice(0, -1)} />
                <Route exact path="/" component={Dashboard} />
                <Route exact path="*" component={NotFound} />
            </Switch>
        </div>
    );
}

export default function AppContainer() {
    const [IsScrollBlock, setIsScrollBlock] = useState(false);
    return (
        <ThemeProvider theme={{ ...commonTheme, ...lightTheme }}>
            <GlobalStyle isScrollBlock={IsScrollBlock} />
            <Router>
                <VerticalNavbar setIsMobileMenuOpen={setIsScrollBlock} />
                <App />
            </Router>
        </ThemeProvider>
    );
}

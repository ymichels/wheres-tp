import React from 'react';
import './App.css';
import LevelSelectPage from './Pages/LevelSelectPage';
import WelcomePage from './Pages/WelcomePage/WelcomePage.jsx';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
function App() {
    return (
        <Router>
            <Switch>
                <Route 
                    exact path="/" 
                    component={WelcomePage}
                />
                <Route 
                    path="/level-select" 
                    component={LevelSelectPage}
                />
            </Switch>
        </Router>
    );
}

export default App;

import React from 'react';
import{ useState, useEffect } from 'react'
import { Route } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import { team } from './team';

function App() {
  const [teamList, setTeamList] = useState([team])
    useEffect(() => {
      setTeamList(team);
    }, [])

  return (
    <div className="Home">
      <h1>Hello World!</h1>
      <Route exact path='/' render={props => <TeamList {...props} teamList={teamList} /> } />
      <Route path='/team' render={props => <team {...props} teamList={teamList} /> } />
    </div>
  );
}

export default App;

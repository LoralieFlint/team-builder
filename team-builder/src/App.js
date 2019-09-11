import React from 'react';
import{ useState, useEffect } from 'react'
import { Route } from 'react-router-dom';
import { team } from './team';
import TeamComponent from './teamComponent';
import './App.css';

function App() {
  const [teamList, setTeamList] = useState([team])
    useEffect(() => {
      setTeamList(team);
    }, [])

  return (
    <div className="Home">
      <h1>Hello World!</h1>
      <Route exact path='/' render={props => <TeamComponent {...props} teamList={teamList} /> } />
      <Route path='/team' render={props => <team {...props} teamList={teamList} /> } />
    </div>
  );
}

export default App;

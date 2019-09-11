import React from 'react';
import{ useState, useEffect } from 'react'
import { Route } from 'react-router-dom';
import { team } from './team';
import Form from './Form';
import Navigation from './navBar';
import TeamComponent from './teamComponent';
import './App.css';

function App() {
  const [teamList, setTeamList] = useState([team])
    useEffect(() => {
      setTeamList(team);
    }, [])

  return (
    <div>
      <Navigation />
      <Route exact path='/' render={props => <TeamComponent {...props} teamList={teamList} /> } />
      <Route path='/Form' render={props => <Form {...props} teamList={teamList} /> } />
    </div>
  );
}

export default App;

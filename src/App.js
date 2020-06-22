import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';

const HatsPage = (props) => {
  console.log(props);
  return (
  <div>
    <h1>HATS</h1>
  </div>
  )
}

const TopicDetail = (props) => {
  console.log(props);
  return (
  <div>
    <h1>Topic detail {props.match.params.topicId}</h1>
  </div>
  )
}

function App() {
  return (
    <div>
<Switch>
      <Route exact path="/" component={HomePage}/>
      <Route exact  path="/hats" component={HatsPage}/>
      <Route exact  path="/topics/:topicId" component={TopicDetail} />
</Switch>
    </div>
  );
}

export default App;

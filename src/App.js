import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';

import HomePage from './page/homepage/homepage.component';

import './App.css';

const HatsPage = (props) => (
  <div>
    {
      // <button onClick={() => props.history.push('/topics')}>topics</button>
    }
    <Link to="/topics">Topics</Link><br/>
    <Link to="/">Back Store</Link>
    <h1>HATS PAGE</h1>  
  </div>
);

const TopicsList = (props) => (
  <div>
    {console.log(props)}
    <h1>Topics List Page</h1>
    <Link to={`${props.match.url}/13`}>Topics 13</Link><br/>
    <Link to={`${props.match.url}/15`}>Topics 15</Link><br/>
    <Link to={`${props.match.url}/17`}>Topics 17</Link><br/>
  </div>
)

const TopicsDetail = (props) => (
  <div>
    {console.log(props)}
    <h1>Topics Detail Page: {props.match.params.topicsId } </h1>
    <Link to="/topics">Back to Topics List</Link> 

  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path='/hats' component={HatsPage} />
        <Route exact path='/topics' component={TopicsList} />
        <Route path='/topics/:topicsId' component={TopicsDetail} />
        </Switch>
    </div>
  );
}

export default App;

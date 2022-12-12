import React from 'react';
// import LifeCycle from './components/LifeCycle';
import ComponentClass from './components/ClassComponent';

export default class App extends React.Component {
  render() {
    return (
      <div className='app'>
        {/* <LifeCycle prop="ELENA"/> */}
        <ComponentClass min={1} max={10}/>
      </div>
    );
  }
}

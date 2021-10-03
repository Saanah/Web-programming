import './App.css';
import React from 'react';
import Header from './components/Header';
import SearchComputerItems from './components/SearchComputerItems';
import data from './data.json';

class App extends React.Component {
constructor(props)
{
  super(props)
  this.state =  { items: data.items  
}
}

render()
{
return (
  <div className="App">
  <Header/>
  <SearchComputerItems items={this.state.items}/>
  </div>
);
}
}

export default App;

import './App.css';
import React from 'react';
import Header from './components/Header';
import SearchComputerItems from './components/SearchComputerItems';
import data from './data.json';

class App extends React.Component {
constructor(props)
{
  super(props)
  this.state =  { items: data.items,  //Saves data from the json file in an array
    itemSearchString: ""              //String that is modified according to the given value on the search bar
}

}

onSearchChange = (event) => {                              //handles the event when something is typed on the search bar
this.setState({itemSearchString: event.target.value})     //puts the given value into the string
}

render()
{
return (
  <div className="App">
  <Header onSearchChange = {this.onSearchChange} itemSearchString = {this.state.itemSearchString}/>
  <SearchComputerItems items={this.state.items.filter(           //filters items based on the string value and sends them as props
    (item) => item.name.includes(this.state.itemSearchString))}/>  
  </div>
);
}
}

export default App;

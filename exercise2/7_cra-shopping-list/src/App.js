import React from "react";
import Title from './components/Title';
import ShoppingList from './components/ShoppingList';
import styles from './App.module.css';
import './App.css';

/* A ES6 class style stateful component for the shopping list application */
class App extends React.Component {
  constructor(props)
  {
    /* You should call super(props) before any other statement. 
       Otherwise, this.props will be undefined in the constructor, which can lead to bugs.
    */
    super(props);

    this.state = {
      items: [
        { id: 1, value: 'Milk', qty: 5, unit: 'ltr' },
        { id: 2, value: 'Bananas', qty: 6, unit: 'pcs' },
        { id: 3, value: 'Bread', qty: 3, unit: 'x' },
        { id: 4, value: 'Eggs', qty: 16, unit: 'x' }
      ]
    };

   //this.addYoghurt = this.addYoghurt.bind(this);
  }

  getRandomNumber(){                                            //Generates a random number

    let randomNumber = Math.floor(Math.random() * (11-1) + 1)
    return randomNumber;
  }

  //Modifies the state by creating a new array and setting it to the state

  addYoghurt = () => {

  this.setState({items: [...this.state.items, {id: 5, value: 'Yoghurt', qty: this.getRandomNumber(), unit: 'ltr'}]}) //... = spread operator, copies array's existing elements
  }

  addCarrots = () => {

    this.setState({items: [...this.state.items, {id: 6, value: 'Carrots', qty: this.getRandomNumber(), unit: 'pcs'}]})
  }

  addCucumbers = () => {

    this.setState({items: [...this.state.items, {id: 7, value: 'Cucumbers', qty: this.getRandomNumber(), unit: 'pcs'}]})
  }

  addFlour = () => {

    this.setState({items: [...this.state.items, {id: 8, value: 'Flour', qty: this.getRandomNumber(), unit: 'pck'}]})

  }


  //Difficulty level 2

  addGroceries = (grocery, groceryUnit) =>
  {

    return () => {

      const findGroceryIndex = this.state.items.findIndex((element) => { //finds the index using test function

        if(element.value === grocery) { //if element (inside items-array) value matches grocery return true
          return true;
        }
        else
        {
          return false;
        }

      });

      if(findGroceryIndex != -1) {
       let addExistingItems = [...this.state.items];   //Makes a copy of the array (STATE MUST BE IMMUTABLE)
       addExistingItems[findGroceryIndex].qty += this.getRandomNumber(); //object of the found index, changes quantity
       this.setState({items: addExistingItems});
      }
      else {                                           //if no value matches the given parameter, add new grocery to the list

        this.setState( {items: [...this.state.items,
                       {id: this.state.items.length + 1, value: grocery, qty: this.getRandomNumber(), unit: groceryUnit}]});
      }
    }
  }
      
  render()
  {
    const { applicationDescription, applicationName } = this.props;
    return <div className={ styles.shoppingList }>
      <Title 
        applicationDescription={ applicationDescription }
        applicationName={ applicationName }
      />
      <ShoppingList items={ this.state.items } />
      <div className = {styles.Buttons}>
      <button onClick={this.addGroceries('Yoghurt', 'ltr')}>Yoghurt</button>
      <button onClick={this.addGroceries('Carrots', 'pcs')}>Carrots</button>
      <button onClick={this.addGroceries('Cucumbers', 'pcs')}>Cucumbers</button>
      <button onClick={this.addGroceries('Flour', 'pck')}>Flour</button>
      </div>
    </div>
  }
}

export default App

import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildContols';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';


const INGREDIENT_PRICES = {
  salad: 0.1,
  cheese: 0.2,
  beef: 1,
  bacon: 0.4
};

class BurgerBuilder extends Component {

  state = {
    ingredients: null,
    totalPrice: 4,
    purchasable: true,
    purchasing: false,
    loading: false,
    error: false
  };

  componentDidMount () {
    axios.get('ingredients.json')
      .then(response => {
        // response data: { ingredientKey: { count: n, pos: n } }
        let ingArray = Object.entries(response.data)
          .sort((a, b) => a[1].pos - b[1].pos);

        let ingredients = {};
        for (let i in ingArray) {
          ingredients[ingArray[i][0]] = ingArray[i][1].count;
        }
        
        this.setState({ingredients: ingredients});
      })
      .catch(err => { 
        this.setState({ error: true });
      });
  }

  purchaseHandler = () => {
    this.setState({purchasing: true});
  }

  purchaseCancelHandler = () => {
    this.setState({purchasing: false});
  }

  purchaseContinueHandler = () => {
    const queryParams = [];
    for (let i in this.state.ingredients) {
      queryParams.push(encodeURIComponent(i) 
        + '=' + encodeURIComponent(this.state.ingredients[i]));
    }
    queryParams.push('price=' + this.state.totalPrice);
    const queryString = queryParams.join('&');
    this.props.history.push({
      pathname: '/checkout',
      search: queryString
    });
  }

  updatePurchaseState = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({purchasable: sum > 0});
  }

  addIngredientHandler = (type) => {
    const newCount = this.state.ingredients[type] + 1;
    const newIngredients = { ...this.state.ingredients };
    newIngredients[type] = newCount; 
    const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
    this.setState({
      totalPrice: newPrice,
      ingredients: newIngredients
    });
    this.updatePurchaseState(newIngredients);
  };

  removeIngredientHandler = (type) => {
    if (this.state.ingredients[type] < 1) return;
    const newCount = this.state.ingredients[type] - 1;
    const newIngredients = { ...this.state.ingredients };
    newIngredients[type] = newCount; 
    const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
    this.setState({
      totalPrice: newPrice,
      ingredients: newIngredients
    });
    this.updatePurchaseState(newIngredients);
  };


  render () {
    const disabledInfo = { ...this.state.ingredients };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] < 1;
    }

    let orderSummary = null;
    let burger = this.state.error 
      ? <p>Ingredients can't be loaded</p>
      : <Spinner />;
    
    if (this.state.ingredients) {
      burger = <>
        <Burger ingredients={this.state.ingredients} />
          <BuildControls 
            ingredientAdded={this.addIngredientHandler}
            ingredientRemoved={this.removeIngredientHandler}
            disabled={disabledInfo}
            price={this.state.totalPrice}
            purchasable={this.state.purchasable}
            ordered={this.purchaseHandler} />
      </>
      orderSummary = (
        <OrderSummary 
        ingredients={this.state.ingredients}
        purchaseCanceled={this.purchaseCancelHandler}
        purchaseContinued={this.purchaseContinueHandler}
        price={this.state.totalPrice} />
        );
      }

      if (this.state.loading) {
        orderSummary = <Spinner />
      }

    return (
      <>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
          {orderSummary}
        </Modal>
        {burger}
      </>
    );
  }

}

export default withErrorHandler(BurgerBuilder, axios);

import React, { Component } from 'react';
import axios from '../../../axios-orders';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

import styles from './ContactData.module.css';

class ContactData extends Component {

  state = {
    orderForm: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Name'
        },
        value: ''
      },
      street: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Street'
        },
        value: ''
      },
      city:  {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'City'
        },
        value: ''
      },
      postcode:  {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Postcode'
        },
        value: ''
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Your E-mail'
        },
        value: ''
      },
      deliveryMethod:  {
        elementType: 'select',
        elementConfig: {
          options: [
            { value: 'fastest', displayName: 'Fastest' },
            { value: 'cheapest', displayName: 'Cheapest' }
          ]
        },
        value: ''
      }
    },
    loading: false
  };

  orderHandler = (event) => {
    event.preventDefault();
    
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price
      
    };
    axios.post('/orders.json', order)
      .then(response => {
        this.setState({ loading: false });
        this.props.history.push('/');
      })
      .catch(error => {
        this.setState({ loading: false });
      });
  }

  inputChangedHandler = (event, inputIdentifier) => {
    const updatedOrderForm = {
      ...this.state.orderForm
    };
    const updatedFormElement = {
      ...updatedOrderForm[inputIdentifier]
    }
    updatedFormElement.value = event.target.value;
    updatedOrderForm[inputIdentifier] = updatedFormElement;
    this.setState({ orderForm: updatedOrderForm });
  }

  render () {
    const formElementsArray = [];
    for (let key in this.state.orderForm) {
      formElementsArray.push({
        id: key,
        config: this.state.orderForm[key]
      });
    }

    let form = (
      <form>
          {formElementsArray.map(formElement => (
            <Input 
              key={formElement.id}
              elementType={formElement.config.elementType}
              elementConfig={formElement.config.elementConfig}
              value={formElement.config.value}
              onChange={(event) => this.inputChangedHandler(event, formElement.id)} />
          ))}
          <Button btnType="Success" onClick={this.orderHandler}>ORDER</Button>
        </form>
    );
    if (this.state.loading) {
      form = <Spinner />
    }

    return (
      <div className={styles.ContactData}>
        <h4>Enter your contact data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;

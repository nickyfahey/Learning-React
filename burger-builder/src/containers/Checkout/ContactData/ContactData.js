import React, { Component } from 'react';
import axios from '../../../axios-orders';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

import styles from './ContactData.module.css';

class ContactData extends Component {

  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postcode: ''
    },
    loading: false
  };

  orderHandler = (event) => {
    event.preventDefault();
    
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'Nicky Fahey',
        address: {
          street: '42 Test Street',
          city: 'Testville',
          postcode: 'POST'
        },
        email: 'test@test.com'
      },
      deliveryMethod: 'fastest'
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

  render () {
    let form = (
      <form action="">
          <Input inputtype="input" 
            type="text" name="name" placeholder="Your name" />
          <Input inputtype="input" 
            type="email" name="email" placeholder="Your email" />
          <Input inputtype="input" 
            type="text" name="street" placeholder="Street" />
          <Input inputtype="input" 
            type="text" name="postcode" placeholder="Postcode" />
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

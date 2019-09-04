import React from 'react';
import { Route } from 'react-router-dom';
import Layout from './containers/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';

function App() {
  return (
    <div>
      <Layout>
        {/* Only the top level Route component gets access to
            the routing props; child components will have to be
            passed needed props, or use the hoc withRouter */}
        <Route path="/" exact component={BurgerBuilder} />
        <Route path="/checkout" component={Checkout} />
      </Layout>
    </div>
  );
}

export default App;

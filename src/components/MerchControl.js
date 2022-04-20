import React from 'react';
import MerchItem from './MerchItem';

class MerchControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        name: 't-shirt',
        description: 'Kill Em All',
        quantity: 20
    }
  }

  render() {
    return (
      <React.Fragment>
        <h2>Let's Rock</h2>
        <MerchItem exampleMerch={this.state} />
      </React.Fragment>
    );
  }
}



export default MerchControl;
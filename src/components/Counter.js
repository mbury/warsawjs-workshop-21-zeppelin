import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 5 };
    this.plus = this.plus.bind(this);
    this.minus = this.minus.bind(this);
  }

  plus() {
    this.setState(prevState => ({
      // TODO
    }));
  }
  minus() {
    this.setState(prevState => ({
      counter:
       // TODO
    }));
  }

  render() {
    return (
      <div>
       // TODO
      </div>
    );
  }
}

export default Counter;

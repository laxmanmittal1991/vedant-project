import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Features.styles';

class Features extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('Features will mount');
  }

  componentDidMount = () => {
    console.log('Features mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('Features will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('Features will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('Features did update');
  }

  componentWillUnmount = () => {
    console.log('Features will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="FeaturesWrapper">
        Test content
      </div>
    );
  }
}

Features.propTypes = {
  // bla: PropTypes.string,
};

Features.defaultProps = {
  // bla: 'test',
};

export default Features;

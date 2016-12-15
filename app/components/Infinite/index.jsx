import React, { Component, PropTypes } from 'react';
import optimizedScroll from 'utils/optimizedScroll';

optimizedScroll();
let SCROLLLAZY = false; // eslint-disable-line

class Infinite extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.sign = 10;
  }
  componentWillMount() {
    window.addEventListener('optimizedScroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.addEventListener('optimizedScroll', this.handleScroll);
  }
  handleScroll = () => {
    // const scrolloffset = 100;
    const scrtop = document.body.scrollTop;
    let isToDown = false;

    if (scrtop >= this.sign) {
      this.sign = scrtop;
      isToDown = true;
    }

    const pageHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight);
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0;
    const scrollHeight = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (pageHeight - viewportHeight - scrollHeight < 10 && isToDown) {
      SCROLLLAZY = true;
      setTimeout(() => {
        SCROLLLAZY = false;
      }, 1000);
      this.props.onRefresh();
    }
  };
  render() {
    return <div>{React.Children.toArray(this.props.children)}</div>;
  }
}

Infinite.propTypes = {
  onRefresh: PropTypes.func,
  children: PropTypes.node,
};
export default Infinite;

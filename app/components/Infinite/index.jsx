import React, { Component, PropTypes } from 'react';

let nScrollHight = 0; // 滚动距离总长(注意不是滚动条的长度)
let nScrollTop = 0;   // 滚动到的当前位置

class Infinite extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.sign = 10;
  }

  handleScroll = (e) => {
    nScrollHight = e.target.scrollHeight;
    nScrollTop = e.target.scrollTop;
    const nDivHight = e.target.getBoundingClientRect().height;
    if (nScrollTop + nDivHight >= nScrollHight) {
      this.props.onRefresh();
    }
  };
  render() {
    return <div onScroll={this.handleScroll}>{React.Children.toArray(this.props.children)}</div>;
  }
}

Infinite.propTypes = {
  onRefresh: PropTypes.func,
  children: PropTypes.node,
};
export default Infinite;

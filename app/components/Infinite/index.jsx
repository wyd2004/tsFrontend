import React, { Component, PropTypes } from 'react';
import createOptimizedScroll from 'utils/optimizedScroll';

let nScrollHight = 0; // 滚动距离总长(注意不是滚动条的长度)
let nScrollTop = 0;   // 滚动到的当前位置

class Infinite extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.sign = 10;
  }
  componentDidMount() {
    const { scrollOnContainer } = this.props;
    const container = scrollOnContainer ? this.container : window;
    this.scrollContainer = createOptimizedScroll(container);
    container.addEventListener('optimizedScroll', this.handleScroll);
  }
  componentWillUnmount() {
    const { scrollOnContainer } = this.props;
    const container = scrollOnContainer ? this.container : window;
    this.scrollContainer();
    container.removeEventListener('optimizedScroll', this.handleScroll);
  }
  handleScroll = (e) => {
    const target = e.target === window ? document.body : e.target;
    nScrollHight = target.scrollHeight;
    nScrollTop = target.scrollTop;
    const nDivHight = target.getBoundingClientRect().height;
    if (nScrollHight - (nScrollTop + nDivHight) < 1) {
      this.props.onRefresh();
    }
  };

  render() {
    return <div ref={(container) => { this.container = container; }}>{React.Children.toArray(this.props.children)}</div>;
  }
}

Infinite.propTypes = {
  onRefresh: PropTypes.func,
  children: PropTypes.node,
  scrollOnContainer: PropTypes.bool,
};
export default Infinite;

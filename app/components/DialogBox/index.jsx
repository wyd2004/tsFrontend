import React from 'react';
import ListItem from 'components/ListItem';
import styled from 'styled-components';

const Wraper = styled.div`

`;
const Overlayer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;
const AlertBox = style.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: 'translate3d(-50%, -50%)';
`;
export default class DialogBox extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    massage: React.PropTypes.array,
  };
  render() {
    const { data } = this.props;
    return (
      <Overlayer>
        {
          data.map((props) => <ListItem {...props} key={props.id} />)
        }
      </Overlayer>
    );
  }
}

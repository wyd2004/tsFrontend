import React from 'react';
import ListItem from 'components/ListItem';
import styled from 'styled-components';

const Wraper = styled.div`

`;
export default class List extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    data: React.PropTypes.array,
  };
  render() {
    const { data } = this.props;
    return (
      <Wraper>
        {
          data.map((props) => <ListItem {...props} key={props.id} />)
        }
      </Wraper>
    );
  }
}

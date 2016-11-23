/* global COLOR_3 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import selectIndexPage from './selectors';
import List from 'components/List';
import UserButton from 'components/UserButton';

import { showDialog, DIALOG_TYPE } from 'containers/App/actions';

import styled from 'styled-components';

import Button from './button';

const Actions = styled.div`
  overflow: hidden;
`;
const PodcastButton = styled(Button)`
  height: 110px;
  line-height: 80px;
  background-size: 55px;
  text-indent: 40px;
`;
const LinkWrapper = styled(Link)`
  color: ${COLOR_3};
`;
export class IndexPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="糖蒜广播-微信"
          meta={[
            { name: 'description', content: '糖蒜广播-微信' },
          ]}
        />
        <Actions>
          <PodcastButton icon="podcast">节目</PodcastButton>
          <LinkWrapper to="/search">
            <Button icon="search">搜索</Button>
          </LinkWrapper>
          <Button icon="ablum">专辑</Button>
        </Actions>
        <UserButton />
        {/* <List /> */}
      </div>
    );
  }
}

const mapStateToProps = selectIndexPage();

function mapDispatchToProps(dispatch) {
  return {
    onShowDialog: () => dispatch(showDialog(DIALOG_TYPE.loadding, 'heellosadjkasjd')),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);

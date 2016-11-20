/*
 *
 * IndexPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import selectIndexPage from './selectors';
import List from 'components/List';

import { showDialog, DIALOG_TYPE } from 'containers/App/actions';

import styled from 'styled-components';

import Button from './button';

const PodcastButton = styled(Button)`

`;

export class IndexPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    this.props.onShowDialog();
    console.log(this.props);

    return (
      <div>
        <Helmet
          title="糖蒜广播-微信"
          meta={[
            { name: 'description', content: '糖蒜广播-微信' },
          ]}
        />
        <PodcastButton icon="podcast">节目</PodcastButton>
        <Button icon="search">搜索</Button>
        <Button icon="ablum">专辑</Button>
        <List />
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

/*
 *
 * Demo
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import selectDemo from './selectors';

export class Demo extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="Demo"
          meta={[
            { name: 'description', content: 'Description of Demo' },
          ]}
        />
      </div>
    );
  }
}

const mapStateToProps = selectDemo();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Demo);

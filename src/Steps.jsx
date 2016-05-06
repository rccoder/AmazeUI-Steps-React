'use strict';

import React from 'react';
import RcSteps from 'rc-steps';

import './Steps.less';
import './StepIcon.less';

class Steps extends React.Component {
  static Step = RcSteps.Step;

  static defaultProps = {
    prefixCls: 'am-steps',
    iconPrefix: 'am-',
    maxDescriptionWidth: 100,
    current: 0,
  }

  render() {
    return(
      <RcSteps {...this.props}></RcSteps>
    );
  }
};

export default Steps;

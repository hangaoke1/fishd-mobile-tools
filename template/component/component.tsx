import classnames from 'classnames';
import * as React from 'react';
import './style/index.less';

class $name extends React.Component<any, any> {

  static defaultProps = {
    prefixCls: ''
  };

  render() {
    const {
      children,
      className,
      prefixCls,
      ...restProps
    } = this.props;

    const wrapCls = classnames(prefixCls, className, {});

    return (
      <div className={wrapCls}>my component</div>
    );
  }
}

export default $name;

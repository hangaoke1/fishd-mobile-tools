import classnames from 'classnames';
import * as React from 'react';

export interface {{name}}Props {
  prefixCls?: string;
  className?: string;
}

class {{name}} extends React.Component<{{name}}Props, any> {
  static defaultProps = {
    prefixCls: ''
  };

  render() {
    const { className, prefixCls } = this.props;

    const wrapCls = classnames(prefixCls, className, {});

    return <div className={wrapCls}>my component</div>;
  }
}

export default {{name}};

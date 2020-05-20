import * as React from 'react';
import classnames from 'classnames';

export interface {{name}}Props  {}

const {{name}}: React.FC<{{name}Props}> = (props) => {
  const { className, prefixCls } = this.props;
  const wrapCls = classnames(prefixCls, className, {});
  return (
    <div className={wrapCls}>my component</div>
  )
}

export default {{name}}

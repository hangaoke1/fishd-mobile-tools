import classnames from 'classnames';
import React from 'react';

export interface {{name}}Props {
  className?: string;
  style?: React.CSSProperties;
}

const classPrefix = `fm-{{kebabCaseName}}`;

const {{name}}: React.FC<{{name}}Props> = ({ className }) => {
  const {{name}}ClassName = classnames(classPrefix, {}, className);
  return <div className={ {{~name}}ClassName}></div>;
};

export default {{name}};

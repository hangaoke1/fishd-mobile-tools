import React from 'react';
import classNames from 'classnames';

export interface {{name}}Props {
  className?: string;
  style?: React.CSSProperties;
}

const classPrefix = `fm-{{kebabCaseName}}`;

const {{name}}: React.FC<{{name}}Props> = ({ className }) => {
  const {{name}}ClassName = classNames(classPrefix, {}, className);
  return <div className={ {{~name}}ClassName}></div>;
};

export default {{name}};

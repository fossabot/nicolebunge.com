import classNames from 'classnames';
import React, { HTMLAttributes } from 'react';
import Icons from '../Icons/Icons';
import * as styles from './Social.module.css';

export type SocialProps = HTMLAttributes<HTMLDivElement>;

const Social: React.FC<SocialProps> = (props) => {
  const { className, ...otherProps } = props;

  return (
    <div className={classNames(className, styles.social)} {...otherProps}>
      <Icons />
    </div>
  );
};

export default Social;

import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import styles from './style.module.css';

class Row extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
  };

  static defaultProps = {
    children: null,
  };

  render() {
    const { children } = this.props;

    return (
      <div className={styles.row}>
        {children}
      </div>
    );
  }
}

export default Row;

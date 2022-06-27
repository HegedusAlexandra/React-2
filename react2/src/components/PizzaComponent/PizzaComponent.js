import React from 'react';
import PropTypes from 'prop-types';
import styles from './PizzaComponent.module.css';

const PizzaComponent = ({pName,pPrice}) => {
  
  return (
  <div className={styles.PizzaComponent}>
    name : {pName}
    price : {pPrice}
  </div>
)};

PizzaComponent.propTypes = {};

PizzaComponent.defaultProps = {};

export default PizzaComponent;

import React from 'react';
import PropTypes from 'prop-types';
import styles from './PizzaComponent.module.css';

const PizzaComponent = (props) => {
  const pName = props.name;
  const pPrice = props.price
  
  return (
  <div className={styles.PizzaComponent}>
    name : {pName}
    price : {pPrice}
  </div>
)};

PizzaComponent.propTypes = {};

PizzaComponent.defaultProps = {};

export default PizzaComponent;

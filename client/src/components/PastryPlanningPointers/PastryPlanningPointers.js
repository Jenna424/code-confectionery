import React from 'react';
import styles from './PastryPlanningPointers.module.css';

const PastryPlanningPointers = () => (
  <div className={styles.pointers}>
    <h3>Pointers for Planning Your Pastry</h3>
    <h4>When designing the layout of your cake, please remember that:</h4>
    <p><em>~ Your pastry must contain at least one layer of cake batter ~</em></p>
    <p><em>~ Multilayered cakes must contain alternating layers of batter and filling ~</em></p>
    <p><em>~ The topmost and bottommost layers must consist of batter ~</em></p>
  </div>
)

export default PastryPlanningPointers;
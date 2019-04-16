import React from 'react';
import styles from './PastryPlanningPointers.module.css';

const PastryPlanningPointers = () => (
  <div className={styles.pointers}>
    <h3>Pointers for Planning Your Pastry</h3>
    <p><em>When designing the graphical representation of your cake, please keep the following requirements in mind:</em></p>
    <p>~ At the bare minimum, your pastry must contain at least one layer of cake batter.</p>
    <p>~ The topmost and bottommost layers of your pastry must consist of cake batter.</p>
    <p>~ If you are creating a multi-layered cake, you must alternate layers of batter and filling to create a stable cake structure.</p>
  </div>
)

export default PastryPlanningPointers;
import React from 'react';
import styles from './PastryPictures.module.css';
import PastryPicture from '../PastryPicture/PastryPicture';

const PastryPictures = ({ pictures }) => {
  return (
    <div className={styles.pastryPictures}>
      {pictures.map(picture =>
        <PastryPicture key={picture.id} picture={picture} />
      )}
    </div>
  )
}

export default PastryPictures;

import React from 'react';

const PastryPicture = ({ picture }) => (
  <div>
    <img src={picture.urls.full} alt={picture.alt_description} />
  </div>
)

export default PastryPicture;
import React from 'react';

const Cake = ({ cakeLayout }) => {
  const cakeLayers = cakeLayout.map(cakeObject => 
    <CakeLayer flavor={cakeObject.flavor} />
  )
}

export default Cake;
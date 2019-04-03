import React from 'react';

const Cake = ({ cakeLayout }) => {
  const cakeLayers = cakeLayout.map(cakeObject => 
  	<CakeLayer flavor={cakeObject.flavor} />
  )

  return (
    <div>
      <p>Graphical representation of the layer cake currently being created goes here</p>
    </div>
  )
}

export default Cake;
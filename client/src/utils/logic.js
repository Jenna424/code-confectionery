export const meetsValidationCriteria = (currentValue, criteria) => {
  let criteriaMet = true;

  if (criteria.cannotBeBlank) {
    criteriaMet = currentValue.trim().length && criteriaMet
  }

  if (criteria.numberIsRequired) {
    criteriaMet = /^\d+$/.test(currentValue) && criteriaMet
  }

  return criteriaMet;
}

export const dynamicallyDeleteKey = (object, keyToDelete) => {
  const {[keyToDelete]: deletedKey, ...remainingKeys} = object;
  return remainingKeys;
}

export const calculateCakePartProportions = pastryPartLayers => {
  const flavorsMap = {};
  pastryPartLayers.forEach(layerObject => {
    if (!Object.keys(flavorsMap).includes(layerObject.flavor)) {
      flavorsMap[layerObject.flavor] = 1
    } else {
      flavorsMap[layerObject.flavor] = flavorsMap[layerObject.flavor] + 1
    }
  })
  return flavorsMap;
}
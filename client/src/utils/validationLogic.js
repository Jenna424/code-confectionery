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
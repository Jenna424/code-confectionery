export const meetsValidationCriteria = (currentValue, criteria) => {
  let criteriaMet = true;

  if (criteria.cannotBeBlank) {
    criteriaMet = currentValue.trim().length && criteriaMet;
  }

  return criteriaMet;
}
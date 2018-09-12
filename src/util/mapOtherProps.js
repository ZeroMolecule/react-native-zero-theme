// @flow

/**
 * Returns "pure" props without any style and className properties that can be passed down to the
 * wrapped component
 * @param componentProps
 * @param mapRules
 * @returns {{}}
 */
export default function propsWithoutStylesAndClasses(componentProps, mapRules) {
  const {
    ...props
  } = componentProps;
  const clean = { ...props };
  Object.keys(mapRules)
    .forEach((key) => {
      const classProp = key;
      const styleProp = mapRules[key][0];
      delete clean[classProp];
      delete clean[styleProp];
    });
  return clean;
}

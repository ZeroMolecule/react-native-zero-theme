// @flow
import { StyleSheet } from 'react-native';
import toStyle from './toStyle';

/**
 * Extracts styles from given classes and maps them to appropriate component properties
 * @param componentProps
 * @param theme
 * @param mapRules
 */
export default function (componentProps, theme, mapRules) {
  const props = {};
  Object.keys(mapRules)
    .forEach((key) => {
      const arr = mapRules[key];
      const classProp = key;
      const styleProp = arr[0];
      let classes = '';
      if (arr.length > 1) {
        classes += arr[1];
      }
      const passedClassProp = componentProps[classProp];
      if (passedClassProp) {
        classes += ` ${passedClassProp}`;
      }
      const classStyle = toStyle(theme, classes);
      const passedStyle = componentProps[styleProp];
      props[styleProp] = StyleSheet.flatten([classStyle, passedStyle]);
    });
  return props;
}

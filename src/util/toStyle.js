// @flow
import { StyleSheet } from 'react-native';

/**
 * Converts classes in string to array of class names
 * @param classes
 * @returns {string[]}
 */
function classesToArray(classes: string) {
  return classes.trim()
    .split(/\s+/);
}

/**
 * Converts classNames for given theme to styles.
 * All classNames that start with `--` (because they're sub-classes) are ignored.
 * @param theme
 * @param classNames
 */
function classesToStyle(theme, classNames: string[]) {
  const styles = classNames
    .filter(aClass => !aClass.startsWith('--'))
    .map((aClass) => {
      const style = theme[aClass];
      if (style) {
        const pureStyle = {};
        Object.keys(style)
          .filter(key => !key.startsWith('--'))
          .forEach((key) => {
            pureStyle[key] = style[key];
          });
        return pureStyle;
      }
      return style;
    });
  return StyleSheet.flatten(styles);
}

/**
 * Converts classNames for given theme to styles. Including sub-classes
 * @param theme
 * @param classNames
 */
function classesAndSubClassesToStyle(theme, classNames: string[]) {
  const styles = [];
  classNames.forEach((aClass) => {
    if (aClass.includes('--')) {
      const [root, subClass] = aClass.split('--');
      styles.push(theme[root][`--${subClass}`]);
    } else {
      styles.push(classesToStyle(theme, [aClass]));
    }
  });
  return StyleSheet.flatten(styles);
}

/**
 * Converts given theme and classes in string to style object
 * @param theme
 * @param classes
 * @returns {*}
 */
export default function toStyle(theme, classes: string) {
  const classNames = classesToArray(classes);
  if (classes.includes('--')) {
    return classesAndSubClassesToStyle(theme, classNames);
  }
  return classesToStyle(theme, classNames);
}

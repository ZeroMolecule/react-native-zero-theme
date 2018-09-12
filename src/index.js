module.exports = {
  get Theme() {
    return require('./components/Theme').default;
  },
  get withTheme() {
    return require('./hoc/withTheme').default;
  },
  get toStyle() {
    return require('./util/toStyle');
  },
  get mapStyleProps() {
    return require('./util/mapStyleProps');
  },
  get mapOtherProps() {
    return require('./util/mapOtherProps');
  },
};

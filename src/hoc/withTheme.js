// @flow
import React, { PureComponent } from 'react';
import hoistStatics from 'hoist-non-react-statics';
import Theme from '../components/Theme';
import mapOtherProps from '../util/mapOtherProps';
import mapStyleProps from '../util/mapStyleProps';

type Props = {
  className: ?string,
  style: ?any,
  forwardedRef: ?any,
  styleName: ?string,
};

type MapRules = {
  +className: string[]
};

export default (mapRules: MapRules = { className: ['style', null] }) => (Component: any) => {
  class HOC extends PureComponent<Props> {
    static defaultProps = {
      className: null,
      style: null,
      forwardedRef: null,
    };

    get cleanProps() {
      return mapOtherProps(this.props, mapRules);
    }

    getStyleProps = theme => mapStyleProps(this.props, theme, mapRules);

    render() {
      const {
        // $FlowFixMe todo: Update when Flow type definition updates
        forwardedRef,
        ...props
      } = this.cleanProps;
      return (
        <Theme.Consumer>
          {theme => (
            <Component
              ref={forwardedRef}
              {...props}
              {...this.getStyleProps(theme)}
            />
          )}
        </Theme.Consumer>
      );
    }
  }

  const HOCWithStatistics = hoistStatics(HOC, Component);
  // $FlowFixMe todo: Update when Flow type definition updates
  return React.forwardRef((props, ref) => (
    <HOCWithStatistics {...props} forwardedRef={ref} />
  ));
};

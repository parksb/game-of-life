import {Component} from 'inferno';

import {CSS_CLASSES} from './constant';

export default class Button extends Component {
  render() {
    const {
      children,
      ...otherProps
    } = this.props;

    return <button className={CSS_CLASSES.ROOT} {...otherProps}>
      <span className={CSS_CLASSES.LABEL}>{children}</span>
    </button>;
  }
}

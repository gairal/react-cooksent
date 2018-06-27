import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Cooksent from 'cooksent';

export default class ReactCooksent extends Component {
  static propTypes = {
    selector: PropTypes.string,
    btnSelector: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    btnLabel: PropTypes.string,
    onConsent: PropTypes.func,
    storageKey: PropTypes.string,
    force: PropTypes.bool,
    emtpy: PropTypes.func,
    show: PropTypes.func,
    hide: PropTypes.func,
  }

  static defaultProps = {
    selector: Cooksent.defaultOpts.selector,
    btnSelector: Cooksent.defaultOpts.btnSelector,
    title: Cooksent.defaultOpts.title,
    description: Cooksent.defaultOpts.description,
    btnLabel: Cooksent.defaultOpts.btnLabel,
    onConsent: Cooksent.defaultOpts.onConsent,
    storageKey: Cooksent.defaultOpts.storageKey,
    force: false,
    emtpy: () => {},
    show: () => {},
    hide: () => {},
  }

  constructor(props) {
    super(props);

    const {
      selector,
      btnSelector,
      title,
      description,
      btnLabel,
      onConsent,
      storageKey,
      force,
      emtpy,
      show,
      hide,
    } = props;

    this.force = force;

    // Expose the cooksent methods to the parent
    emtpy(this.emtpy.bind(this));
    show(this.show.bind(this));
    hide(this.hide.bind(this));

    this.cs = new Cooksent({
      selector,
      btnSelector,
      title,
      description,
      btnLabel,
      onConsent,
      storageKey,
    });
  }

  componentDidMount() {
    this.init();
  }

  init() {
    this.cs.init(this.force);
  }

  emtpy() {
    this.cs.storage.empty();
  }

  show() {
    this.cs.show();
  }

  hide() {
    this.cs.hide();
  }

  render() {
    return <React.Fragment />;
  }
}

import React from 'react';
import { render } from 'react-dom';
import ReactCooksent from '@/ReactCooksent';
import Butt from './Butt';

export default class Examples {
  constructor() {
    const MOUNT_NODE = document.getElementById('root');
    render(
      <React.Fragment>
        <ReactCooksent
          emtpy={(e) => { this.empty1 = e; }}
          show={(e) => { this.show1 = e; }}
          force
        />
        <ReactCooksent
          title="custom title"
          description="custom description"
          btnLabel="Oki"
          storageKey="COOKSENT2"
          emtpy={(e) => { this.empty2 = e; }}
          show={(e) => { this.show2 = e; }}
          force
        />
      </React.Fragment>
      , MOUNT_NODE,
    );


    this.init();
  }

  init() {
    Butt.factory('simple', () => {
      this.empty1();
      this.show1();
    });
    Butt.factory('opts', () => {
      this.empty2();
      this.show2();
    });
  }

  static factory() {
    return new Examples();
  }
}

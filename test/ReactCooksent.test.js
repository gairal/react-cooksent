import React from 'react';
import renderer from 'react-test-renderer';
import ReactCooksent from '@/ReactCooksent';

describe('ReactCooksent', () => {
  let show;
  let empty;
  let hide;

  it('Renders correctly default', () => {
    const component = renderer.create(<ReactCooksent />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Renders correctly', () => {
    const component = renderer.create(<ReactCooksent
      title="custome title"
      description="custom description"
      btnLabel="Oki"
      storageKey="COOKSENT2"
      emtpy={(e) => { show = e; }}
      show={(e) => { empty = e; }}
      hide={(e) => { hide = e; }}
    />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Can call methods', () => {
    show();
    empty();
    hide();
  });
});

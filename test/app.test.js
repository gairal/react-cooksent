import React from 'react';
import renderer from 'react-test-renderer';
import App from '@/app';

describe('App', () => {
  it('Renders correctly default', () => {
    const component = renderer.create(<App />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

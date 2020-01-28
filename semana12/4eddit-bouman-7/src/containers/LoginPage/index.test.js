import React from 'react';
import renderer from 'react-test-renderer';


test('Snapshot', () => {
    const tree = renderer.create(<handleLoginButton />).toJSON();
    expect(tree).toMatchSnapshot();
})

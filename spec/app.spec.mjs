import React from 'react';
import pkg from 'enzyme';
import App from '../src/App.js';
const { shallow } = pkg;

describe('app.js', () => {
    describe('test', () => {
        it('runs', () => {
            const wrapper = shallow(<App />);
            expect(wrapper.find('Foo')).toBe('');
        });
    });
});

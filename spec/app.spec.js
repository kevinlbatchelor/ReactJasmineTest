import React from 'react';
import App from '../src/App.js';
import {render, fireEvent, screen} from '@testing-library/react'

describe('app.js', () => {
    describe('test', () => {
        it('runs', () => {
            render(<App/>)
        });
    });
});

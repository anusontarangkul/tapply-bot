import { render, screen } from '@testing-library/react';

import Header from '../Header';

describe('Header Component', () => {
    test('Header renders correct text', () => {
        render(<Header />);

        const headingEl = screen.getByRole('heading');

        expect(headingEl.textContent).toBe('Hello š, Iām Tapply Bot š¤');
    })
})
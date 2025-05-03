import {render, screen} from '@testing-library/react';

import Calendar from './Calendar';

test('Calendar test', () => {
  const now = new Date(2012, 2, 8);

    render(<Calendar date={
    now} />);
      expect(screen.getByText(/Пн/)).toBeInTheDocument();
});

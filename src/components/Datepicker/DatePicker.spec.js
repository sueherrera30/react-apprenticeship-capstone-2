import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import DatePicker from './DatePicker';

describe('Date picker component', () => {
    test('Show input in screen', () => {
        render(<DatePicker value="2020-05-12" />)
        const input = screen.getByPlaceholderText('select a date')
        fireEvent.change(input, {target: {value: '2020-05-12'}})
        expect(input.value).toBe('2020-05-12')
    })
    it.skip("should call handler when start date is updated", async () => {
        const handleStartDateChangeMock = jest.fn();
        render(<DatePicker handleDate={handleStartDateChangeMock} />);
        const input = screen.getByTestId("date-input");
        expect(handleStartDateChangeMock).toHaveBeenCalledTimes(0);
        expect(input.value).toBe('')
        fireEvent.change(input, { target: { value: '01/03/2000' } });
         await waitFor(() => {
          expect(handleStartDateChangeMock).toHaveBeenCalledTimes(1);
        });
    })
});







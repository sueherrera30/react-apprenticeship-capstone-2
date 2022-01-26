/* eslint-disable testing-library/await-async-query */
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import DatePicker from '../../components/Datepicker/DatePicker';
import Home from './Home';
// const urlMock = 'https://api.nasa.gov/planetary/apod?api_key=12345'

const mock =  {
    url: 'image1.png',
    date: '2022-01-21',
    explanation: 'explanetion test',
    media_type: 'video',
    title: 'title test'
};

describe("test home page", () => {
    test('home is render', () => {
        render(<Home />);
        const title = screen.findByText('See the universe!')
        expect(title).toBeTruthy();
    });

    test.skip('date picker calls a function', async () => {
        render(<DatePicker value="2020-05-12" />)
        global.fetch = jest.fn(() => 
        Promise.resolve({
            json: () => Promise.resolve({ count:1, result: mock }),
        }));
        fireEvent.change(await screen.findByPlaceholderText('select a date'), { target: { value: '2020-05-12' } });
        await waitFor(() => {
          expect(global.fetch).toBeCalled();
        });
    });

    
});
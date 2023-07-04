// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { act, fireEvent, render, screen } from '@testing-library/react';
import App from '@/App';
import { fetchBirthdays } from '@/api/wikipedia';
import { Mock } from '@vitest/spy';

vi.mock('@/api/wikipedia');

describe('App', () => {
    test('should render Title', () => {
        const {getByText} = render(<App/>);
        const linkedElement = getByText(/Data fetching/);
        expect(linkedElement).toBeVisible();
    });

    test('should load birthdays', async () => {
        const mockedFetchBirthdays = fetchBirthdays as Mock;
        mockedFetchBirthdays.mockResolvedValue([
            {year: 2000, text: 'Event item1'}
        ]);
        const {getByTestId, getByText} = render(<App/>);
        const fetchButton = getByTestId('fetch-button');
        act(() => { fireEvent.click(fetchButton); });
        expect(fetchBirthdays).toHaveBeenCalled();
        await screen.findByText('Event item1');
        expect(getByText('Event item1')).toBeDefined();
    });

    test('should load error', async () => {
        const err = 'Sorry it is Error';
        const mockedFetchBirthdays = fetchBirthdays as Mock;
        mockedFetchBirthdays.mockRejectedValue(err);
        let getByTestId;
        let getByText;

        act(() => {
            const app = render(<App/>);
            getByTestId = app?.getByTestId;
            getByText = app?.getByText;
        });
        const fetchButton = getByTestId('fetch-button');
        act(() => { fireEvent.click(fetchButton);} );

        expect(fetchBirthdays).toHaveBeenCalled();
        await screen.findByText('Error');
        expect(getByText('Sorry it is Error')).toBeDefined();
    });
});

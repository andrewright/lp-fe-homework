import { BirthsProps, fetchBirthdays } from '@/api/wikipedia';

describe('API: fetchBirthdays', () => {
    it('should fetch birthdays and return sorted array', async () => {
        const mockedBithdays: BirthsProps[] = [
            {year: 1990, text: 'Event item2'},
            {year: 2000, text: 'Event item3'},
            {year: 1985, text: 'Event item1'}
        ]; /*Unsorted array*/
        const mockedResponse = {
            ok: true,
            json: vi.fn().mockResolvedValue({births: mockedBithdays})
        };
        const mockedFetch = vi.fn().mockResolvedValue(mockedResponse);
        global.fetch = mockedFetch;

        const result = await fetchBirthdays(new Date());

        expect(mockedFetch).toHaveBeenCalledWith(expect.stringContaining('https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/births'));
        expect(mockedResponse.json).toHaveBeenCalled();
        expect(result).toEqual([
            {year: 1985, text: 'Event item1'},
            {year: 1990, text: 'Event item2'},
            {year: 2000, text: 'Event item3'}
        ]);/*Sorted array*/
    });

    it('should throw an error if resv ponse is not ok', async () => {
        const mockedResponse = {ok: false};
        global.fetch = vi.fn().mockResolvedValue(mockedResponse);

        await expect(fetchBirthdays(new Date())).rejects.toThrow('Response failed');
    });

    it('should throw an error if fetch fails', async () => {
        const mockedError = new Error('Fetch failed');
        global.fetch = vi.fn().mockRejectedValue(mockedError);

        await expect(fetchBirthdays(new Date())).rejects.toThrow('Fetch failed');
    });
});

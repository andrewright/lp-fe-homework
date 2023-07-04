import { render } from '@testing-library/react';
import { FetchResult } from '@/components/Fetch/FetchResult';
import { BirthsProps } from '@/api/wikipedia';

describe('FetchResult', () => {
    test('renders fetch items correctly', () => {
        const fetchData: BirthsProps[] = [
            {text: 'Event item1', year: 2002},
            {text: 'Event item2', year: 2004}
        ];

        const {getByText, container} = render(<FetchResult fetchData={fetchData}/>);
        const fetchItems = container.querySelectorAll('#list-items li');

        expect(getByText('Event item1')).toBeInTheDocument();
        expect(getByText('Event item2')).toBeInTheDocument();
        expect(fetchItems.length).toBe(2);
    });

    test('style', () => {
        const fetchData: BirthsProps[] = [
            {text: 'Event item1', year: 2002},
            {text: 'Event item2', year: 2004}
        ];

        const {container} = render(<FetchResult fetchData={fetchData}/>);

        expect(container.firstChild);
    });

    test('does not render when fetchData is empty', () => {
        const {container} = render(<FetchResult fetchData={[]}/>);
        const listItems = container.querySelectorAll('#listItems li');

        expect(listItems.length).toBe(0);
    });
});

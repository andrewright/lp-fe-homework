import { render } from '@testing-library/react';
import { Loading } from '@/components/Loading';

describe('<Loading />', () => {
    test('renders loading message when loading data', () => {
        const { getByText } = render(<Loading loading={true} />);

        expect(getByText('Loading...')).toBeInTheDocument();
    });

    test('does not render loading', () => {
        const { container } = render(<Loading loading={false} />);

        expect(container.firstChild).toBeNull();
    });
});

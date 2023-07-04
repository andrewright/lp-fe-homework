import { render } from '@testing-library/react';
import { Error } from '@/components/Error';

describe('<Error />', () => {
    test('renders error message when error prop is provided', () => {
        const error = 'Something went wrong';
        const { getByText } = render(<Error error={error} />);

        expect(getByText(error)).toBeInTheDocument();
    });

    test('does not render anything when error prop is empty', () => {
        const { container } = render(<Error error="" />);

        expect(container.firstChild).toBeNull();
    });
});

import { render, fireEvent } from '@testing-library/react';
import { FetchForm } from '@/components/Fetch/FetchForm';

describe('FetchForm', () => {
    test('should render button', () => {
        const onSubmitMock: () => void = vi.fn();
        const {getByText} = render(<FetchForm onSubmit={onSubmitMock} />);
        const buttonElement = getByText(/Fetch data/);

        expect(buttonElement).toBeVisible();
    });
});

describe('FetchForm', () => {
    it('calls onSubmit when form is submitted', () => {
        const onSubmitMock: () => void = vi.fn();
        const { getByTestId } = render(<FetchForm onSubmit={onSubmitMock}/>);
        const formElement = getByTestId('fetch-form');

        fireEvent.submit(formElement);

        expect(onSubmitMock).toHaveBeenCalled();
    });
});

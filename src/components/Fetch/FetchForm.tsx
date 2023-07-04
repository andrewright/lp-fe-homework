import{ FC, FormEvent } from 'react';
import { Button } from '@/components/Button';

interface FetchFormProps {
  onSubmit: () => void;
}

export const FetchForm: FC<FetchFormProps> = ({onSubmit}) => {
    const onSubmitWrapper = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit();
    };

    return (
        <form onSubmit={(e) => onSubmitWrapper(e)} className='flex' data-testid='fetch-form'>
            <input type='text' value='Birthdays from Wikipedia' readOnly
                className='flex-auto border-gray-300 shadow-sm rounded-l-lg'/>
            <Button className='flex-none rounded-none rounded-r-lg'>Fetch data</Button>
        </form>
    );
};

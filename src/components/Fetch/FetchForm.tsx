import { FC, FormEvent } from 'react';
import { Button } from "@/components/Button";

interface FetchFormProps {
  onSubmit: Function;
  fetchUrl: string;
}

export const FetchForm: FC<FetchFormProps> = ({fetchUrl, onSubmit}) => {
  const onSubmitWrapper = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit();
  }

  return (
    <form onSubmit={(e) => onSubmitWrapper(e)} className='flex'>
      <input type='text' value={fetchUrl} readOnly
             className='flex-auto border-gray-300 shadow-sm rounded-l-lg'/>
      <Button className='flex-none rounded-none rounded-r-lg'>Fetch data</Button>
    </form>
  );
}

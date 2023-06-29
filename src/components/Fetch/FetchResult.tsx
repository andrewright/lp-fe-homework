import { FC } from 'react';

export interface FetchResultProps {
  fetchData: FetchItemProps[];
}

export interface FetchItemProps {
    text: string;
    year: number;
}

const FetchItem: FC<FetchItemProps> = ({text, year}) => (
  <li className='flex py-1 px-3 rounded hover:bg-sky-100'>
    <p className='flex justify-center items-center w-14 text-center py-0.5 mr-2 rounded bg-sky-700 text-white'>{year}</p>
    <p>{text}</p>
  </li>
)

export const FetchResult: FC<FetchResultProps> = ({fetchData}) => (fetchData &&
  <ul className='py-4'>
    {fetchData.map(({year, text}, i) => <FetchItem key={i} text={text} year={year}/>)}
  </ul>
)

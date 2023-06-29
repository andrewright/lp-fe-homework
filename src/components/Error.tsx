import { FC } from 'react';

interface ErrorProps {
  error: string;
}

export const Error: FC<ErrorProps> = ({error}) => (error &&
  <div
    className='fixed inset-0 backdrop-blur-md z-50 text-center flex flex-col border-gray-100 border p-16 shadow-gray-100 shadow-xl z-10 bg-white/80 rounded-xl'>
    <h1 className='font-bold text-4xl border-b border-gray-400 mb-4'>Error</h1>

    <div className='mt-6'>
      <div className='w-full md:w-1/2  mx-auto rounded-lg bg-white p-5 text-gray-700 text'>
        <div className='mb-10'>
          <p className='font-bold text-xl uppercase'>{error}</p>
        </div>
      </div>
    </div>
  </div>
)

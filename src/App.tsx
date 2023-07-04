import { useState } from 'react';
import '@/App.css';
import { Loading } from '@/components/Loading';
import { Error } from '@/components/Error';
import { FetchForm } from '@/components/Fetch/FetchForm';
import { FetchResult } from '@/components/Fetch/FetchResult';
import { BirthsProps, fetchBirthdays } from '@/api/wikipedia';

function App() {
    const [birthdays, setBirthdays] = useState<BirthsProps[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    const loadBirthdays = () => {
        setIsLoading(true);
        fetchBirthdays()
            .then(setBirthdays)
            .catch(setError)
            .finally(
                () => setIsLoading(false));
    };

    return (
        <main className='min-h-screen flex flex-col items-center justify-center'>
            <Error error={error}/>
            <div className='container my-5'>
                <h1 className='text-xl bold'>Data fetching</h1>
                <FetchForm onSubmit={loadBirthdays}/>
                <Loading loading={isLoading}/>
                <FetchResult fetchData={birthdays}/>
            </div>
        </main>
    );
}

export default App;

import { useState } from 'react'
import '@/App.css'
import { Loading } from "@/components/Loading";
import { Error } from "@/components/Error";
import { FetchForm } from "@/components/Fetch/FetchForm";
import { FetchItemProps, FetchResult } from "@/components/Fetch/FetchResult";

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<string>('');
  const [wikiData, setWikiData] = useState<FetchItemProps[]>([]);

  const today = new Date();
  const month: string = String(today.getMonth() + 1);
  const day: string = String(today.getDate());
  const fetchUrl = `https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/births/${month}/${day}`

  const fetchData = () => {
    setIsLoading(true);
    fetch(fetchUrl)
      .then(response => {
        if (!response.ok) {
          setIsError(String(response.status));
        } else {
          return response.json()
        }
      })
      .then(({births}) => {
        setWikiData(births)
        setIsLoading(false);
      })
      .catch(error => setIsError(error));
  }

  const getSortedData = () => {
    return wikiData && wikiData.sort((a, b) => a.year - b.year);
  }

  return (
    <main className='min-h-screen flex flex-col items-center justify-center'>
      <Error error={isError}/>
      <div className='container my-5'>
        <h1 className='text-xl bold'>Data fetching</h1>
        <FetchForm onSubmit={fetchData} fetchUrl={fetchUrl}/>
        <Loading loading={isLoading}/>
        <FetchResult fetchData={getSortedData()}/>
      </div>
    </main>
  )
}

export default App

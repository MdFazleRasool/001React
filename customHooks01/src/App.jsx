
import useLocalStorage from './hooks/useLocalStorage'
import useDebouncedState from './hooks/useDebouncedState';
import { useEffect } from 'react';
import {ImpressionTrackableSimpleStorage} from './High_order_component/ImpressionTrackable';
import { ClickImpressionTracker, MouseImpressionTracker, SimpleComponent } from './High_order_component/ImpressionTrackable2';

function App() {
  const [count, setCount] = useLocalStorage('count', 0);

  const [search, setSearch] = useDebouncedState('', 3000)

  useEffect(() => {
    console.log('DebouncedSearch', search);
  }, [search])
  return (
    <>
      
      <div className="card ">
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
        <button onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
        <br />
        
        <input
          placeholder='Debouncing Input'
          className='w-40 mt-5 ml-1 outline font-5'
          
          type='text'
          onChange={(e) => setSearch(e.target.value)}
        />
        <br /> <br /> 
        {/* <ImpressionTrackableSimpleStorage x={10} /> */}
        
        <ClickImpressionTracker>
          <MouseImpressionTracker>
            <SimpleComponent x={10} />
          </MouseImpressionTracker>
        </ClickImpressionTracker>

      </div>

    </>
  )
}

export default App

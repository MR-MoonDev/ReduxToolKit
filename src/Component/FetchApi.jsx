import React from 'react';
import { useSelector } from 'react-redux';

const FetchApi = () => {
    const items = useSelector((state)=>state);
    console.log("items:",items)
    
  return (
    <div className='flex flex-col items-center gap-3 '>
      <div className=' inline-block border-2 border-green-400 bg-green-200 w-max  text-4xl p-2'>
        <p>Total item:{items.card.length}</p>
      </div>  
    
    </div>
  );
};

export default FetchApi;

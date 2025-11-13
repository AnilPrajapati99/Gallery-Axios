import axios from 'axios'
import React, { useEffect, useState } from 'react'

function App() {

  const [userdata, setuserdata] = useState([])
  const [index, setindex] = useState(1)

  const getData =async ()=>{
    const {data} =await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=50`)
    setuserdata(data);
    // console.log(data);
  }
  console.log(userdata);

  useEffect(()=>{
    getData();
    setuserdata([]);
  },[index])
  
let printUserData = <h3 className='text-gray-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '>Loading...</h3>;
if (userdata.length>0) {

  printUserData = userdata.map((e,idx)=>{
    return <div>
     <a href={e.url} target='__blank'>
       <div className='h-40 w-44 rounded-xl overflow-hidden' key={idx}>
      <img className='h-full w-full  object-cover' src={e.download_url} alt="" />
    </div>
     </a>
    <h2>{e.author}</h2>
    </div>
    
  })
  
}

  return (
    <div className='bg-black h-screen overflow-auto text-white px-10 py-10 pb-15 '>
    <div className='flex  flex-wrap gap-3  items-start justify-around '>{printUserData}</div>
    <div className="flex justify-center gap-5 items-center text-nowrap  absolute bottom-4 left-1/2 right-1/2">
      <button 
      style={{opacity:index==1 ? 0.5 : 1}}
      onClick={()=>{
        if (index>1) {
          setindex(index-1)
        }
      }}
       className='bg-amber-400 px-5 py-1 rounded active:scale-95 cursor-pointer text-black'>Prev {index-1}</button>
       <h3 className=''>Page {index}</h3>
      <button 
      onClick={()=>setindex(index+1)}
       className='bg-amber-400 px-5 py-1 rounded active:scale-95 w-fitt  cursor-pointer text-black'>Next {index+1}</button>
    </div>
    </div>
  )
} 

export default App

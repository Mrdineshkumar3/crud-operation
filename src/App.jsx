import { useState } from 'react'

import './App.css'

function App() {
  const [inputdata, setInputdata] = useState('');
  const [inputarray, setInputarray] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);


const addfunction = () =>{
 if(inputdata.length !== 0){
    setInputarray([...inputarray,inputdata])
    setInputdata('')
   
    
 }
 console.log(inputarray)
}


  const handleAdd = () => {
  
  }

  const deletefunction = (ind) =>{
  const filltered=inputarray.filter((data,index)=> index !==ind )
  setInputarray(filltered)
  }
  const updatefunction = (ind) =>{
    setInputdata(inputarray[ind]);
    setEditingIndex(ind);
  }
  const handleSave = () => {
    if (editingIndex !== null) {
      const updatedItems = inputarray.map((item, index) =>
        index === editingIndex ? inputdata : item
      );
      setInputarray(updatedItems);
      setInputdata('');
      setEditingIndex(null);
    }
  };
  return (
    <>
    <div className='w-[100%] h-[100vh] flex items-center justify-center flex-col gap-4 '>
      <div>
        <h1 className='text-blue-600 font-[700] text-[18px]'>CRUD OPERATION</h1>
      </div>
      <div className='w-[800px] max-lg:w-[auto] max-sm:px-0 max-lg:px-4  min-h-[70vh] rounded-md bg-blue-500 pt-[30px]'>
        <div className='flex items-center justify-center'>
        <div className='flex  gap-3 p-4'>
        <input type="text" placeholder='Type here' onChange={(e)=>{setInputdata(e.target.value)}} value={inputdata}
        className='px-4 rounded-l-md outline-none '  />
        {editingIndex === null ? (
          <button className='bg-white text-blue-500 px-5 py-2 rounded-r-md font-[500]' onClick={()=>{addfunction()}}>Add</button>
        ) : (
          <button  className='bg-white text-blue-500 px-5 py-2 rounded-r-md font-[500]' onClick={()=>{handleSave()}}>Save</button>
        )}
       
      </div>
        </div>
        <div className='pt-[20px] flex items-center justify-center'>
          <div>
            {inputarray.map((item,index)=>{
              return<>
              <div key={index} className='flex gap-3 my-3 max-sm:gap-1'>
                <p className='bg-gray-100 text-blue-500 font-[500] px-5 py-2 w-[300px] max-sm:w-[180px]'>{item}</p>
                <button className='px-5 py-2  max-sm:px-2 max-sm:text-[13px] bg-blue-900 text-white font-[500]  ' onClick={()=>{updatefunction(index)}}>Update</button>
                <button className='px-5 py-2 max-sm:px-2 max-sm:text-[13px] bg-black  text-white font-[500]' onClick={()=>{deletefunction(index)}}>Delete</button>
              </div>
              </>
            })}
          </div>
        </div>
     
      </div>
    </div>
    
    </>
  )
}

export default App

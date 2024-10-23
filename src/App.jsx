import React, { useEffect, useState } from 'react'
import { getDatabase, push, ref, set,onValue, remove, update  } from "firebase/database";


const App = () => {
  let [task, setTask]=useState('')
  let [updatetask, setUpdateTask]=useState('')
  let [taskList, setTasklist]=useState([])
  let [editmodal ,setEditmodal]=useState(false)
  let [editid , seteditid]=useState()
  const db = getDatabase();
  let handleTask=(e)=>{
    setTask(e.target.value)
  }

  let handleTaskSUbmit=()=>{

    set(push(ref(db, 'bazarlist/')), {
      name:task
    }).then(()=>{
      alert("task submited succesfull")
      setTask('')
    }).catch((err)=>{
      alert(err)
    })
  }

  // fetch data in firebase databse 
  useEffect(()=>{
    const bazarlistref = ref(db, 'bazarlist/');
    onValue(bazarlistref, (snapshot) => {
      let array = []
      snapshot.forEach((item)=>{
       array.push({...item.val(),id:item.key})

      })

      setTasklist(array)
      
    });
  },[])

  // firebase data delete 
  let handledelete=(id)=>{
    remove(ref(db, 'bazarlist/'  + id))
  }

  // edit modal functionality 

  let handleEditmodal=(id)=>{
    seteditid(id)
    setEditmodal(true)
  }



  let handleUpdateTask=()=>{
    update(ref(db, 'bazarlist/'  + editid),{
      name :updatetask
    }).then(()=>{
      setEditmodal(false)
    })
  }

  return (
 
    <div className="container mx-auto my-10">
  <h1 className="text-center text-3xl font-semibold mb-4">To Do List</h1>
  <div className="md:w-1/2 mx-auto">
    <div className="bg-white shadow-md rounded-lg p-6">
      <form id="todo-form">
        <div className="flex mb-4">
          <input onChange={handleTask}
            type="text"
            className="w-full px-4 py-2 mr-2 rounded-lg
                       border-gray-300 focus:outline-none
                        focus:border-blue-500"
            id="todo-input"
            placeholder="Add new task"
            required=""
            value={task}
          />
          <button onClick={handleTaskSUbmit}
            className="bg-blue-500 hover:bg-blue-700 
                      text-white font-bold py-2 px-4 rounded"
          >
            Add
          </button>
        </div>
      </form>
      <ul id="todo-list">
        {taskList.map((item)=>(
          <>

          <li className=' text-lg font-serif font-semibold mt-2  underline flex justify-between'>{item.name} 

            <div>
            <button onClick={()=>handleEditmodal(item.id)} className=' bg-teal-500 text-white font-sans rounded-md py-1 px-2 ml-auto mr-1'>Edit</button>
            <button onClick={()=>handledelete(item.id)} className=' bg-red-500 text-white font-sans rounded-md py-1 px-2 ml-auto'>Delete</button>
            </div>
          </li>
          </>
        ))}
       
      </ul>
    </div>
  </div>

  {/* edit modal  */}
  {editmodal && 
  
  <div className="container mx-auto my-10">
  <h1 className="text-center text-3xl font-semibold mb-4">Update Task</h1>
  <div className="md:w-1/2 mx-auto">
    <div className="bg-white shadow-md rounded-lg p-6">
      <form id="todo-form">
        <div className="flex mb-4">
          <input onChange={(e)=>setUpdateTask(e.target.value)}
            type="text"
            className="w-full px-4 py-2 mr-2 rounded-lg
                       border-gray-300 focus:outline-none
                        focus:border-blue-500"
            id="todo-input"
            placeholder="Add new task"
            required=""
          />
          <button onClick={handleUpdateTask}
            className="bg-blue-500 hover:bg-blue-700 
                      text-white font-bold py-2 px-4 rounded"
          >
            Update
          </button>
        </div>
      </form>
     
    </div>
  </div>
</div>
  
  }

  
  {/* edit modal  */}
</div>

  )
}

export default App
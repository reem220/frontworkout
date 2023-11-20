import React, { useState } from 'react'
import ax from 'axios'
const WorkoutForm = ({show,setShow}) => {
  const [title,setTitle]=useState("")
  const [load,setLoad]=useState('')
  const [reps,setReps]=useState('')
  const [error,setError]=useState('')




  const handleSubmit=async(e)=>{
    //e.preventDefault()=>عشان تبطل form تعمل refresh ل صفحه
e.preventDefault()
try {
  await ax.post('https://workout-uqzl.onrender.com/api/workouts/',{title,load,reps})
  setTitle('')
  setLoad('')
  setReps('')
  setError('')
  setShow(!show)
} catch (error) {
  setError('please fill out all filed')
}
  }
  return (
    <form className='create' onSubmit={handleSubmit}>
<h3>Add a New Workout</h3>
<label >Excersize Title</label>
<input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
<label >Load (in kg)</label>
<input type="number" 
value={load} onChange={(e)=>setLoad(e.target.value)}
/>

<label >Reps: </label>
<input type="number" value={reps} onChange={(e)=>setReps(e.target.value)} />
<button>Add Workout</button>
{error&& <div className='error'>{error}</div>}


    </form>
  )
}

export default WorkoutForm
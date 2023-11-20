import React, { useEffect, useState } from 'react'
import ax from 'axios'
import WorkoutDetailes from '../components/WorkoutDetailes'
import WorkoutForm from '../components/WorkoutForm'
const Home = () => {
    const [show,setShow]=useState(false)
    const [workouts,setworkoutes]=useState([])
useEffect(()=>{
    const getdata=async()=>{
let responce =await ax.get("https://workout-uqzl.onrender.com/api/workouts")
console.log(responce.data) 
setworkoutes(responce.data)

}


getdata()



},[show])

  return (
    <div className="home">
<div className="workouts">
{workouts && workouts.map( (work)=>(

//workout =>يجب يكون اسم props نفس اسم ال parameter تبعت الفانكشن 
<WorkoutDetailes workout={work} show={show} setShow={setShow} key={work._id} />
))}
</div>
<WorkoutForm  show={show} setShow={setShow}  />





    </div>
  )
}

export default Home
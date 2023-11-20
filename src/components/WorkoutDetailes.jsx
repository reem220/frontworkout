import React from 'react'
// هاي المكتبه تعمل على تحويل التاريخ الى ايام بعد مرور الوقت 
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import ax from 'axios'
const WorkoutDetailes = ({workout,show,setShow}) => {
  const handleClick=async()=>{
    //axios :رح تربطنا في routes in backend 
    //routes:رح يستدعي فانكشن delet
    await ax.delete('https://workout-uqzl.onrender.com/api/workouts/'+ workout._id)
    setShow(!show)
  }
  return (
    <div  className="workout-details">
    <h4>{workout.title}</h4>
    <p><strong>
        Load (kg):
    </strong>
{workout.load}
    </p>

    <p><strong>
        Number of reps:
    </strong>
{workout.reps}
    </p>
<p>{formatDistanceToNow(new Date (workout.createdAt),{addSuffix:true})}</p>

<span class="material-symbols-outlined" onClick={handleClick}>delete</span>

</div>
//addSuffix:true =>معناها اضافه كلمه ago 
  )
}

export default WorkoutDetailes
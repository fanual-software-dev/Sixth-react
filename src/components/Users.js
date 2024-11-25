import React from 'react'
import { useState } from 'react'

const Users = () => {

    const [users,setusers] = useState([
        { 
            id:1,
            name:"Alice",
            age:"22"
        },
  
        { 
            id:2,
            name:"Bob",
            age:"20"
        },
  
        { 
            id:3,
            name:"Nakamura",
            age:"25"
        }
      ])


    const showedit = (id)=>{
        document.getElementById(`${id}`).style.display = 'block'
    }

    const edituser = (id)=>{
        const name = document.getElementById(`name${id}`).value
        const age = document.getElementById(`age${id}`).value
        
        setusers(users.map((user)=>{
            if (user.id===id){
                if (name){
                    user.name = name
                }

                if (age){
                    user.age = age
                }
            }

            return user
        }))

        document.getElementById(id).style.display = 'none'
    }

  return (
    <div className='container'>
        {users.map((props)=>(
            <div className='app'>
                <div className='card'>
                    <p id='id' className='id'>ID: {props.id}</p>
                    <p className='name'>Name: {props.name}</p>
                    <p className='name'>Age: {props.age}</p>
                    <button onClick={()=>showedit(props.id)}>Edit</button>
                </div>

                <div id={props.id} className='edits'>
                    <form className='form'>
                        <label for="name">Change Name: </label>
                        <input id={`name${props.id}`} type='text' placeholder='Edit your name'/>
                        <label for="name">Change Age: </label>
                        <input id={`age${props.id}`} type='number' placeholder='Edit your age'/>

                        <button type='button' id={`btn${props.id}`} onClick={()=>{edituser(props.id)}}>Submit</button>
                    </form>
                </div>
            </div>

                
        ))}
    </div>
  )
}

export default Users

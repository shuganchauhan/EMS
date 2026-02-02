import React, { useContext } from 'react'
import { AuthContext } from '../../../context/AuthContext'

const NewTask = ({ data, employeeIdx, taskIdx }) => {

    const [userData, setUserData] = useContext(AuthContext)

    const acceptHandler = () => {
        const updatedUserData = [...userData]
        updatedUserData[employeeIdx] = { ...updatedUserData[employeeIdx] }
        updatedUserData[employeeIdx].tasks = [...updatedUserData[employeeIdx].tasks]
        updatedUserData[employeeIdx].tasks[taskIdx] = {
            ...updatedUserData[employeeIdx].tasks[taskIdx],
            active: true,
            newTask: false
        }
        updatedUserData[employeeIdx].taskCounts = {
            ...updatedUserData[employeeIdx].taskCounts,
            active: updatedUserData[employeeIdx].taskCounts.active + 1,
            newTask: updatedUserData[employeeIdx].taskCounts.newTask - 1
        }

        setUserData(updatedUserData)
        localStorage.setItem('employees', JSON.stringify(updatedUserData))
    }

    return (
        <div className='shrink-0 h-full w-75 p-5 bg-green-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
                <h4 className='text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
            <p className='text-sm mt-2'>
                {data.taskDescription}
            </p>
            <div className='mt-6'>
                <button onClick={acceptHandler} className='bg-blue-500 rounded font-medium py-1 px-2 text-xs'>Accept Task</button>
            </div>
        </div>
    )
}

export default NewTask
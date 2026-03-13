import React, { useContext, useState, useEffect } from 'react'
import Login from './components/Auth/Login'
import Signup from './components/Auth/Signup'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthContext'
import { getLocalStorage } from './utils/localStorage'

const App = () => {

  const [page, setPage] = useState('login') // 'login' | 'signup'

  const [user, setUser] = useState(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser)
      return userData.role
    }
    return null
  })
  const [userData, setUserData] = useContext(AuthContext)

  const loggedInUserData = React.useMemo(() => {
    if (user === 'employee' && userData) {
      const storedUser = JSON.parse(localStorage.getItem('loggedInUser'))
      if (storedUser && storedUser.data) {
        return userData.find((e) => e.email === storedUser.data.email)
      }
    }
    return null
  }, [userData, user])

  const handleLogin = (email, password) => {
    const { admin } = getLocalStorage()
    const adminUser = admin.find((a) => a.email === email && a.password === password)

    if (adminUser) {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
    } else if (userData) {
      const employee = userData.find((e) => email == e.email && e.password == password)
      if (employee) {
        setUser('employee')
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }))
      } else {
        alert("Invalid Credentials")
      }
    }
  }

  const handleSignup = (firstName, email, password) => {
    // Check if email is already registered
    const existingEmployees = JSON.parse(localStorage.getItem('employees')) || []
    const alreadyExists = existingEmployees.find((e) => e.email === email)
    if (alreadyExists) {
      alert('An account with this email already exists. Please log in.')
      return
    }

    // Create new employee and save to localStorage
    const newEmployee = {
      id: existingEmployees.length + 1,
      firstName,
      email,
      password,
      taskCounts: { active: 0, newTask: 0, completed: 0, failed: 0 },
      tasks: []
    }
    const updatedEmployees = [...existingEmployees, newEmployee]
    localStorage.setItem('employees', JSON.stringify(updatedEmployees))

    // Update context state so the new user can log in immediately
    setUserData(updatedEmployees)

    alert('Account created successfully! Please log in.')
    setPage('login')
  }

  useEffect(() => {
    if (loggedInUserData) {
      const localStorageUser = JSON.parse(localStorage.getItem('loggedInUser'))
      if (localStorageUser && localStorageUser.role === 'employee') {
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: loggedInUserData }))
      }
    }
  }, [loggedInUserData])

  return (
    <>
      {!user && page === 'login' && <Login handleLogin={handleLogin} switchToSignup={() => setPage('signup')} />}
      {!user && page === 'signup' && <Signup handleSignup={handleSignup} switchToLogin={() => setPage('login')} />}
      {user == 'admin' ? <AdminDashboard changeUser={setUser} /> : (user == 'employee' && loggedInUserData ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : null)}
    </>
  )
}

export default App

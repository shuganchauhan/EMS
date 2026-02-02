import React, { useContext, useState, useEffect } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthContext'
import { getLocalStorage } from './utils/localStorage'

const App = () => {

  const [user, setUser] = useState(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser)
      return userData.role
    }
    return null
  })
  const [userData] = useContext(AuthContext)

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
      }
      else {
        alert("Invalid Credentials")
      }
    }
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
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'admin' ? <AdminDashboard changeUser={setUser} /> : (user == 'employee' && loggedInUserData ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : null)}
    </>
  )
}

export default App

import React, { useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'
import { AuthContext } from './AuthContext'

const AuthProvider = ({ children }) => {
    // localStorage.clear()

    const [userData, setUserData] = useState(() => {
        const storedData = getLocalStorage()
        if (!storedData || !storedData.employees || storedData.employees.length === 0) {
            setLocalStorage()
            const { employees } = getLocalStorage()
            return employees
        }
        return storedData.employees
    })

    return (
        <AuthContext.Provider value={[userData, setUserData]}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
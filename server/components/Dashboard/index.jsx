import React, { useState, useEffect } from 'react'
import { ApiClient } from 'adminjs'

const api = new ApiClient()

const Dashboard = () => {
    const [data, setData] = useState({})

    useEffect(() => {
        api.getDashboard().then((response) => {
            setData(response.data)
        })
    }, [])

    return (
        <h1>LondonTravel Dashboard</h1>
    )
}

export default Dashboard

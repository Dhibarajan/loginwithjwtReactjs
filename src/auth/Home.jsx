import { BottomNavigation, Button } from '@material-ui/core'
import React from 'react'

function Home() {
    const handleClick = () => {
        localStorage.clear()
        return window.location = '/'
    }
    return (
        <div>
            <h1>Home</h1>
            <Button onClick={handleClick}>Logout</Button>
        </div>
    )
}

export default Home

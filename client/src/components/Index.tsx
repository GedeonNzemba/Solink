import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from './main/Main'
import PastLaunch from './PastLaunchesPage/PastLaunch'

const Index = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Main text='Testing one Two Three Four AND MORE' />} />
                <Route path="/pastLaunches" element={<PastLaunch />} />
            </Routes>
        </main>
    )
}

export default Index
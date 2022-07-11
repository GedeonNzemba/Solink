import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from './main/Main'
import PastLaunch from './PastLaunchesPage/PastLaunch'

const Index = () => {
    return (
        <main className="flex-auto">
            <div className="container">
                <Routes>
                    <Route path="/"  element={<Main />} />
                    <Route path="/pastLaunches" element={<PastLaunch />} />
                </Routes>
            </div>
        </main>
    )
}

export default Index
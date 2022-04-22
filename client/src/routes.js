import React from "react"
import {Navigate, Route, Routes} from "react-router-dom"
import {MatchPage} from "./pages/MatchPage"
import {ProfilePage} from "./pages/ProfilePage"
import {AuthPage} from "./pages/AuthPage"

export const useRoutes = isAuth => {
    if (isAuth) {
        return (
            <Routes>
                <Route path="/match" element={<MatchPage />} />
                <Route path="/profile" element={<ProfilePage />} />
            </Routes>
        )
    }

    return (
        <Routes>
            <Route path="/" element={<AuthPage />} />
        </Routes>
    )
}


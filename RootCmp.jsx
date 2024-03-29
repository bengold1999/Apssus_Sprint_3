const { Route, Routes } = ReactRouterDOM
const Router = ReactRouterDOM.HashRouter

import { Home } from "./views/Home.jsx"
import { About } from "./views/About.jsx"

import { MailIndex } from "./apps/mail/views/MailIndex.jsx"
import { MailPreview } from "./apps/mail/cmps/MailPreview.jsx"

import { AppHeader } from "./cmps/AppHeader.jsx"
import { Team } from "./cmps/AboutTeam.jsx";
import { Vision } from "./cmps/AboutVision.jsx";
import { NoteIndex } from "./apps/note/views/NoteIndex.jsx"



export function App() {
    return <Router>
        <section className="app main-layout">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about/" element={<About />}>
                    <Route path="/about/team" element={<Team />} />
                    <Route path="/about/vision" element={<Vision />} />
                </Route>

                <Route path="/mail/*" element={<MailIndex />}>
                </Route>

                <Route path="/note" element={<NoteIndex />} />
            </Routes>
        </section>
    </Router>
}

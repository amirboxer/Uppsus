const { Route, Routes } = ReactRouterDOM
const Router = ReactRouterDOM.HashRouter

import { MailDetails } from './apps/mail/pages/MailDetails.jsx'
import { AppHeader } from './cmps/AppHeader.jsx'
import { About } from './pages/About.jsx'
import { Home } from './pages/Home.jsx'
import { MailIndex } from './apps/mail/pages/MailIndex.jsx'
import { NoteIndex } from './apps/note/pages/NoteIndex.jsx'

export function App() {
  return (
    <Router>
      <section className="app">
        <AppHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/note" element={<NoteIndex />} />
          <Route path="/mail" element={<MailIndex />} >
            <Route path="/mail/:id" element={<MailDetails />} />
          </Route>
          <Route path="/note" element={<NoteIndex />} />
        </Routes>
      </section>
    </Router>
  )
}

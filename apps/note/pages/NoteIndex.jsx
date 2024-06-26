import { NotePreview } from '../cmps/NotePreview.jsx'
import { NoteAdd } from '../cmps/NoteAdd.jsx'
import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/async-storage.service.js'
import { noteService } from '../services/note.service.js'

const { useEffect, useState } = React

export function NoteIndex() {
  const [notes, setNotes] = useState(null)

  useEffect(() => {
    loadNotes()
  }, [])

  function loadNotes() {
    console.log('testing:')
  }

  return (
    <section>
      <NotePreview />
      {/* <NoteAdd /> */}
    </section>
  )
}

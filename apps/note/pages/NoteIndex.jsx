import { NotePreview } from '../cmps/NotePreview.jsx'
import { NoteAdd } from '../cmps/NoteAdd.jsx'
import { ColorInput } from '../cmps/ColorInput.jsx'
import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/async-storage.service.js'
import { noteService } from '../services/note.service.js'
import { UserMsg } from '../../../cmps/UserMsg.jsx'

import {
  eventBusService,
  showErrorMsg,
  showSuccessMsg,
} from '../../../services/event-bus.service.js'

const { useEffect, useState } = React

export function NoteIndex() {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    loadNotes()
  }, [])

  function loadNotes() {
    console.log('Loading notes...')
    noteService
      .query()
      .then((notes) => {
        setNotes(notes)
      })
      .catch((err) => {
        console.error('Error loading notes:', err)
      })
  }

  function onColorChange(noteId) {
    console.log('colorChanged: ', noteId)
    loadNotes()
  }

  function onRemoveNote(noteId) {
    noteService
      .remove(noteId)
      .then(() => {
        setNotes((notes) => notes.filter((note) => note.id !== noteId))
        showSuccessMsg(`Note (${noteId}) removed successfully!`)
      })
      .catch((err) => {
        console.log('Problems removing note:', err)
        showErrorMsg(`Having problems(${noteId}) removing note!`)
      })
  }

  function onUpdateNote(noteToUpdate) {
    noteService
      .save(noteToUpdate)
      .then((savedNote) => {
        setNotes((prevNotes) =>
          prevNotes.map((note) => (note.id === savedNote.id ? savedNote : note))
        )
        showSuccessMsg('Note updated successfully!')
        loadNotes()
      })
      .catch((err) => {
        console.error('Error updating note:', err)
        showErrorMsg('Having problems updating note!')
      })
  }

  if (!notes) return <div>Loading...</div>
  return (
    <section>
      <NoteAdd loadNotes={loadNotes} />
      <NotePreview
        notes={notes}
        onUpdateNote={onUpdateNote}
        onRemoveNote={onRemoveNote}
        onColorChange={onColorChange}
      />

    </section>
  )
}

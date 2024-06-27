const { useState } = React

import { ColorInput } from './ColorInput.jsx'

export function NotePreview({
  notes,
  onRemoveNote,
  onUpdateNote,
  onColorChange,
  onDuplicateNote,
}) {
  const [editedNoteId, setEditedNoteId] = useState(null)
  const [editNoteData, setEditNoteData] = useState({ title: '', txt: '' })
  const [showColorPickerForNoteId, setShowColorPickerForNoteId] = useState(null)
  const [duplicate, setDuplicate] = useState(null)

  function handleEditClick(note) {
    console.log('Editing note:', note)
    setEditedNoteId(note.id)
    setEditNoteData({ title: note.info.title, txt: note.info.txt })
  }

  function handleSaveClick(note) {
    console.log('Saving note:', note)
    const updatedNote = { ...note, info: { ...note.info, ...editNoteData } }
    onUpdateNote(updatedNote)
    setEditedNoteId(null)
  }

  function handleColorClick(noteId) {
    setShowColorPickerForNoteId(
      noteId === showColorPickerForNoteId ? null : noteId
    )
  }

  function handleDuplicateClick(note) {
    const duplicatedNote = {
      ...note,
      id: null,
      createdAt: Date.now(),
      style: { ...note.style },
      info: { ...note.info },
    }
    onDuplicateNote(duplicatedNote)
  }

  return (
    <section className="note-list">
      {notes.map((note) => {
        if (editedNoteId === note.id) {
          return (
            <div
              key={note.id}
              style={{ backgroundColor: note.style.backgroundColor }}
              className="note"
            >
              <input
                className="note-edit-input"
                type="text"
                name="title"
                value={editNoteData.txt}
                onChange={(e) => {
                  console.log('Title change:', e.target.value)
                  setEditNoteData((prevData) => ({
                    ...prevData,
                    txt: e.target.value,
                  }))
                }}
              />
              <button
                onClick={() => handleSaveClick(note)}
                className="note-btn note-btn-edit"
              >
                Save
              </button>
            </div>
          )
        } else {
          return (
            <div
              key={note.id}
              style={{ backgroundColor: note.style.backgroundColor }}
              className="note"
            >
              <h1 className="note-title">{note.info.title}</h1>
              {(note.type === 'NoteImg' || note.type === 'NoteTxt') &&
                note.info.url && <img src={note.info.url} alt="Note Image" />}
              <p onClick={() => handleEditClick(note)} className="note-txt">
                {note.info.txt}
              </p>
              <div className="note-btns">
                <button
                  onClick={() => onRemoveNote(note.id)}
                  className="note-btn"
                >
                  <span className="material-symbols-outlined">delete</span>
                </button>

                <button
                  className="note-btn"
                  onClick={() => handleColorClick(note.id)}
                >
                  <span className="material-symbols-outlined">palette</span>
                </button>
                <button
                  className="note-btn"
                  onClick={() => handleDuplicateClick(note)}
                >
                  <span className="material-symbols-outlined">
                    control_point_duplicate
                  </span>
                </button>
              </div>

              {showColorPickerForNoteId === note.id && (
                <ColorInput
                  note={note}
                  onUpdateNote={onUpdateNote}
                  loadNotes={onColorChange}
                />
              )}
            </div>
          )
        }
      })}
    </section>
  )
}

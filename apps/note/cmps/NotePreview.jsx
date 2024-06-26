const { useState, useEffect } = React

import { noteService } from '../services/note.service.js'
import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/async-storage.service.js'

export function NotePreview({ notes, onRemoveNote }) {
  return (
    <section className="note-list">
      {notes.map((note) => (
        <div key={note.id} className="note">
          <h1 className="note-title">{note.info.title}</h1>
          <p className="note-txt">{note.info.txt}</p>
          <div className="note-btns">
            <button onClick={() => onRemoveNote(note.id)} className="note-btn">
              <img
                src="./assets/img/noteicons/delete.png"
                alt="Delete Button"
              />
            </button>
            <button className="note-btn">
              <img
                src="../../../assets/img/noteicons/palette.png"
                alt="Palette Button"
              />
            </button>
            <button className="note-btn">
              <img src="../assets/img/noteicons/pin.png" alt="Pin Button" />
            </button>
          </div>
        </div>
      ))}
    </section>
  )
}



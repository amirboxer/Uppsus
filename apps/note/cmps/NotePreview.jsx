const { useState, useEffect } = React

import { noteService } from '../services/note.service.js'
import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/async-storage.service.js'

export function NotePreview({ notes, onRemoveNote }) {
  return (
    <section className="note-list">
      {notes.map((note) => (
        <div
          key={note.id}
          style={{ backgroundColor: note.style.backgroundColor }}
          className="note"
        >
          <h1 className="note-title">{note.info.title}</h1>
          <p className="note-txt">{note.info.txt}</p>
          <div className="note-btns">
            <button onClick={() => onRemoveNote(note.id)} className="note-btn">
              <span className="material-symbols-outlined">delete</span>
            </button>
            <button className="note-btn">
              <span className="material-symbols-outlined ">push_pin</span>
            </button>
            <button className="note-btn">
              <span className="material-symbols-outlined">palette</span>
            </button>
          </div>
        </div>
      ))}
    </section>
  )
}

const { useState, useEffect } = React

import { noteService } from '../services/note.service.js'
import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/async-storage.service.js'

export function NotePreview({ notes }) {
  return (
    <section className="note-list">
      {notes.map((note) => (
        <div key={note.id} className="note">
          <h1 className="note-title">{note.info.title}</h1>
          <p className="note-txt">{note.info.txt}</p>
          <div className="note-btns">
            <button className="note-btn">
              <img
                src="\assets\img\note icons\delete.png"
                alt="Delete Button"
              />
            </button>
            <button className="note-btn">
              <img
                src="\assets\img\note icons\palette.png"
                alt="Delete Button"
              />
            </button>
            <button className="note-btn">
              <img src="\assets\img\note icons\pin.png" alt="Delete Button" />
            </button>
          </div>
        </div>
      ))}
    </section>
  )
}

// note service

import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/async-storage.service.js'

const NOTE_KEY = 'noteDB'
_createNotes()

export const noteService = {
  query,
  get,
  remove,
  save,
  getEmptyNote,
  _createNote,
  getDefaultFilter,
}

function query(filterBy = getDefaultFilter()) {
  return storageService.query(NOTE_KEY).then((notes) => {
    if (filterBy.txt) {
      console.log('hey from query filterbytxt::')
      const regex = new RegExp(filterBy.txt, 'i')
      notes = notes.filter((note) =>
        regex.test(note.info.txt || note.info.title)
      )
    }
    return notes
  })
}

function get(noteId) {
  return storageService.get(NOTE_KEY, noteId)
}

function remove(noteId) {
  return storageService.remove(NOTE_KEY, noteId)
}

function save(note) {
  if (note.id) {
    return storageService.put(NOTE_KEY, note)
  } else {
    console.log('noteBeforeSave', note)
    note = _createNote(note.title, note.txt, note.url, note.src)
    console.log('note:', note)
    return storageService.post(NOTE_KEY, note)
  }
}

function getEmptyNote() {
  return { id: '', title: '', txt: '', url: '', src: '' }
}

function _createNotes() {
  let notes = utilService.loadFromStorage(NOTE_KEY)
  if (!notes || !notes.length) {
    notes = []
    for (let i = 0; i < 5; i++) {
      notes.push(_createNote())
    }
    utilService.saveToStorage(NOTE_KEY, notes)
  }
}

function _createNote(title, txt, url, src) {
  const newNote = {
    id: utilService.makeId(),
    createdAt: Date.now(),
    type: 'NoteTxt',
    isPinned: false,
    style: {
      backgroundColor: getKeepRandomColor(),
    },
    info: {
      title: title || 'Note',
      txt: txt || utilService.makeLorem(5),
      url: url || '',
      src: src || '',
    },
  }

  return newNote
}

function getDefaultFilter() {
  return { txt: '' }
}

function getKeepRandomColor() {
  const colors = [
    '#B4FF9F', // Existing color
    '#F9FFA4', // Existing color
    '#FFD59E', // Existing color
    '#FFA1A1', // Existing color
    '#FFF475', // Google Keep yellow
    '#F28B82', // Google Keep red
    '#FBBC04', // Google Keep orange
    '#FFF475', // Google Keep yellow
    '#CCFF90', // Google Keep green
    '#A7FFEB', // Google Keep teal
    '#CBF0F8', // Google Keep blue
    '#AECBFA', // Google Keep dark blue
    '#D7AEFB', // Google Keep purple
    '#FDCFE8', // Google Keep pink
    '#E6C9A8', // Google Keep brown
    '#E8EAED', // Google Keep gray
  ]
  const randomIndex = Math.floor(Math.random() * colors.length)
  return colors[randomIndex]
}

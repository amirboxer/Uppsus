// note service

import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/async-storage.service.js'

const NOTE_KEY = 'noteDB'

export const noteService = {
  query,
  get,
  remove,
  save,
  getEmptyNote,
  _createNote,
  getDefaultFilter,
  demoNotes,
}

var demoNotes = [
  {
    id: 'n101',
    createdAt: 1112222,
    type: 'NoteTxt',
    isPinned: true,
    style: {
      backgroundColor: '#00d',
    },
    info: {
      txt: 'Fullstack Me Baby!',
    },
  },
  {
    id: 'n102',
    createdAt: 1112223,
    type: 'NoteImg',
    isPinned: false,
    info: {
      url: 'http://some-img/me',
      title: 'Bobi and Me',
    },
    style: {
      backgroundColor: '#00d',
    },
  },
  {
    id: 'n103',
    createdAt: 1112224,
    type: 'NoteTodos',
    isPinned: false,
    info: {
      title: 'Get my stuff together',
      todos: [
        { txt: 'Driving license', doneAt: null },
        { txt: 'Coding power', doneAt: 187111111 },
      ],
    },
  },
]

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
    return storageService.post(NOTE_KEY, note)
  }
}

function getEmptyNote() {
  return { id: '', title: '', txt: '', url: '', src: '' }
}

function _createNotes() {
  let notes = utilService.loadFromStorage(NOTE_KEY)
  if (!notes || !notes.length) {
    notes = demoNotes

    utilService.saveToStorage(NOTE_KEY, notes)
  }
}

function _createNote(title, txt, url, src) {
  const note = {}
  note.id = utilService.makeId()
  note.createdAt = Date.now()
  note.type = 'NoteTxt'
  note.isPinned = false
  note.style = {
    backgroundColor: utilService.getRandomColor(),
  }
  note.info = {
    title: title,
    txt: txt,
    url: url,
    src: src,
  }
  return note
}

function getDefaultFilter() {
  return { txt: '' }
}

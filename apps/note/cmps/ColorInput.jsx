import { noteService } from '../services/note.service.js'

export function ColorInput({ note, onUpdateNote, loadNotes }) {
  const colors = [
    '#B4FF9F', // existing color
    '#F9FFA4', // existing color
    '#FFD59E', // existing color
    '#FFA1A1', // existing color
    '#FFE0E0', // existing color
    'lightcyan', // existing color
    '#FFF475', // Google Keep yellow
    '#F28B82', // Google Keep red
    '#FBBC04', // Google Keep orange
    '#CCFF90', // Google Keep green
    '#A7FFEB', // Google Keep teal
    '#CBF0F8', // Google Keep blue
    '#AECBFA', // Google Keep dark blue
    '#D7AEFB', // Google Keep purple
    '#FDCFE8', // Google Keep pink
    '#E6C9A8', // Google Keep brown
    '#E8EAED', // Google Keep gray
  ]

  function onSetColor(ev) {
    const newColor = ev.target.style.backgroundColor
    const updatedStyle = { ...note.style, backgroundColor: newColor }
    const updatedNote = { ...note, style: updatedStyle }

    noteService.save(updatedNote).then((savedNote) => {
      console.log('savedNote', savedNote)
      onUpdateNote(savedNote)
      loadNotes()
    })
  }

  return (
    <section className="color-input">
      <div className="items-container">
        {colors.map((color) => (
          <div
            key={color}
            className="item"
            onClick={onSetColor}
            style={{ backgroundColor: color }}
          ></div>
        ))}
      </div>
    </section>
  )
}

import { noteService } from '../services/note.service.js'

export function ColorInput({ note, loadNotes }) {
  const colors = [
    '#B4FF9F',
    '#F9FFA4',
    '#FFD59E',
    '#FFA1A1',
    '#FFE0E0',
    'lightcyan',
  ]

  function onSetColor(ev) {
    const newColor = ev.target.style.backgroundColor
    const updatedStyle = { ...note.style, backgroundColor: newColor }
    const updatedNote = { ...note, style: updatedStyle }

    noteService.save(updatedNote).then((savedNote) => {
      console.log('savedNote', savedNote)
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

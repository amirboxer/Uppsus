import { noteService } from '../services/note.service.js'
import { utilService } from '../../../services/util.service.js'

const { useParams, useNavigate } = ReactRouter

export function NoteAdd() {
  const cmps = ['NoteTxt', 'NoteImg', 'NoteTodos', 'NoteVideo']
  const [newNote, setNewNote] = useState(noteService.getEmptyNote())
  const [cmpInput, setCmpInput] = useState('NoteTxt')


  function onChangeCmp(type) {
    setCmpInput(type)
  }

  function handleChange({ target }) {
    const field = target.id
    let value = target.value
    console.log(field)
    console.log(value)

    switch (target.type) {
      case 'number':
      case 'range':
        value = +value || ''
        break
      default:
        break
    }
    setNewNote((prevNoteToEdit) => ({ ...prevNoteToEdit, [field]: value }))
    console.log('newNote: ', newNote)
  }

  function onSaveNote(ev) {
    ev.preventDefault()
    noteService.save(newNote)
  }

  return (
    <section className="add-note-main">
      <form className="note-form" onSubmit={onSaveNote}>
        <div className="input-with-buttons">
          <DynamicCmp cmpType={cmpInput} handleChange={handleChange} />

          <div className="note-input-buttons">
            {cmps.map((cmp) => (
              <button
                key={cmp}
                className={`note-input-btn ${
                  cmp === cmpInput ? 'active-input-btn' : ''
                }`}
                onClick={() => onChangeCmp(cmp)}
              >
                {cmp === 'NoteTxt' && (
                  <span className="material-symbols-outlined">add_comment</span>
                )}
                {cmp === 'NoteImg' && (
                  <span className="material-symbols-outlined">
                    add_photo_alternate
                  </span>
                )}
                {cmp === 'NoteTodos' && (
                  <span className="material-symbols-outlined">
                    format_list_bulleted
                  </span>
                )}
                {cmp === 'NoteVideo' && (
                  <span className="material-symbols-outlined">
                    video_library
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </form>
    </section>
  )
}

function DynamicCmp(props) {
  switch (props.cmpType) {
    case 'NoteTxt':
      return <NoteTxt {...props} />
    case 'NoteImg':
      return <NoteImg {...props} />
    case 'NoteTodos':
      return <NoteTodos {...props} />
    case 'NoteVideo':
      return <NoteVideo {...props} />
    default:
      return null
  }
}

function NoteTxt(props) {
  return (
    <input
      className="input-add-note note-text"
      type="text"
      onChange={props.handleChange}
      id="txt"
      placeholder="Enter new note here..."
    />
  )
}

function NoteImg(props) {
  return (
    <input
      className="input-add-note note-text"
      type="text"
      onChange={props.handleChange}
      id="url"
      placeholder="Enter image url..."
    />
  )
}

function NoteTodos(props) {
  return (
    <input
      className="input-add-note note-text"
      type="text"
      onChange={props.handleChange}
      id="title"
      placeholder="Enter ',' after every todo..."
    />
  )
}

function NoteVideo(props) {
  return (
    <input
      className="input-add-note note-text"
      type="text"
      onChange={props.handleChange}
      id="src"
      placeholder="Enter video src..."
    />
  )
}

const { useEffect, useState } = React

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

export function NoteAdd() {
  const cmps = ['NoteTxt', 'NoteImg', 'NoteTodos', 'NoteVideo']
  const [cmpInput, setCmpInput] = useState('NoteTxt')

  function onChangeCmp(type) {
    setCmpInput(type)
  }

  function handleChange(event) {
    console.log('Value changed:', event.target.value)
  }

  return (
    <section className="add-note-main">
      <div className="input-with-buttons">
        <DynamicCmp cmpType={cmpInput} handleChange={handleChange} />

        <div className="note-input-buttons">
          {cmps.map((cmp) => (
            <button
              key={cmp}
              className={`note-input-btn ${cmp === cmpInput ? 'active' : ''}`}
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
                <span className="material-symbols-outlined">video_library</span>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

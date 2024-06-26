export function NotePreview() {
  const notes = [
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

  console.log('notes:', notes)

  return (
    <section className="note-list">
      <div className="note">
        <h1 className="note-title">{notes[1].info.title}</h1>
        <p className="note-txt">{notes[0].info.txt}</p>
        <div className="note-btns">
          <button className="note-btn">
            <img src="\assets\img\note icons\delete.png" alt="Delete Button" />
          </button>
          <button className="note-btn">
            <img src="\assets\img\note icons\palette.png" alt="Delete Button" />
          </button>
          <button className="note-btn">
            <img src="\assets\img\note icons\pin.png" alt="Delete Button" />
          </button>
        </div>
      </div>
    </section>
  )
}

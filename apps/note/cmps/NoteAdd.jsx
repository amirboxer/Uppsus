const { useEffect, useState } = React

export function NoteAdd() {
  return (
    <section className="add-note-main">
      <div className="input-with-buttons">
        <input className="note-text" type="text" placeholder="What's on your mind..." />
        <button
          className="note-input-btn"
          onClick={() => console.log('Button 1 clicked')}
        >
          <span class="material-symbols-outlined">add_comment</span>
        </button>
        <button
          className="note-input-btn"
          onClick={() => console.log('Button 2 clicked')}
        >
          <span class="material-symbols-outlined">add_photo_alternate</span>
        </button>
        <button
          className="note-input-btn"
          onClick={() => console.log('Button 3 clicked')}
        >
          <span class="material-symbols-outlined">youtube_activity</span>
        </button>
      </div>
    </section>
  )
}

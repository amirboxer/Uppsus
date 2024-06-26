const { useEffect, useState } = React


export function NoteAdd() {
  return (
    <section className="add-note-main">
      <div className="input-with-buttons">
        <input type="text" placeholder="What's on your mind..." />
        <button onClick={() => console.log("Button 1 clicked")}>B1</button>
        <button onClick={() => console.log("Button 2 clicked")}>B2</button>
        <button onClick={() => console.log("Button 3 clicked")}>B3</button>
      </div>
    </section>
  );
}
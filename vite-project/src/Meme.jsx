const Meme = () => {
  return (
    <main className="form-container">
      <div className="form">
        <input type="text" className="form-input form--left"></input>
        <input type="text" className="form-input form--right"></input>
        <button className="form-buton">Get a new meme image</button>
      </div>
      <div className="meme-container">
        <div className="meme-image">
          <h2 className="meme-text">SHUT UP</h2>
          <h2 className="meme-text">AND TAKE MY MONEY 🖼️</h2>
        </div>
      </div>
    </main>
  );
};

export default Meme;

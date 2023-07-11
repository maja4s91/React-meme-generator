import { useEffect, useState } from "react";

const Meme = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    async function getMemes() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setAllMemes(data.data.memes);
    }
    getMemes();
  }, []);

  const getMemeImage = () => {
    const url = allMemes[Math.floor(Math.random() * allMemes.length)].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setMeme((prevMeme) => ({ ...prevMeme, [name]: value }));
  };
  console.log(meme);
  return (
    <main className="form-container">
      <div className="form">
        <input
          type="text"
          className="form-input form--left"
          onChange={handleChange}
          name="topText"
          value={meme.topText}
          placeholder="Top text"
        ></input>
        <input
          type="text"
          className="form-input form--right"
          placeholder="Bottom text"
          onChange={handleChange}
          name="bottomText"
          value={meme.bottomText}
        ></input>
        <button className="form-button" onClick={getMemeImage}>
          Get a new meme image
        </button>
      </div>
      <div className="meme-container">
        <img src={meme.randomImage} className="meme-image" />
        <h2 className="meme-text top">{meme.topText}</h2>
        <h2 className="meme-text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
};

export default Meme;

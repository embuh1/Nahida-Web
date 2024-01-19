import React, { useState } from 'react';
import { mangalist } from './manga_list.js';
import './manga_component.css'

export default function Manga1() {
  const [index, setIndex] = useState(0);
  
  function handleNextClick() {
    // Check if index is at the end
    if (index === mangalist.length - 1) {
      // If at the end, wrap back to the beginning
      setIndex(0);
    } else {
      // Otherwise, increment the index
      setIndex(index + 1);
    }
  }

  function handlePrevClick() {
    // Check if index is at the beginning
    if (index === 0) {
      // If at the beginning, wrap to the end
      setIndex(mangalist.length - 1);
    } else {
      // Otherwise, decrement the index
      setIndex(index - 1);
    }
  }

  let manga = mangalist[index];
  return (
    <div className="box">
      <div className="group">
        <div className="overlap-group">
          <img className="gambar" alt="Gambar" src={manga.url} />
          <div className="text-wrapper">({index + 1} of {mangalist.length})</div>
          <div className="judul">{manga.name}</div>
          <div className="arthour">By {manga.artist}</div>
          <button onClick={handleNextClick}>
            <img className="kanan" alt="Kanan" src="https://media.discordapp.net/attachments/1169655452435492926/1192456704688930876/K.png?ex=65b25f59&is=659fea59&hm=97495c62840f874cb5532e1de310337c112a7e30110469d49dbdcb8982b641e4&=&format=webp&quality=lossless&width=613&height=613" />
          </button>
          <button onClick={handlePrevClick}>
            <img className="kiri" alt="Kiri" src="https://media.discordapp.net/attachments/1169655452435492926/1192456803523498045/K.png?ex=65b25f70&is=659fea70&hm=d4bf54230affa85695855d084ae1eaa9bc72c34839179921cc0b0c424d7a53c5&=&format=webp&quality=lossless&width=613&height=613" />
          </button>
        </div>
      </div>
    </div> 
  );
}
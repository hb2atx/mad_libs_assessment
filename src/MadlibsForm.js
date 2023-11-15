import React, { useState } from 'react';
import './MadlibsForm.css';

function MadlibsForm() {
    const[adjective, setAdjective] = useState('');
    const[noun, setNoun] = useState('');
    const[verb, setVerb] = useState('');
    const[color, setColor] = useState('');
    const[story, setStory] = useState('');

    const generateStory = () => {
        const newStory = `The ${adjective} ${noun} wanted to ${verb} wearing a ${color} outfit.`
        setStory(newStory)
    }
    return (
        <div>
            <div className="noun">
          <label>
        Noun:
        <input type="text" value={noun} onChange={(e) => setNoun(e.target.value)} />
      </label>
      </div>
      <div className="adjective">
      <label className="adjective">
        Adjective:
        <input type="text" value={adjective} onChange={(e) => setAdjective(e.target.value)} />
      </label>
      </div>
      <div className="verb">
      <label className="verb">
        Verb:
        <input type="text" value={verb} onChange={(e) => setVerb(e.target.value)} />
      </label>
      </div>
      <div className="color">
      <label className="color">
        Color:
        <input type="text" value={color} onChange={(e) => setColor(e.target.value)} />
      </label>
      </div>
      <div className="btn">
      <button onClick={generateStory}>Generate Story</button>
      </div>
      <p>{story}</p>
        </div>
    )
}

export default MadlibsForm;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faPen } from '@fortawesome/free-solid-svg-icons';

import happyImg from '../assets/images/happy.avif';
import lazyImg from '../assets/images/lazy.avif';
import creativeImg from '../assets/images/creative.avif';
import loveImg from '../assets/images/love.avif';
import lampImg from '../assets/images/genieFront.png';

const NotepadForm = () => {
  const [formData, setFormData] = useState({
    ingredients: "",
    time: "",
    mood: "",
    moodImage: "",
    preference: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleMoodSelect = (mood, image) => {
    setFormData({ ...formData, mood, moodImage: image });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/recipes", { state: formData });
  };


  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-4xl px-4 flex items-start justify-center space-x-10">
        {/* Notepad form */}
        <div className="w-full sm:w-2/3 lg:w-1/2 rounded-lg bluebg text-primary shadow-lg shadow-blue-500">
          <p className="text-2xl font-semibold pt-6 text-center flex items-center justify-center">
            <FontAwesomeIcon icon={faPen} className="mr-2 text-yellow-900" />
            Magic Recipe Notes
          </p>
          <form onSubmit={handleSubmit} className="shadow-md rounded p-3 max-w-md mx-auto">
            <div>
              <label className="block text-lg font-semibold">Ingredients:</label>
              <textarea
                name="ingredients"
                value={formData.ingredients}
                onChange={handleChange}
                className="w-full p-2 mt-2 border rounded"
                placeholder="E.g., chicken, tomato"
                required
              />
            </div>
            <div className="mt-2">
              <label className="block text-lg font-semibold">Time (minutes):</label>
              <input
                type="number"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full p-2 mt-2 border rounded"
                placeholder="E.g., 30"
              />
            </div>
            <div className="mt-2">
              <label className="block text-lg font-semibold">Mood:</label>
              <div className="flex space-x-6 mt-2 justify-between">
                <button
                  type="button"
                  onClick={() => handleMoodSelect("happy", happyImg)}
                  className="flex flex-col items-center text-center rounded-lg w-1/5 hover:shadow-lg"
                >
                  <img src={happyImg} alt="Happy" className="w-32 h-28 rounded-full mb-2" />
                  <span className="text-sm">Happy Vibes</span>
                  <p className="text-xs mt-2">Let’s take it to the next level!</p>
                </button>
                <button
                  type="button"
                  onClick={() => handleMoodSelect("lazy", lazyImg)}
                  className="flex flex-col items-center text-center rounded-lg w-1/5 hover:shadow-lg"
                >
                  <img src={lazyImg} alt="Lazy" className="w-32 h-28 rounded-full mb-2" />
                  <span className="text-sm">Lazy Day</span>
                  <p className="text-xs mt-2">Let’s take it slow and easy!</p>
                </button>

                <button
                  type="button"
                  onClick={() => handleMoodSelect("creative", creativeImg)}
                  className="flex flex-col items-center text-center rounded-lg w-1/5 hover:shadow-lg"
                >
                  <img src={creativeImg} alt="Creative" className="w-32 h-28 rounded-full mb-2" />
                  <span className="text-sm">Creative Sparks</span>
                  <p className="text-xs mt-2">Time to unleash your inner chef!</p>
                </button>

                <button
                  type="button"
                  onClick={() => handleMoodSelect("love", loveImg)}
                  className="flex flex-col items-center text-center rounded-lg w-1/5 hover:shadow-lg"
                >
                  <img src={loveImg} alt="Love" className="w-32 h-28 rounded-full mb-2" />
                  <span className="text-sm">Lovey-Dovey</span>
                  <p className="text-xs mt-2">Cooking from the heart, for the heart.</p>
                </button>
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-lg font-semibold">Preference (optional):</label>
              <input
                type="text"
                name="preference"
                value={formData.preference}
                onChange={handleChange}
                className="w-full p-2 mt-2 border rounded"
                placeholder="E.g., vegetarian, spicy"
              />
            </div>

            <button
              type="submit"
              className="mt-6 bg-primary text-sky-200 px-4 py-2 rounded hover:bg-sky-800  transition duration-300 flex items-center"
            >
              <FontAwesomeIcon icon={faLightbulb} className="mr-2 text-yellow-400" />
              Ask the Genie for Recipe Ideas
            </button>
          </form>
        </div>

        <div className="relative mt-36">
          <img src={lampImg} alt="Lamp" className="w-48 h-auto" />
        </div>
      </div>
    </div>
  );
};

export default NotepadForm;

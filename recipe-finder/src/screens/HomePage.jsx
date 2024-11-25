// HomePage.jsx
import React from 'react';
import MainPage from '../components/MainPage';
import WaitressIntro from '../components/GenieIntro';
import NotepadForm from '../components/NotepadForm';

const HomePage = ({ onSubmit }) => {
  return (
    <div>
      <MainPage />
      <WaitressIntro />
      <NotepadForm onSubmit={onSubmit} />
    </div>
  );
};

export default HomePage;

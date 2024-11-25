import React from 'react';
import MainPage from '../components/MainPage';
import Intro from '../components/GenieIntro';
import NotepadForm from '../components/NotepadForm';

const HomePage = ({ onSubmit }) => {
  return (
    <div>
      <MainPage />
      <Intro />
      <NotepadForm onSubmit={onSubmit} />
    </div>
  );
};

export default HomePage;

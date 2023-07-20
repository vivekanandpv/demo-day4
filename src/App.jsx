import React from 'react';
import Navbar from './Navbar';
import Sample from './Sample';

import { useSelector, useDispatch } from 'react-redux';
import { themeSlice } from './store/theme-slice';

const App = (props) => {
  const theme = useSelector((state) => state.theme);
  const language = useSelector((state) => state.language);

  const dispatch = useDispatch();

  const toggleTheme = () => {
    dispatch(themeSlice.actions.toggle());
  };

  return (
    <>
      <div className='p-5'>
        <h2>
          Redux Demo: {theme} / {language}
        </h2>
        <button className='btn btn-primary' onClick={toggleTheme}>
          Toggle
        </button>
        <hr />
        <Navbar />
        <Sample />
      </div>
    </>
  );
};

export default App;

import { useSelector, useDispatch } from 'react-redux';
import { themeSlice } from './store/theme-slice';
import { languageSlice } from './store/language-slice';

const Sample = (props) => {
  const theme = useSelector((state) => state.theme);
  const language = useSelector((state) => state.language);

  const dispatch = useDispatch();

  const toggleTheme = () => {
    dispatch(themeSlice.actions.toggle());
  };

  const changeLanguage = () => {
    dispatch(languageSlice.actions.changeLanguage('kn'));
  };

  return (
    <>
      <h3>
        Sample {theme} / {language}
      </h3>
      <button className='btn btn-primary' onClick={toggleTheme}>
        Toggle
      </button>

      <button className='btn btn-primary ms-4' onClick={changeLanguage}>
        Change Language
      </button>
    </>
  );
};

export default Sample;

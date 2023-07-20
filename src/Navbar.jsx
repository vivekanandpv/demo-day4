import { useSelector, useDispatch } from 'react-redux';

const Navbar = (props) => {
  const theme = useSelector((state) => state.theme);
  return (
    <>
      <h3>Navbar: {theme}</h3>
    </>
  );
};

export default Navbar;

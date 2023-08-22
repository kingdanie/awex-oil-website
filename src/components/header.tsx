import NavBar from './navbar';

const Header = () => {
  return (
    <div className="w-full flex flex-col items-center bg-primary relative">
      <NavBar />
      <h3>Header</h3>
    </div>
  );
};

export default Header;

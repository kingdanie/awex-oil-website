import Hero from './Hero';
import NavBar from './navbar';

const Header = () => {
  return (
    <div className="w-full flex flex-col items-center bg-primary relative min-h-[80]">
      <NavBar />
      <Hero title={"Header"} />
      {/* <h3>Header</h3> */}
    </div>
  );
};

export default Header;

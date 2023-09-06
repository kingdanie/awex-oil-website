import Footer from "./footer";
// import Header from "./header";
import HeaderHomepage from "./headerHomepage";

const LayoutHomepage = ({children} : {children: any}) => {
    return (
      <main className="relative min-h-screen bg-gray-200 flex flex-col justify-between items-center max-w-full">
        <HeaderHomepage />
        <div className="min-h-[40vh]">{children}</div>
        <Footer />
      </main>
    );
}

export default LayoutHomepage;
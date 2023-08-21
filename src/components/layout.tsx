import Footer from "./footer";
import Header from "./header";

const Layout = ({children} : {children: any}) => {
    return (
      <main className="min-h-screen bg-awex-grey flex flex-col justify-between items-center">
        <Header />
        <div>{children}</div>
        <Footer />
      </main>
    );
}

export default Layout;
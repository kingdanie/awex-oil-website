import Head from 'next/head';
import Footer from './footer';
import Header from './header';

const Layout = ({ children }: { children: any }) => {
  return (
    <main className="relative min-h-screen bg-gray-200 flex flex-col justify-between items-center max-w-full">
      <Head>
        <title>Awex Industries Limited</title>
        {/* <meta property="og:image" content={currentPhotoUrl} />
        <meta name="twitter:image" content={currentPhotoUrl} /> */}
      </Head>
      <Header />
      <div className="min-h-[40vh]">{children}</div>
      <Footer />
    </main>
  );
};

export default Layout;

import Navbar from "./Navbar";
import { useEffect } from "react";
import { useRouter } from "next/router";
import NProgress from "nprogress";
import Link from "next/link";

const Layout = ({ children, footer = true }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      console.log(url);
      NProgress.start();
    };

    router.events.on("routeChangeStart", handleRouteChange);

    router.events.on("routeChangeComplete", () => NProgress.done());

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  return (
    <>
      <Navbar />
      <main className="container py-4"> {children} </main>
      {footer && (
        <footer className="bg text-light text-center">
          <div className="container  p-1">
            <div className="social-media card-body ml-1  pl-1 text-info">
              <Link href="https://www.facebook.com/Innovationtechsa/">
                <i className="facebook fab fa-facebook-square  ">
                  <a> </a>
                </i>
              </Link>
              <Link href="https://www.instagram.com/hectord788/">
                <i className="instagram fab fa-instagram-square ">
                  <a> </a>
                </i>
              </Link>
              <Link href="https://twitter.com/HectordeHoyos4">
                <i className="twitter fab fa-twitter-square ">
                  <a> </a>
                </i>
              </Link>
              <Link href="https://www.youtube.com/channel/UCi5OK7qKDvhMUAQwBXnciKw">
                <i className="youtube fab fa-youtube-square ">
                  <a> </a>
                </i>
              </Link>
            </div>
            <h1> &copy; Hector de Hoyos Portafolio </h1>
            <p> 2020 - {new Date().getFullYear()} </p>
            <p> All Rights Reserverd. </p>
          </div>
        </footer>
      )}
    </>
  );
};

export default Layout;

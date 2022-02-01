import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

interface Props {
  shadow: boolean;
}

function Header(props: Props) {
  const { shadow } = props;
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    if (!window.onscroll) {
      window.onscroll = () => {
        setScrolledFromWindow(scrolled, setScrolled);
      };
    }

    // returning a function cleans up during component dismount
    return () => {
      window.onscroll = null;
    };
  }, [scrolled]);

  const showShadow = shadow ? "shadow" : "";
  const headerClass = scrolled ? "scrolled" : showShadow;
  const logoLightTextClass = scrolled ? "" : "light-text";
  const logoClass = scrolled ? "logo scrolled-logo" : "logo";

  return (
    <>
      <header className={headerClass}>
        <Link className={logoClass} to="/">
          Geek<span className={logoLightTextClass}>Python</span>
        </Link>
        <div className="topCenter">
        <ul className="topList">
          <Link to='/' className="topListItem">HOME</Link>
          <Link to='/articles' className="topListItem">ARTICLES</Link>
          <Link to='/' className="topListItem">ABOUT</Link>
        </ul>
      </div>
      </header>

      
    </>
  );
}

function setScrolledFromWindow(
  scrolled: boolean,
  setScrolled: (value: boolean) => void
) {
  const scrollPx = 100;
  if (window.scrollY >= scrollPx && scrolled === false) {
    setScrolled(true);
  } else if (window.scrollY < scrollPx && scrolled === true) {
    setScrolled(false);
  }
}

export default Header;

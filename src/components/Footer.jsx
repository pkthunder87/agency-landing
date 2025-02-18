import Attribution from "./Attribution";

function Footer() {
  return (
    <footer className="agency__footer">
      <div className="footer__container">
        <img
          className="footer__title"
          src="./assets/images/logo.svg"
          alt="sunnyside logo"
        />

        <nav className="footer__nav">
          <ul className="footer__links">
            <li className="footer__link">
              <a href="#">About</a>
            </li>
            <li className="footer__link">
              <a href="#">Services</a>
            </li>
            <li className="footer__link">
              <a href="#">Projects</a>
            </li>
          </ul>
        </nav>
        <ul className="footer__social-links">
          <li className="footer__social-link">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/"
            >
              <img
                src="./assets/images/icon-facebook.svg"
                alt=""
                className="footer__icon"
              />
            </a>
          </li>
          <li className="footer__social-link">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/"
            >
              <img
                src="./assets/images/icon-instagram.svg"
                alt=""
                className="footer__icon"
              />
            </a>
          </li>
          <li className="footer__social-link">
            <a target="_blank" rel="noreferrer" href="https://x.com/">
              <img
                src="./assets/images/icon-twitter.svg"
                alt=""
                className="footer__icon"
              />
            </a>
          </li>
          <li className="footer__social-link">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.pinterest.com/"
            >
              <img
                src="./assets/images/icon-pinterest.svg"
                alt=""
                className="footer__icon"
              />
            </a>
          </li>
        </ul>
        <Attribution />
      </div>
    </footer>
  );
}

export default Footer;

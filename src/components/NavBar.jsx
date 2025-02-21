import ModalMenu from "./ModalMenu";

function NavBar() {
  return (
    <nav className="agency__nav">
      <img
        className="nav__logo"
        src="./assets/images/logo.svg"
        alt="sunnyside logo"
      />

      <div className="nav__right">
        <div className="nav__menu">
          <img src="./assets/images/icon-hamburger.svg" alt="menu icon" />
          <ModalMenu />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

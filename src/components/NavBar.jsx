function NavBar() {
  return (
    <nav className="agency__nav">
      <img
        className="nav__logo"
        src="./assets/images/logo.svg"
        alt="sunnyside logo"
      />

      <div className="nav__right">
        <img src="./assets/images/icon-hamburger.svg" alt="menu icon" />
      </div>
    </nav>
  );
}

export default NavBar;

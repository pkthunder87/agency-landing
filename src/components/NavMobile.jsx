import ModalMenu from "./ModalMenu";

function NavMobile({
  handleClick,
  menuOpenedStyle,
  isMenuOpen,
  setIsMenuOpen,
}) {
  return (
    <div className="nav__menu" onClick={handleClick}>
      <img
        className="menu__icon"
        src="./assets/images/icon-hamburger.svg"
        alt="menu icon"
        style={{ filter: menuOpenedStyle }}
      />
      {isMenuOpen && (
        <ModalMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      )}
    </div>
  );
}

export default NavMobile;

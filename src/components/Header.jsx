import LogoImg from "../images/quiz-click-logo-transparent.png";

const Header = () => {
  return (
    <>
      <header>
        <div className="header-logo">
          <a href="./index.html">
            <img src={LogoImg} alt="Quiz Click Logo" />
          </a>
        </div>

        
      </header>
    </>
  );
};

export default Header;

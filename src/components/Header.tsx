import "../styles/header.css";
const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="logo-container">
          <h1>SPACE X</h1>
        </div>
        <nav>
          <ul>
            <li>Launches</li>
            <li>Missions</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

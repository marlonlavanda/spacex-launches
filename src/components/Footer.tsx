import "../styles/footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="name-container">
          <span>SpaceX © 2022</span>
        </div>
        <nav>
          <a href="https://www.spacex.com/media/privacy_policy_spacex.pdf">
            PRIVACY POLICY
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;

import "./Page1.css";

const Page1 = () => (
  <div className="page1-container">
    <div className="logo"></div>
    <div className="header-container">
      <div className="language-options"></div>
      <div className="header-options">
        <div className="header-text">Main One</div>
        <div className="header-text">Page Two</div>
        <div className="header-text">Page Three</div>
        <div className="header-text">About Us</div>
        <div className="header-text">Our Work</div>
        <div className="header-text">Contact</div>
      </div>
      <div className="language-options">
        <div className="header-text uppercase">EN | GR</div>
        <div className="search-logo"></div>
      </div>
    </div>
    <div className="body-container">
      <div className="title-text">S.und Co</div>
      <div className="rectangle"></div>
      <div className="body-text">
        To take a trivial example, which of us ever undertakes laborious
        physical exercise, except to obtain some advantage from it?
      </div>
      <div className="dot-container">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>
  </div>
);

export { Page1 };
export default Page1;

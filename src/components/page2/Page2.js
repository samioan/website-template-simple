import "./Page2.css";

const Page2 = () => (
  <div className="page2-container">
    <div className="row1">
      <div className="photo-image"></div>
      <div className="text-body1">
        <div className="small-title">Since the 1500s</div>
        <div className="large-title">The standard</div>
        <div className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt.
        </div>
      </div>
    </div>
    <div className="row2">
      <div className="photo-image2"></div>
      <div className="text-body1">
        <div className="small-title">Since the 1500s</div>
        <div className="large-title">The standard</div>
        <div className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <button className="button">Search</button>
      </div>
    </div>
    <div className="row3">
      <div className="photo-image3"></div>
      <div className="text-body1">
        <div className="form-text">Contact Us</div>
        <div className="sub-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <input className="input-button" value="Full Name*"></input>
        <div className="helper-text">This field is required</div>
        <input className="input-button" value="E-mail*"></input>
        <div className="helper-text">Help Text</div>
        <input className="input-button" value="Phone*"></input>
        <div className="helper-text">This field is required</div>
        <div className="category-container">
          <div className="dropdown-button">Category</div>
          <div className="dropdown-button">Subcategory</div>
        </div>
        <textarea className="message-button" value="Message"></textarea>
        <div className="helper-text2">
          Please select at least one of the following:
        </div>
        <div className="options-container">
          <div className="options-rectangle"></div>
          <div className="options">Option 1</div>
          <div className="options-rectangle"></div>
          <div className="options">Option 2</div>
        </div>
        <button className="button button2">Submit</button>
      </div>
    </div>
    <div className="footer">
      <div className="copyright-text">© The standard Copywrite 2020</div>
      <div className="cookies-text">Cookies. | Privacy.</div>
      <div className="footer-logo"></div>
    </div>
  </div>
);

export { Page2 };
export default Page2;

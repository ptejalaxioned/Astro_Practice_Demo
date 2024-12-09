import FooterLogo from '../assets/images/logo2.png';
//footer section start
export default function FooterSection() {
  return (
    <>
      <footer>
        <div className="wrapper">
          <div className="footer-left">
            <figure>
              <img src={FooterLogo.src} alt="Logo" />
            </figure>
            <p className="single-letter-caps footer-para">
              Lorem ipsum dolor sit amet adipisicing elit neque mollitia.
            </p>
            <ul className="social-media-icons">
              <li>
                <a
                  href="#FIXME"
                  title="Twitter"
                  target="_blank"
                  className="twitter"
                  rel="noopener noreferrer">
                  twitter
                </a>
              </li>
              <li>
                <a
                  href="#FIXME"
                  title="Facebook"
                  target="_blank"
                  className="facebook"
                  rel="noopener noreferrer">
                  facebook
                </a>
              </li>
              <li>
                <a
                  href="#FIXME"
                  title="Youtube"
                  target="_blank"
                  className="youtube"
                  rel="noopener noreferrer">
                  youtube
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-center-left">
            <h5 className="first-letter-caps">contact info</h5>
            <ul className="contact-detailes">
              <li>
                <address className="location">1234 street name</address>
              </li>
              <li>
                <address className="pin">City,AA 99999</address>
              </li>
              <li>
                <a
                  href="mailto:support@mobirise.com"
                  className="email-icon contact-info"
                  title="Email"
                  target="_blank"
                  rel="noopener noreferrer">
                  support@mobirise.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+1(0)000-0000-001"
                  className="phone-number contact-info"
                  title="Phone Number"
                  target="_blank"
                  rel="noopener noreferrer">
                  +1(0)000 0000 001
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-center-right">
            <div className="popuptext">
              We would be happy to answer your questions
            </div>
            <a
              href="#FIXME"
              target="self"
              title="TechM4 Theme"
              className="theme">
              TechM4 Themes
            </a>
          </div>
          <div className="footer-right">
            <h5 className="first-letter-caps">support and downloads</h5>
            <p className="single-letter-caps footer-para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit neque
              mollitia.
            </p>
            <div className="apple-google">
              <a
                href="#FIXME"
                target="_blank"
                title="App Store"
                className="download-app app-store first-letter-caps apple"
                rel="noopener noreferrer">
                app store
              </a>
              <a
                href="#FIXME"
                target="_blank"
                title="App Store"
                className="download-app google-play first-letter-caps google"
                rel="noopener noreferrer">
                google play
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
//footer section end

import Container from "react-bootstrap/esm/Container";
import classes from "./Footer.module.css";
import fontawesome from "@fortawesome/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGooglePlusG,
  faLinkedinIn,
  faTwitterSquare,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import {
  faEnvelope,
  faPhone,
  faBlenderPhone,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
fontawesome.library.add(
  faFacebookF,
  faGooglePlusG,
  faLinkedinIn,
  faTwitterSquare,
  faYoutube,
  faEnvelope,
  faPhone,
  faBlenderPhone,
);
const Footer = () => {
  return (
    <footer className={`pt-4 pb-4 ${classes.footer}`}>
      <Container className="">
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-lg-6">
            <h3>Our Address</h3>
            <p>121, Clear Water Bay Road Clear Water Bay, Kowloon Hong Kong</p>
            <p>
              <FontAwesomeIcon icon="fa-solid fa-phone" /> +852 1234 5678
            </p>
            <p>
              <FontAwesomeIcon icon="fa-solid fa-blender-phone" />
              +852 8765 4321
            </p>
            <p> <FontAwesomeIcon icon="fa-solid fa-envelope" />confusuin@food.net</p>
          </div>

          <div className="col-12 col-lg-6">
            <ul className={classes["footer-social-network"]}>
              <li className={`${classes["social-item"]} ${classes.facebook}`}>
                <Link className={classes["social-link"]} to="/">
                  <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
                </Link>
              </li>
              <li className={`${classes["social-item"]} ${classes.google}`}>
                <Link className={classes["social-link"]} to="/">
                  <FontAwesomeIcon icon="fa-brands fa-google-plus-g" />
                </Link>
              </li>
              <li className={`${classes["social-item"]} ${classes.linkin}`}>
                <Link className={classes["social-link"]} to="/">
                  <FontAwesomeIcon icon="fa-brands fa-linkedin-in" />
                </Link>
              </li>
              <li className={`${classes["social-item"]} ${classes.youtube}`}>
                <Link className={classes["social-link"]} to="/">
                  <FontAwesomeIcon icon="fa-brands fa-youtube" />
                </Link>
              </li>
              <li className={`${classes["social-item"]} ${classes.facebook}`}>
                <Link className={classes["social-link"]} to="/">
                  <FontAwesomeIcon icon="fa-solid fa-envelope" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
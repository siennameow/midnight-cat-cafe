import React from "react";
import "../Footer/footer.css";
import Logo from "../../assets/images/logo1.png";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
library.add(faFacebookF);
library.add(faLinkedin);
library.add(faGithub);
library.add(faTwitter);

function Footer() {
  return (
    <div>
      <div className="new_footer_area bg_color">
        <div className="new_footer_top">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-6 text-center">
                <div
                  className="f_widget company_widget wow fadeInLeft"
                  data-wow-delay="0.2s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.2s",
                    animationName: "fadeInLeft",
                  }}
                >
                  <h3 className="f-title f_600 t_color f_size_18">
                    Get in Touch
                  </h3>
                  <p>Don’t miss any updates of our new menus and events!</p>
                  <form
                    action="#"
                    className="f_subscribe_two mailchimp"
                    novalidate="true"
                    _lpchecked="1"
                  >
                    <input
                      type="text"
                      name="EMAIL"
                      className="form-control memail"
                      placeholder="Email"
                    ></input>
                    <button className="btn btn_get btn_get_two" type="submit">
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-lg-5 col-md-6 text-center">
                <div
                  className="f_widget social-widget pl_70 wow fadeInLeft"
                  data-wow-delay="0.8s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.4s",
                    animationName: "fadeInLeft",
                  }}
                >
                  <h3 className="f-title f_600 t_color f_size_18">Follow Us</h3>
                  <div className="f_social_icon">
                    <a href="/">
                      {" "}
                      <FontAwesomeIcon icon={["fab", "facebook-f"]} />
                    </a>
                    <a href="/">
                      {" "}
                      <FontAwesomeIcon icon={["fab", "linkedin"]} />
                    </a>
                    <a href="https://github.com/jvbridge/midnight-cat-cafe">
                      {" "}
                      <FontAwesomeIcon icon={["fab", "github"]} />
                    </a>
                    <a href="/">
                      {" "}
                      <FontAwesomeIcon icon={["fab", "twitter"]} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 text-center">
                <img src={Logo} alt="logo" style={{ height: 100 }}></img>
              </div>
            </div>
          </div>
          <div className="footer_bg">
            <div className="footer_bg_one"></div>
            <div className="footer_bg_two"></div>
          </div>
        </div>
        <div className="footer_bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-sm-7">
                <p className="mb-0 f_400">
                  © Midnight Cat Cafe Inc.. 2022 All rights reserved.
                </p>
              </div>
              <div className="col-lg-6 col-sm-5 text-right">
                <p>
                  Made with 💜 by{" "}
                  <a
                    href="https://github.com/jvbridge/midnight-cat-cafe"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    J. L. C. S
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

import "../../../../design-system/main.css";
import "./Style.css";
import NavItems from "./NavItems";
import { faBars, faEarth, faWorm } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Herfa,
  Link,
  LinkWrapper,
  Navbarwrapper,
  Navcontent,
  Navtitle,
} from "./styled";
import { theme } from "../../../../design-system/Config";
export default function Navbar() {
  // handel navbar -- responsive
  const handelMenu = () => {
    var x = document.getElementById("link");
    x.style.display = "block";
  };
  return (
    <Navbarwrapper id="scroll">
      <div className="container" style={{ position: "relative" }}>
        <Navcontent>
          <div style={{ cursor: "pointer" }}>
            <Navtitle id="H">حِــ</Navtitle>
            <Herfa id="erfa">رفه</Herfa>
          </div>
          <LinkWrapper id="link">
            {/* <NavItems /> */}
            <ul>
              <li>
                <Link href="/" id="home">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link href="/services" id="services">
                  الخدمات
                </Link>
              </li>
              <li>
                <Link href="#about" id="aboutUs">
                  عَـنَّــا
                </Link>
              </li>
              <li>
                <Link href="/contact" id="contact">
                  تواصل معنا
                </Link>
              </li>
            </ul>
          </LinkWrapper>
          <a href="#" className="menu" onClick={handelMenu}>
            <FontAwesomeIcon
              icon={faBars}
              size="xl"
              color={theme.primary}
              className="bar"
            />
          </a>

          <div id="earth">
            <FontAwesomeIcon icon={faEarth} size="xl" />
            <div id="language">
              <span className="outline-primary" id="ar">
                AR
              </span>
              <span className="outline-secondary" id="en">
                EN
              </span>
            </div>
          </div>
        </Navcontent>
      </div>
    </Navbarwrapper>
  );
}

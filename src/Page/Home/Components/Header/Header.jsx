import { Link } from "react-router-dom";
import { H2, HeaderWrapper, In, Title, Up } from "./styled";
import "./Style.css";
export default function Header() {
  return (
    <div className="parent">
      <HeaderWrapper className="Header">
        <div className="content">
          <Title className="title" id="title1">حرفيين</Title>
          <Title className="title"id="title2">متخصصين</Title>
          <H2 className="title"id="title3"> علي أعلي مستوي </H2>
        </div>
        {/* Button in styled */}
        <div className="button">
          <Link to="/login">
            <In className="btn-In" id="btn-In">تسجيل الدخول</In>
          </Link>
          <Link to="/signup">
            <Up className="btn-Up"id="btn-Up">إنشاء حساب</Up>
          </Link>
        </div>
      </HeaderWrapper>
    </div>
  );
}

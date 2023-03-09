import React from "react";
import { Check, Content, H1, Input, LOG, LoginWrapper } from "./Styled";
import "./LogIn.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import setLang from "../../LogLang";
export default function LogIn() {
  return (
    <LoginWrapper>
      <div className="container" style={{ position: "relative" }}>
        <Content>
          <form style={{ width: "90%" }}>
            <H1 id="login">تسجيل الدخـول</H1>
            <Input
              id="emailIn"
              type="email"
              className="form-control mt-5"
              placeholder="البريد الإلكتروني"
            />
            <br />
            <Input
              id="passwordIn"
              type="password"
              className="form-control"
              placeholder="كلمـة السر "
            />
            <br />
            <Check>
              <input type="checkbox" name="check" />
              <label for="check" id="remember">
                تذكرني
              </label>
            </Check>
            <LOG className="btn mt-3" id="login2">
              تسجيل الدخول
            </LOG>
          </form>
        </Content>
      </div>
    </LoginWrapper>
  );
}

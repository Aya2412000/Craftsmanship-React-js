import React from "react";
import {
  Content,
  LOG,
  H1,
  Work,
  SignupWrapper,
  Input,
  Select,
  Option,
} from "./Styled";
export default function Signup() {
  const handelCraftman = () => {
    document.getElementById("cr1").style.maxHeight = "999px";
    document.getElementById("cr1").style.overflow = "visable";
  };
  return (
    <SignupWrapper>
      <Content>
        <form style={{ width: "90%" }}>
          <H1 id="signUp">إنشاء حساب الآن ..!</H1>
          <Input
            id="Fname"
            className="form-control mb-3"
            type="text"
            placeholder="الاسم الأول"
            required
          />

          <Input
            id="Lname"
            className="form-control mb-3"
            type="text"
            placeholder="اسم العائلة"
            required
          />
          <Input
            id="emailUp"
            className="form-control mb-3"
            type="email"
            placeholder="البريد الإكتروني"
            required
          />
          <Input
            id="phone"
            className="form-control mb-3"
            type="tel"
            placeholder="رقم الهاتف"
            required
          />
          <Input
            id="address"
            className="form-control mb-3"
            type="text"
            placeholder="العنوان"
            required
          />
          <Input
            id="birth"
            className="form-control mb-3"
            type="date"
            placeholder="تاريخ الميلاد"
            required
          />
          <Input
            id="passwordUp"
            className="form-control mb-3"
            type="password"
            placeholder="الرقم السري"
            required
          />
          <div>
            <input onClick={handelCraftman} type="checkbox" id="craftsman" />
            <label for="craftsman">حِـرفي</label>
            <br />
            <input type="checkbox" id="client" />
            <label for="client">عميل</label>
          </div>
          {/* <mark onClick={handelCraftman}>حِـرفي</mark>
          <Option>عميل</Option> */}

          <Work id="cr1">
            <Select>
              <option value="Carpenter">Carpenter1</option>
              <option value="">Carpenter2</option>
              <option value="">Carpenter3</option>
              <option value="">Carpenter4</option>
              <option value="">Carpenter5</option>
            </Select>
          </Work>
          <LOG className="btn mt-3">تسجيــل</LOG>
        </form>
      </Content>
    </SignupWrapper>
  );
}

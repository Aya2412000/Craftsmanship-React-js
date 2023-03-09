import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  A,
  ContactUsWrapper,
  Content,
  H1,
  Icon,
  Input,
  Send,
  Textarea,
  Wrapper,
} from "./Styled";

export default function ContactUs() {
  return (
    <ContactUsWrapper>
      <Wrapper>
        <Content>
          <H1>تواصـل معنا</H1>
          <form style={{ width: "90%", margin: "3rem auto" }}>
            <Input className="form-control" type="email" placeholder="البريد الإلكتروني" />
            <br />
            <Textarea
              className="form-control"
              placeholder="رساله.."
              maxLength={"400"}
              minLength={"100"}
            />
            <Send className="btn mt-5">إرسـال</Send>
          </form>
          {/* part of social-media */}
          <Icon>
          <A href="http://www.facebook.com"><FontAwesomeIcon icon={faFacebook} size="xl"/></A>
          <A href="http://www.twitter.com"><FontAwesomeIcon icon={faTwitter} size="xl"/></A>
          <A href="http://www.instgram.com"><FontAwesomeIcon icon={faInstagram} size="xl"/></A>
          </Icon>
        </Content>
      </Wrapper>
    </ContactUsWrapper>
  );
}

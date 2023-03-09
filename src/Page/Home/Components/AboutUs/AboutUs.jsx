import React from "react";
import img1 from "images/images/4.jpg";
import "./About.css";
import { Aboutus, AboutUsWrapper, Content, Img, Text } from "./styled";
export default function AboutUs() {
  return (
    <>
      <div className="container ">
        <Content id="about">
          <Aboutus id="About">عَـنَّــا</Aboutus>
          <AboutUsWrapper className="about">
            <div className="text">
              <Text className="p" id="p1">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur sint rem cumque temporibus eveniet quaerat numquam
                saepe, omnis modi! Voluptatibus distinctio aliquid at laborum
                harum provident, consequuntur fuga culpa fugiat!
              </Text>
              <Text className="p" id="p2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur sint rem cumque temporibus eveniet quaerat numquam
                saepe, omnis modi!
              </Text>
              <Text className="p" id="p3">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur sint rem cumque temporibus eveniet quaerat numquam
                saepe, omnis modi! Voluptatibus distinctio aliquid at laborum
                harum provident, consequuntur fuga culpa fugiat!
              </Text>
            </div>
            <div className="photo">
              <Img className="img" src={img1} alt="img1" />
            </div>
          </AboutUsWrapper>
        </Content>
      </div>
    </>
  );
}

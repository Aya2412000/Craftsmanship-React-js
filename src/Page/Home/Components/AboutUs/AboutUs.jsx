import React from "react";
import img1 from "images/images/4.jpg";
import { Aboutus, AboutUsWrapper, Img, Text } from "./styled";
export default function AboutUs() {
  return (
    <>
      <div className="container">
        <AboutUsWrapper>
          <div style={{ width: "50%" }}>
            <Aboutus>About Us</Aboutus>
            <Text>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur sint rem cumque temporibus eveniet quaerat numquam
              saepe, omnis modi! Voluptatibus distinctio aliquid at laborum
              harum provident, consequuntur fuga culpa fugiat!
            </Text>
            <Text>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur sint rem cumque temporibus eveniet quaerat numquam
              saepe, omnis modi!
            </Text>
            <Text>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur sint rem cumque temporibus eveniet quaerat numquam
              saepe, omnis modi! Voluptatibus distinctio aliquid at laborum
              harum provident, consequuntur fuga culpa fugiat!
            </Text>
          </div>
          <div style={{ width: "50%" }}>
            <Img src={img1} alt="img1" />
          </div>
        </AboutUsWrapper>
      </div>
    </>
  );
}

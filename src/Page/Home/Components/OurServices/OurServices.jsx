import React from "react";
import Slider from "./Slider";
import { Content, Our, OurServicesWrapper, P, Services } from "./styled";

export default function OurServices() {
  return (
    <>
      <div className="container">
        <OurServicesWrapper>
          <Content>
            <Our>
              Our <Services>Services</Services>
            </Our>
            <P>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae earum tenetur odio,
            </P>
          </Content>
          <Slider />
        </OurServicesWrapper>
      </div>
    </>
  );
}

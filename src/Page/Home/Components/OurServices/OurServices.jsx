import React from "react";
import Services from "./Services";
import { Content, Our, OurServicesWrapper, P, Service } from "./styled";
import "./Style.css";
export default function OurServices() {
  return (
    <>
      <div className="container">
        <OurServicesWrapper>
          <Content>
            <Our id="our">بعض </Our>
            <Service id="ser">خدماتنا</Service>
            <P id="text">جـرَّب خدمتك بنفسك الآن ..</P>
          </Content>
          <Services />
        </OurServicesWrapper>
      </div>
    </>
  );
}

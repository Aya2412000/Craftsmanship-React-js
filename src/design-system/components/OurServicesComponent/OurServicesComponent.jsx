import React from "react";
import { Img, OurServicesWrapper, Work } from "./styled";
export default function OurServicesComponent({ img, work, alt }) {
  return (
    <OurServicesWrapper>
      <Img src={img} alt={alt} width="100%" />
      <Work>{work}</Work>
    </OurServicesWrapper>
  );
}

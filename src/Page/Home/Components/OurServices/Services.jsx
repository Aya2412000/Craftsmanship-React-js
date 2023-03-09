// import required modules
import { OurServicesDate } from "../../../../design-system/components/OurServicesComponent/OurServicesData";
import OurServicesComponent from "../../../../design-system/components/OurServicesComponent/OurServicesComponent";
import img2 from "images/Our Services/bricklaying-construction-worker-building-brick-wall.jpg";
import img1 from "images/Our Services/carpenter.jpg";
import img3 from "images/Our Services/lamp.jpg";
import img4 from "images/Our Services/paint-floor.jpg";
import img5 from "images/Our Services/piping.jpg";
import { DivWrapper, Img, Ourservices, Work } from "./styled";
export default function Services() {
  return (
    <div className="container">
      <div className="services">
        {/* map outher solution */}
        {/* {OurServicesDate.map((item) => {
          return (
             <OurServicesComponent 
                img={item.img}
                work={item.work}
                alt={item.alt}
                key={item.id}
              />
           
          );
        })} */}
        <Ourservices>
          <DivWrapper>
            <Img className="img" src={img1} alt="img1" width="90%" />
            <Work id="work1">النجـارة</Work>
          </DivWrapper>
          <DivWrapper>
            <Img className="img" src={img2} alt="img2" width="90%" />
            <Work id="work2">المحـارة</Work>
          </DivWrapper>
          <DivWrapper>
            <Img className="img" src={img3} alt="img3" width="90%" />
            <Work id="work3">الكهربــاء</Work>
          </DivWrapper>
          <DivWrapper>
            <Img className="img" src={img4} alt="img4" width="90%" />
            <Work id="work4">أعمال الدهـان</Work>
          </DivWrapper>
          <DivWrapper>
            <Img className="img" src={img5} alt="img5" width="90%" />
            <Work id="work5">السبـاكة</Work>
          </DivWrapper>
        </Ourservices>
      </div>
    </div>
  );
}

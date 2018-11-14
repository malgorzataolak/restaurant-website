import React, { Component, Fragment } from "react";
import styled from "styled-components";
import SectionTitle from "../../components/SectionTitle";
import BackgroundText from "../../components/BackgroundText";
import posed, { PoseGroup } from "react-pose";
import s1 from "./assets/s1.png";
import s2 from "./assets/s2.png";
import s3 from "./assets/s3.png";
import s4 from "./assets/s4.png";
import s5 from "./assets/s5.png";
import s6 from "./assets/s6.png";
import "aos/dist/aos.css";

const SampleText = () => (
  <Fragment>
    <h3>Lorem Ipsum</h3>
    <LongText>
      Timeam albucius accusamus sit no, duo in admodum assueverit. Iisque
      minimum salutatus eu duo, vis an decore lobortis disputando, an pri consul
      nominati volutpat.
    </LongText>
    <ShortText>
      Timeam albucius accusamus sit no, duo in admodum assueverit.{" "}
    </ShortText>
  </Fragment>
);

const SpecialitiesTable = props => {
  return (
    <Fragment>
      <SpecTable>
        <ImgContainer data-aos="fade-up" data-aos-duration="2500">
          <img src={s1} />
          <TextBlock>
            <SampleText />
          </TextBlock>
        </ImgContainer>
        <ImgContainer data-aos="fade-up" data-aos-duration="1800">
          <img src={s2} />{" "}
          <TextBlock>
            <SampleText />
          </TextBlock>
        </ImgContainer>
        <ImgContainer data-aos="fade-up" data-aos-duration="2000">
          <img src={s3} />{" "}
          <TextBlock>
            <SampleText />
          </TextBlock>
        </ImgContainer>
        <ImgContainer data-aos="fade-up" data-aos-duration="2400">
          <img src={s4} />{" "}
          <TextBlock>
            <SampleText />
          </TextBlock>
        </ImgContainer>
        <ImgContainer data-aos="fade-up" data-aos-duration="1970">
          <img src={s5} />{" "}
          <TextBlock>
            <SampleText />
          </TextBlock>
        </ImgContainer>
        <ImgContainer data-aos="fade-up" data-aos-duration="2000">
          <img src={s6} />{" "}
          <TextBlock>
            <SampleText />
          </TextBlock>
        </ImgContainer>
      </SpecTable>
    </Fragment>
  );
};

const Specialities = () => (
  <SpecialitiesContainer>
    <BackgroundText text={"Specialities"} />
    <SectionTitle text={"Specialities"} />

    <SpecialitiesTable />
  </SpecialitiesContainer>
);

export default Specialities;

const ShortText = styled.p`
  display: none;
  @media screen and (max-width: 600px) {
    display: block;
  }
`;

const LongText = styled.p`
  display: none;
  @media screen and (min-width: 601px) {
    display: block;
  }
`;

const TextBlock = styled.div`
  max-height: 0;
  background: rgba(255, 255, 255, 0.7);
  position: absolute;
  bottom: 0;
  text-align: left;
  padding: 20px 2%;
  h3 {
    margin: 0;
    letter-spacing: 0.06rem;
  }
  p {
    font-size: 0.9rem;
  }
`;

const ImgContainer = styled.div`
  position: relative;
  img {
    vertical-align: bottom;
  }
  ${TextBlock} {
    visibility: hidden;
    width: inherit;
  }
  &:hover {
    ${TextBlock} {
      display: block;
      overflow-y: hidden;
      visibility: visible;
      max-height: 50%;
      transition: all 0.6s cubic-bezier(0, 1, 0.2, 1);
    }
  }
`;

const SpecTable = styled.div`
  min-height: 550px;
  max-width: 1100px;
  margin: 0 auto;
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 20px;
  justify-items: center;
  @media screen and (max-width: 1000px) {
    margin-left: 5%;
    margin-right: 5%;
    grid-row-gap: 0px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
    img {
      width: 100%;
    }
  }
`;

const SpecialitiesContainer = styled.div`
  position: relative;
  margin-top: 50px;
  min-height: 500px;
  text-align: center;
`;

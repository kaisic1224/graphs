import Head from "next/head";
import Image from "next/image";

import styled from "styled-components";
import Line from "../components/Line";

const Title = styled.h1`
  color: blue;
  transition: color 250ms ease;
  &:hover {
    color: red;
  }
`;

const Section = styled.div`
  width: 40vw;
`;

export default function Home() {
  const name = "jeremy";
  return (
    <>
      <Head>
        <title>Hunk | Dashboard</title>
        <meta name='description' content='Generated by create next app' />
      </Head>

      <Title>Welcome, {name}</Title>

      <Section>
        <Line stock='AAPL' />
      </Section>
    </>
  );
}

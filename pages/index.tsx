import Head from "next/head";
import Image from "next/image";
import styled, { useTheme } from "styled-components";
import Doughnut from "../components/Doughnut";
import Line from "../components/Line";
import { useUser } from "@auth0/nextjs-auth0/client";

const Title = styled.h1`
  color: ${(props) => props.theme.honey};
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
  const theme = useTheme();
  const { user } = useUser();
  return (
    <>
      <Head>
        <title>Hunk | Dashboard</title>
        <meta name='description' content='Generated by create next app' />
      </Head>

      <Title theme={theme}>Welcome, {user?.name}</Title>

      <Section>
        <Line stock='AAPL' />
      </Section>
      <Section>
        <Doughnut />
      </Section>
    </>
  );
}

import "../styles/globals.css";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import styled, { ThemeProvider } from "styled-components";
import SideMenu from "../components/SideMenu";
import { useState } from "react";

const theme = {
  black: "#000814",
  navy: "#001d3d",
  dark: "#003566",
  purple: "#9c9cfb",
  plum: "#d0adf0",
  honey: "#ffc300",
  yellow: "#ffd60a"
};

interface modalProps {
  open: boolean;
  scroll: number;
}

const Modal = styled.div<modalProps>`
  max-height: ${(props) => (props.open ? "100vh" : "")};
  position: relative;
  overflow: hidden;
  top: ${(props) => props.open && props.scroll};
  transform: ${(props) => (props.open ? "scaleY(0.9) scaleX(0.85)" : "")};
  margin-left: ${(props) => props.open && "2.5rem"};
  transition: transform 250ms ease;
  isolation: isolate;
  ::after {
    content: "";
    inset: 0;
    position: fixed;
    z-index: 100;
    background-color: ${(props) =>
      props.open ? "rgb(0, 0, 0, 0.5)" : "rgb(0, 0, 0, 0)"};
    transition: background-color 250ms ease;
    pointer-events: ${(props) => !props.open && "none"};
  }
`;

export default function App({ Component, pageProps }: AppProps) {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(0);

  return (
    <>
      <DefaultSeo
        openGraph={{
          type: "website",
          locale: "en_IE",
          url: "https://www.url.ie/",
          siteName: "SiteName"
        }}
        titleTemplate='Graphs | %s'
      />
      <ThemeProvider theme={theme}>
        <button
          style={{ position: "fixed", zIndex: 9999 }}
          onClick={() => {
            setOpen((prevopen) => !prevopen);
            setScroll(window.scrollY);
          }}
        >
          wattup
        </button>
        <SideMenu open={open} />
        <Modal scroll={scroll} open={open} onClick={() => setOpen(false)}>
          <Component {...pageProps} />
        </Modal>
      </ThemeProvider>
    </>
  );
}

import styled, { useTheme } from "styled-components";
import { FaHome } from "react-icons/fa";
import { SiMarketo } from "react-icons/si";
import { BsCoin } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { useRouter } from "next/router";
import Link from "next/link";

interface sidemenuProps {
  open: boolean;
}

interface itemProps {
  path: string;
  link: string;
}

const Menu = styled.div<sidemenuProps>`
  display: flex;
  gap: 1rem;
  height: calc(100vh - 2rem);
  margin: 1rem 0 1rem 1rem;
  padding: 2rem;
  position: fixed;
  flex-direction: column;
  border-radius: 12px;
  background-color: rgb(27, 27, 27);
  translate: ${(props) => (props.open ? "0" : "calc(-100% - 2rem)")};
  transition: translate 250ms ease;
`;

const Item = styled.div<itemProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-align: center;
  cursor: pointer;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.25rem;
  background-color: ${(props) =>
    props.path === props.link ? "rgba(0, 8, 20, 0.4)" : ""};
  ::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: calc(100% + 0.5rem);
    aspect-ratio: 1;
    background-color: rgb(0, 8, 20, 0);
    border-radius: 0.25rem;
    pointer-events: none;
    z-index: -2;
  }
  :hover::after {
    background-color: rgba(0, 12, 29, 0.3);
  }
  :focus::after {
    width: calc(100% + 1rem);
    background-color: rgba(0, 2, 5, 0.2);
    aspect-ratio: 1;
    z-index: 2;
  }
`;

const PurpleLink = styled.a<itemProps>`
  color: ${(props) =>
    props.link === props.path ? props.theme.plum : props.theme.purple};
`;

const MENU_ITEMS = [
  { link: "/", icon: <FaHome /> },
  { link: "/market", icon: <SiMarketo /> },
  { link: "/crypto", icon: <BsCoin /> },
  { link: "/account", icon: <AiOutlineUser /> }
];

const SideMenu = ({ open }: { open: boolean }) => {
  const router = useRouter();
  const theme = useTheme();
  return (
    <>
      <Menu open={open} theme={theme}>
        {MENU_ITEMS.map((item) => (
          <Link href={item.link} legacyBehavior passHref>
            <PurpleLink link={item.link} path={router.pathname}>
              <Item
                tabIndex={1}
                link={item.link}
                path={router.pathname}
                key={item.link}
              >
                {item.icon}
              </Item>
            </PurpleLink>
          </Link>
        ))}
      </Menu>
    </>
  );
};
export default SideMenu;

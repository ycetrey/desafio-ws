import React from "react";

import { useMenu } from "../../contexts/MenuContext";

import { Container } from "./styles";
import { Button } from "antd";

import { MenuOutlined, MenuFoldOutlined } from "@ant-design/icons";

const Header: React.FC = () => {
  const { toggleState, ToggleMenu } = useMenu();

  return (
    <>
      <Container>
        <Button
          onClick={() => ToggleMenu(toggleState)}
          className="menu"
          icon={
            !toggleState ? (
              <MenuOutlined
                style={{
                  color: "#fff",
                }}
              />
            ) : (
              <MenuFoldOutlined
                style={{
                  color: "#fff",
                }}
              />
            )
          }
          type="text"
        />
      </Container>
    </>
  );
};

export default Header;

import React, { useState } from "react";

import { Container } from "./styles";
import { Button } from "antd";
import {
  MenuOutlined,
  MenuFoldOutlined,
  SearchOutlined,
  CalendarOutlined,
} from "@ant-design/icons";

import { FiUser } from "react-icons/fi";

const Menu: React.FC = () => {
  const [toggleState, setToggleState] = useState(false);

  const ToggleMenu = () => {
    return setToggleState(!toggleState);
  };

  return (
    <Container className={toggleState ? "active" : ""}>
      <Button
        className="menu"
        onClick={() => ToggleMenu()}
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

      <Button icon={<SearchOutlined />} type="text">
        Pesquisar
      </Button>
      <Button
        icon={
          <span>
            <FiUser />
          </span>
        }
        type="text"
      >
        Cliente
      </Button>
      <Button icon={<CalendarOutlined />} type="text">
        Agenda
      </Button>
      <Button icon={<CalendarOutlined />} type="text">
        Agenda
      </Button>
      <Button icon={<CalendarOutlined />} type="text">
        Agenda
      </Button>
      <Button icon={<CalendarOutlined />} type="text">
        Agenda
      </Button>
      <Button icon={<CalendarOutlined />} type="text">
        Agenda
      </Button>
      <Button icon={<CalendarOutlined />} type="text">
        Agenda
      </Button>
      <Button icon={<CalendarOutlined />} type="text">
        Agenda
      </Button>
      <Button icon={<CalendarOutlined />} type="text">
        Agenda
      </Button>
      <Button icon={<CalendarOutlined />} type="text">
        Agenda
      </Button>
    </Container>
  );
};

export default Menu;

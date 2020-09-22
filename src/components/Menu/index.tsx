import React from "react";

import { Container } from "./styles";
import { Button } from "antd";

import { SearchOutlined, CalendarOutlined } from "@ant-design/icons";

import { FiUser } from "react-icons/fi";

import { AiOutlineTag, AiFillAudio } from "react-icons/ai";
import { useMenu } from "../../hooks/MenuContext";

const Menu: React.FC = () => {
  const { toggleState } = useMenu();

  return (
    <Container className={toggleState ? "active" : ""}>
      <Button icon={<SearchOutlined />} type="text">
        Pesquisar
      </Button>
      <Button
        className="selected"
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
      <Button
        icon={
          <span>
            <AiOutlineTag />
          </span>
        }
        type="text"
      >
        Tag
      </Button>
      <Button
        icon={
          <span>
            <AiFillAudio />
          </span>
        }
        type="text"
      >
        Microfone
      </Button>
    </Container>
  );
};

export default Menu;

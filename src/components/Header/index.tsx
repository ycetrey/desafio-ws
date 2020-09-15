import React from "react";

import { Container } from "./styles";
import { MenuOutlined } from "@ant-design/icons";

const Header: React.FC = () => {
  return (
    <Header>
      <Container>
        <MenuOutlined
          style={{
            fontSize: "24px",
            color: "#fff",
            paddingLeft: "30px",
            lineHeight: "10px",
          }}
        />
      </Container>
    </Header>
  );
};

export default Header;

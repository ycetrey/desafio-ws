import styled from "styled-components";

import { FaMapMarker } from "react-icons/fa";

export const Container = styled.div`
  grid-area: CardLocal;

  padding: 10px 20px;
`;

export const Title = styled.h1`
  display: flex;
  flex-direction: column;
`;

export const Map = styled.div`
  display: flex;

  height: 175px;
  width: 100%;
`;

export const MapInfo = styled.div`
  margin-top: 10px;
  display: flex;

  align-items: center;
`;

export const MapData = styled.div`
  display: flex;

  flex-direction: column;
  justify-content: center;
`;

export const MapIco = styled(FaMapMarker)`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

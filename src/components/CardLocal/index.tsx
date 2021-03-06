import React, { useEffect, useRef, useState } from "react";
import { Container, Title, Map, MapInfo, MapIco, MapData } from "./styles";

interface IMap {
  mapType: google.maps.MapTypeId;
  mapTypeControl?: boolean;
}

type GoogleLatLng = google.maps.LatLng;
type GoogleMap = google.maps.Map;

interface MapsInfoProps {
  address?: string;
  type?: string;
}

const MapsInfo: React.FC<MapsInfoProps> = ({ address, type }) => {
  return (
    <MapInfo>
      <MapIco />
      <MapData>
        <span>{address}</span>
        {type && <span>{type}</span>}
      </MapData>
    </MapInfo>
  );
};

const CardLocal: React.FC<IMap> = ({ mapType, mapTypeControl = false }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<GoogleMap>();

  const startMap = (): void => {
    if (!map) {
      defaultMapStart();
    }
  };
  useEffect(startMap, [map]);

  const defaultMapStart = (): void => {
    const defaultAddress = new google.maps.LatLng(-24.956149, -53.465903);
    new google.maps.Marker({
      position: defaultAddress,
      map,
      title: "Hello World!",
    });
    initMap(14, defaultAddress);
  };

  const initMap = (zoomLevel: number, address: GoogleLatLng): void => {
    if (ref.current) {
      setMap(
        new google.maps.Map(ref.current, {
          zoom: zoomLevel,
          center: address,
          mapTypeControl: false,
          streetViewControl: false,
          rotateControl: false,
          scaleControl: true,
          fullscreenControl: false,
          panControl: false,
          zoomControl: false,
          gestureHandling: "cooperative",
          mapTypeId: mapType,
          draggableCursor: "pointer",
        })
      );
    }
  };

  return (
    <Container className="box-shadow">
      <Title>Local</Title>
      <Map ref={ref} className="map-container__map"></Map>
      <MapsInfo address="Avenida Brasil, 4099" type="Trabalho" />
    </Container>
  );
};

export default CardLocal;

import { useRef } from "react";
import Script from "next/script";
import styled from "styled-components";

type TNaverMap = naver.maps.Map;

interface IMap {
  mapId?: string;
  lat?: number;
  lng?: number;
  style?: string;
}

const Map = ({
  mapId = "map",
  lat = 37.51747,
  lng = 127.000022,
  style = `width: 100%; height: 100%`,
}: IMap) => {
  const mapRef = useRef<TNaverMap | null>(null);

  const Wrapper = styled.div`
    ${style}
  `;

  const initializeMap = () => {
    const mapOptions = {
      center: new naver.maps.LatLng(lat, lng),
      zoom: 10,
      minZoom: 9,
      scaleControl: false,
      mapDataControl: false,
    };

    const map = new naver.maps.Map(mapId, mapOptions);
    mapRef.current = map;
  };

  return (
    <>
      <Script
        type="text/javascript"
        strategy="afterInteractive"
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NCP_CLIENT_ID}&submodules=geocoder`}
        onReady={initializeMap}
        onError={(e) => {
          console.error("Script failed to load", e);
        }}
      />
      <Wrapper id={mapId} />
    </>
  );
};

export default Map;

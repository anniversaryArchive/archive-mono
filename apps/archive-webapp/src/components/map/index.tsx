import Script from "next/script";
import styled from "styled-components";
import SearchBox from "./SearchBox";

interface IMap {
  mapId?: string;
  lat?: number;
  lng?: number;
  width?: string;
  height?: string;
}

const Map = ({
  mapId = "map",
  lat = 37.51747,
  lng = 127.000022,
  width = "100%",
  height = "100%",
}: IMap) => {
  const initializeMap = () => {
    const position = new naver.maps.LatLng(lat, lng);
    const mapOptions = {
      center: position,
      zoom: 10,
      minZoom: 9,
      scaleControl: false,
      mapDataControl: false,
    };

    new naver.maps.Map(mapId, mapOptions);
  };

  const handleSearch = (keyword: string) => {
    console.log(keyword, "검색 .. .");
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
        defer
      />
      <Wrapper>
        <SearchBox handleSearch={handleSearch} />
        <MapContainer id={mapId} $width={width} $height={height} />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const MapContainer = styled.div.attrs<{ $width: string; $height: string }>(
  (props) => ({
    $width: props.$width,
    $height: props.$height,
  })
)`
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  position: absolute;
`;

export default Map;

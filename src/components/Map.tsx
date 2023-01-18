import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { MapContainer, TileLayer } from 'react-leaflet';
import { GEO_TYPE_POLYGON, MAP_DEFAULT_ZOOM, MAP_SOURCE_URL, MAP_VENDOR_NAME, MAP_VENDOR_URL } from '../app/constants';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { Polygon } from '../views/Secondary';


export const Map = () => {
  const geoData = useSelector((state: RootState) => state.global.geoData)


  return (
    <>
      <StyledMapContainer
        center={[52.29354323765716, 18.509392400954617]}
        zoom={MAP_DEFAULT_ZOOM}
        scrollWheelZoom={true}
      >
        <TileLayer
          url={MAP_SOURCE_URL}
          attribution={`&copy; '<a href=${MAP_VENDOR_URL}>${MAP_VENDOR_NAME}</a>'`}
        />
        <Outlet />

        {geoData?.type === GEO_TYPE_POLYGON && <Polygon geoData={geoData} />}
      </StyledMapContainer>
    </>
  )
};

const StyledMapContainer = styled(MapContainer)`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
`;

import styled from 'styled-components';
import { Outlet, useNavigate } from 'react-router-dom';
import { MapContainer, TileLayer } from 'react-leaflet';
import { GEO_TYPE_POLYGON, GEO_TYPE_SCATTERPLOT, MAP_DEFAULT_ZOOM, MAP_SOURCE_URL, MAP_VENDOR_NAME, MAP_VENDOR_URL } from '../app/constants';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { Polygon } from '../views/Secondary';
import { Scatterplot } from '../views/Data';
import { Button } from './Button';


export const Map = () => {
  const geoData = useSelector((state: RootState) => state.global.geoData)
  const navigate = useNavigate()

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
        {geoData?.type === GEO_TYPE_SCATTERPLOT && <Scatterplot geoData={geoData} />}
      </StyledMapContainer>

      <Button onClick={() => navigate(-1)} style={{ position: 'fixed', bottom: 0, left: '5px' }}>&lt;&lt; BACK</Button>
    </>
  )
};

const StyledMapContainer = styled(MapContainer)`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
`;

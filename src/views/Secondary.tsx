import { useEffect } from "react";
import { Polygon as Polygon_, useMap } from "react-leaflet";
import { API_URLS } from "../app/apiUrls";
import { GEO_TYPE_POLYGON } from "../app/constants";
import { useGeoData } from "../app/hooks";

export const Secondary = ({ sessionKey }) => {
  useGeoData({ urlPath: API_URLS.secondary, sessionKey, type: GEO_TYPE_POLYGON })

  return (<></>);
};

export function Polygon({ geoData }) {
  const map = useMap()

  useEffect(() => {
    map.setView(geoData.center, 14)
  }, [geoData])

  return <Polygon_ positions={geoData.geoJson} />
}
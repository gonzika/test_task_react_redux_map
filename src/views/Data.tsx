import { useEffect } from "react";
import { Circle, useMap } from "react-leaflet";
import { API_URLS } from "../app/apiUrls";
import { GEO_TYPE_SCATTERPLOT } from "../app/constants";
import { useGeoData } from "../app/hooks";

export const Data = ({ sessionKey }) => {
  useGeoData({ urlPath: API_URLS.data, sessionKey, type: GEO_TYPE_SCATTERPLOT })
  return (<></>);
};


export function Scatterplot({ geoData }) {
  const map = useMap()

  useEffect(() => {
    map.setView(geoData.center, 17)
  }, [geoData])

  return <>
    {geoData.geoJson.map((marker, i) => <Circle key={i} center={marker.center}
      pathOptions={{ fillColor: marker.fillColor, opacity: 1, color: marker.fillColor, fillOpacity: 1 }} radius={5} />)}
  </>
}
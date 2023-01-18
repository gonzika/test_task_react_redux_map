import { API_URLS } from "../app/apiUrls";
import { GEO_TYPE_SCATTERPLOT } from "../app/constants";
import { useGeoData } from "../app/hooks";

export const Data = ({ sessionKey }) => {
  useGeoData({ urlPath: API_URLS.data, sessionKey, type: GEO_TYPE_SCATTERPLOT })
  return (<></>);
};

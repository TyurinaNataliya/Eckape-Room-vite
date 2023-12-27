import { useEffect, useRef } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

import { DEFAULT_URL_MARKER } from '../const';
import { useMap } from './use-map';
import { TypeLocationRoom, TypeQuest } from '../type-data/type';

type MapProp = {
  quest: TypeQuest | null;
  LocationEscapeRoom: TypeLocationRoom;
};

function QuestMap({ quest, LocationEscapeRoom }: MapProp) {
  const mapRef = useRef(null);
  const map = useMap({ mapRef: mapRef, locationRoom: LocationEscapeRoom });

  const defaultCustomIcon = leaflet.icon({
    iconUrl: DEFAULT_URL_MARKER,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  // const currentCustomIcon = leaflet.icon({
  //   iconUrl: URL_MARKER,
  //   iconSize: [40, 40],
  //   iconAnchor: [20, 40],
  // });

  const coordPoints = quest?.location?.coords;
  useEffect(() => {
    if (map && coordPoints) {
      coordPoints.forEach((point) => {
        leaflet
          .marker(
            {
              lat: point[0],
              lng: point[1],
            },
            {
              icon: defaultCustomIcon,
            }
          )
          .addTo(map);
      });
    }
  }, [coordPoints, defaultCustomIcon, map]);

  return <div style={{ height: '500px' }} ref={mapRef}></div>;
}

export default QuestMap;

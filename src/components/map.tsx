import { useEffect, useRef } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { TypeLocationRoom } from '../type-data/type';

import { URL_MARKER } from '../const';
import { useMap } from './use-map';

type MapProp = {
  LocationEscapeRoom: TypeLocationRoom;
};

function Map({ LocationEscapeRoom }: MapProp) {
  const mapRef = useRef(null);
  const map = useMap({ mapRef: mapRef, locationRoom: LocationEscapeRoom });

  const customIcon = leaflet.icon({
    iconUrl: URL_MARKER,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    if (map) {
      leaflet
        .marker(
          {
            lat: LocationEscapeRoom.latitude,
            lng: LocationEscapeRoom.longitude,
          },
          {
            icon: customIcon,
          }
        )
        .addTo(map);
    }
  }, [
    customIcon,
    LocationEscapeRoom.latitude,
    LocationEscapeRoom.longitude,
    map,
  ]);

  return <div style={{ height: '500px' }} ref={mapRef}></div>;
}
export { Map };

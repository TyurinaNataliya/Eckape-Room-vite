import { useEffect, useRef, useState } from 'react';
import { TypeLocationRoom } from '../type-data/type';
import leaflet, { Map } from 'leaflet';

type useMapProps = {
  mapRef: React.MutableRefObject<HTMLElement | null>;
  locationRoom: TypeLocationRoom;
};

function useMap({ mapRef, locationRoom }: useMapProps) {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: locationRoom.latitude,
          lng: locationRoom.longitude,
        },
        zoom: locationRoom.zoom,
      });

      leaflet
        .tileLayer(
          'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
          {
            attribution:
              '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy <a href="https://carto.com/attributions">CARTO</a>',
          }
        )
        .addTo(instance);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [
    locationRoom.latitude,
    locationRoom.longitude,
    locationRoom.zoom,
    mapRef,
  ]);

  return map;
}

export { useMap };

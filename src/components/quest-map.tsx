// import {useRef} from 'react';
// import leaflet from 'leaflet';
// import 'leaflet/dist/leaflet.css';

// import { DEFAULT_URL_MARKER, URL_MARKER } from '../const';
// import { useMap } from './use-map';
// import { TypeLocationRoom } from '../type-data/type';

// type MapProp = {
//   quest: TypeQuest;
// };

// function QuestMap({ quest }:MapProp) {
//   const mapRef = useRef(null)
//   const map = useMap({ mapRef: mapRef, locationsRooms:quest.???? });

//   const defaultCustomIcon = leaflet.icon({
//     iconUrl: DEFAULT_URL_MARKER,
//     iconSize: [40, 40],
//     iconAnchor: [20, 40],
//   });

//   const currentCustomIcon = leaflet.icon({
//     iconUrl: URL_MARKER,
//     iconSize: [40, 40],
//     iconAnchor: [20, 40],
//   });

//   return <div style={{ height: '500px' }} ref={mapRef}></div>;
// }

// export default QuestMap;

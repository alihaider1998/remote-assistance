import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

function MapComponent() {
  const position = { lat: 53.54992, lng: 10.00678 };

  return (
    <APIProvider apiKey={"AIzaSyB-ZedOjeywIKws7Evx6vIN2jtAkc9pFIs"}>
      <Map defaultCenter={position} mapId={"8db35e0cd86228b6"} defaultZoom={10}>
        <Marker position={position} />
      </Map>
    </APIProvider>
  );
}

export default MapComponent;

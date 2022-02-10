import { useEffect, useRef } from "react";
import { mapController } from "../../controllers/MapController";
import "./mapview.scss";

const PrivateMapView = () => {
   const mapViewRef = useRef(null);

   useEffect(() => {
      mapController.initializeMap(mapViewRef);
   }, [mapViewRef]);

   return (
      <div id="mapview-container">
         <div id="mapview" ref={mapViewRef}></div>
      </div>
   );
};

export default PrivateMapView;

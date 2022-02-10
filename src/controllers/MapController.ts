import { RefObject } from "react";
import { setDefaultOptions, loadModules } from "esri-loader";

setDefaultOptions({ css: true, version: "4.20" });

class MapController {
   #map?: __esri.Map;
   #mapView?: __esri.MapView;

   initializeMap = async (domRef: RefObject<HTMLDivElement>) => {
      if (!domRef.current) return;

      const [MapView, Map] = await loadModules([
         "esri/views/MapView",
         "esri/Map",
      ]);

      this.#map = new Map({ basemap: "streets-vector" });

      this.#mapView = new MapView({
         map: this.#map,
         container: domRef.current,
         zoom: 3,
         center: [45.9441973, 49.9555081],

         highlightOptions: {
            color: "orange",
         },
      });
   };
}

export const mapController = new MapController();

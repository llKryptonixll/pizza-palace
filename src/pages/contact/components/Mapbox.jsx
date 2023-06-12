import "mapbox-gl/dist/mapbox-gl.css";
import Map, {
  Marker,
  NavigationControl,
  FullscreenControl,
  GeolocateControl,
} from "react-map-gl";
import { useState } from "react";

const Mapbox = () => {
    
    const API_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN;
    const [lng, setLng] = useState(9.99694502669876);
    const [lat, setLat] = useState(53.55244560647235);

    return (
        <div className="lg:h-full h-[500px] lg:pl-[70px] pl-0 lg:pt-0 pt-12">
            <Map
                mapboxAccessToken={API_TOKEN}
                style={{
                width: "100%",
                height: "100%",
                }}
                scrollZoom={false}
                initialViewState={{
                longitude: lng,
                latitude: lat,
                zoom: 17,
                }}
                mapStyle="mapbox://styles/kryptonix/clinuua5o000201qr55cn5tod"
            >
                <Marker longitude={lng} latitude={lat}>
                    <img src="/images/pizzeria-mapbox.webp" alt="our-location" />
                </Marker>
                <NavigationControl position="bottom-right" />
                <FullscreenControl />
                <GeolocateControl />
            </Map>
        </div>
    );
};

export default Mapbox;
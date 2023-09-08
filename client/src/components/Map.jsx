import GoogleMapReact from "google-map-react";
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/map-marker";

export const Map = ({ location, zoomLevel }) => {
  const LocationPin = ({ text }) => (
    <div className="pin">
      <Icon icon={locationIcon} className="pin-icon" />
      <p className="pin-text">{text}</p>
    </div>
  );
  const mapStyle = {
    height: "80%",
    width: "90%",
    bottom: "15%",
    right: "15%",
    boxShadow: "0px 4px 11px 7px rgba(0, 0, 0, 0.25)",
  };
  const defaultProps = {
    center: {
      lat: 50.93971808146138,
      lng: -114.02541911624382,
    },
  };
  return (
    <div className="map-component" style={mapStyle}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: "AIzaSyCL4QxCvt5ApTTym4q1HzE2h3WVtpllkcA",
        }}
        defaultCenter={defaultProps.center}
        defaultZoom={zoomLevel}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </div>
  );
};

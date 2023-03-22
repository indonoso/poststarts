import React, {useState} from "react";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import Col from "react-bootstrap/Col";
import Result from "./Result";
import Row from "react-bootstrap/Row"

function GeoSpatialMap({postcards}) {
    const [marker, setCurrentMarker] = useState("");
       function displayCurrentPostcard(data) {
           console.log("Updating column")
        if (data !== undefined) {
            console.log(data)
            console.log("Updating c")
            return (
                <Result postcard={data}/>
            );
        }
        return (
            <p>Select a postcard from the map</p>
        );
    }


    return (<Row>
        <Col md={7}>
      <MapContainer
        style={{ height: "500px"}}
        center={[50.460, 4.3]}
        zoom={8}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

        />
       <MarkerClusterGroup  >
          {postcards.map((postcard, index) => (
            <Marker
              key={index}
              position={postcard.position}
                eventHandlers={{
                    click: (e) => {
                      console.log('marker clicked', e);
                      console.log(postcard)
                      setCurrentMarker(postcard)

                    },
                  }}
            ><Popup>
                <p>{postcard.title}</p>
            </Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
      </MapContainer>
            </Col>
        <Col md={{ span: 4, offset: 1}}>
            {displayCurrentPostcard(marker)}
        </Col>
    </Row>
  );
}

export default GeoSpatialMap;

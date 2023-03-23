import React, {useEffect, useState} from "react";
import GeoSpatialMap from "../components/GeoSpatialMap";
import L from  'leaflet'
import 'leaflet/dist/leaflet.css';


import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;
function fetchGeoData(){
        return fetch('https://postcards-cm6leuxsda-uc.a.run.app/geo_data',
            {
                method: 'GET',
                headers: {'Content-Type': 'application/json'}

            }
        ).then((response) => response.json())

    }
const getPostcards = fetchGeoData()
function GeoSpatialAnalysis() {
    const [postcards, setPostcards] = useState([]);


    useEffect(() => {
       getPostcards
        .then((response) => {
            console.log(response)
            setPostcards(response)

        })

        .catch(function (err) {
            console.log(err);
        })
    }, []);
    return (<GeoSpatialMap postcards={postcards}/>)

}

export default GeoSpatialAnalysis;

import React, { useState, useEffect } from 'react'
import { YMaps, Map, Placemark } from 'react-yandex-maps';

let count = 0;

const YandexMap = ( props ) => {
    const [ addressName, setAddressName ] = useState(props.adress);
    const [ coordinate, setcoordinate ] = useState(props.coord);
    let mapState = {
        center: coordinate,
        zoom: 8
    };

    const getCoords = () => {
        window.ymaps.geocode(props.adress).then(res => {
            let firstGeoObject = res.geoObjects.get(0);
            setcoordinate(firstGeoObject.geometry.getCoordinates());
            console.log(3);
            console.log(mapState);
            console.log(coordinate);
            console.log(4);
        })
    };

    useEffect(() => {
    count=count+1;
    if (count > 1) {
        getCoords();
    }
    console.log('Вы нажали раз');
    }, [props]); // Перезапускать эффект только если count поменялся

  return (
    <div>
        <YMaps query={{
          ns: "ymaps",
          apikey: "5f715ff6-cd1b-4bf2-a920-016e18c54f42",
        }}
        >
            <Map
            modules= {["geolocation", "geocode"]}
            state={mapState}
            onClick={() => getCoords()}
            >
            <Placemark
                    geometry={{
                        type: 'Point',
                        coordinates: mapState.center,
                      } }
                      options={{
                        preset: 'islands#icon',
                      }}
                    />
            </Map>
        </YMaps>
    </div>
  )
}

export default YandexMap;
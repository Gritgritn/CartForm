import React, { useState, useEffect } from 'react'
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import styled from 'styled-components';

const Ymaps = styled.div`
  @media (min-width: 1100px) {
    position: absolute;
    right: 0;
    top: 0;
    width: 555px;
    height: 700px;
  }

  @media (max-width: 1099px) {
    width: 100%;
    height: 200px;
    margin-top: 15px;
  }
`

const BlackDiv = styled.div`
  @media (min-width: 1100px) {
    width: 100%;
    height: 136px;
    position: absolute;
    right: 0;
    top: 565px;
    background-color: black;
    opacity: 0.8;
    z-index: 1;
    font-family: Helvetica;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 46px;
    font-feature-settings: 'tnum' on, 'lnum' on;
    color: #FFFFFF;
    display: flex;
    align-items: center;
  }
  @media (max-width: 1099px) {
    display: none;
  }
`

const Result = styled.span`
  flex: auto;
`

const Price = styled.span`
`

let count = 0;
const coord = [44.753761, 33.775442];

const YandexMap = ({adress, getMapData}) => {
    const [ coordinate, setcoordinate ] = useState(coord);
    let mapState = {
        center: coordinate,
        zoom: 8
    };

    const getAdress = e => {
        window.ymaps.geocode(e.get('coords')).then(res => {
            let firstGeoObject = res.geoObjects.get(0);
            setcoordinate(firstGeoObject.geometry.getCoordinates())
            getMapData(firstGeoObject.getAddressLine());
        })

      };


    useEffect(() => {
    count=count+1;
    if (count > 1) {
        if (adress !== '') {
          window.ymaps.geocode(adress).then(res => {
              let firstGeoObject = res.geoObjects.get(0);
              setcoordinate(firstGeoObject.geometry.getCoordinates());
          })
        }
    }
    }, [adress]);

  return (
    <Ymaps>
      <BlackDiv><Result>Итог</Result><Price>3790 р.</Price></BlackDiv>
        <YMaps
            query={{
          ns: "ymaps",
          apikey: "5f715ff6-cd1b-4bf2-a920-016e18c54f42",
        }}
        >
            <Map width="100%"
            height="100%"
            modules= {["geolocation", "geocode"]}
            state={mapState}
            onClick={(e) => getAdress(e)}
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
    </Ymaps>
  )
}

export default YandexMap;
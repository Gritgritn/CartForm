import { YMaps, Map, Placemark, Polygon } from 'react-yandex-maps';

class YMap extends React.Component {
     state = {
         marker: [],
         markerAddress: "",
     }

     geocode() { // получаем адрес по координатам установленного маркера и отображаем в нотификейшене.
     }


     render() {
         return (
             <YMaps
                 query={{ apikey: 'My-Api-Key' }}
                 >
                 <ReactNotification />
                 <Map
                     modules={['geocode']}
                     defaultState={{ center: [55.75, 37.57], zoom: 9 }}
                     width={"100%"}
                     height={"100vh"}
                     onClick={(event) => { // устанавливаем маркер и записываем координаты в стейт
                         this.setState({ marker: event.get('coords') })
                         this.geocode() // отображаем адрес
                     }}
                     onLoad={(ymaps) => this.ymaps = ymaps}
                 >
                     <Polygon
                        instanceRef={(ref) => this.polygonInst = ref}
                        geometry={moscow.coordinates}
                        options={{ visible: false }}
                        />
                     {this.state.marker &&
                         <Placemark
                             geometry={this.state.marker}
                         />}
                 </Map>
             </YMaps>
         );
     }
 }
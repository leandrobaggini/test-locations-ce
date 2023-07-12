window.onload = () => {
    let places = staticLoadPlaces();
    renderPlaces(places);
};

//carga de locaciones

function staticLoadPlaces() {
   return [
    //WAYSPOT CARHUE
       {
           name: 'Catedral',
           location: {
                lat: -37.1794983797962,
                lng: -62.7611384913325,
           }
       },
       {
            name: 'Palacio_Municipal',
            location: {
                lat: -37.1803473141079,
                lng: -62.7611669898033,
            }
       },
       {
            name: 'Eucaliptos_Fundacional',
            location: {
                lat: -37.1799565063257,
                lng: -62.7607059851288,
            }
        },
        {
            name: 'Museo_historico',
            location: {
                lat: -37.1810081833647,
                lng: -62.7616484463214,
            }
        },
        {
            name: 'Biblioteca_Publica',
            location: {
                lat: -37.1810642795189,
                lng: -62.7599931880831,
            }
        },
        {
            name: 'Museo_malvinas',
            location: {
                lat: -37.1769477796722,
                lng: -62.7548664808273,
            }
        },
        {
            name: 'Cine_espanol',
            location: {
                lat: -37.1789424802588,
                lng: -62.7604645863175,
            }
        },
        {
            name: 'Sociedad_espanola',
            location: {
                lat: -37.1786395520229,
                lng: -62.7609148621559,
            }
        },
        {
            name: 'Escuela_carhue',
            location: {
                lat: -37.1799220467592,
                lng: -62.7618100494146,
            }
        },
        {
            name: 'Informes_turisticos',
            location: {
                lat: -37.1765615,
                lng: -62.76026174,
            }
        },
        {
            name: 'Casa_ultima_fortinera',
            location: {
                lat: -37.17985713,
                lng: -62.76595373,
            }
        },
        {
            name: 'Cementerio_de_la_memoria',
            location: {
                lat: -37.16913276,
                lng: -62.78128322,
            }
        },
        {
            name: 'Cruz_cementerio_memoria',
            location: {
                lat: -37.16842129,
                lng: -62.7821831,
            }
        },
        {
            name: 'esquina_sup_cementerio',
            location: {
                lat: -37.16814263,
                lng: -62.7828094,
            }
        },
        {
            name: 'cristo_del_camino',
            location: {
                lat: -37.16829519,
                lng: -62.77341429,
            }
        },
        {
            name: 'aeroclub',
            location: {
                lat: -37.1468392246153,
                lng: -62.7810706570744,
            }
        },
        {
            name: 'casa_cultura',
            location: {
                lat: -37.17609133,
                lng: -62.76332751,
            }
        },

    //WAYSPOT EPECUEN
        {
            name: 'lago_epecuen',
            location: {
                lat: -37.14180495,
                lng: -62.7914726,
            }
        },
        {
            name: 'playa_ecosustentable',
            location: {
                lat: -37.13929478,
                lng: -62.79431306,
            }
        },
        {
            name: 'centro_playa_ecosustentable',
            location: {
                lat: -37.13976678,
                lng: -62.79410888,
            }
        },
        {
            name: 'Matadero',
            location: {
                lat: -37.14562325,
                lng: -62.78637674,
            }
        },
        {
            name: 'Frente_al_matadero',
            location: {
                lat: -37.14546477,
                lng: -62.78576218,
            }
        },
   ];
}

function renderPlaces(places) {
   let scene = document.querySelector('a-scene');

   places.forEach((place) => {
       let latitude = place.location.lat;
       let longitude = place.location.lng;

       let model = document.createElement('a-entity');
       model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
       model.setAttribute('gltf-model', './assets/magnemite/scene.gltf');
       model.setAttribute('rotation', '0 180 0');
       model.setAttribute('animation-mixer', '');
       model.setAttribute('position', '0 0 -5'); 
       model.setAttribute('scale', '1 1 1');

       // Verifica el nombre de la ubicación y asigna un modelo correspondiente
       /*
       if (place.name === 'Catedral') {
        model.setAttribute('gltf-model', './assets/magnemite/scene.gltf');
    } else if (place.name === 'Parque') {
        model.setAttribute('gltf-model', './assets/parque/scene.gltf');
    } else if (place.name === 'Museo') {
        model.setAttribute('gltf-model', './assets/museo/scene.gltf');
    }
    */

       model.addEventListener('loaded', () => {
           window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
       });

       scene.appendChild(model);
   });
}
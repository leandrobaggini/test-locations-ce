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
        {
            name: 'Entrada_ruinas_epecuen',
            location: {
                lat: -37.13007493,
                lng: -62.8055267,
            }
        },
        {
            name: 'primera_esquina',
            location: {
                lat: -37.13014042,
                lng: -62.80573659,
            }
        },
        {
            name: 'cartel_escuela_17',
            location: {
                lat: -37.13038313,
                lng: -62.80604638,
            }
        },
        {
            name: 'esquina_2',
            location: {
                lat: -37.13043178,
                lng: -62.80613456,
            }
        },
        {
            name: 'esquina_3',
            location: {
                lat: -37.12967718,
                lng: -62.80709714,
            }
        },
        {
            name: 'casa_con_escalera',
            location: {
                lat: -37.12997362,
                lng: -62.8076252,
            }
        },
        {
            name: 'tres_arboles',
            location: {
                lat: -37.13028263,
                lng: -62.80799702,
            }
        },
        {
            name: "PT_23.8 Puerta y ventana",
            location: {
                lat: -37.13050315,
                lng: -62.80822266,
            }
        },
        {
            name: "PT_23.9 Esquina verde",
            location: {
                lat: -37.13083167,
                lng: -62.80873261,
            }
        },
        {
            name: "PT_23.10 Casa blanca",
            location: {
                lat: -37.13089235,
                lng: -62.80881777,
            }
        },
        {
            name: "PT_23.11 Ingreso de casa con rejita",
            location: {
                lat: -37.13052748,
                lng: -62.80902129,
            }
        },
        {
            name: "PT_23.12 Casa de dos pisos",
            location: {
                lat: -37.13059671,
                lng: -62.80911181,
            }
        },
        {
            name: "PT_23.13 Esquina marco de puerta",
            location: {
                lat: -37.13031604,
                lng: -62.80960165,
            }
        },
        {
            name: "PT_23.14 cartel mi casa y mis calles",
            location: {
                lat: -37.12973652,
                lng: -62.80996375,
            }
        },
        {
            name: "PT_23.15 Tanque de agua",
            location: {
                lat: -37.12939998,
                lng: -62.81063966,
            }
        },
        {
            name: "PT_23.16 Esquina postes de luz",
            location: {
                lat: -37.13063467,
                lng: -62.81080227,
            }
        },
        {
            name: "PT_23.17 Hotel italia",
            location: {
                lat: -37.13074079,
                lng: -62.81066984,
            }
        },
        {
            name: "PT_23.18 Inicio avenida postes caídos",
            location: {
                lat: -37.13083888,
                lng: -62.81064201,
            }
        },
        {
            name: "PT_23.19 Esquina 2 postes caídos",
            location: {
                lat: -37.13142481,
                lng: -62.81128004,
            }
        },
        {
            name: "PT_23.20 Inicio agua en avenida postes",
            location: {
                lat: -37.13213716,
                lng: -62.81207833,
            }
        },
        {
            name: "PT_23.21 Esquina placa mármol",
            location: {
                lat: -37.13196342,
                lng: -62.81091157,
            }
        },
        {
            name: "PT_23.22 Inicio agua otra esquina placa mármol",
            location: {
                lat: -37.1326902,
                lng: -62.81115431,
            }
        },
        {
            name: "PT_23.23 Capilla Santa Teresita",
            location: {
                lat: -37.13278402,
                lng: -62.80998755,
            }
        },
        {
            name: "PT_23.24 Cambacita",
            location: {
                lat: -37.13311172,
                lng: -62.80966803,
            }
        },
        {
            name: "PT_23.25 Hotel hispano argentino",
            location: {
                lat: -37.13321623,
                lng: -62.80959897,
            }
        },
        {
            name: "PT_23.26 Techo diagonal hierro",
            location: {
                lat: -37.1334183,
                lng: -62.80996274,
            }
        },
        {
            name: "PT_23.27 Foto Tesorini",
            location: {
                lat: -37.13350812,
                lng: -62.81015486,
            }
        },
        {
            name: "PT_23.28 Cartel plaza san martin",
            location: {
                lat: -37.13368132,
                lng: -62.81041436,
            }
        },
        {
            name: "PT_23.29 Esquina paralela cartel plaza",
            location: {
                lat: -37.13382806,
                lng: -62.81061988,
            }
        },
        {
            name: "PT_23.30 Heladería chito",
            location: {
                lat: -37.13404029,
                lng: -62.81084619,
            }
        },
        {
            name: "PT_23.31 Complejo balneario",
            location: {
                lat: -37.13434821,
                lng: -62.81122137,
            }
        },
        {
            name: "PT_23.32 Hotel azul",
            location: {
                lat: -37.13396652,
                lng: -62.81061217,
            }
        },
        {
            name: "PT_23.33 Banco provincia",
            location: {
                lat: -37.13264128,
                lng: -62.80884258,
            }
        },
        {
            name: "PT_23.34 Cartel alfajorlandia",
            location: {
                lat: -37.13241675,
                lng: -62.8087534,
            }
        },
        {
            name: "PT_23.35 Esquina mitre y av principal",
            location: {
                lat: -37.13232213,
                lng: -62.80864913,
            }
        },
        {
            name: "PT_23.36 Hotel monterreal",
            location: {
                lat: -37.13203291,
                lng: -62.80825853,
            }
        },
        {
            name: "PT_23.37 Esquina av principal y hotel otra esquina",
            location: {
                lat: -37.13202115,
                lng: -62.80825451,
            }
        },
        {
            name: "PT_23.38 Casa avenida principal con círculo hierro",
            location: {
                lat: -37.1316595,
                lng: -62.80749075,
            }
        },
        {
            name: "PT_23.39 Villa Cura Malal",
            location: {
                lat: -37.13135077,
                lng: -62.80734055,
            }
        },
        {
            name: "PT_23.40 Esquina calle Sarmiento y av principal",
            location: {
                lat: -37.13092095,
                lng: -62.80679304,
            }
        },
        {
            name: "PT_23.41 Residencia villa clara",
            location: {
                lat: -37.13092095,
                lng: -62.80679304,
            }
        },
        {
            name: "PT_23.42 Cartel Epecuén",
            location: {
                lat: -37.12990305,
                lng: -62.80570339,
            }
        },
        {
            name: "PT_23.43 monumento luna",
            location: {
                lat: -37.13158599,
                lng: -62.80949503,
            }
        },
        {
            name: "PT_23.44 recreo bailable bin ban bun",
            location: {
                lat: -37.13171403,
                lng: -62.80958388,
            }
        },
        {
            name: "PT_23.45 Restaurante hola que tal",
            location: {
                lat: -37.13183485,
                lng: -62.8093512,
            }
        },
        {
            name: "PT_23.46 Hotel Rosse",
            location: {
                lat: -37.13278161,
                lng: -62.80890997,
            }
        },
        {
            name: "PT_23.47 Confiteria Corradini",
            location: {
                lat: -37.1327327,
                lng: -62.80906118,
            }
        },
        {
            name: "PT_23.48 Recreo bailable bender",
            location: {
                lat: -37.13286688,
                lng: -62.80927978,
            }
        },
        {
            name: "PT_23.49 Esquina rivadavia y Avenida principal",
            location: {
                lat: -37.13308633,
                lng: -62.80943669,
            }
        },
        {
            name: "PT_23.50 Piletas balneario",
            location: {
                lat: -37.13482586,
                lng: -62.81147853,
            }
        },
        {
            name: "PT_24 Centro interpretacion epecuen",
            location: {
                lat: -37.11268824,
                lng: -62.78993804,
            }
        }
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

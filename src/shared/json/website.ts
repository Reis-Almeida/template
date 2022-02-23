const website = {
    loading: '/images/website/loading.gif',
    navImg: '/images/website/nav.jpg',
    noImg: '/images/website/noImg.jpg',
    navigation: [
        {
          name: 'Home',
          path: '/',
        },
        {
          name: 'Favoritos',
          path: '/favoritos',
        },
        {
          name: 'Avaliação',
          path: '/avaliacao',
        },
        {
          name: 'Quem Somos',
          path: '/quemsomos',
        },
        {
          name: 'Contato',
          path: '/contato',
        }
    ],
    cityFeature: [
        { 
            src: '/images/city/aguasclaras.png',
            state: 'Brasilia - DF',
            city: "Aguas Claras"
        },
        { 
            src: '/images/city/porto.jpg',
            state: 'Baiha - BA',
            city: "Porto Seguro"
        },
        { 
            src: '/images/city/lagosul.jpg',
            state: 'Brasilia - DF',
            city: "Lago Sul"
        },
        { 
            src: '/images/city/asanorte.jpeg',
            state: 'Brasilia - DF',
            city: "Asa Norte"
        },
        { 
            src: '/images/city/niteroi.jpg',
            state: 'Rio de Janeiro - RG',
            city: "Niterói"
        },
        { 
            src: '/images/city/saopaulo.jpg',
            state: 'São Paulo - SP',
            city: "São Paulo"
        }
    ],
    property: {
        realtor: {
            name: 'Andrew Man',
            src:  '/images/equipe/person1.jpg',
            email: 'info@example.com',
            telephone: '(61) 90000-0000'
        
        },
        video: '/videos/videoteste.mp4'
    },
    quemsomos: {
        img1: '/images/website/ab3.webp',
        img2: '/images/website/quemsomos.jpg'
    },
    carousel: [
        { 
            src: '/images/teste/teste1.jpg',
            name: 'West Broadway Street',
            end: '215 Greenwich St, New York',
            price: 260,
            type: 'Aluguel',
            square: 170,
            bedroom: 1,
            bathroom: 1
        },
        { 
            src: '/images/teste/teste2.jpg',
            name: 'North Greenwich',
            end: '42 W Broadway, New York',
            price: 200,
            type: 'Venda',
            square: 210,
            bedroom: 2,
            bathroom: 2
        },
        { 
            src: '/images/teste/teste3.jpg',
            name: 'Rue de Rivoli Street',
            end: '215 Greenwich St, New York',
            price: 390,
            type: 'Aluguel',
            square: 150,
            bedroom: 3,
            bathroom: 1
        }
    ]
      
}

export default website
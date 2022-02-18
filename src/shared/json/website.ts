const base = process.env.NEXT_PUBLIC_BASE_PATH

const website = {
    loading: base + '/images/website/loading.gif',
    navigation: base + '/images/website/nav.jpg',
    noImg: base + '/images/website/noImg.jpg',
    cityFeature: [
        { 
            src: base + '/images/city/aguasclaras.png',
            state: 'Brasilia - DF',
            city: "Aguas Claras"
        },
        { 
            src: base + '/images/city/porto.jpg',
            state: 'Baiha - BA',
            city: "Porto Seguro"
        },
        { 
            src: base + '/images/city/lagosul.jpg',
            state: 'Brasilia - DF',
            city: "Lago Sul"
        },
        { 
            src: base + '/images/city/asanorte.jpeg',
            state: 'Brasilia - DF',
            city: "Asa Norte"
        },
        { 
            src: base + '/images/city/niteroi.jpg',
            state: 'Rio de Janeiro - RG',
            city: "Niterói"
        },
        { 
            src: base + '/images/city/saopaulo.jpg',
            state: 'São Paulo - SP',
            city: "São Paulo"
        }
    ],
    property: {
        realtor: {
            name: 'Andrew Man',
            src:  base + '/images/equipe/person1.jpg',
            email: 'info@example.com',
            telephone: '(61) 90000-0000'
        
        },
        video: base + '/videos/videoteste.mp4'
    },
    quemsomos: {
        img1: base + '/images/website/ab3.webp',
        img2: base + '/images/website/quemsomos.jpg'
    },
    carousel: [
        { 
            src: base + '/images/teste/teste1.jpg',
            name: 'West Broadway Street',
            end: '215 Greenwich St, New York',
            price: 260,
            type: 'Aluguel',
            square: 170,
            bedroom: 1,
            bathroom: 1
        },
        { 
            src: base + '/images/teste/teste2.jpg',
            name: 'North Greenwich',
            end: '42 W Broadway, New York',
            price: 200,
            type: 'Venda',
            square: 210,
            bedroom: 2,
            bathroom: 2
        },
        { 
            src: base + '/images/teste/teste3.jpg',
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
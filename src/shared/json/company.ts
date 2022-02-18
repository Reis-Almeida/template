const base = process.env.NEXT_PUBLIC_BASE_PATH

const company = {
    name: 'Allmatech Imobiliária',
    endereco: 'Rua 09 Norte, Lote 01, Salas 507 e 509 - Águas Claras, Brasília - DF, 71908-540',
    telefone: '61 3797-5389',
    whatsapp: '61 9 9418-6386',
    telegram: '61 9 9418-6386',
    email: 'atendimento@allmatech.com.br',
    instagram: 'https://www.instagram.com/allmatech_ti/',
    facebook: 'https://www.facebook.com/allmatech',
    twitter: 'https://twitter.com/twitter',
    pinterest: 'https://br.pinterest.com/',
    linkedin: 'https://br.linkedin.com/',
    logo: {
        head: base + '/images/logo/head.png',
        default: base + '/images/logo/logo.png',
        footer: base + '/images/website/logoFooter.jpeg'
    },
    descricao: 'Venda e locação de imóveis. Plano Piloto em geral, Asa Sul, Asa Norte, Sudoeste, Noroeste, Lago Sul, Lago Norte, SMDB Park Way, Águas claras.',
    quemsomos: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.',
    equipe: [
        {
            name: 'Andrew Man',
            src: base + '/images/equipe/person1.jpg',
            email: 'info@example.com',
            telephone: '(61) 90000-0000',
            office: 'Corretor',
            instagram: 'https://www.instagram.com/allmatech_ti/',
            facebook: 'https://www.facebook.com/allmatech',
            twitter: 'https://twitter.com/twitter',
            linkedin: 'https://br.linkedin.com/'

        },
        {
            name: 'Peter Ruck',
            src: base + '/images/equipe/person2.jpg',
            email: 'info@example.com',
            telephone: '(61) 90000-0000',
            office: 'Consultor',
            instagram: 'https://www.instagram.com/allmatech_ti/',
            facebook: 'https://www.facebook.com/allmatech',
            twitter: 'https://twitter.com/twitter',
            linkedin: 'https://br.linkedin.com/'

        },
        {
            name: 'Nancy Collins',
            src: base + '/images/equipe/person3.jpg',
            email: 'info@example.com',
            telephone: '(61) 90000-0000',
            office: 'Corretor',
            instagram: 'https://www.instagram.com/allmatech_ti/',
            facebook: 'https://www.facebook.com/allmatech',
            twitter: 'https://twitter.com/twitter',
            linkedin: 'https://br.linkedin.com/'

        },
        {
            name: 'Britney Doe',
            src: base + '/images/equipe/person4.jpg',
            email: 'info@example.com',
            telephone: '(61) 90000-0000',
            office: 'Telemarketing',
            instagram: 'https://www.instagram.com/allmatech_ti/',
            facebook: 'https://www.facebook.com/allmatech',
            twitter: 'https://twitter.com/twitter',
            linkedin: 'https://br.linkedin.com/'

        },
        {
            name: 'Telemarketing',
            src: base + '/images/equipe/person5.jpg',
            email: 'info@example.com',
            telephone: '(61) 90000-0000',
            office: 'cargo',
            instagram: 'https://www.instagram.com/allmatech_ti/',
            facebook: 'https://www.facebook.com/allmatech',
            twitter: 'https://twitter.com/twitter',
            linkedin: 'https://br.linkedin.com/'

        }
    ],
    client: [
        {
            name: 'Andrew Man',
            src: base + '/images/equipe/person1.jpg',
            title: 'Muito Bom',
            star: 5,
            description: 'amo o serviço de vocês, não sei, mas é isso ai top.'

        },
        {
            name: 'Peter Ruck',
            src: base + '/images/equipe/person2.jpg',
            title: 'Muito Bom',
            star: 3,
            description: 'amo o serviço de vocês, não sei, mas é isso ai top. bola pra frente é nós queiros a´te segunda.'

        },
        {
            name: 'Nancy Collins',
            src: base + '/images/equipe/person3.jpg',
            title: 'Muito Bom',
            star: 2,
            description: 'amo o serviço de vocês, não sei, mas é isso ai top.'

        }
    ]
    
}

export default company
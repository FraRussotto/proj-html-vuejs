import {reactive} from 'vue';

export const store = reactive({

  slider: [
    {
      id: 1,
      img: '../assets/img/H3-slider3.jpg'
    },
    {
      id: 2,
      img: '../assets/img/slider.jpg'
    }
    ],
  organic_food: [
    {
      id: 1,
      img: '../../assets/img/fe1.jpg'
    },
    {
      id: 2,
      img: '../../assets/img/fe2.jpg'
    },
    {
      id: 3,
      img: '../../assets/img/fe3.jpg'
    },
    {
      id: 4,
      img: '../../assets/img/fe1.jpg'
    }
    ],

  combo_offer:[
    {
      id: 1,
      text: 'Fresh gurden tomato combo offer...',
      price: '$37',
      img_bkg: '../../assets/img/offer-img01.jpg'
    },
    {
      id: 2,
      text: 'Some organic healty fruits combo offer...',
      price: '$49',
      img_bkg: '../../assets/img/offer-img02.jpg'
    }
  ],
  
  trend_product: [
      {
        id: 1,
        name: 'Orange juice',
        img: '../../assets/img/s1.jpg',
        oldprice: '$20',
        lastprice: '$15',
        sale: true,
        sold: 202
      },
      {
        id: 2,
        name: 'Fress Cobies',
        img: '../../assets/img/s2.jpg',
        oldprice: '$19',
        lastprice: '$17',
        sale: true,
        sold: 267
      },
      {
        id: 4,
        name: 'Fresh Blueberries',
        img: '../../assets/img/s4.jpg',
        oldprice: '$19',
        lastprice: '$14',
        sale: true,
        sold: 404
      },
      {
        id: 5,
        name: 'Fress Apple',
        img: '../../assets/img/s5.jpg',
        oldprice: '',
        lastprice: '$18',
        sale: false,
        sold: 477
      },
      {
        id: 7,
        name: 'Naga Pepper',
        img: '../../assets/img/s7.jpg',
        oldprice: '',
        lastprice: '$21',
        sale: false,
        sold: 500
      },
      {
        id: 8,
        name: 'Fresh Watermelon',
        img: '../../assets/img/s8.jpg',
        oldprice: '',
        lastprice: '$15',
        sale: false,
        sold: 315
      },
      {
        id: 9,
        name: 'Red Gajor',
        img: '../../assets/img/s9.jpg',
        oldprice: '$29',
        lastprice: '$26',
        sale: true,
        sold: 390
      },
      {
        id: 10,
        name: 'Organic Letus',
        img: '../../assets/img/s10.jpg',
        oldprice: '',
        lastprice: '$23',
        sale: false,
        sold: 451
      },
    ],

  gallery: [
      {
        id: 1,
        img: '../assets/img/blo1-150x150.jpg'
      },
      {
        id: 2,
        img: '../assets/img/blo2-150x150.jpg'
      },
      {
        id: 3,
        img: '../assets/img/blo3-150x150.jpg'
      },
      {
        id: 4,
        img: '../assets/img/blo4-150x150.jpg'
      },
      {
        id: 7,
        img: '../assets/img/blo7-150x150.jpg'
      },
      {
        id: 8,
        img: '../assets/img/blo8-150x150.jpg'
      },
      {
        id: 9,
        img: '../assets/img/blo9-150x150.jpg'
      },
    ],

    top_trending: []
})


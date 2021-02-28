import { RootState } from '../../store'

export const mockInitialState: RootState = {
  merchantsStore: {
    merchants: [
      {
        categoryId: 1,
        iconUrl:
          'https://pbs.twimg.com/profile_images/1151788824093188097/wHfb5mYZ_bigger.png',
        id: 'merchant-1',
        isBill: false,
        name: 'Vodafone',
        transactions: [
          {
            amount: 12.34,
            date: '2018-01-13',
            id: 36,
          },
          {
            amount: 14.34,
            date: '2018-02-13',
            id: 37,
          },
          {
            amount: 15.54,
            date: '2018-03-13',
            id: 38,
          },
          {
            amount: 11.34,
            date: '2018-04-13',
            id: 39,
          },
          {
            amount: 18.99,
            date: '2018-05-13',
            id: 40,
          },
        ],
      },
      {
        categoryId: 2,
        iconUrl:
          'https://pbs.twimg.com/profile_images/1280004967726751744/1YFw1Bdu_bigger.jpg',
        id: 'merchant-2',
        isBill: true,
        name: 'Sky TV',
        transactions: [
          {
            amount: 82.17,
            date: '2018-01-01',
            id: 41,
          },
          {
            amount: 82.17,
            date: '2018-02-01',
            id: 42,
          },
          {
            amount: 82.17,
            date: '2018-03-01',
            id: 43,
          },
          {
            amount: 82.17,
            date: '2018-04-01',
            id: 44,
          },
          {
            amount: 82.17,
            date: '2018-05-01',
            id: 45,
          },
        ],
      },
      {
        categoryId: 3,
        iconUrl:
          'https://pbs.twimg.com/profile_images/1280422740638470147/aBXwvFOs_bigger.jpg',
        id: 'merchant-3',
        isBill: true,
        name: 'HSBC Mortgage',
        transactions: [
          {
            amount: 1023,
            date: '2018-01-01',
            id: 1,
          },
          {
            amount: 1023,
            date: '2018-02-01',
            id: 2,
          },
          {
            amount: 1023,
            date: '2018-03-01',
            id: 3,
          },
          {
            amount: 1023,
            date: '2018-04-01',
            id: 4,
          },
          {
            amount: 1023,
            date: '2018-05-01',
            id: 5,
          },
        ],
      },
    ],
    loading: false,
    errors: '',
  },
  categoriesStore: {
    categories: [
      {
        iconUrl:
          'https://s3.eu-west-2.amazonaws.com/cleoassets/images/category_icons/income.png',
        id: 1,
        name: 'Phone',
      },
      {
        iconUrl:
          'https://s3.eu-west-2.amazonaws.com/cleoassets/images/category_icons/entertainment.png',
        id: 2,
        name: 'TV',
      },
      {
        iconUrl:
          'https://s3.eu-west-2.amazonaws.com/cleoassets/images/category_icons/bank_charges.png',
        id: 3,
        name: 'Bank Charges',
      },
    ],
    loading: false,
    errors: '',
  },
}

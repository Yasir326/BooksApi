import { mapJSONResponse } from './getBooksList';

const books = [
  {
    book: {
      title: 'harry potter',
      author: 'JK Rowling',
      isbn: '12fgrwgrgrgrtgrg'
    },

    stock: {
      quantity: 10,
      price: 4.5
    }
  },

  {
    book: {
      title: 'goosbumps',
      author: 'R.L Stein',
      isbn: '12fgrwg12334tgrg'
    },
    stock: {
      quantity: 6,
      price: 2.5
    }
  }
];

describe('mapJSONResponse', () => {
  const mappedJsonResponse = [
    {
      title: 'harry potter',
      author: 'JK Rowling',
      isbn: '12fgrwgrgrgrtgrg',
      quantity: 10,
      price: 4.5
    },
    {
      title: 'goosbumps',
      author: 'R.L Stein',
      isbn: '12fgrwg12334tgrg',
      quantity: 6,
      price: 2.5
    }
  ];
  it('it maps response to JSON', () => {
    const result = mapJSONResponse(books);
    expect(result).toEqual(mappedJsonResponse);
  });
});

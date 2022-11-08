import { mapJSONResponse, parseXml, mapXmlToJson } from './getBooksList';

const xmlString = `<?xml version="1.0" encoding="UTF-8"?>
<books>
    <book>
        <title>Game Of Thrones</title>
        <author>George R.R. Martin</author>
        <isbn>978-0007548231</isbn>
        <quantity>10</quantity>
        <price>6.99</price>
      </book>
    <book>
        <title>Fear Street the Beginning</title>
        <author>R.L Stein</author>
        <isbn>978-1534477841</isbn>
        <quantity>6</quantity>
        <price>2.5</price>
      </book>
</books>`;

const mappedJsonResponse = [
  {
    title: 'Game Of Thrones',
    author: 'George R.R. Martin',
    isbn: '978-0007548231',
    quantity: 10,
    price: 6.99
  },
  {
    title: 'Fear Street the Beginning',
    author: 'R.L Stein',
    isbn: '978-1534477841',
    quantity: 6,
    price: 2.5
  }
];

describe('mapJSONResponse', () => {
  const books = [
    {
      book: {
        title: 'Game Of Thrones',
        author: 'George R.R. Martin',
        isbn: '978-0007548231'
      },

      stock: {
        quantity: 10,
        price: 6.99
      }
    },

    {
      book: {
        title: 'Fear Street the Beginning',
        author: 'R.L Stein',
        isbn: '978-1534477841'
      },
      stock: {
        quantity: 6,
        price: 2.5
      }
    }
  ];

  it('it maps response to JSON', () => {
    const result = mapJSONResponse(books);
    expect(result).toEqual(mappedJsonResponse);
  });
});

describe('parseXml', () => {
  const parsedXMlObject = [
    {
      books: {
        book: [
          {
            title: 'Game Of Thrones',
            author: 'George R.R. Martin',
            isbn: '978-0007548231',
            quantity: '10',
            price: '6.99'
          },
          {
            title: 'Fear Street the Beginning',
            author: 'R.L Stein',
            isbn: '978-1534477841',
            quantity: '6',
            price: '2.5'
          }
        ]
      }
    }
  ];
  it('it maps xml string to json', async () => {
    const result = await parseXml(xmlString);
    expect(result).toEqual(parsedXMlObject);
  });
});

describe('mapXmlToJson', () => {
  it('maps parsedXML object to json', async () => {
    const result = await mapXmlToJson(xmlString);
    console.log(result);
    expect(result).toEqual([
      {
        title: 'Game Of Thrones',
        author: 'George R.R. Martin',
        isbn: '978-0007548231',
        quantity: '10',
        price: '6.99'
      },
      {
        title: 'Fear Street the Beginning',
        author: 'R.L Stein',
        isbn: '978-1534477841',
        quantity: '6',
        price: '2.5'
      }
    ]);
  });
});

# EDF REFACTOR

For this task, I chose to use [axios](https://axios-http.com/) as it is isomorphic (*it can run in the browser and `nodejs` with the same codebase*). On the `server-side` it uses the native `node.js` http module, while on the client (browser) it uses `XMLHttpRequests`.

## Getting Started

Ensure you have [nodejs](https://nodejs.org/en/) setup on your machine.

As we are using a dummy endpoint, there is no local running instance however there are unit tests, which have been set up to check if the various functions are working and returning the data correctly.

1. `npm i`
2. `npm run test` -> run the unit tests

**I made the following assumptions**:

1. The response if the format was `JSON` would look like the following:

```json
[
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

```


2. `Axios` converts anything which is not `text/json` into a `string`. So I made the following assumption that the `xml` string would look like the following if the format was `xml`.

```xml
<?xml version="1.0" encoding="UTF-8"?>
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
</books>
```

## If more time

If I had more time I would have liked to use something like [nock](https://www.npmjs.com/package/nock) to test the endpoint

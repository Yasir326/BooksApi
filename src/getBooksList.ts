import { GetBookList } from './api';
import { Book, RequestParams } from './types';

export const getBooks = async (params: RequestParams) => {
  try {
    const books = await GetBookList.getBooksByAuthor(params);
    return params.format == 'json' ? mapJSONResponse(books) : mapXml(books);
  } catch (error: any) {
    if (error.response.status == 404) {
      console.error(error);
      throw new Error(`'Books by author not found, :error ${error}`);
    }
    throw new Error('Internal Sever Error');
  }
};

export function mapJSONResponse(books: Book[]) {
  return books.map((item) => {
    return {
      title: item.book.title,
      author: item.book.author,
      isbn: item.book.isbn,
      quantity: item.stock.quantity,
      price: item.stock.price
    };
  });
}

export function mapXml(books: Book[]) {
  let data = `<?xml version="1.0" encoding="UTF-8"?>`;
  data += `<books>`;
  for (let item of books) {
    data += `<book>
           <title>${item.book.title}</title>
           <author>${item.book.author}</author>
           <isbn>${item.book.isbn}</isbn>
           <quantity>${item.stock.quantity}</quantity>
           <price>${item.stock.price}</price>
        </book>`;
  }

  data += `</books>`;
  return data;
}

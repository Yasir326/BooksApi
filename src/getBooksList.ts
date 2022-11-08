import { GetBookList } from './api';
import { Book, RequestParams, XMLResponse } from './types';
import xml2js from 'xml2js';

export const getBooks = async (params: RequestParams) => {
  try {
    const books = await GetBookList.getBooksByAuthor(params);
    return typeof books === 'string'
      ? mapXmlToJson(books)
      : mapJSONResponse(books);
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

export async function parseXml(xmlString: string): Promise<XMLResponse[]> {
  const parser = new xml2js.Parser({ explicitArray: false });
  return await new Promise((resolve, reject) =>
    parser.parseString(xmlString, (err: any, jsonData: XMLResponse) => {
      if (err) {
        reject(`Unable to parse to xml due to: ${err}`);
      }
      console.log(JSON.stringify([jsonData]));
      resolve([jsonData]);
    })
  );
}

export async function mapXmlToJson(xmlString: string) {
  try {
    const parsedXML = await parseXml(xmlString);
    return parsedXML[0].books.book;
  } catch (error) {
    throw new Error('Could not map object');
  }
}

import { Book, RequestParams } from './types';
import axios, { AxiosResponse } from 'axios';

const instance = axios.create({
  baseURL: 'http://api.book-buy.com/',
  timeout: 5000
});

const responseBody = (response: AxiosResponse) => response.data;

const bookRequests = {
  get: (url: string, params: RequestParams) =>
    instance.get<Book>(url, { params }).then(responseBody)
};

export const GetBookList = {
  getBooksByAuthor: (params: RequestParams): Promise<Book[]> | string =>
    bookRequests.get('/books/by-author?q=', params),
  getBooksByPublisher: (params: RequestParams): Promise<Book[]> =>
    bookRequests.get('/books/by-publisher?q=', params),
  getBooksByYearPublished: (params: RequestParams): Promise<Book[]> =>
    bookRequests.get('/books/by-year-published?q=', params)
};

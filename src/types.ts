export type Book = {
  book: {
    title: string;
    author: string;
    isbn: string;
  };

  stock: {
    quantity: number;
    price: number;
  };
};

export type RequestParams = {
  authorName: string;
  limit: number;
  format: string;
};

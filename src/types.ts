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

export type XMLResponse = {
  books: {
    book: [
      title: string,
      author: string,
      isbn: string,
      quantity: number,
      price: number
    ];
  };
};

export type RequestParams = {
  authorName: string;
  limit: number;
  format: string;
};

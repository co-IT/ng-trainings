import { Book } from './book';

function throwError() {
  throw new Error('Expected to fail');
}

describe('Smoke Test', () => {
  let trueOrFalse: boolean;

  // executed only one time
  beforeAll(() => { });

  // executed before each it()-Method
  beforeEach(() => {
    trueOrFalse = true;
  });

  it('expect true to be true', () => {
    expect(trueOrFalse).toBe(true);
  });

  it('expect to fail', () => {
    expect(() => throwError()).toThrowError('Expected to fail');
  });

  // executed after each test
  afterEach(() => { });

  // executed one time after all tests are finished
  afterAll(() => {});
});

describe('(model) Book', () => {
  let sut: Book;

  beforeEach(() => {
    sut = Book.empty();
  });

  describe('When a book is rated higher than 5', () => {
    it('the rating remains 5', () => {
      sut.rating = 5;

      sut.rating++;

      expect(sut.rating).toBe(5);
    });
  });

  describe('When a book is rated lower than 0', () => {
    it('the rating remains 0', () => {
      sut.rating--;
      expect(sut.rating).toBe(0);
    });
  });
});

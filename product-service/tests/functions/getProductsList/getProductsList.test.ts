import * as getProducts from '../../../src/functions/getProductList/handler';
const { getProductList } = getProducts;

describe('getProductList test', () => {
  test('should return 200 status and correct product list', async () => {
    const correctResponse = await getProductList();
    expect(correctResponse.statusCode).toBe(200);
  });
});

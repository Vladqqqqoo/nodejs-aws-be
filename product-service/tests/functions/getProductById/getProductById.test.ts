import * as getProduct from '../../../src/functions/getProductById/handler';
import { event } from '../../mocks/productsListMock';
const { getProductById } = getProduct;

describe('getProductById test', () => {
  test('should return 200 status and correct product', async () => {
    const correctResponse = await getProductById(event);
    expect(correctResponse.statusCode).toBe(200);
  });
  test('should return 400 status and correct product', async () => {
    const correctResponse = await getProductById({
      pathParameters: {
        productId: ''
      }
    });
    expect(correctResponse.statusCode).toBe(400);
  });
  test('should return 404 status and correct product', async () => {
    const correctResponse = await getProductById({
      pathParameters: {
        productId: '123'
      }
    });
    expect(correctResponse.statusCode).toBe(404);
  });
});

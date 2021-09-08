//lambda source code

import 'source-map-support/register';

// import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
// import schema from './schema';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
import mockedProductList from '@libs/products.json';

// export const getProductById: ValidatedEventAPIGatewayProxyEvent<typeof schema> =
export const getProductById = async (event) => {
  const { productId } = event.pathParameters;

  if (!productId) {
    return formatJSONResponse(400, {
      message: 'Please, provide correct product id'
    });
  }

  const product = mockedProductList.find((product) => product.id === productId);

  if (!product) {
    return formatJSONResponse(404, { message: 'Product not found' });
  }

  return formatJSONResponse(200, {
    ...product
  });
};

export const main = middyfy(getProductById);

//lambda source code

import 'source-map-support/register';

import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
import schema from './schema';
import mockedProductList from '@libs/products.json';

const getProductById: ValidatedEventAPIGatewayProxyEvent<typeof schema> =
  async (event) => {
    const { productId } = event.pathParameters;
    const product = mockedProductList.find(
      (product) => product.id === productId
    );

    return formatJSONResponse({
      ...product
    });
  };

export const main = middyfy(getProductById);

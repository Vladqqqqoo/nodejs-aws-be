//lambda source code

import 'source-map-support/register';

import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
import schema from './schema';
import mockedProductList from '@libs/products.json';

const getProductList: ValidatedEventAPIGatewayProxyEvent<typeof schema> =
  async () => {
    return formatJSONResponse({
      products: mockedProductList
    });
  };

export const main = middyfy(getProductList);

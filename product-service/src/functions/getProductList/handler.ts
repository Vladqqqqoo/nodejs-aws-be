//lambda source code

import 'source-map-support/register';

// import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
// import schema from './schema';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
import mockedProductList from '@libs/products.json';
import { ProductList } from '@libs/types';

export const getMockedProductListData = (): Promise<ProductList> =>
  Promise.resolve(mockedProductList);

// export const getProductList: ValidatedEventAPIGatewayProxyEvent<typeof schema> =
export const getProductList = async () => {
  const productList: ProductList = await getMockedProductListData();
  return formatJSONResponse(200, productList);
};

export const main = middyfy(getProductList);

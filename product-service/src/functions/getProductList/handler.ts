import 'source-map-support/register';
import { Client, ClientConfig } from 'pg';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
import { ProductList } from '@libs/types';

const { PG_HOST, PG_PORT, PG_DATABASE, PG_USERNAME, PG_PASSWORD } = process.env;
const dbOptions = {
  host: PG_HOST,
  port: PG_PORT,
  database: PG_DATABASE,
  user: PG_USERNAME,
  password: PG_PASSWORD,
  ssl: {
    rejectUnauthorized: false
  },
  connectionTimeoutMillis: 5000
} as unknown as ClientConfig;

export const getProductList = async () => {
  const client = new Client(dbOptions);

  try {
    await client.connect();
    const { rows: productsList }: { rows: ProductList } = await client.query(`
        select products.id, products.title, products.description, products.color,
        products.fabric, products.price, stocks.product_count AS "count"
        from products join stocks on products.id=stocks.product_id
      `);
    console.log({ productsList });

    return formatJSONResponse(200, productsList);
  } catch (err) {
    return formatJSONResponse(500, { message: err.message });
  } finally {
    client.end();
  }
};

export const main = middyfy(getProductList);

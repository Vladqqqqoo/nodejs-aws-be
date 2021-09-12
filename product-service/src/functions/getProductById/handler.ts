import 'source-map-support/register';
import { Client, ClientConfig } from 'pg';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
import { Product } from '@libs/types';

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

export const getProductById = async (event, context) => {
  console.log(event, context);
  const client = new Client(dbOptions);

  try {
    console.log('Connecting to DB');
    await client.connect();
    const { productId } = event.pathParameters;

    console.log('Getting a product by id');
    if (!productId) {
      return formatJSONResponse(400, {
        message: 'Please, provide correct product id'
      });
    }

    const { rows: product }: { rows: Product } = await client.query(`
        select products.id, products.title, products.description, products.color,
        products.fabric, products.price, stocks.product_count AS "count"
        from products join stocks on products.id=stocks.product_id
        where products.id='${productId}' ;
      `);

    if (!product) {
      return formatJSONResponse(404, { message: 'Product not found' });
    }

    console.log('Product from DB: ', product);
    return formatJSONResponse(200, product);
  } catch (err) {
    console.log(err);
    return formatJSONResponse(500, { message: err.message });
  } finally {
    client.end();
  }
};

export const main = middyfy(getProductById);

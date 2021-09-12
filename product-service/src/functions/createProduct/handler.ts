import 'source-map-support/register';
import { Client, ClientConfig } from 'pg';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
import { v4 as uuidv4 } from 'uuid';
import { validateProductPayload } from './validation';

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

export const createProduct = async (event, context) => {
  console.log(event, context);
  const client = new Client(dbOptions);

  try {
    console.log('Connecting to DB');
    await client.connect();
    await client.query('BEGIN');
    const productData = event.body;

    console.log('Inserting a product');

    const hasError = validateProductPayload(productData);

    if (hasError instanceof Error) {
      console.log('Incorrect product payload');
      return formatJSONResponse(400, {
        message: hasError.message
      });
    }

    const { title, description, color, fabric, price, count } = productData;

    const id = uuidv4();

    await client.query(`
    insert into products (id, title, description, color, fabric, price)
    values (
      '${id}',
      '${title}',
      '${description}',
      '${color}',
      '${fabric}',
      ${+price}
    )
    `);

    await client.query(`
    insert into stocks (product_id, product_count) values
    ('${id}', ${+count})
    `);

    await client.query('COMMIT');

    console.log('Item was successfully added to DB: ', { id, ...productData });
    return formatJSONResponse(200, { id, ...productData });
  } catch (err) {
    console.log(err);
    await client.query('ROLLBACK');
    return formatJSONResponse(500, { message: err.message });
  } finally {
    client.end();
  }
};

export const main = middyfy(createProduct);

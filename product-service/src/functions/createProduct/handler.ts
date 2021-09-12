import 'source-map-support/register';
import { Client, ClientConfig } from 'pg';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
import { v4 as uuidv4 } from 'uuid';

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

export const createProduct = async (event) => {
  const client = new Client(dbOptions);

  try {
    await client.connect();
    await client.query('BEGIN');
    const productData = event.body;

    if (!productData) {
      return formatJSONResponse(400, {
        message: 'Please, provide correct product payload'
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

    return formatJSONResponse(200, { id, ...productData });
  } catch (err) {
    await client.query('ROLLBACK');
    return formatJSONResponse(500, { message: err.message });
  } finally {
    client.end();
  }
};

export const main = middyfy(createProduct);

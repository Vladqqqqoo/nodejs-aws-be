//lambda input event JSON-Schema

export default {
  type: 'object',
  properties: {
    products: { type: 'array' }
  },
  required: ['products']
} as const;

const body = {
  title: 'love66',
  description: 'The best bed linens ever',
  color: 'apple green',
  fabric: 'satin',
  price: 180,
  count: 1
};

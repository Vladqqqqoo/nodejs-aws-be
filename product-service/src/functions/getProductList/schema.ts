//lambda input event JSON-Schema

export default {
  type: 'object',
  properties: {
    products: { type: 'array' }
  },
  required: ['products']
} as const;

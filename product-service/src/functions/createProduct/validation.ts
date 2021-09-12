// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const validateProductPayload = ({
  title,
  description,
  color,
  fabric,
  price,
  count
}): Error => {
  if (title === undefined) {
    return new Error('Title is required');
  } else if (description && typeof description !== 'string') {
    return new Error('Description should be a string');
  } else if (color && typeof color !== 'string') {
    return new Error('Color should be a string');
  } else if (fabric && typeof fabric !== 'string') {
    return new Error('Fabric should be a string');
  } else if (price && (typeof price !== 'number' || price < 0)) {
    return new Error('Price should be a positive number');
  } else if (
    count &&
    (typeof count !== 'number' || !Number.isInteger(count) || count < 0)
  ) {
    return new Error('Count should be a positive integer number');
  }
};

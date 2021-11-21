export default (value: number | string): string => {
  const convertVal = +value;
  return convertVal.toFixed(2) + " $";
};

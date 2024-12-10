export const getArrayElementFromKey = (variable: any, keyString: any) => {
  if (variable && keyString) {
    const levels = keyString?.split('.');
    let value: any = null;
    levels.forEach((level: any) => {
      if (value === null) value = variable[level];
      else value = value[level];
    });
    return value;
  }
  return null;
};

export const idGenerator = () => {
  return Math.floor(Math.random() * 100000);
};

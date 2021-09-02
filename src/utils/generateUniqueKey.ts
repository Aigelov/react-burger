export const generateKey = (key: string, milliseconds = 0) =>
  `${key}_${new Date().getTime() + milliseconds}`;

export const generateKey = (key, milliseconds = 0) =>
  `${key}_${new Date().getTime() + milliseconds}`;

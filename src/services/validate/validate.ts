export const validateFields = (
  fields: any,
  values: any,
  setInputErrors: any
): boolean => {
  let isValid = true;

  fields.forEach((name: string) => {
    if (!values[name] || values[name].trim() === "") {
      isValid = false;

      setInputErrors((prevValues: any) => ({
        ...prevValues,
        [name]: true,
      }));
    }
  });

  return isValid;
};

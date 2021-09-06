interface IStatusTypes {
  [key: string]: string;
}

export const STATUS_TYPES: IStatusTypes = {
  done: "Выполнен",
  pending: "Готовится",
  created: "Создан",
};

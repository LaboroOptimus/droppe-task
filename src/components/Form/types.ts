export interface Form {
  handleSubmit: (title: string, description: string, price: string) => void;
}

export enum FormKeys {
  Title = "Title",
  Price = "Price",
  Description = "Description",
}

export const initialForm = {
  [FormKeys.Title]: "",
  [FormKeys.Price]: "",
  [FormKeys.Description]: "",
};

export const initialValidate = {
  [FormKeys.Title]: false,
  [FormKeys.Price]: false,
  [FormKeys.Description]: false,
};

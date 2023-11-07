export type InformationResponse = {
  id: number;
  first_name: string;
  last_name: string;
  age: number;
  gender: string;
  address: string;
};

export type UpdateInformation = {
  id: number;
  first_name: string;
  last_name: string;
  age: number;
  address: string;
  gender: string;
};

export type InformationFormProps = {
  id: number;
  first_name: string;
  last_name: string;
  age: number;
  address: string;
  gender: string;
  setUpdate: (value: UpdateInformation) => void;
};

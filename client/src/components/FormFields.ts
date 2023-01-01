import { useState, ChangeEvent } from "react";

const defaultFormFields = {
  search: '',
  fullname: '',
  username: '',
  password: '',
};

const [formFields, setFormFields] = useState(defaultFormFields);

export const handleFormFields = (event: ChangeEvent<HTMLInputElement>) => {
  const { name, value } = event.target;
  setFormFields({ ...formFields, [name]: value });
};

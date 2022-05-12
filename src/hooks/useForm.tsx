import { ChangeEvent, useState } from "react";
import { data } from "../interfaces/Data";

// export function useForm<T>(initState: T) {
export const useForm = <T extends object>(initState: T) => {
  const [form, setForm] = useState(initState);

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [target.name]: target.value });
  };

  return {
    form,
    handleChange,
  };
};

// export const useForm = (initState: data) => {
//   const [form, setForm] = useState(initState);

//   const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
//     setForm({ ...form, [target.name]: target.value });
//   };

//   return {
//     form,
//     handleChange,
//   };
// };

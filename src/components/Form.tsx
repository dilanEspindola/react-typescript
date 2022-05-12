import { useForm } from "../hooks/useForm";
import { data } from "../interfaces/Data";

export const Form = () => {
  const { form, handleChange } = useForm<data>({
    email: "dlian@dilan.com",
    nombre: "dilan",
    edad: 20,
  });

  const { email, nombre, edad } = form;

  return (
    <form
      action=""
      className="flex flex-col  gap-2 p-5 w-6/12 border-2 m-auto my-4"
    >
      <h1>formulario</h1>
      <label htmlFor="">Email:</label>
      <input
        type="email"
        name="email"
        className="border-2 text-black p-1"
        value={email}
        onChange={handleChange}
      />
      <label htmlFor="">Nomnbre:</label>
      <input
        type="text"
        name="nombre"
        className="border-2 text-black p-1"
        value={nombre}
        onChange={handleChange}
      />

      <pre>{JSON.stringify(form)}</pre>
    </form>
  );
};

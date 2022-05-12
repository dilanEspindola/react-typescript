import { useForm } from "../hooks/useForm";
import { data } from "../interfaces/Data";

export const Form2 = () => {
  const { form, handleChange } = useForm<data>({
    pais: "colombia",
    ciudad: "bogota",
  });

  const { pais, ciudad } = form;

  return (
    <form
      action=""
      className="flex flex-col  gap-2 p-5 w-6/12 border-2 m-auto my-4"
    >
      <h1>formulario</h1>
      <label htmlFor="">Email:</label>
      <input
        type="text"
        name="pais"
        className="border-2 text-black p-1"
        value={pais}
        onChange={handleChange}
      />
      <label htmlFor="">Nomnbre:</label>
      <input
        type="text"
        name="ciudad"
        className="border-2 text-black p-1"
        value={ciudad}
        onChange={handleChange}
      />

      <pre>{JSON.stringify(form)}</pre>
    </form>
  );
};

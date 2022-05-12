import { Form } from "./components/Form";
import { Form2 } from "./components/Form2";

interface props {
  title: string;
}

function App({ title }: props) {
  return (
    <div className="bg-slate-400 h-screen">
      <h1>{title}</h1>
      <Form />
      <Form2 />
    </div>
  );
}

export default App;

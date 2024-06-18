// Parent.solid
import Child from './child.jsx';
import { createSignal, onCleanup } from "solid-js";

export default function Parent() {
  const [data, setData] = createSignal(''); // State to hold the data

  // Update data using the solid prop passed from Astro
  const updateData = (newData) => {
    setData(newData);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <Child onUpdateData={updateData} data={data()} />
    </div>
  );
};




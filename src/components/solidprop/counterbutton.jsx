import { createSignal } from 'solid-js';

export default function CountButton () {
  const [count, setCount] = createSignal(0);

  const increment = () => setCount(count() + 1);
  const decrement = () => setCount(count() - 1);
  const reset = () => setCount(0);

  return (
    <div>
      <p>Count: {count()}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

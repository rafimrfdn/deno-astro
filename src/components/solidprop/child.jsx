// Child.solid
import Grandchild from './grandchild.jsx';

export default function Child(props) {
  return (
    <div>
      <h2>Child Component</h2>
      <Grandchild onUpdateData={props.onUpdateData} data={props.data} />
    </div>
  );
}

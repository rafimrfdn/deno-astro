// Grandchild.solid
export default function Grandchild(props) {
  const updateData = () => {
    // Modify data and pass it back to the parent
    const newData = props.data + ' Updated!';
    props.onUpdateData(newData);
  };

  return (
    <div>
      <h3>Grandchild Component</h3>
      <button onClick={updateData}>Update Data</button>
    </div>
  );
}

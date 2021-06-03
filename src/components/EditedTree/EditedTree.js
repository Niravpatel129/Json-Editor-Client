import './EditedTree.scss';

const EditedTree = ({ editedKeys }) => {
  const renderEditedKeys = () => {
    return Object.entries(editedKeys).map(([key, value], index) => {
      return (
        <div className="keyPair" key={index}>
          <div className="keyTitle old">[Old Key]</div>
          <div>{key}</div>
          <div className="keyTitle new">[New Key]</div>
          <div>{value}</div>
        </div>
      );
    });
  };

  return (
    <div className="EditedTree">
      <h1>Edited Keys:</h1> {renderEditedKeys()}
    </div>
  );
};

export default EditedTree;

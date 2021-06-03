import { useContext, useState } from 'react';
import TreeContext from '../../context/TreeContext/TreeContext';
import EditedTree from '../EditedTree/EditedTree';
import './NodeTree.scss';

const NodeTree = () => {
  const [open, setOpen] = useState(false);
  const [editedKeys, setEditedKeys] = useState({});
  const [editable, setEditable] = useState();
  const { json, error } = useContext(TreeContext);

  const renderChild = (parent) => {
    if (!json) return;

    return Object.entries(parent).map(([key, value], index) => {
      if (typeof value === 'object') {
        return (
          <div key={index}>
            {editable?.[key] ? (
              <input
                className="key input"
                defaultValue={key}
                onChange={(e) => setEditedKeys({ ...editedKeys, [key]: e.target.value })}
                onBlur={() => setEditable({ [key]: false })}
              ></input>
            ) : (
              <b onClick={() => setEditable({ [key]: true })} className="key">
                {key}
              </b>
            )}
            <div style={{ marginLeft: '30px' }}>{renderChild(value)}</div>
          </div>
        );
      }

      return (
        <div className="keyPair" key={index}>
          {editable?.[key] ? (
            <input
              className="key input"
              defaultValue={key}
              onChange={(e) => setEditedKeys({ ...editedKeys, [key]: e.target.value })}
              onBlur={() => setEditable({ [key]: false })}
            ></input>
          ) : (
            <b onClick={() => setEditable({ [key]: true })} className="key">
              {key}
            </b>
          )}
          <span className="type">({typeof value})</span>: <span>{value}</span>
        </div>
      );
    });
  };

  return (
    <div className="NodeTree">
      <div className="dropdownArrow" onClick={() => setOpen(!open)}>
        {open ? '▲' : '▼'}
      </div>
      <div className="jsonTree" style={{ height: open ? '18px' : 'auto' }}>
        {error ? <div className="error">{error}</div> : renderChild(json)}
      </div>
      <EditedTree editedKeys={editedKeys} />
    </div>
  );
};

export default NodeTree;

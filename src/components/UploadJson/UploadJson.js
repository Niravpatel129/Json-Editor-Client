import { useContext } from 'react';
import TreeContext from '../../context/TreeContext/TreeContext';
import './UploadJson.scss';

const UploadJson = () => {
  const { setJson } = useContext(TreeContext);

  const handleChange = (e) => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], 'UTF-8');
    fileReader.onload = (e) => {
      setJson(JSON.parse(e.target.result));
    };
  };

  return (
    <div className="UploadJson">
      <input
        accept="application/JSON"
        className="hidden"
        type="file"
        id="files"
        name="filename"
        onChange={handleChange}
      />
      <label htmlFor="files">Upload JSON</label>
    </div>
  );
};

export default UploadJson;

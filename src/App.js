import NodeTree from './components/NodeTree/NodeTree';
import UploadJson from './components/UploadJson/UploadJson';
import TreeProvider from './context/TreeContext/TreeProvider';

function App() {
  return (
    <div className="App">
      <TreeProvider>
        <h1>Json Tree</h1>
        <NodeTree />
        <UploadJson />
      </TreeProvider>
    </div>
  );
}

export default App;

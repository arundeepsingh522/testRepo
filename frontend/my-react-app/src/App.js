import logo from './logo.svg';
import './App.css';
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  
import { showErrorToast, showInfoToast, showSuccesToast, showWarningToast } from './toastUtils';

function App() {
  return (
    <div className="App">
      <button onClick={()=>{
        console.log("hello")
        showWarningToast("Succes")
      }}>
        Click
      </button>
      <ToastContainer/>
    </div>
  );
}

export default App;

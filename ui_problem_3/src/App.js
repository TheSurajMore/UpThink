import './App.css';
import Heading from './Components/Heading';
import StudentsAndSubmissions from './Components/StudentsAndSubmissions';
import SubmissionsDiagrams from './Components/SubmissionsDiagrams';

function App() {
  return (
    <div className="App">
      <Heading/>
      <StudentsAndSubmissions/>
      <SubmissionsDiagrams/>
    </div>
  );
}

export default App;

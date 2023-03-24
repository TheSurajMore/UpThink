import './App.css';
import ActiveStudents from './Components/ActiveStudents';
import Heading from './Components/Heading';
import StudentsAndSubmissions from './Components/StudentsAndSubmissions';
import Submissions from './Components/Submissions';
import SubmissionsDiagrams from './Components/SubmissionsDiagrams';

function App() {
  return (
    <div className="App">
      <Heading/>
      <StudentsAndSubmissions/>
      <SubmissionsDiagrams/>
      <ActiveStudents/>
      <Submissions/>
    </div>
  );
}

export default App;

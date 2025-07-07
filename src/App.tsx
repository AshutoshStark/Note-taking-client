import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Homepage from './pages/DashBoard/DashBoard';
import NotesHomepage from './pages/Notes/NotesHomepage';
import LoginPage from './pages/LoginPage/LoginPage';
import SignUpPage from './pages/SignupPage/SignUpPage';
import { useStateContext } from './GlobalContext/ContextProvider';
import SemesterNotePage from './pages/Notes/SemesterNotePage';
import NotesPage from './pages/Notes/NotesPage';
import SubjectsNotePage from './pages/Notes/SubjectsNotePage';
import SemesterLabFile from './pages/Lab File/SemesterLabFile';
import LabFileHomepage from './pages/Lab File/LabFileHomepage';
import SubjectsLabFile from './pages/Lab File/SubjectsLabFile';
import LabFile from './pages/Lab File/LabFile';
import BooksHomepage from './pages/Books/BooksHomepage';
import SemesterBooks from './pages/Books/SemesterBooks';
import SubjectsBooks from './pages/Books/SubjectsBooks';
import Books from './pages/Books/Books';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Homepage/>} />
        <Route path='/notes' element={<NotesHomepage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/signup' element={<SignUpPage/>} />
        <Route path='/notes/:courseName' element={<SemesterNotePage/>}/>
        <Route path='/notes/:courseName/:semesterNumber/:type' element={<SubjectsNotePage/>}/>
        <Route path='/notes/:courseName/:semesterNumber/:subjectName/:type' element={<NotesPage/>}/>
        <Route path='/LabFile'element={<LabFileHomepage/>}/>
        <Route path='/LabFile/:courseName' element={<SemesterLabFile/>}/>
        <Route path='/LabFile/:courseName/:semesterNumber/:type' element={<SubjectsLabFile/>}/>
        <Route path='/LabFile/:courseName/:semesterNumber/:subjectName/:type' element={<LabFile/>}/>
        <Route path='/Books'element={<BooksHomepage/>}/>
        <Route path='/Books/:courseName' element={<SemesterBooks/>}/>
        <Route path='/Books/:courseName/:semesterNumber/:type' element={<SubjectsBooks/>}/>
        <Route path='/Books/:courseName/:semesterNumber/:subjectName/:type' element={<Books/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

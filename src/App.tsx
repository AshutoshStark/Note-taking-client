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
import { useStateContext } from './globalcontext/ContextProvider';
import Books from './pages/Books/Books';

function App() {

  const {currentUser} = useStateContext()
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ currentUser ? <Homepage/> : <LoginPage/>} />
        <Route path='/notes' element={<NotesHomepage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/signup' element={<SignUpPage/>} />
        <Route path='/notes/:courseName' element={ currentUser ? <SemesterNotePage/> : <LoginPage/>}/>
        <Route path='/notes/:courseName/:semesterNumber/:type' element={ currentUser ? <SubjectsNotePage/> : <LoginPage/>}/>
        <Route path='/notes/:courseName/:semesterNumber/:subjectName/:type' element={ currentUser ? <NotesPage/> : <LoginPage/>}/>
        <Route path='/LabFile'element={ currentUser ? <LabFileHomepage/> : <LoginPage/>}/>
        <Route path='/LabFile/:courseName' element={ currentUser ? <SemesterLabFile/> : <LoginPage/>}/>
        <Route path='/LabFile/:courseName/:semesterNumber/:type' element={ currentUser ? <SubjectsLabFile/> : <LoginPage/>}/>
        <Route path='/LabFile/:courseName/:semesterNumber/:subjectName/:type' element={ currentUser ? <LabFile/> : <LoginPage/>}/>
        <Route path='/Books'element={ currentUser ? <BooksHomepage/> : <LoginPage/>}/>
        <Route path='/Books/:courseName' element={ currentUser ? <SemesterBooks/> : <LoginPage/>}/>
        <Route path='/Books/:courseName/:semesterNumber/:type' element={ currentUser ? <SubjectsBooks/> : <LoginPage/>}/>
        <Route path='/Books/:courseName/:semesterNumber/:subjectName/:type' element={ currentUser ? <Books/> : <LoginPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

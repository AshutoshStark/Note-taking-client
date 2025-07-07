import axios from 'axios';
import React,{useEffect, useState} from 'react'
import { API_URL, ThemeDarkPurple, ThemeLigthPurple } from '../../components/Constants/constants';
import { Link, useParams } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import { styled } from 'styled-components';
import LoaderScreen from '../../components/Constants/LoaderScreen';
import { GradePalat } from '../../components/Constants/constantFunctions';

const SubjectsBooks = () => {
  const courseName = useParams().courseName;
  const semesterNumber = useParams().semesterNumber;
  const type = useParams().type;
  const [subjects,setSubjects] = useState([]);  
  const [isLoading,setIsLoading] = useState(true);

  useEffect(()=>{
    getSubjects();
  },[]);

  const getSubjects=async()=>{
    setIsLoading(true);
    const result = await axios.get(`${API_URL}/subjects/getSubjectByCourseAndSemester?courseName=${courseName}&semesterNumber=${semesterNumber}&type=${type}`);
    setSubjects(result.data.subjects);
    setIsLoading(false);
  }

  console.log(subjects)

  return (
    <Layout>
      <MainDiv>
          <Heading>
              <h1>
                Books
              </h1>
          </Heading>
          <hr />
          {isLoading &&(<LoaderScreen/>)}
          {!isLoading &&(
          <SubjectSelectSection>
            <h2>
              Select Subject
            </h2>
            {subjects.length === 0 && (
              <div>
                no subject uploded
              </div>
            )}
            <div className='subjects-container'>
              {subjects.map((item:any,index:any)=>(
                <Link className='subject-box' to={`/Books/${courseName}/${semesterNumber}/${item.subjectName}/Books`}>
                  <p>
                    {item.subjectName}
                  </p>
                </Link>
              ))}
            </div>
            
          </SubjectSelectSection>)}
        </MainDiv>
    </Layout>
  )
}

const SubjectSelectSection = styled.div`
 h2{
    font-family:"Poppins",sans-serif;
    font-weight: 500;
  }
  a{
    text-decoration: none;
  }
  .subjects-container{
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
  }
  .subject-box{
  width: 210px;
  height: 120px;
  margin: 0 0 0 0;
  background: #030a13;
  position: relative;
  display: flex;
  place-content: center;
  place-items: center;
  overflow: hidden;
  border-radius: 20px;

}

.subject-box p {
  border-radius: 20px;
  text-decoration: none;
  z-index: 1;
  color: white;
  font-size: 2rem;
  text-align: center;
}


.subject-box::before {
  content: '';
  position: absolute;
  width: 250px;
  background-image: linear-gradient(180deg,${(GradePalat())[0]},${(GradePalat())[1]});
  height: 70%;
  animation: rotBGimg 3s linear infinite;
  transition: all 0.2s linear;
}

@keyframes rotBGimg {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

.subject-box::after {
  content: '';
  position: absolute;
  background: #07182E;
  inset: 5px;
  border-radius: 15px;
}  
.semester-box:hover:before {
  background-image: linear-gradient(180deg,${ThemeLigthPurple},${ThemeDarkPurple});
  animation: rotBGimg 3.5s linear infinite;
}
  .subjects-container .subject-box:hover {
    transform: scale(1.1);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
}
  .subjects-container:hover > .subject-box:not(:hover) {
    transform: scale(0.9);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}
`

const Heading = styled.div`
  font-family: "Poppins", sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1{
    font-weight: 500;
    margin: 0 0 1rem 0;
  }
`

const MainDiv = styled.div`
  width: 100%;
  margin: 1rem;
  @media screen and (max-width:900px){
    margin : 0 1rem 1rem 1rem;
  }
  @media screen and (max-width:400px) {
    margin: 0;
  }
`



export default SubjectsBooks
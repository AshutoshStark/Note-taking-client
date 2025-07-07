import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout/Layout'
import { styled } from 'styled-components'
import { Link } from 'react-router-dom'
import { AiOutlinePlus } from 'react-icons/ai'
import axios from 'axios'
import { API_URL, ThemeDarkPurple, ThemeLigthPurple } from '../../components/Constants/constants'
import { GradePalat } from '../../components/Constants/constantFunctions'
import LoaderScreen from '../../components/Constants/LoaderScreen'

const LabFileHomepage = () => {

  const [courses,setCourses] = useState<any>([]);
  const [isLoading,setIsLoading] = useState(true);
  useEffect(()=>{
    getAllCourses();
  },[]);

  const getAllCourses=async()=>{
    setIsLoading(true);
    const response = await axios.get(`${API_URL}/courses/getAllCourses`);
    setCourses(response.data.courses);
    setIsLoading(false);
  } 

  return (
    <Layout>
        <MainDiv>
          <Heading>
              <h1>
                Lab Files
              </h1>
          </Heading>
          <hr />
          {isLoading && (<LoaderScreen/>)}
        {!isLoading && (<CoursesSection>
            <h2>
              Select Course
            </h2>
            <div className='courses-container'>
              {courses.map((item:any,index:any)=>(
                <Link className='course-box' to={`/LabFile/${item.courseName}`}>
                  <p>
                  {item.courseName}
                  </p>
                </Link>
              ))}
            </div>
            
          </CoursesSection>)}
        </MainDiv>
    </Layout>
  )
}
const CoursesSection = styled.div`
  h2{
    font-family:"Poppins",sans-serif;
    font-weight: 500;
  }
  a{
    text-decoration: none;
  }
  .courses-container{
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
  }
  .course-box{
  width: 220px;
  height: 120px;
  background: #07182E;
  position: relative;
  display: flex;
  place-content: center;
  place-items: center;
  overflow: hidden;
  border-radius: 20px;
}

.course-box p {
  text-decoration: none;
  z-index: 1;
  color: white;
  font-size: 2rem;
  text-align: center;
}

.course-box::before {
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

.course-box::after {
  content: '';
  position: absolute;
  background: #07182E;
  inset: 5px;
  border-radius: 15px;
}  
.course-box:hover:before {
  background-image: linear-gradient(180deg,${ThemeLigthPurple},${ThemeDarkPurple});
  animation: rotBGimg 3.5s linear infinite;
}
  .courses-container .course-box:hover {
    transform: scale(1.1);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
}
  .courses-container:hover > .course-box:not(:hover) {
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

export default LabFileHomepage
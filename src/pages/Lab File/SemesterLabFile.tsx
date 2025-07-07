import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Layout from '../../components/Layout/Layout';
import axios from 'axios';
import { API_URL, ThemeDarkPurple, ThemeLigthPurple } from '../../components/Constants/constants';
import { styled } from 'styled-components';
import LoaderScreen from '../../components/Constants/LoaderScreen';
import { GradePalat } from '../../components/Constants/constantFunctions';

const SemesterLabFile = () => {
    const courseName = useParams().courseName;
    const [noOfSemesters,setNoOfSemesters] = useState<any>(1);
    const [isLoading,setIsLoading] = useState(true);
    useEffect(()=>{ 
        getCourse();
    },[]);

    const getCourse=async()=>{
        setIsLoading(true);
        const response = await axios.get(`${API_URL}/courses/getCourseByName?courseName=${courseName}`);
        setNoOfSemesters(response.data.course.numberOfSemesters);
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
          {!isLoading && (<SemesterSelectSection>
            <h2>
              Select Semester
            </h2>
            <div className='semesters-container'>
              {[...Array(noOfSemesters)].map((item:any,index:any)=>(
                <Link className='semester-box' to={`/LabFile/${courseName}/${index+1}/Practical`}>
                  <p>
                  {index+1}
                  </p>
                </Link>
              ))}
            </div>
            
          </SemesterSelectSection>)}
        </MainDiv>
    </Layout>
  )
}



const SemesterSelectSection = styled.div`
  h2{
    font-family:"Poppins",sans-serif;
    font-weight: 500;
  }
  a{
    text-decoration: none;
  }
  .semesters-container{
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
  }
  .semester-box{
  width: 90px;
  height: 80px;
  margin: 0 0 0 0;
  background: #030a13;
  position: relative;
  display: flex;
  place-content: center;
  place-items: center;
  overflow: hidden;
  border-radius: 20px;

}

.semester-box p {
  border-radius: 20px;
  text-decoration: none;
  z-index: 1;
  color: white;
  font-size: 2rem;
}


.semester-box::before {
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

.semester-box::after {
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
  .semesters-container .semester-box:hover {
    transform: scale(1.1);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
}
  .semesters-container:hover > .semester-box:not(:hover) {
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

export default SemesterLabFile
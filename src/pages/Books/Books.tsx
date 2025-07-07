import axios from 'axios';
import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { API_URL, ThemeLighRed } from '../../components/Constants/constants';
import Layout from '../../components/Layout/Layout';
import { styled } from 'styled-components';
import { BsDownload } from 'react-icons/bs';
import { GrRefresh } from 'react-icons/gr';
import { Toast } from '../../components/Constants/constantFunctions';
import LoaderScreen from '../../components/Constants/LoaderScreen';


const Books = () => {
    const courseName = useParams().courseName;
    const semesterNumber = useParams().semesterNumber;
    const subjectName = useParams().subjectName;
    const type = useParams().type;
    const [noteFiles,setNoteFiles] = useState([]);
    const [isLoading,setIsLoading] = useState(true);

    useEffect(()=>{
        getNotes();
    },[]);

    const getNotes=async()=>{
      setIsLoading(true);
      const result = await axios.get(`${API_URL}/notefile/getNoteFiles?subjectName=${subjectName}&courseName=${courseName}&semesterNumber=${semesterNumber}&Type=${type}`);
      setNoteFiles(result.data.notefiles);
      setIsLoading(false);
    }

    const refreshNotes=()=>{
      getNotes();
      Toast.fire({
          icon: 'success',
          title: 'Refreshed Successfully',
      })
  }

    console.log(noteFiles)

  return (
    <Layout>
      <MainDiv>
          <Heading>
              <h1>
                Books
              </h1>
          </Heading>
          <hr />
          {isLoading && (<LoaderScreen/>)}
          {!isLoading && (<Notes>
          <button type='button' onClick={()=>refreshNotes()}>
                    <GrRefresh/> Refresh
                </button>
            <table>
            <thead>
                <tr>
                <th className='heading'>
                    File Name
                </th>
                <th className='heading'>
                    Uploaded By
                </th>
                <th>
                </th>
                </tr>
                </thead>
                <tbody>
                {noteFiles?.length > 0 &&
                    noteFiles.map((item:any,index:any)=>(
                    <tr>
                    <td className='data'>
                        {item?.fileName}
                    </td>
                    <td className='data'>
                        {item?.uploadedBy}
                    </td>
                    <td className='buttonparentcell'>
                        <div className='buttonbox'>
                        <a href={item?.fileDownloadUrl}>
                        <button>
                            <BsDownload className="icon"/> Download
                        </button>
                        </a>
                        </div>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
          </Notes>)}
        </MainDiv>
    </Layout>
  )
}

const SubjectSelectSection = styled.div`
    h2{
    font-family:"Poppins",sans-serif;
    font-weight: 500;
  }

  .subjects-container{
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
  }

  .subject-box{
    font-family: "Poppins",sans-serif;
    border:none;
    background-color: #000000;
    color: white;
    padding: 0.5rem 1rem;
    margin: 0 0.5rem 0 0.5rem;
    border-radius: 0.5rem;
    font-size:1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    text-decoration:none;
  }
`

const Notes = styled.div`
  a{
        text-decoration: none;
    }
    thead{
    background-color: #d8d5f5;
    color: black;
    text-align: center;
}
th{
    padding: 1rem 1rem;
    text-align: center;
}
td{
    padding: 1rem 1rem;
    text-align: center;
}
table,td{
    margin: 2rem 0 0 0;
    border-collapse: collapse;
    border-radius: 1rem 1rem 0 0;
    overflow: hidden;
}
table{
    width: 100%;
}
tbody{
    border: 1px solid black;
}
tr{
    font-size:18px;
}
.heading{
    font-family: "Poppins",sans-serif;
    font-weight: 400;
    font-size: 17px;
}
.data{
    font-family: "Poppins",sans-serif;
    font-weight: 500;
    border: none;
    border-bottom: 1px solid black;
}
.icon{
    position: relative;
    top: -1px;
}
.buttonparentcell{
    width: 25%;
    border: none;
    border-bottom: 1px solid black;
}
.buttonbox{
    justify-content: center;
    display: flex;
    flex-direction: row;
    gap: 1rem;
}
.deleteButton{
    background-color: ${ThemeLighRed};
    color: white;
}
.tableHead{
    margin: 1rem 0 0 0 ;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    p{
    font-family: "Poppins",sans-serif;
    font-size: 1.5rem;
    }
    button{
    display: flex;
    gap: 0.2rem;
    }
}
button{
    font-family: "Poppins",sans-serif;
    border:none;
    background-color: #d8d5f5;
    padding: 0.5rem 1rem;
    margin: 0 0.5rem 0 0.5rem;
    border-radius: 0.5rem;
    font-size:1.1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
@media screen and (max-width:900px) {
    .buttonbox{
    flex-direction: column;
    }
    button{
    font-size: 1rem;
    }
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



export default Books
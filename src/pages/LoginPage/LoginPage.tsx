import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { FcGoogle } from 'react-icons/fc'
import toast from 'react-hot-toast'
import {useNavigate} from 'react-router-dom';
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth } from '../../Firebase/firebase';
import { useStateContext } from '../../GlobalContext/ContextProvider';
import useWindowDimensions from '../../hooks/useWindowDimensions';
const LoginPage = () => {

    const {width,height} = useWindowDimensions();
    const [emailId,setEmailId] = useState<any>("");
    const [password,setPassWord] = useState<any>("");
    const navigate = useNavigate();
    const {currentUser} = useStateContext();
    const handleSignIn=async(e:any)=>{
      e.preventDefault();
      await signInWithEmailAndPassword(auth,emailId,password).then((response)=>{
          navigate("/");
          toast.success(`Welcome!, ${currentUser.displayName}`);
          // This will replace the current route with home router so that user will not come
          // back to the login page again.
      }).catch((response)=>{
          toast.error("Please enter a valid email or password");
      });
    }
  
    const googleSignIn=async(e:any)=>{
      e.preventDefault();
      const googleAuthProvider = new GoogleAuthProvider();
      await signInWithPopup(auth,googleAuthProvider).then((response)=>{
        navigate("/");
      });
    }
  
    return (
      <div>
        {width! > 900 && (<WelcomeCard>
          <div className="flip-card-inner">
            <div className="flip-card-front">
                <p>Welcome to Notes Compass</p>
            </div>
            <div className="flip-card-back">
                <p>The Right Destination to Guide you</p>
            </div>
          </div>
        </WelcomeCard>)}
        <Container>
            <div className="back">
              <img src={"/assets/young-girl-reading-a-book-while-sitting-on-chair-3d-character-illustration-png.webp"} alt="" />
            <div className="container">
            <LoginForm>
              <div className="heading">Login</div>
              <form action="">
                  <input className="input" type='email' placeholder='Email' onChange={(e:any)=>setEmailId(e.target.value)} />
                  <input className="input" type="password" placeholder="Password" onChange={(e:any)=>setPassWord(e.target.value)}/>
                  <Link to="#">Forgot Password ?</Link>
                  <Link to="/signup">Don't have account ?</Link>
                  <LoginButton type='submit' onClick={(e:any)=>handleSignIn(e)}>
                    Login
                  </LoginButton>
                </form>
            </LoginForm>
            <OtherSignOption>
                <span className="title">Or Sign in with</span>
                  <div className="social-accounts">
                    <button className="social-button google" onClick={(e:any)=>googleSignIn(e)}>
                      {''}
                      <FcGoogle/>
                    </button>
                  </div>
            </OtherSignOption>
          </div>
          </div>
        </Container>
      </div>
    )
  }
  
  const WelcomeCard = styled.div`
    width: 60%;
    height: 50px;
    font-size: 1.5em;
    font-weight: 900;
    text-align: center;
    margin: 2rem 0 0 19rem;
  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 1s ease; 
    transform-style: preserve-3d;
  }
  
  &:hover .flip-card-inner {
    transform: rotateY(180deg);
  }
  
  .flip-card-front, .flip-card-back {
    box-shadow: 0 8px 14px 0 rgba(0,0,0,0.2);
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border: 1px solid rgb(16, 137, 211);
    border-radius: 1rem;
  }
  
  .flip-card-front {
    background: linear-gradient(120deg, #e4e9f0 60%, rgb(153, 212, 246) 88%,rgb(111, 189, 241));
    color: rgb(16, 137, 211);
  }
  
  .flip-card-back {
    background: linear-gradient(120deg, rgb(111, 189, 241) 30%, rgb(153, 212, 246) 88%,#e4e9f0);
    color: white;
    transform: rotateY(180deg);
  }
  
  `
  
  const OtherSignOption = styled.div`
    .title {
      display: block;
      text-align: center;
      font-size: 10px;
      color: rgb(170, 170, 170);
    }
    .social-accounts {
      width: 100%;
      display: flex;
      justify-content: center;
      gap: 15px;
      margin-top: 5px;
    }
    .social-button {
      background: linear-gradient(45deg, rgb(0, 0, 0) 0%, rgb(112, 112, 112) 100%);
      font-size: 20px;
      border: 5px solid white;
      padding: 5px;
      border-radius: 50%;
      width: 45px;
      aspect-ratio: 1;
      display: grid;
      place-content: center;
      box-shadow: rgba(133, 189, 215, 0.8784313725) 0px 12px 10px -8px;
      transition: all 0.2s ease-in-out;
      &:hover {
      transform: scale(1.2);
      }
      &:active {
        transform: scale(0.9);
      }
    }
    
  `
  
  
  const LoginButton = styled.button`
    display: block;
    width: 100%;
    font-weight: bold;
    background: linear-gradient(45deg, rgb(16, 137, 211) 0%, rgb(18, 177, 209) 100%);
    color: white;
    padding-block: 15px;
    margin: 20px auto;
    border-radius: 20px;
    box-shadow: rgba(95, 184, 225, 0.807) 0px 20px 10px -15px;
    border: none;
    transition: all 0.2s ease-in-out;
    &:hover{
      transform: scale(1.03);
      box-shadow: rgba(133, 189, 215, 0.8784313725) 0px 23px 10px -20px;
    }
    &:active {
      transform: scale(0.95);
      box-shadow: rgba(133, 189, 215, 0.8784313725) 0px 15px 10px -10px;
    }
  `
  
  
  const LoginForm = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    form {
      margin-top: 20px;
    }
    .heading {
      top: 1rem;
      font-weight: 900;
      font-size: 30px;
      color: rgb(16, 137, 211);
    }
    input {
      width: 90%;
      background: white;
      border: none;
      padding: 15px 20px;
      border-radius: 20px;
      margin-top: 15px;
      box-shadow: #cff0ff 0px 10px 10px -5px;
      border-inline: 2px solid transparent;
      ::-moz-placeholder {
        color: rgb(170, 170, 170);
      } 
      ::placeholder {
        color: rgb(170, 170, 170);
      }
      &:focus {
        outline: none;
        border-inline: 2px solid #12B1D1;
      }
    }
   a{
      display: block;
      margin-top: 10px;
      margin-left: 10px;
      font-size: 13px;
      color: #0099ff;
      text-decoration: none;
    }
  
  `
  
  
  const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 4rem 0 0 0;
    .back{
      display: flex;
      background-color: #f5f4f9;
      border-radius: 20px;
      box-shadow: 4px 14px 14px 14px #97a4ac3e;
      margin: 0 0 5rem 0;
      width: 60%;
      @media screen and (max-width: 1000px) {
        box-shadow: none;
        background-color: white;
        width: 95%;
        height: 700px
      }
    }
    img{
      width: 45%;
      margin: 0 -5rem 0 1rem;
      @media screen and (max-width: 1000px) {
        display: none;
      }
    }
    .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 40%;
    background: #F8F9FD;
    background: linear-gradient(0deg, rgb(255, 255, 255) 0%, rgb(244, 247, 251) 100%);
    border-radius: 40px;
    padding: 25px 35px;
    border: 5px solid rgb(255, 255, 255);
    box-shadow: rgba(133, 189, 215, 0.8784313725) 0px 30px 30px -20px;
    margin: 1rem 1rem 1rem 20%;
    @media screen and (max-width: 1000px) {
      width: 80%;
      height: 450px;
      margin: 5% 0 0 10%;
    }
    @media screen and (max-width: 900px) {
      width: 80%;
      height: 450px;
      margin: 5% 1rem 0 1rem;
    }
  }
  
  .social-account-container {
    position: absolute;
    margin: 21rem 0 0 0;
  }
  
  
  `
  
  export default LoginPage
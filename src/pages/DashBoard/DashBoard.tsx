import React from 'react'
import Layout from '../../components/Layout/Layout'
import { useStateContext } from '../../GlobalContext/ContextProvider';
import { Day, GradePalat } from '../../components/Constants/constantFunctions';
import { ThemeDarkPurple, ThemeLigthPurple } from '../../components/Constants/constants';
import { styled } from 'styled-components';
import useWindowDimensions from '../../hooks/useWindowDimensions';

const DashBoard = () => {

  const {width,height} = useWindowDimensions();

  const Now = new Date;
  const {currentUser} = useStateContext();
  function WishUser(time:any){
    if(time.getHours()>0 && time.getHours() <=12){
      return "Good Morning"
    }
    if(time.getHours()>12 && time.getHours() <17){
      return "Good After Noon"
    }
    if(time.getHours()>17 && time.getHours() <23){
      return "Good Evening"
    }
  }
  const Greet = WishUser(Now);

  console.log(Greet)

  return (
    <Layout>
      <MainDiv>
        {width! <900 &&(<Mobile>
          <div className="card">
              <div className="card__img">
                
              </div>
          <div className="card__avatar">
            <img src={currentUser.photoURL} alt="" />
          </div>
          <div className="card__title">
            {currentUser.displayName}
          </div>
          <div className="card__subtitle">
            {currentUser.email}
          </div>
          <div className="card__wrapper">
    </div>
</div>
        </Mobile>)}
          {width! > 900 && (<Card>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="card-inner">
              <img src={currentUser?.photoURL} alt="cant load"/>
              <div className="details">
                <p>
                  UserName.: {currentUser?.displayName}
                </p>
                Email.: {currentUser?.email}
              </div>
              <div className="Wish">
                <p>
                    {Greet}
                </p>
                    <div className="time">
                      <b>
                        {`${Now.getHours()} : ${Now.getMinutes()}`}
                      </b>
                    </div>
                <div className="Date">
                      <p>
                          {`${Day(Now.getDay())} /${Now.getDate()} /${Now.getMonth()} /${Now.getFullYear()}` }
                      </p>
                </div>
              </div>
              </div>
            </Card>)}
      </MainDiv>
    </Layout>
  )
}

const Mobile = styled.div`
  .card {
  --main-color: #000;
  --submain-color: #78858F;
  --bg-color: #fff;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  position: relative;
  width: 300px;
  height: 384px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  background: var(--bg-color);
  margin: 1rem 0 0 1rem;
  overflow-x: hidden;
  box-shadow: 3px 3px 3px 3px #78858F;
}

.card__img {
  height: 192px;
  width: 100%;
  border-radius: 20px 20px 0 0;
  background: linear-gradient(${(GradePalat())[0]}, ${(GradePalat())[1]});
}

.card__avatar {
  position: absolute;
  width: 114px;
  height: 114px;
  background: var(--bg-color);
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  top: calc(50% - 57px);
  img{
    width: 114px;
    height: 114px;
    object-fit: cover;
    border-radius: 100%;
  }
}

.card__avatar svg {
  width: 100px;
  height: 100px;
}

.card__title {
  margin-top: 60px;
  font-weight: 500;
  font-size: 18px;
  color: var(--main-color);
}

.card__subtitle {
  margin-top: 10px;
  font-weight: 400;
  font-size: 15px;
  color: var(--submain-color);
}

.card__btn {
  margin-top: 15px;
  width: 76px;
  height: 31px;
  border: 2px solid var(--main-color);
  border-radius: 4px;
  font-weight: 700;
  font-size: 11px;
  color: var(--main-color);
  background: var(--bg-color);
  text-transform: uppercase;
  transition: all 0.3s;
}

.card__btn-solid {
  background: var(--main-color);
  color: var(--bg-color);
}

.card__btn:hover {
  background: var(--main-color);
  color: var(--bg-color);
}

.card__btn-solid:hover {
  background: var(--bg-color);
  color: var(--main-color);
}
`

const MainDiv = styled.div`
    width: 140vh;
    height: 70vh;
    margin: 0 8rem 0 0;
    @media screen and (max-width: 900px) {
      width: 100vh;
      margin: 0;
    }
`

const Card = styled.div`

  .details{
    color: #242323bd;
    position: absolute;
    font-size: 1.5rem;
    margin:  0 0 0 3rem; 
    font-weight: 600;
    @media screen and (max-width: 1500px) {
      font-size: 1rem;
    }
  }

  .card-inner img{
    width: 180px;
    height: 180px;
    border: 3px solid ${ThemeDarkPurple};
    border-radius: 100%;
    object-fit: cover;
    margin: 3rem 0 0 2rem;
  }

  .Wish{
    float: right;
    p{
      font-size: 3rem;
      color:#2f2e2e9b;
      font-weight: 700;
      margin: 2rem 2rem 0 0;
      @media screen and (max-width: 1500px) {
        font-size: 2rem;
      }
    }
  }
  .Date{
    p{
      margin: 0rem 0 0 4rem;
      font-size: 1.5rem;
      @media screen and (max-width: 1500px) {
        font-size: 1rem;
      }
    }
  }
  .time{
    margin: 0rem 0rem 0 5rem;
    b{
      font-size: 5rem;
      color: #5a575797;
      @media screen and (max-width: 1500px) {
        font-size: 3rem;
      }
    }
  }

  margin: 8% 0 0 8%;
  width: 100%;
  height: 100%;
  transition: all 0.2s;
  position: relative;
  cursor: pointer;
.card-inner {
  width: inherit;
  height: inherit;
  background: rgba(255,255,255,.05);
  box-shadow: 0 0 10px rgba(0,0,0,0.25);
  backdrop-filter: blur(10px);
  border-radius: 8px;
}

&:hover {
  transform: scale(1.04) rotate(1deg);
}

.circle {
  width: 100px;
  height: 100px;
  background: radial-gradient(${ThemeDarkPurple},${ThemeLigthPurple});
  border-radius: 50%;
  position: absolute;
  animation: move-up6 2s ease-in infinite alternate-reverse;
}

.circle:nth-child(1) {
  top: -25px;
  left: -25px;
}

.circle:nth-child(2) {
  bottom: -25px;
  right: -25px;
  animation-name: move-down1;
}

@keyframes move-up6 {
  to {
    transform: translateY(-10px);
  }
}

@keyframes move-down1 {
  to {
    transform: translateY(10px);
  }
}`
export default DashBoard;
import eye from '../img/kakashi.png';
import eye_1 from '../img/kakashi1.png';
import style from '../module/index.module.scss'


 const Home = () => {
  return (
            <div className={style.eye }>
                <h1>Naruto API with React</h1>
              <img src={eye} className="App-logo" alt="logo"/>
              <img src={eye_1} className="App-logo" alt="logo" />
            </div>
  )
}
export default Home

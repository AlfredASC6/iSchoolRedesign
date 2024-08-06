//importing the important stuff
import React from 'react';
import {useState} from 'react';
import getData from './utils/getData';
//importing the componenets (like the CSS and other stuff we may need to use later)
import './App.css'
import './components/animate.css';
import PeopleTabs from './components/PeopleTabs.jsx';
import Minors from './components/Minors.jsx';
import Degrees from './components/Degrees.jsx';
import Employment from './components/Employment.jsx';
import logo from './assets/rit_logo.png';



const App = ()=>{
  //setting up state
  const[loaded, setLoaded] = useState(false);
  const[aboutObj, setAboutObj] = useState();
  const[minorObj, setMinorObj] = useState();
  const[degreesObj, setDegreesObj] = useState();
  const[empObj, setEmpObj] = useState();

  const [isDegreesVisible, setIsDegreesVisible] = useState(false);
  const [isMinorsVisible, setIsMinorsVisible] = useState(false);
  const [isEmploymentVisible, setIsEmploymentVisible] = useState(false);
  const [isPeopleVisible, setIsPeopleVisisble] = useState(false);
  const toggleDegrees = () => {
    setIsDegreesVisible(!isDegreesVisible);
    setIsMinorsVisible(false); // Ensure only one component is visible at a time
    setIsEmploymentVisible(false);
  };

  const toggleMinors = () => {
    setIsDegreesVisible(false);
    setIsEmploymentVisible(false);
    setIsPeopleVisisble(false);
    setIsMinorsVisible(!isMinorsVisible);
  };

  const toggleEmployment = () => {
    setIsDegreesVisible(false);
    setIsMinorsVisible(false);
    setIsPeopleVisisble(false);
    setIsEmploymentVisible(!isEmploymentVisible);
  };

  const togglePeople = () =>{
    setIsDegreesVisible(false);
    setIsMinorsVisible(false);
    setIsEmploymentVisible(false);
    setIsPeopleVisisble(!isPeopleVisible);
  }

  //getting data
  React.useEffect(() =>{
    //the page was just rendered, now get data
    //using the getData method from utils

    getData('about/').then((json) => {
     setAboutObj(json);
     console.log(json.title);
    //  setLoaded(true);
      // console.log(json);
    });
  }, []);
  //use everytime it renders. 

  React.useEffect(() =>{
    getData('minors/UgMinors').then((json) =>{
      setMinorObj(json);
      // setLoaded(true);

      // console.log(json);
    });
  }, [])

  React.useEffect(() =>{
    getData('degrees/').then((json) =>{
      setLoaded(true);
      setDegreesObj(json);
    })
  })

  // React.useEffect(() =>{
  //   getData('employment/').then((json) =>{
  //     console.log("got employee data");
  //     // console.log(json.coopTable.coopInformation);
  //     // console.log(json.introduction.title);
  //     // console.log(json.introduction.content[0].title);
  //     setEmpObj(json);
  //     setLoaded(true);
  //   })
  // })

  if(!loaded) return(
    <>
      <h1>Welcome to the iSchool!</h1>
      <img src = {logo} alt = "RIT logo" className = "logo"></img>
      <div>Loading...</div>
    </>
  )

    return(
      <>

        <div>Welcome to the iSchool!</div>
        <div className = "app">
          <div className = "about">
            <h2>{aboutObj.title}</h2>
            <h3>{aboutObj.description}</h3>

            <div className = "aboutQuote">
              <h4 className = "quote"> {aboutObj.quote}</h4>
              <h4>--{aboutObj.quoteAuthor}</h4>
            </div>
          </div> 

          </div>
          
          {/* <div class="ui pointing menu">

            <p class = "active item" onClick= {<Minors></Minors>}>
            </p>
          <p class="item" onlclick = {<Degrees></Degrees>}>
            
          </p>
          <p class="item">
          </p> */}

        <div id = "container">

          <h3 onClick={togglePeople} className='toggle'>People</h3>
          {isPeopleVisible ? <PeopleTabs></PeopleTabs>: null}
          <h3 onClick={toggleDegrees}  className='toggle'>Degrees</h3>
          {isDegreesVisible ? <Degrees></Degrees> : null}

          <h3 onClick={toggleMinors} className='toggle'>Minors</h3>
          {isMinorsVisible ?  <Minors></Minors> : null}

          <h3 onClick={toggleEmployment} className='toggle'>Employment</h3>
          {isEmploymentVisible ? <Employment></Employment> : null}
        </div>
        

      </> 

    )

}

export default App

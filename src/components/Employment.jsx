import React, {useState, useEffect} from 'react'
import getData from '../utils/getData';
import { TabPane, Tab } from 'semantic-ui-react'
import EmploymentGroup from './EmploymentGroup'
import logo from '../assets/rit_logo.png'
import './animate.css';


const Employment = () =>{
  const[loaded, setLoaded] = useState(false);
  const[emplObj, setEmplObj] = useState();

  const panes = [
    { menuItem: 'Co-op Information', render: () => 
    <TabPane>
      <EmploymentGroup title="coopTable" whichGroup = {emplObj.coopTable}></EmploymentGroup>
      Tab 1 Content</TabPane> },
    // { menuItem: 'Tab 3', render: () => <TabPane>Tab 3 Content</TabPane> },
  ]

  
  //use effect
  React.useEffect(()=>{
    getData('employment/').then((json)=> {
      setEmplObj(json);
      console.log(json.introduction.title);
      console.log(json.introduction.content[0].title);
      setLoaded(true);
    })  
  }, [])
  //if not loaded return following
  if(!loaded){
    return(
      <>

      <div className='loadHolder'>
        <h3>Our employment information is loading...</h3>
        <img src={logo} alt="RIT Logo" className = "logo-small" />
      </div>
        

      </>
    )
  }

  return(
    <div>

        <div>
            <h3>{emplObj.introduction.title}</h3>

            <h5>{emplObj.introduction.content[0].title}</h5>
            <p>{emplObj.introduction.content[0].description}</p>

            <h5>{emplObj.introduction.content[1].title}</h5>
            <p>{emplObj.introduction.content[1].description}</p>
        </div>


        <div>
          <h5>{emplObj.degreeStatistics.title}</h5>
          <p>{emplObj.degreeStatistics.statistics[0].value}</p>
          <p>{emplObj.degreeStatistics.statistics[0].description}</p>

          <p>{emplObj.degreeStatistics.statistics[1].value}</p>
          <p>{emplObj.degreeStatistics.statistics[1].description}</p>

          <p>{emplObj.degreeStatistics.statistics[2].value}</p>
          <p>{emplObj.degreeStatistics.statistics[2].description}</p>

          <p>{emplObj.degreeStatistics.statistics[3].value}</p>
          <p>{emplObj.degreeStatistics.statistics[3].description}</p>
        </div>

        <div>
          <h5>{emplObj.employers.title}:</h5>
          <p>{emplObj.employers.employerNames[0]}</p>
          <p>{emplObj.employers.employerNames[1]}</p>
          <p>{emplObj.employers.employerNames[2]}</p>
          <p>{emplObj.employers.employerNames[3]}</p>
          <p>{emplObj.employers.employerNames[4]}</p>
          <p>{emplObj.employers.employerNames[5]}</p>
        </div>
      
      <div>
        <h5>{emplObj.careers.title}</h5>
        <p>{emplObj.careers.careerNames[0]}</p>
        <p>{emplObj.careers.careerNames[1]}</p>
        <p>{emplObj.careers.careerNames[2]}</p>
        <p>{emplObj.careers.careerNames[3]}</p>
        <p>{emplObj.careers.careerNames[4]}</p>
        <p>{emplObj.careers.careerNames[5]}</p>
      </div>

      <Tab panes = {panes}></Tab>
    </div>
    
  )
}

export default Employment;
import React, {useState, useEffect} from 'react'
import getData from '../utils/getData';
import { TabPane, Tab } from 'semantic-ui-react'
import PeopleGroup from './PeopleGroup';
import "./People.css";
import logo from '../assets/rit_logo.png';
import './animate.css'


// const PeopleTabs = () => <Tab panes={panes} />

const PeopleTabs = ()=>{

  const panes = [
    { menuItem: 'Faculty', render: () => 
    <TabPane>
      <PeopleGroup title="Faculty" whichGroup = {peopObj.faculty}></PeopleGroup>
      </TabPane> },
      ,
    // { menuItem: 'Tab 3', render: () => <TabPane>Tab 3 Content</TabPane> },
  ]
  //state
  const[loaded, setLoaded] = useState(false);
  const[peopObj, setPeopObj] = useState();

  
  //use effect
  React.useEffect(()=>{
    getData('people/').then((json)=> {
      setPeopObj(json);
      setLoaded(true);

    })
  }, [])
  //if not loaded return following
  if(!loaded){
    return(
      <>
      <div className='loadHolder'>
        <h1>Our people are loading...</h1>
        <img src={logo} alt="RIT Logo" className = "logo-small" />
        </div>
      </>
    )
  }
  return(
    <div>
      <h3>{peopObj.title}</h3>
      <h5>{peopObj.subTitle}</h5>
      <Tab panes = {panes}></Tab>
    </div>
    
  )
}

export default PeopleTabs;
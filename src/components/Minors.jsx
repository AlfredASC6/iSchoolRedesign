import React, {useState, useEffect} from 'react'
import getData from '../utils/getData';
import { TabPane, Tab } from 'semantic-ui-react'
import MinorGroup from './MinorGroup'
import logo from '../assets/rit_logo.png';
import './animate.css'


const Minors = () =>{
  const[loaded, setLoaded] = useState(false);
  const[minorObj, setMinorObj] = useState();

  const panes = [
    { menuItem: '', render: () => 
    <TabPane>
      <MinorGroup title="Minors" whichGroup = {minorObj.UgMinors}></MinorGroup>
      Tab 1 Content</TabPane> },
      ,
  ]

  
  //use effect
  React.useEffect(()=>{
    getData('minors/UgMinors').then((json)=> {
      setMinorObj(json);
      setLoaded(true);
    })
  }, [])
  //if not loaded return following
  if(!loaded){
    return(
      <>
      <br />
      <br />

      <div className='loadHolder'>
      <h4>Our minors are loading...</h4>
        <img src={logo} alt="RIT Logo" className = "logo-small" />
      </div>
        
      </>
    )
  }

  return(
    <div>
      <h1>{minorObj.name}</h1>
      <Tab panes = {panes}></Tab>
    </div>
    
  )
}

export default Minors;
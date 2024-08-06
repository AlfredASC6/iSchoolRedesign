import React, {useState, useEffect} from 'react';
import getData from '../utils/getData';
import {TabPane, Tab} from 'semantic-ui-react';
import DegreesGroup from './DegreesGroup';
import logo from '../assets/rit_logo.png';
import './animate.css'
const Degrees = () =>{
    const [loaded, setLoaded] = useState(false);
    const [degreesObj, setDegreesObj] = useState();

    

      React.useEffect(() =>{
        getData('degrees/').then((json) =>{
            setDegreesObj(json);
            setLoaded(true);
        })
      }, [])


      const panes = [
        { menuItem: 'Degrees', render: () => 
        <TabPane>
          <DegreesGroup title="Undergraduate Degrees                   " whichGroup = {degreesObj.undergraduate}></DegreesGroup>
          Tab 1 Content</TabPane> },
        { 
            menuItem: 'Graduate Degrees' , render: () => 
        
            <TabPane>
                <DegreesGroup tite = "Graduate Degrees" whichGroup = {degreesObj.graduate}></DegreesGroup>    
                Tab 2 Content

            </TabPane> },
        // { menuItem: 'Tab 3', render: () => <TabPane>Tab 3 Content</TabPane> },
      ];

      if(!loaded){
        return(
          <>
          <div className='loadHolder'>
          <h3>Our degrees are loading...</h3>
            <img src={logo} alt="RIT Logo" className = "logo-small" />
          </div>
            
          </>
        )
      }
    
      return(
        <div>
          <h3>{degreesObj.undergraduate.degreeName}</h3>

          <h3>{degreesObj.graduate.degreeName}</h3>
          <Tab panes = {panes}></Tab>
        </div>
        

      )
}

export default Degrees;
import React, {useState} from 'react';
import './People.css';
import getData from '../utils/getData';

const People = () =>{

    // state:
    const[loaded, setLoaded] = useState(false);
    const[peopObj, setPeopObj] = useState();

    //getting data
    React.useEffect(()=>{
        getData('people/')
            .then((json) =>{
                console.log(json);
                setPeopObj(json);
                setLoaded(true);
        })
    }, []);

    if(!loaded){
    return(
        <h1>Loading People...</h1>
    )}

    return(
        <>
        <h1>{peopObj.title}</h1>
        <h3>{peopObj.subTitle}</h3>

        <h3>Faculty</h3>
        <div className = "peopleList">
            {
                peopObj.faculty.map( (p) =>{
                    return (<div key = {p.email} className = "peopleListItem"> 
                        <h3>{p.name}</h3>
                        <img src={p.imagePath} alt = "person" />
                     </div>)
                })
            }

        </div>
        <h3>Staff</h3>

        <div className = "staffList">
            {
                peopObj.staff.map( (p) =>{
                    return (<div key = {p.email} className = "peopleListItem"> 
                        <h3>{p.name}</h3>
                        <img src={p.imagePath} alt = "person" />
                     </div>)
                })
            }

        </div>
        </>
    )
}

export default People;
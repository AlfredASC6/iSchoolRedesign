import React from 'react';
import EmploymentModal from './EmploymentModal';

//passing data from one component to the next
const EmploymentGroup = ({title,whichGroup}) =>{
    return(
        <>
            <div className='peopleList'>
                {
                    whichGroup.coopInformation.map( (p) =>
                        <div className='peopleListItem' key = {p.employer + '-' + Math.random()}>
                            <p>Employer: {p.employer}</p>
                            <p>Degree: {p.degree}</p>
                            <p>City: {p.city}</p>
                            <p>Term: {p.term}</p>
                            <EmploymentModal {...p}></EmploymentModal>
                        </div>
                    )
                }

            </div>
        </>
    )
}

export default EmploymentGroup;
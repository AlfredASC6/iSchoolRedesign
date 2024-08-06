import React from 'react';
import PeopleModal from './PeopleModal';

//passing data from one component to the next
const PeopleGroup = ({title,whichGroup}) =>{
    return(
        <>
            <h2>{title}</h2>
            <div className='peopleList'>
                {
                    whichGroup.map( (p) =>
                        <div className='peopleListItem' key = {p.username}>
                            <img src={p.imagePath} alt="person" />
                            {/* //explode p, aka sending everything from p */}
                            <PeopleModal {...p}></PeopleModal>
                        </div>
                    )
                }

            </div>
        </>
    )
}

export default PeopleGroup;
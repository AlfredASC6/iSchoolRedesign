import React from 'react';
import DegreesModal from './DegreesModal';

//passing data from one component to the next
const DegreesGroup = ({title,whichGroup = []}) =>{
    return(
        <>
            <h2>{title}</h2>
            <div className='peopleList'>
                {
                    whichGroup.map( (p) =>

                        <div className='peopleListItem' key = {p.degreeName}>
                            
                            <p>{p.title}</p>
                            {/* //explode p, aka sending everything from p */}
                            <DegreesModal {...p}></DegreesModal>
                        </div>
                    )
                }

            </div>
        </>
    )
}

export default DegreesGroup;
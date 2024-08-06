import React from 'react';
import MinorModal from './MinorModal';

//passing data from one component to the next
const MinorGroup = ({title,whichGroup}) =>{
    return(
        <>
            <h2>{title}</h2>
            <div className='peopleList'>
                {
                    whichGroup.map( (p) =>
                        <div className='peopleListItem' key = {p.name}>
                            <p>{p.title}</p>
                            {/* //explode p, aka sending everything from p */}
                            <MinorModal {...p}></MinorModal>
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default MinorGroup;
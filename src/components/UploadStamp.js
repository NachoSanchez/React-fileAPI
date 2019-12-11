import React, { useContext } from 'react';
import { StampContext } from '../contexts/StampContext';

const UploadStamp = () => {
    const { stamp, setStamp } = useContext(StampContext);
    return ( 
        <div>
            <input type="file" onChange={setStamp} />
            <img src={stamp} width={600} alt="..."/>
        </div>
     );
}
 
export default UploadStamp;

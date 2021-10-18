import React from 'react';
import Collapsible from 'react-collapsible';

const Faq = () => {    
    return (
        <>
            <div className="faq">
                <Collapsible trigger={<button>UK DELIVERY & RETURNS</button>}>
                    <p>blah  blah blah</p>                        
                </Collapsible>
                <Collapsible trigger={<button>INTERNATIONAL DELIVERY & RETURNS</button>}>
                    <p>blah blah blah</p>                        
                </Collapsible>
            </div>
                
        </>
            
                
        
    )
}





export default Faq;
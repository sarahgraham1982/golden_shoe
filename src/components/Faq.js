import React from 'react';
import Collapsible from 'react-collapsible';

const Faq = () => {    
    return (
        <>
            <div className="faq">
                <h2>FAQ</h2>
                <Collapsible trigger={<button>UK DELIVERY & RETURNS</button>}>
                    <p><b>UK SHIPPING</b></p>
                    <p>UK Shipping Flat Rate: £3.95</p>
                    <p>Next Day Shipping Rate: £9.95</p>
                    <p>All UK orders are shipped via The Royal Mail taking around 3-5 working days.</p>
                    <p>Orders placed during the weekend or bank holidays will be despatched the next working day.</p>                        
                    <p><b>UK RETURNS</b></p>
                    <p></p>
                </Collapsible>
                <Collapsible trigger={<button>INTERNATIONAL DELIVERY & RETURNS</button>}>
                    <p><b>INTERNATIONAL SHIPPING</b></p>
                    <p>International Shipping Flat Rate: £12.95</p>
                    <p>All international orders are shipped via The Royal Mail taking around 7-14 working days.</p>
                    <p>Orders placed during the weekend or bank holidays will be despatched the next working day.</p>
                    <p>When you purchase, you must do so knowing the import rules of your country. We cannot circumvent these rules nor can we estimate customs charges in your country. All customs charges must be met by the customer.</p>                        
                    <p>Please note: All delivery times are an estimate with the courier. Depending upon certain factors with their processes, this may slow or speed up the process and The Golden Shoe Company cannot be held accountable</p>
                    <p><b>INTERNATIONAL RETURNS</b></p>
                    <p>To return your unworn items, please wrap in original packaging securely and ship to the following address: The Golden Shoe, 22 Bond Street, London, E15 1LT</p>
                    <p>Please include your returns form in the parcel. If you have misplaced the returns form, please enclose a covering letter with your name, address and order number.</p>
                    <p>Please note that we do not currently offer free returns so you will need to pay for the return postage.</p>
                    <p>Refunds will be issued to the original payment method </p>
                </Collapsible>
                <Collapsible trigger={<button>SIZE CHART</button>}>
                    <p>blah blah blah</p>                        
                </Collapsible>
            </div>
                
        </>
            
                
        
    )
}





export default Faq;
import './Comp.css';
import React from 'react';

const ModalSeeCompanyPlans = (props) => {
    return(
        <React.Fragment>
            <div class="modal fade" id="modalSeeCompanyPlans" tabIndex="-1" aria-hidden="true">
                <div class="modal-dialog ">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" >Planos Disponibilizados</h5>                            
                        </div>
                            {props.plains.map((plain) => (
                            <div key={plain.id} >
                                <div>                       
                                    <ul>
                                        <li className='plain-text'>{plain.name}</li>
                                    </ul>
                                </div>               
                            </div>
                            ))}
                    </div>
                </div>
            </div>            
        </React.Fragment>
    )
}

export default ModalSeeCompanyPlans;
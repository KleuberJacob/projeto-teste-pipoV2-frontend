import './Comp.css';
import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import ModalViewEmployees from './ModalViewEmployees';
import ModalSeeCompanyPlans from './ModalSeeCompanyPlans';

const baseUrl = process.env.REACT_APP_BASE_URL;

const CardCompany = () => {

    const [companies, setCompanies] = useState([])
    const [plains, setPlains] = useState([])
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        getCompanies()
    },[])

    const getCompanies = () => {
        Axios.get(baseUrl + "/companies").then((response) => {
            setCompanies(response.data)            
            return
        });
    };   

    const getCompanyPlains = (id) => {
        Axios.get(baseUrl + `/company/${id}/plains`).then((response) => {
            setPlains(response.data[0])
        })        
    };
    
    const getAllEmployees = (id) => {
        Axios.get(baseUrl + `/company/${id}/employees`).then((response) => {
            setEmployees(response.data)
        })
    };

    return(
        <React.Fragment>
            <ModalViewEmployees employees={employees}/>
            <ModalSeeCompanyPlans plains={plains}/>
            <div className='container'>
                <div className='row'>
                    {companies.map((company) => (
                    <div key={company.id} class="card company-card">
                        <div class="card-body">
                            <h5 class="card-title">{company.name.toUpperCase()}</h5>
                            <p class="card-text">{company.cnpj}</p>
                        </div>                                              
                        <div class="card-body">                                
                            <button onClick={() => {getCompanyPlains(company.id)}} type='button' className='button-card' data-toggle="modal" data-target="#modalSeeCompanyPlans">Planos Disponibilizados</button>                                
                            <button onClick={() => {getAllEmployees(company.id)}} type='button' className='button-card' data-toggle="modal" data-target="#modalViewEmployees">Visualizar Colaboradores</button>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </React.Fragment>
    )
}

export default CardCompany;
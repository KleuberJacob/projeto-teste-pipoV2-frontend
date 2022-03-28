import React, {useState, useEffect} from 'react';
import Axios from 'axios';

import ModalInsertNewEmployee from './ModalInsertNewEmployee';

const baseUrl = process.env.REACT_APP_BASE_URL;

const Header = () => {    

    const [companies, setCompanies] = useState([])
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

    const getAllEmployees = (id) => {
        Axios.get(baseUrl + `/company/${id}/employees`).then((response) => {
            setEmployees(response.data)
        })
    };

    return (
        <React.Fragment>    
            <ModalInsertNewEmployee companies={companies} getCompanies={getCompanies} getAllEmployees={getAllEmployees}/>        
            <div className='header-top'>
                <h1 className='header-h1'>Projeto Pipo Saúde</h1>
            </div>
            <div className='container'>
                <nav class="navbar navbar-light bg-light">
                    <form class="form-inline">                    
                        <button type='button' data-toggle="modal" data-target="#modalNewEmployee" className='button-card'>Adicionar Colaborador</button>
                    </form>
                </nav>
            </div>
        </React.Fragment>
    )
}

export default Header;
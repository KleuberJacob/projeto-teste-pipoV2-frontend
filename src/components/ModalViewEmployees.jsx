import './Comp.css';
import React from 'react';
import Axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const baseUrl = process.env.REACT_APP_BASE_URL;

const ModalViewEmployees = (props) => {

    let i = 0

    const deleteEmployee = (id) => {
        Axios.delete(baseUrl + "/employee/" + id).then(() => {
            toast.success("Colaborador Excluído com Sucesso!")
            handleCloseModal()
        }) 
    }

    const handleCloseModal = () => {
        window.$("#modalViewEmployees").modal('hide');
    }

    return(
        <React.Fragment>
            <ToastContainer/>
            <div class="modal fade" id="modalViewEmployees" tabIndex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div className="modal-content-1"> 
                        <div class="table-employees">
                            <table class="table table-striped table-dark ">                                    
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Nome</th>
                                        <th scope="col">CPF</th>                                        
                                        <th scope="col">Ação</th>
                                    </tr>
                                </thead>                                     
                                <tbody>
                                    {props.employees.map((employee) => (
                                    <tr key={employee.id}>
                                        <th>{i < 9 ? '0' : ''}{i += 1}</th>
                                        <td>{employee.name}</td>
                                        <td>{employee.cpf}</td>                                        
                                        <td><button onClick={() => {deleteEmployee(employee.id)}} className='btn btn-danger'>Excluir</button></td>
                                    </tr>
                                    ))}                                
                                </tbody>
                            </table>                        
                        </div>
                    </div>
                </div>
            </div>            
        </React.Fragment>
    )
}

export default ModalViewEmployees;
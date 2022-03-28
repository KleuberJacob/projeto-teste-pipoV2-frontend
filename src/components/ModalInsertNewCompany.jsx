import './Comp.css';
import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import InputMask from 'react-input-mask';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const baseUrl = process.env.REACT_APP_BASE_URL;

const ModalInsertNewCompany = (props) => {

    const [companyName, setCompanyName] = useState()
    const [cnpj, setCnpj] = useState()

    const [healthPlain, setHealthPlain] = useState('')
    const [dentalPlain, setDentalPlain] = useState('')
    const [healthMentalPlain, setHealthMentalPlain] = useState('')

    const [healthplains, setHealthPlains] = useState([]) 
    const [dentalplains, setDentalPlains] = useState([]) 
    const [mentalplains, setMentalPlains] = useState([]) 

    const insertNewCompany = () => {
        if(companyName == "" || companyName == null || companyName == undefined){
            toast.success("Informe a empresa!")
        } else if(cnpj == "" || cnpj == null || cnpj == undefined) {
            toast.success("Informe o CNPJ!")
        }else {
            Axios.post(baseUrl + "post/new/company", {
                name: companyName,
                cnpj: cnpj,
                healtPlain: healthPlain,
                dentalPlain: dentalPlain,
                healthMentalPlain: healthMentalPlain
            }).then((response) => {
                toast.success("Empresa Cadastrada com Sucesso!")
                setCompanyName('')
                setCnpj('')
                setHealthPlain('')
                setDentalPlain('')
                setHealthMentalPlain('')
                props.getCompanies()
                return
            });
        }
    }
        
    return(
        <React.Fragment>
            <ToastContainer/>
            <div class="modal fade" id="modalNewCompany" tabIndex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">                        
                        <div className="modal-header">
                            <h5 class="modal-title" >Cadastrar Nova Empresa</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                                                
                        <div className="modal-body">                       
                            <label className='title-inputs' >Nome da Empresa:</label>
                            <input type="text" value={companyName} className="form-control" onChange={(e) => {setCompanyName(e.target.value)}}  />
                            <label className='title-inputs' >CNPJ:</label>
                            <InputMask mask={"99.999.999/9999-99"} type="text" value={cnpj}  className="form-control" onChange={(e) => {setCnpj(e.target.value)}} />
                        </div>                

                        <div className='container'>
                            <div>
                                <label className='title-inputs'>Plano de Saúde:</label>
                                <select className="form-control" name='event_type' onChange={(e) => {setHealthPlain(e.target.value)}}>  
                                    <option value={healthPlain}></option> 
                                    {healthplains.map((plain) => (
                                    <option key={plain.id} value={plain.id}>{plain.name}</option>
                                    ))}                             
                                </select>
                            </div>
                            <div>
                                <label className='title-inputs'>Plano Odontológico:</label>
                                <select className="form-select" aria-label="Default select example" onChange={(e) => {setDentalPlain(e.target.value)}}>                                
                                    <option value={dentalPlain} ></option> 
                                    {dentalplains.map((plain) => (
                                    <option key={plain.id} value={plain.id}>{plain.name}</option>
                                    ))}                                     
                                </select>
                            </div>
                            <div>
                                <label className='title-inputs'>Plano De Saúde Mental:</label>
                                <select className="form-select" aria-label="Default select example" onChange={(e) => {setHealthMentalPlain(e.target.value)}}>                                
                                    <option value={healthMentalPlain} ></option>  
                                    {mentalplains.map((plain) => (
                                    <option key={plain.id} value={plain.id}>{plain.name}</option>
                                    ))}                                   
                                </select>
                            </div>
                        </div>

                        <div class="modal-footer">                        
                            <button onClick={() => {insertNewCompany()}} type="button" className="button-new-company-1">Salvar</button>
                        </div>                             
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ModalInsertNewCompany;
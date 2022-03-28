import './Comp.css';
import React, { useState } from 'react';
import Axios from 'axios';
import InputMask from 'react-input-mask';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const baseUrl = process.env.REACT_APP_BASE_URL;

const ModalInsertNewEmployee = (props) => {
    
    const [chooseCompany, setChooseCompany] = useState(0)
    const [name, setName] = useState()
    const [cpf, setCpf] = useState()
    const [dateStart, setDateStart] = useState()
    const [email, setEmail] = useState()
    const [address, setAddress] = useState()
    const [weight, setWeight] = useState()
    const [height, setHeight] = useState()
    const [meditatedHours, setMeditatedHours] = useState()
  
    const handleClickButton = () => {

        if(chooseCompany == 0 || chooseCompany == null || chooseCompany == undefined ){
            toast.error("Selecione a empresa!")
        }else if(chooseCompany == 1){
            if(name == "" || name == null || name == undefined ){
                toast.error("Insira o nome do funcionário!")
            }else if (cpf == "" || cpf == null || cpf == undefined ){
                toast.error("Insira o CPF do funcionário!")
            }else if (dateStart == "" || dateStart == null || dateStart == undefined ){
                toast.error("Insira a data de admissão do funcionário!")
            }else if (email == "" || email == null || email == undefined ){
                toast.error("Insira o email do funcionário!")
            }else if (weight == "" || weight == null || weight == undefined ){
                toast.error("Insira o peso do funcionário!")
            }else if (height == "" || height == null || height == undefined ){
                toast.error("Insira a altura do funcionário!")
            }
        }else if(chooseCompany == 2){
            if(name == "" || name == null || name == undefined ){
                toast.error("Insira o nome do funcionário!")
            }else if (cpf == "" || cpf == null || cpf == undefined ){
                toast.error("Insira o CPF do funcionário!")
            }else if (dateStart == "" || dateStart == null || dateStart == undefined ){
                toast.error("Insira a data de admissão do funcionário!")
            }else if (address == "" || address == null || address == undefined ){
                toast.error("Insira o endereço do funcionário!")
            }else if (weight == "" || weight == null || weight == undefined ){
                toast.error("Insira o peso do funcionário!")
            }else if (height == "" || height == null || height == undefined ){
                toast.error("Insira a altura do funcionário!")
            }else if (meditatedHours == "" || meditatedHours == null || meditatedHours == undefined ){
                toast.error("Insira a quantidade de horas meditadas pelo funcionário!")
            }        
        }        

        Axios.post(baseUrl + "/new/employee", {
            name: name,
            cpf: cpf,
            email: email,
            address: address,
            admission_date: dateStart,
            weight: weight,
            height: height,
            meditated_hours: meditatedHours,
            company: chooseCompany
        }).then((response) => {
            toast.success("Colaborador cadastrado com sucesso!")
            setChooseCompany(0)
            setName()
            setCpf()
            setDateStart()
            setEmail()
            setAddress()
            setWeight()
            setHeight()
            setMeditatedHours()
            props.getAllEmployees()
        })       
    };   

    return(
        <React.Fragment>
            <ToastContainer/>
            <div class="modal fade" id="modalNewEmployee" tabIndex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title-1" >Cadastrar Novo Colaborador</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className='container'>
                            <div>
                                <label className='title-inputs' htmlFor="">Selecione a Empresa:</label>
                                <select class="form-select" value={chooseCompany} name='event_type' onChange={(e) => {setChooseCompany(e.target.value)}}> 
                                <option value={0}></option> 
                                {props.companies.map((company) => (
                                    <option key={company.id} value={company.id}>{company.name.toUpperCase()}</option>                                   
                                ))}                      
                                </select>
                            </div>                            
                        </div>
                        {chooseCompany == 0 && null } 
                        {chooseCompany == 1 &&                       
                        <div class="modal-body">                            
                            <div>                                
                                <div>
                                    <label className='title-inputs' name="nome" >Nome:</label>
                                    <InputMask type="text" class="form-control" value={name} onChange={(e) => {setName(e.target.value)}} />
                                    <label className='title-inputs' name="cpf">CPF:</label>
                                    <InputMask mask={"999.999.999-99"} type="text" class="form-control" value={cpf} onChange={(e) => {setCpf(e.target.value)}}/>
                                    <label className='title-inputs' name="dataAdmissao">Data de Admissão:</label>
                                    <InputMask mask={"99-99-9999"} type="text" class="form-control" value={dateStart} onChange={(e) => {setDateStart(e.target.value)}} />
                                    <label className='title-inputs' name="email">E-mail:</label>                            
                                    <InputMask type="text" class="form-control" value={email} onChange={(e) => {setEmail(e.target.value)}}/>                                    
                                    <label className='title-inputs' name="peso">Peso:</label>
                                    <InputMask type="text" class="form-control" value={weight} onChange={(e) => {setWeight(e.target.value)}}/>
                                    <label className='title-inputs' name="altura">Altura em centímetros:</label>
                                    <InputMask mask={"999"} type="text" class="form-control" value={height} onChange={(e) => {setHeight(e.target.value)}}/>                                    
                                </div>                                
                            </div>                                                                          
                        </div> 
                        }
                        {chooseCompany == 2 &&                       
                        <div class="modal-body">                            
                            <div>                                
                                <div>
                                    <label className='title-inputs' name="nome" >Nome:</label>
                                    <InputMask type="text" class="form-control" value={name} onChange={(e) => {setName(e.target.value)}} />
                                    <label className='title-inputs' name="cpf">CPF:</label>
                                    <InputMask mask={"999.999.999-99"} type="text" class="form-control" value={cpf} onChange={(e) => {setCpf(e.target.value)}}/>
                                    <label className='title-inputs' name="dataAdmissao">Data de Admissão:</label>
                                    <InputMask mask={"99-99-9999"} type="text" class="form-control" value={dateStart} onChange={(e) => {setDateStart(e.target.value)}} />                                   
                                    <label className='title-inputs' name="endereco">Endereço:</label>
                                    <InputMask type="text" class="form-control" value={address} onChange={(e) => {setAddress(e.target.value)}}/>
                                    <label className='title-inputs' name="peso">Peso:</label>
                                    <InputMask type="text" class="form-control" value={weight} onChange={(e) => {setWeight(e.target.value)}}/>
                                    <label className='title-inputs' name="altura">Altura em centímetros:</label>
                                    <InputMask mask={"999"} type="text" class="form-control" value={height} onChange={(e) => {setHeight(e.target.value)}}/>
                                    <label className='title-inputs' name="horasMeditadas">Horas meditadas nos últimos 7 dias:</label>
                                    <InputMask type="text" class="form-control" value={meditatedHours} onChange={(e) => {setMeditatedHours(e.target.value)}}/>
                                </div>                                
                            </div>                                                                          
                        </div> }                             
                        <div class="modal-footer">                        
                            <button type="button" className="button-new-company-1" onClick={() => { handleClickButton() }}>Salvar</button>
                        </div>
                    </div>
                </div>
            </div>            
        </React.Fragment>
    )
}

export default ModalInsertNewEmployee;
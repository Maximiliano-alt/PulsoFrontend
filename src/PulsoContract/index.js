import React from 'react'
import  './PulsoContract.scss'
// import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'

const PulsoContract = () => {
    // const MySwal = withReactContent(Swal)
    // const SuccessData = {
    //     title: "Success",
    //     type: "success",
    //     text: "Your work has been saved.",
    //     footer: ""
    //   };
  return (
    <div className='container-contract'>
        <div id='contract'></div>
        <h1>Solicita tu cotización</h1>
        <hr size='10px' color="white" />
        <h2>Ponte en contacto</h2>
        <form>
            <div className='form-grid'>
                <div className='separate1'>
                    <input required type="name" placeholder="Nombre"/>
                    <input required type="name" placeholder="Email"/>
                    <input required type="name" placeholder="Teléfono"/>
                    <input required type="name" placeholder="Empresa"/>
                    <input required type="name" placeholder="Ciudad"/>
                    <input required type="name" placeholder="País"/>
                </div>
                <div className='separate2'>
                    <select required name="service" id="service"  formControlName="service">
                        <option class="option" value="servicio">Servicio</option>
                        <option value="Música original">Música original</option>
                        <option value="Post producción de sonido">Post producción de sonido</option>
                        <option value="Voces y locución en off">Voces y locución en off</option>
                        <option value="Masterización">Masterización</option>
                        <option value="Sincronización">Sincronización</option>
                        
                    </select>
                    <textarea required placeholder='Tu mensaje'/>
                </div>
                
            </div>
            <button type="submit" class='button' value="Enviar">Enviar</button>
        </form>
    </div>
  )
}

export {PulsoContract};
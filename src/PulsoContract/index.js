import React,{useState} from 'react'
import  './PulsoContract.scss'
import emailjs from 'emailjs-com'
// import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'
//impor
const PulsoContract = () => {
    // const MySwal = withReactContent(Swal)
    // const SuccessData = {
    //     title: "Success",
    //     type: "success",
    //     text: "Your work has been saved.",
    //     footer: ""
    //   };
    const frmContact = { name:'', mail:'', phone:'', enterprice:'',city:'',country:'',service:'',message:'' };
   const [contact,setContact] = useState(frmContact);
   const [showMessage, setShowMessage] = useState(false);
   const handleChange = e => { 
		const {name,value} = e.target;
		setContact({...contact,[name]:value}); 
   };
   const handleSubmit = e =>{
    e.preventDefault();
   
    emailjs.send('default_service','template_eis1i3a', contact, '0i-oNFVAuRqlKCgSv')
    .then((response) => {
               console.log('SUCCESS!', response.status, response.text);
               setContact(frmContact);
               setShowMessage(true);
    }, (err) => {
               console.log('FAILED...', err);
    });
}
  return (
    <div className='container-contract'>
        <div id='contract'></div>
        <h1>SOLICITA TU COTIZACIÓN</h1>
        
        <h2>Ponte en contacto</h2>
        <hr size='10px' color="white" />
        { showMessage ? <div className="alert alert-success col-md-5 mx-auto" role="alert">Email Send Success!!</div> : ``}
        <form onSubmit={handleSubmit}>
            <div className='form-grid'>
                <div className='separate1'>
                    <input required type="name" value={contact.name} onChange={handleChange} placeholder="Nombre"/>
                    <input required type="mail"  value={contact.mail} onChange={handleChange} placeholder="Email"/>
                    <input required type="phone"  value={contact.phone} onChange={handleChange} placeholder="Teléfono"/>
                    <input required type="name"  value={contact.enterprice} onChange={handleChange} placeholder="Empresa"/>
                    <input required type="name"  value={contact.city} onChange={handleChange} placeholder="Ciudad"/>
                    <input required type="name"  value={contact.country} onChange={handleChange} placeholder="País"/>
                </div>
                <div className='separate2'>
                    <select required name="service" id="service" value={contact.service} onChange={handleChange} formControlName="service">
                        <option class="option" value="servicio">Servicio</option>
                        <option value="Música original">Música original</option>
                        <option value="Post producción de sonido">Post producción de sonido</option>
                        <option value="Voces y locución en off">Voces y locución en off</option>
                        <option value="Masterización">Masterización</option>
                        <option value="Sincronización">Sincronización</option>
                        
                    </select>
                    <textarea required onChange={handleChange} value={contact.message} placeholder='Tu mensaje'/>
                </div>
                
            </div>
            <button type="submit" class='button' value="Enviar">Enviar</button>
        </form>
    </div>
  )
}

export {PulsoContract};
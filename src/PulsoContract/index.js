import React,{Component, useState} from 'react'
import  './PulsoContract.scss'
import logo from '../assets/LOGOPULSO.png';
import axios from "axios"
import Swal from 'sweetalert2'
import linkedin from '../assets/linkedin.svg'
import instagram from '../assets/instagram.svg'
// import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'
//impor
class PulsoContract extends Component{
    name = React.createRef();
    mail = React.createRef();
    phone = React.createRef();
    enterprice = React.createRef();
    city = React.createRef();
    country = React.createRef();
    service = React.createRef();
    message = React.createRef();

    frmContact = { name:'', mail:'', phone:'', enterprice:'',city:'',country:'',service:'',message:'' };
    
    handleChange = () =>{
        var name = this.name.current.value
        var mail = this.mail.current.value
        var phone = this.phone.current.value
        var enterprice = this.enterprice.current.value
        var city = this.city.current.value
        var country = this.country.current.value
        var service = this.service.current.value
        var message = this.message.current.value
        this.setState({
            name: name,
            mail: mail,
            phone: phone,
            enterprice: enterprice,
            city: city,
            country: country,
            service: service,
            message: message,
        });
    }
    constructor(){
        super();
        this.sendMail = this.sendMail.bind(this);
        
    }
    
    async sendMail(e){
        e.preventDefault();
        const { name, mail, phone, enterprice,city,country,service,message } = this.state;
        const form = await axios.post("/api/form",{
            name, mail, phone, enterprice,city,country,service,message
        })
            try{
                Swal.fire({
                    icon: 'success',
                    title: 'Se ha enviado el mensaje',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
            catch(err){
                Swal.fire({icon: 'warning',title: 'Oops...',text: 'Ocurrió un problema'});
            }
        
        
    }
    render(){
        return (
                <div className='container-contract'>
                    <div id='contract'></div>
                    <h1>SOLICITA TU COTIZACIÓN</h1>
                        
                    <h2>Contáctanos</h2>
                    <hr size='10px' color="white" />
                   
                    <form onSubmit={this.sendMail}>
                        <div className='form-grid'>
                            <div className='separate1'>
                                <input required type="name"  onChange={this.handleChange} ref={this.name} placeholder="Nombre"/>
                                <input required type="mail"   onChange={this.handleChange} ref={this.mail} placeholder="Email"/>
                                <input required type="phone"   onChange={this.handleChange} ref={this.phone} placeholder="Teléfono"/>
                                <input required type="name"   onChange={this.handleChange} ref={this.enterprice} placeholder="Empresa"/>
                                <input required type="name"   onChange={this.handleChange} ref={this.city}  placeholder="Ciudad"/>
                                <input required type="name"   onChange={this.handleChange} ref={this.country} placeholder="País"/>
                            </div>
                            <div className='separate2'>
                                <select required name="service" id="service"  onChange={this.handleChange} ref={this.service} formControlName="service">
                                    <option class="option" value="servicio">Servicio</option>
                                    <option value="Música original">Música original</option>
                                    <option value="Post producción de sonido">Post producción de sonido</option>
                                    <option value="Voces y locución en off">Voces y locución en off</option>
                                    <option value="Masterización">Masterización</option>
                                    <option value="Sincronización">Sincronización</option>
                                    
                                </select>
                                <textarea required onChange={this.handleChange} ref={this.message} placeholder='Tu mensaje'/>
                            </div>
                            
                        </div>
                        <button type="submit" class='button'  >Enviar</button>
                    </form>

                    <div className='footer'>
                        <div className='nav'>
                            <a href="#Home"><h1>Inicio</h1></a>
                            <a href="#about"><h1>Sobre nosotros</h1></a>
                            <a href="#services"><h1>Servicios</h1></a>
                           <a href="#works"> <h1>Trabajos realizados</h1></a>
                           <a href="#contract"> <h1>Contratar</h1></a>
                        </div>
                        <img src={logo} className="logo"/>
                        <div className='container-bottom'>
                            <div class="social-media">               
                                <a href="" ><img class="social" src={linkedin} alt=""/></a>
                                <a href=""><img class="social" src={instagram} alt=""/></a> 
                            </div>
                        </div>
                        
                    </div>
                    <div className='footer-mobile'>
                        <img src={logo} className="logo"/>
                        <div className='nav'>
                            <a href="#Home"><h1>Inicio</h1></a>
                            <a href="#about"><h1>Sobre nosotros</h1></a>
                            <a href="#services"><h1>Servicios</h1></a>
                           <a id='work' href="#works"> <h1>Trabajos realizados</h1></a>
                           <a id='work' href="#contract"> <h1>Contratar</h1></a>
                        </div>
                        <div class="social-media-mobile">               
                            <div className='social-mobile'>
                            <a href="" ><img class="social" src={linkedin} alt=""/></a>
                            <a href=""><img class="social" src={instagram} alt=""/></a> 
                            </div>
                        </div>
                    </div>
                    <h1 className='copy'>{(new Date().getFullYear())} | Copyright PulsoMusic - Derechos reservados </h1>
                </div>
              )
    }
}
// const PulsoContract = () => {
//     // const MySwal = withReactContent(Swal)
//     // const SuccessData = {
//     //     title: "Success",
//     //     type: "success",
//     //     text: "Your work has been saved.",
//     //     footer: ""
//     //   };
//     const frmContact = { name:'', mail:'', phone:'', enterprice:'',city:'',country:'',service:'',message:'' };
//    const [contact,setContact] = useState(frmContact);
//    const [showMessage, setShowMessage] = useState(false);
//    const handleChange = e => { 
// 		const {name,value} = e.target;
// 		setContact({...contact,[name]:value}); 
//    };
//    const handleSubmit = e =>{
//     e.preventDefault();
   
//     emailjs.send('default_service','template_eis1i3a', contact, '0i-oNFVAuRqlKCgSv')
//     .then((response) => {
//                console.log('SUCCESS!', response.status, response.text);
//                setContact(frmContact);
//                setShowMessage(true);
//     }, (err) => {
//                console.log('FAILED...', err);
//     });
// }
//   return (
//     <div className='container-contract'>
//         <div id='contract'></div>
//         <h1>SOLICITA TU COTIZACIÓN</h1>
            
//         <h2>Ponte en contacto</h2>
//         <hr size='10px' color="white" />
//         { showMessage ? <div className="alert alert-success col-md-5 mx-auto" role="alert">Email Send Success!!</div> : ``}
//         <form onSubmit={handleSubmit}>
//             <div className='form-grid'>
//                 <div className='separate1'>
//                     <input required type="name"  onChange={handleChange} placeholder="Nombre"/>
//                     <input required type="mail"   onChange={handleChange} placeholder="Email"/>
//                     <input required type="phone"   onChange={handleChange} placeholder="Teléfono"/>
//                     <input required type="name"   onChange={handleChange} placeholder="Empresa"/>
//                     <input required type="name"   onChange={handleChange} placeholder="Ciudad"/>
//                     <input required type="name"   onChange={handleChange} placeholder="País"/>
//                 </div>
//                 <div className='separate2'>
//                     <select required name="service" id="service"  onChange={handleChange} formControlName="service">
//                         <option class="option" value="servicio">Servicio</option>
//                         <option value="Música original">Música original</option>
//                         <option value="Post producción de sonido">Post producción de sonido</option>
//                         <option value="Voces y locución en off">Voces y locución en off</option>
//                         <option value="Masterización">Masterización</option>
//                         <option value="Sincronización">Sincronización</option>
                        
//                     </select>
//                     <textarea required onChange={handleChange} value={contact.message} placeholder='Tu mensaje'/>
//                 </div>
                
//             </div>
//             <button type="submit" class='button' onClick='sendMail()' >Enviar</button>
//         </form>
//     </div>
//   )
// }

export {PulsoContract};
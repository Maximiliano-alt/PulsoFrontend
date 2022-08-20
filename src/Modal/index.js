
import ReactDOM from "react-dom" 
function Modal({ children }){
    return ReactDOM.createPortal(//permite ser reutilizado para enviar cosas a este modal//transportacion de componentes
        children,//se envia el contenido
        document.getElementById('modal')//se renderiza el modal

    );
}

export{ Modal };
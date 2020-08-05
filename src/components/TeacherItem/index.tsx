import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';



import './styles.css'

function TeacherItem() {
  return (
    <article className="teacher-item">
          <header>
             <img src="https://avatars3.githubusercontent.com/u/44537126?s=460&u=17a9a5508a165e1cc0c1b4b03cccae3791d5b4bd&v=4" alt="Joao vitor"/>
             <div>
               <strong>
                 Joao vitor
               </strong>
               <span>Quimica</span>
             </div>
          </header> 
          <p>
            Entusiasta das melhores techs
            <br/> <br/>
            Apaixonado por ensinar
          </p>

          <footer>
            <p>
              Preço/hora
              <strong>R$ 80,00</strong>
            </p>
            <button type="button">
              <img src={whatsappIcon} alt="Whatsapp"/>
              Entrar em contato
            </button>
          </footer>
      </article>
  );
}

export default TeacherItem;
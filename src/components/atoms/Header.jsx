import MiFoto from '../../assets/img/miFoto.jpeg'
import '../../assets/styles/header.css';

function Header({datos}) {
    return ( 
        <header>
            <div className="myPerfil">
                <img src={MiFoto} alt="Foto de la persona" className='foto'/>
                <div className="myInfo">
                    <h1>Francisco de Jesús Escobar Gutiérrez</h1>
                    <h2>Estudiante de Ingenieria en Software</h2>
                    <p className='txt_myPerfil'>
                        <a href="mailto:">escobar.gutierrez.3@gmail.com</a><br />
                        961 304 61 41<br />
                        Fracc. Real del Bosque calle Olivos, #783-B.
                    </p>
                </div>
                
            </div>
        </header>
     );
}

export default Header;
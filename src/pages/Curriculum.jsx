import Header from "../components/atoms/Header";
import FlexContainer from "../components/organism/FlexContainer";
import '../assets/styles/curriculum.css';

function Curriculum() {
    const datos = {
        nombre: 'Soy Carlos Lievano Ovando del B',
        Carrera: 'Ingenieria en Desarrollo de Software',
        correo: 'escobar.gutierrez.3@gmail.com',
        telefono: 'Tel. 961 304 61 41',
        lugar: 'Fracc. Real del Bosque, calle Olivos, #783-B',
        sobreMi:
            {
                titulo: 'Sobre mi',
                contenido: 'Soy un estudiante de Ingenieria en Desarrollo de Software en la Universidad Politecnica de Chiapas, naci en Tuxtla Gutierrez, Chiapas. Tengo conocimientos en JavaScript, C, C++ y Java, soy bueno con la logica matematica y no suelo tener problemas ante la resolucion de problemas, aprendo y me adapto rapidamente. '
            },
        formacionAcad:
            {
                titulo: 'Formación Academica',
                contenido: {
                    secundaria: 'Esc. Sec. Tecnica No. 156 Real del Bosque',
                    bachillerato: 'Preparatoria No. 2. del Estado de Chiapas.',
                    universidad: 'Universidad Pólitecnica del Estado de Chiapas.'
                }
            },
        habilidades:
            {
                titulo: 'Habilidades',
                contenido: ['hjbhjbkj', 'hjbhjbkj', 'hjbhjbkj', 'hjbhjbkj']
            },
        habilidadesProg:
            {
                titulo: 'Habilidades de Programación',
                contenido: [
                    {
                        lenguaje: 'JavaScript',
                        icon: '../assets/icons/barraJS.png'
                    },
                    {
                        lenguaje: 'Java',
                        icon: '../assets/icons/barraJava.png'
                    },
                    {
                        lenguaje: 'C++',
                        icon: '../assets/icons/barraC++.png'
                    },
                    {
                        lenguaje: 'C',
                        icon: '../assets/icons/barraC.png'
                    },
                    {
                        lenguaje: 'CSS',
                        icon: '../assets/icons/barraCSS.png'
                    },
                    {
                        lenguaje: 'HTML',
                        icon: '../assets/icons/barraHTML.png'
                    },
                ]
            },
        idiomas:
            {
                titulo: 'Idiomas',
                contenido: ['Español', 'Ingles (nivel B2)']
            },
        hobbies:
            {
                titulo: 'Hobbies',
                contenido: ['Futbol', 'Videojuegos', 'Correr', 'Juegos de Azar', 'Programar']
            },
        contacto:[
            {
                icon: '../assets/icons/iconFB.png',
                data: 'Francisco Escobar Gut'
            },
            {
                icon: '../assets/icons/iconIG.png',
                data: '@francis_esgut'
            },
            {
                icon: '../assets/icons/iconLi.png',
                data: 'Francisco de Jesús Escobar Gutiérrez'
            }
        ]
    }


    return ( 
        <>
            <div className="container">
                <Header/>
                <FlexContainer/>
                <div className="box-bottom"> 
                    <div className="item-box"></div>
                </div>
            </div>
            
        </>
     );
}

export default Curriculum;
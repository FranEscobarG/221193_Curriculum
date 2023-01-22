import Header from "../components/atoms/Header";
import FlexContainer from "../components/organism/FlexContainer";
import '../assets/styles/curriculum.css';

function Curriculum() {
    const datos = {
        tecnologias: [
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
        ],
        contacto: [
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
                <Header/> {/* ESTE SE DESESTRURAR CON PUNTOS */}
                <FlexContainer itemFlex = {datos}/> {/* ESTE SE DESESTRURAR CON .map() */}

            </div>
            
        </>
     );
}

export default Curriculum;
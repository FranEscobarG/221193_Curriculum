import Header from "../components/atoms/Header";
import FlexContainer from "../components/organism/FlexContainer";
import '../assets/styles/curriculum.css';

function Curriculum() {
    const datos = {
        tecnologias: [
            {
                lenguaje: 'JavaScript',
                icon: "../../public/icons/barraJS.png"
            },
            {
                lenguaje: 'Java',
                icon: "../../public/icons/barraJava.png"
            },
            {
                lenguaje: 'C++',
                icon: '../../public/icons/barraC++.png'
            },
            {
                lenguaje: 'C',
                icon: '../../public/icons/barraC.png'
            },
            {
                lenguaje: 'CSS',
                icon: '../../public/icons/barraCSS.png'
            },
            {
                lenguaje: 'HTML',
                icon: '../../public/icons/barraHTML.png'
            },
        ],
        contacto: [
            {
                icon: '../../public/icons/iconFB.png',
                data: 'Francisco Escobar Gut'
            },
            {
                icon: '../../public/icons/iconIG.png',
                data: '@francis_esgut'
            },
            {
                icon: '../../public/icons/iconLi.png',
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
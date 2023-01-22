import '../../assets/styles/itemFlex.css';

function Widge({item}) {
    return ( 
        <>
            <div className="widge">
                <h4>{item.lenguaje}</h4>
                <img src={item.icon} alt="Barra de porcentaje" className='icon-barras'/>
            </div>
        </>
        
        
     );
}

export default Widge;
function WidgeSmall({itemC}) {
    return ( 
        <div className="widge">
            <img src={itemC.icon} alt="Icono de red social" className='icon-social'/>
            <h4>{itemC.data}</h4>
        </div>
     );
}

export default WidgeSmall;
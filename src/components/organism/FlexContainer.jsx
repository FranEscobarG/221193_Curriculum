import ItemFlex from "../atoms/ItemFlex";
import IconoSoftware from '../../assets/img/iconoSoftware.png';
import '../../assets/styles/flexContainer.css';

function FlexContainer({itemFlex}) {
    return ( 
        <>
            <div className="flexbox-container">
                <ItemFlex tecnologias={itemFlex.tecnologias}  contacto={itemFlex.contacto}/> {/* EN TEORIA AHORA LO QUE LE PASARE NADAMAS VA A SER LOS QUE TIENEN ICONOS
                                                Y EN ITEM LOS VA A OBTENER Y DESCOMPONER */}
            </div>
            <div className="box_bottom"> 
                <div className="item-box_bottom">
                    <img src={ IconoSoftware } alt="Icono Software"/> 
                    <img src={ IconoSoftware } alt="Icono Software"/> 
                </div>
            </div>
        </>
        
        
     );
}

export default FlexContainer;
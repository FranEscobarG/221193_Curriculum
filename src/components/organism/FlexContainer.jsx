import ItemFlex from "../atoms/ItemFlex";
import '../../assets/styles/flexContainer.css';

function FlexContainer({itemFlex}) {
    return ( 
        <>
            <div className="flexbox-container">
                <ItemFlex tecnologias={itemFlex.tecnologias}  contacto={itemFlex.contactos}/> {/* EN TEORIA AHORA LO QUE LE PASARE NADAMAS VA A SER LOS QUE TIENEN ICONOS
                                                Y EN ITEM LOS VA A OBTENER Y DESCOMPONER */}
            </div>
            <div className="box-bottom"> 
                <div className="item-box">
                    {
                        // itemSmall.map((sItem) => (    //Por cada elemento genera una <ItemFlex>, una cajita roja, dentro de la caja negra
                        //     <ItemFlex key={sItem} item={sItem} />
                        // ))
                    }
                </div>
            </div>
        </>
        
        
     );
}

export default FlexContainer;
import ItemFlex from "../atoms/ItemFlex";
import '../../assets/styles/flexContainer.css';

function FlexContainer() {
    return ( 
        <div className="flexbox-container">
            <ItemFlex/>
            <ItemFlex/>
            <ItemFlex/>
            <ItemFlex/>
        </div>
        
     );
}

export default FlexContainer;
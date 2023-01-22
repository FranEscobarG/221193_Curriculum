import Caption from "../atoms/Caption";
import '../../assets/styles/itemFlex.css';

function ItemFlex({tecnologias, contacto}) {
    return ( 
        <>
            <div class="section">
                <Caption msn={"Sobre Mi"}/>
                <p>Soy un estudiante de Ingenieria en Desarrollo de Software en la Universidad Politecnica de Chiapas, naci en Tuxtla Gutierrez, Chiapas. Tengo conocimientos en JavaScript, C, C++ y Java, soy bueno con la logica matematica y no suelo tener problemas ante la resolucion de problemas, aprendo y me adapto rapidamente.</p>
            </div>

            <div class="section">
                <Caption msn={"Formacion Academica"}/>
                <ul>
                    <p>Secundaria</p> 
                    <li>Esc. Sec. Tecnica No. 156 Real del Bosque.</li>
                    <p>Bachillerato</p> 
                    <li>Preparatoria No. 2. del Estado de Chiapas.</li>
                    <p>Universidad</p> 
                    <li>Universidad Pólitecnica de Chiapas.</li>
                </ul>
            </div>

            <div class="section">
                <Caption msn={"Habilidades"}/>
                <ul>
                    <li>Capacidad de análisis y síntesis.</li>
                    <li>Organización y planificación.</li>
                    <li>Lógica de programación.</li>
                    <li>Uso de las tecnologías de la información y las comunicaciones.</li>
                    <li>Resolución de problemas.</li>
                    <li>Lógica Matemática.</li>
                </ul>
            </div>

            <div class="section">
                <Caption msn={"Tecnologías"}/>
                <p>Soy un estudiante de Ingenieria en Desarrollo de Software en la Universidad Politecnica de Chiapas, naci en Tuxtla Gutierrez, Chiapas. Tengo conocimientos en JavaScript, C, C++ y Java, soy bueno con la logica matematica y no suelo tener problemas ante la resolucion de problemas, aprendo y me adapto rapidamente.</p>
            </div>
        </>
     );
}

/* <div class="section">
                <Caption msn={"Titulo de la seccio 2"}/>
                <p>Info de la seccion 2. Quam non numquam voluptate id recusandae at nemo dignissimos optio, vel iste? Aspernatur libero nesciunt maxime ducimus blanditiis nihil fugiat explicabo sunt.</p>
            </div>
            <div class="section">
                <Caption msn={"Titulo de la seccio 3"}/>
                <p>Info de la seccion 3. Quam non numquam voluptate id recusandae at nemo dignissimos optio, vel iste? Aspernatur libero nesciunt maxime ducimus blanditiis nihil fugiat explicabo sunt.</p>
            </div>
            <div class="section">
                <Caption msn={"Titulo de la seccio 4"}/>
                <p>Info de la seccion 4. Quam non numquam voluptate id recusandae at nemo dignissimos optio, vel iste? Aspernatur libero nesciunt maxime ducimus blanditiis nihil fugiat explicabo sunt.</p>
            </div> */

export default ItemFlex;
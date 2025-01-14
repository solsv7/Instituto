import React from "react";

const Inscribe = () => {
    return(
        <div>
            <form>
                <label>Programa</label>
                <select>
                    <option>Ingles interactivo para adultos</option>
                    <option>Ingles academico cursos regulares(a partir de los 4 años)</option>
                    <option>Ingles chat</option>
                    <option>Ingles Universitario</option>
                    <option>Ingles Tecnico</option>
                    <option>Portugues interactivo para adultos</option>
                    <option>Portugues academico cursos regulares(a partir de los 4 años)</option>
                    <option>Portugues chat</option>
                    <option>Portugues Universitario</option>
                    <option>Portugues Tecnico</option>
                    <option>Traducciones</option>
                </select>

                <label>Como se entero de nuestro centro de idiomas</label>
                <select>
                    <option>Facebook</option>
                    <option>Instagram</option>
                    <option>Google</option>
                    <option>Pagina Web</option>
                    <option>Recomendacion</option>
                    <option>Poster o Flyer</option>
                    <option>Otro</option>
                </select>

                <label>Informacion del estudiante</label>
                <input type="text" placeholder="Nombre" />
                <input type="text" placeholder="Apellido" />
                <label>Fecha de nacimiento</label>
                <input type="date" />
                <label>WhatsApp de contacto del estudiante</label>
                <input type="number"/>
                <label>Informacion de adulto que reciba el comprobante de pago(solo si el estudiante es menor)</label>
                <input type="text" placeholder="Nombre" />
                <input type="text" placeholder="Apellido" />
                <label>WhatsApp de contacto del responsable del estudiante(solo si el estudiante es menor)</label>
                <input type="number"/>
                <label>Direccion</label>
                <input type="text"placeholder="Calle con numero"/>
                <input type="text"placeholder="Barrio / Departamento / etc"/>
                <input type="text"placeholder="Ciudad"/>
                <input type="text"placeholder="Estado / Provincia"/>
                <input type="text"placeholder="Codigo Postal"/>
                <label>Mail de contacto</label>
                <input type="mail"placeholder="correo@example.com"/>
                <label>Trabajas o estudias?</label>
                <label>
                <input type="radio" />si</label>
                <label>
                <input type="radio" />no</label>
            </form>
        </div>
    )
}

export default Inscribe;
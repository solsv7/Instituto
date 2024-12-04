import React from "react";
import './Schedules.css'

const Schedules = () => {
    return(
        <div className="Horarios">
            <h3>Our Schedule</h3>
            <div className="SeparadorTabla">
                <table className="TablaHorarios">
                    <tr>
                        <th id="TLC"></th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th id="TRC">Friday</th>    
                    </tr>
                    <tr>
                        <td className="Horas">8:30hs - 9:30hs</td>
                        <td>First Step</td>
                        <td>Junior</td>
                        <td>Primary</td>
                        <td>Preliminary</td>
                        <td>Elementary</td>
                    </tr>
                    <tr>
                    <td className="Horas">9:30hs - 10:30hs</td>
                        <td>First Step</td>
                        <td>Junior</td>
                        <td>Primary</td>
                        <td>Preliminary</td>
                        <td>Elementary</td>
                    </tr>
                    <tr>
                    <td className="Horas">10:30hs - 11:30hs</td>
                        <td>First Step</td>
                        <td>Junior</td>
                        <td>Primary</td>
                        <td>Preliminary</td>
                        <td>Elementary</td>
                    </tr>
                    <tr>
                        <td className="Horas">11:30hs - 12:30hs</td>
                        <td>First Step</td>
                        <td>Junior</td>
                        <td>Primary</td>
                        <td>Preliminary</td>
                        <td>Elementary</td></tr>
                    <tr>
                    <td className="Horas" id="BLC">16:00hs - 17:00hs</td>
                        <td>First Step</td>
                        <td>Junior</td>
                        <td>Primary</td>
                        <td>Preliminary</td>
                        <td id="BRC">Elementary</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}
export default Schedules;
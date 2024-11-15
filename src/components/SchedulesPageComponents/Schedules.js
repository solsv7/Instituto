import React from "react";
import './Schedules.css'

const Schedules = () => {
    return(
        <div className="Horarios">
            <h3>Our Schedule</h3>
            <div>
                <table className="TablaHorarios">
                    <tr>
                        <th></th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>    
                    </tr>
                    <tr>
                        <td>8:30hs - 9:30hs</td>
                        <td>First Step</td>
                        <td>Junior</td>
                        <td>Primary</td>
                        <td>Preliminary</td>
                        <td>Elementary</td>
                    </tr>
                    <tr>
                    <td>9:30hs - 10:30hs</td>
                        <td>First Step</td>
                        <td>Junior</td>
                        <td>Primary</td>
                        <td>Preliminary</td>
                        <td>Elementary</td>
                    </tr>
                    <tr>
                    <td>10:30hs - 11:30hs</td>
                        <td>First Step</td>
                        <td>Junior</td>
                        <td>Primary</td>
                        <td>Preliminary</td>
                        <td>Elementary</td>
                    </tr>
                    <tr>
                        <td>11:30hs - 12:30hs</td>
                        <td>First Step</td>
                        <td>Junior</td>
                        <td>Primary</td>
                        <td>Preliminary</td>
                        <td>Elementary</td></tr>
                    <tr>
                    <td>16:00hs - 17:00hs</td>
                        <td>First Step</td>
                        <td>Junior</td>
                        <td>Primary</td>
                        <td>Preliminary</td>
                        <td>Elementary</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}
export default Schedules;
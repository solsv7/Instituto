import './levels.css';
import imgPr from '../../../images/ImgBR.png';
import imgEn from '../../../images/ImgEn.png';

const Niveles = () => {
    return(
        <div className="ContainerLevels">
            <div className='text'>
                <h2>Start at your level</h2>
                <h4>You can choose</h4>
                <div className='bar'></div>
            </div>
            
            <div className='BloqueLvL2'><h3 id='por'>Portuguese</h3><h4>or</h4><h3 id='eng'>English</h3></div>
            <div className='BloqueLvL3'><h3 id='por'>Portuguese</h3><h4>or</h4><h3 id='eng'>English</h3></div>
            <div className='BloqueLvL4'><h3 id='por'>Portuguese</h3><h4>or</h4><h3 id='eng'>English</h3></div>
            <div>
                <img src={imgEn} id='ImagenEn' alt=''/>
            </div>
            <div>
                <img src={imgPr} id='ImagenPor' alt=''/>
            </div>
        </div>
    );
};

export default Niveles;
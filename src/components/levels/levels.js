import './levels.css'

const Niveles = () => {
    return(
        <div className="Container">
            <div className='text'>
                <h2>!Start at your level¡</h2>
            </div>
            <div id='EngTxt'>
                <h3>English</h3>
            </div>
            
            <div className='Wrapper'>
                <div className='Container-de-Wrapper'>
                <input type='radio' name='slide' id='Eng1'></input>
                    <label for="Eng1" className='card'>
                        <div className='row'>
                            <div className='icon'>A1</div>
                            <div className='description'>
                                <h4> Beginner/Elementary</h4>
                            </div>
                        </div>
                    </label>
                    <input type='radio' name='slide' id='Eng2'></input>
                    <label for="Eng2" className='card'>
                        <div className='row'>
                            <div className='icon'>A1</div>
                            <div className='description'>
                                <h4> Beginner/Elementary</h4>
                            </div>
                        </div>
                    </label>
                    <input type='radio' name='slide' id='Eng3'></input>
                    <label for="Eng3" className='card'>
                        <div className='row'>
                            <div className='icon'>A1</div>
                            <div className='description'>
                                <h4> Beginner/Elementary</h4>
                            </div>
                        </div>
                    </label>
                    <input type='radio' name='slide' id='Eng4'></input>
                    <label for="Eng4" className='card'>
                        <div className='row'>
                            <div className='icon'>A1</div>
                            <div className='description'>
                                <h4> Beginner/Elementary</h4>
                            </div>
                        </div>
                    </label>
                    <input type='radio' name='slide' id='Eng5'></input>
                    <label for="Eng5" className='card'>
                        <div className='row'>
                            <div className='icon'>A1</div>
                            <div className='description'>
                                <h4> Beginner/Elementary</h4>
                            </div>
                        </div>
                    </label>
                    <input type='radio' name='slide' id='Eng6' ></input>
                    <label for="Eng6" className='card'>
                        <div className='row'>
                            <div className='icon'>A2</div>
                            <div className='description'>
                                <h4>Pre Intermediate</h4>
                            </div>
                        </div>
                    </label>
                    <input type='radio' name='slide' id='Eng7'></input>
                    <label for="Eng7" className='card'>
                        <div className='row'>
                            <div className='icon'>B1</div>
                            <div className='description'>
                                <h4>Intermediate</h4>
                            </div>
                        </div>
                    </label>
                    <input type='radio' name='slide' id='Eng8' ></input>
                    <label for="Eng8" className='card'>
                        <div className='row'>
                            <div className='icon'>B2</div>
                            <div className='description'>
                                <h4>Upper Intermediate</h4>
                            </div>
                        </div>
                    </label>
                    <input type='radio' name='slide' id='Eng9'></input>
                    <label for="Eng9" className='card'>
                        <div className='row'>
                            <div className='icon'>C1</div>
                            <div className='description'>
                                <h4>Advanced</h4>
                            </div>
                        </div>
                    </label>
                    
                </div>
            </div>
            <div id='PorTxt'>
                <h3>Portuguese</h3>
            </div>
            <div className='Wrapper'>
            <div className='Container-Portugues'>
                <input type='radio' name='slide' id='Por1'></input>
                    <label for="Por1" className='card'>
                        <div className='row'>
                            <div className='icon'>A1</div>
                            <div className='description'>
                                <h4> Beginner/Elementary</h4>
                            </div>
                        </div>
                    </label>
                    <input type='radio' name='slide' id='Por2'></input>
                    <label for="Por2" className='card'>
                        <div className='row'>
                            <div className='icon'>A1</div>
                            <div className='description'>
                                <h4> Beginner/Elementary</h4>
                            </div>
                        </div>
                    </label>
                    <input type='radio' name='slide' id='Por3'></input>
                    <label for="Por3" className='card'>
                        <div className='row'>
                            <div className='icon'>A1</div>
                            <div className='description'>
                                <h4> Beginner/Elementary</h4>
                            </div>
                        </div>
                    </label>
                    <input type='radio' name='slide' id='Por4'></input>
                    <label for="Por4" className='card'>
                        <div className='row'>
                            <div className='icon'>A1</div>
                            <div className='description'>
                                <h4> Beginner/Elementary</h4>
                            </div>
                        </div>
                    </label>                    
                </div>
                </div>
        </div>
    );
};

export default Niveles;
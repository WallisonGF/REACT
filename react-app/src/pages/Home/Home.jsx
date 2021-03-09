import React            from 'react';
import imagemCard       from '../../assets/img/background-home.jpg';
import './home.css';

const Home = () => {
    return (
        <>  
            {/* ==================== */}
            {/* INFORMAÇÕES PESSOAIS */}
            {/* ==================== */}
            <div className="info-inicio">
                <div className="row row-info shadow-lg">
                    {/* ========================== */}
                    {/* INFORMAÇÕES PESSOAIS - {1} */}
                    {/* ========================== */}
                    <div className="col-sm-7 informacoes-pessoais">
                        <div className="row justify-content-center">

                            <div className="card-item shadow">
                                <h1 className="title-informacoes-pessoais">FORMAÇÃO</h1>
                                <div className="card">
                                    <img className="card-img-top" alt="" src={imagemCard} />
                                    <div className="card-body">
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="card-item shadow">
                                <h1 className="title-informacoes-pessoais">SOBRE</h1>
                                <div className="card">
                                    <img className="card-img-top" alt="" src={imagemCard} />
                                    <div className="card-body">
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="card-item shadow">
                                <h1 className="title-informacoes-pessoais">CARREIRA</h1>
                                <div className="card">
                                    <img className="card-img-top" alt="" src={imagemCard} />
                                    <div className="card-body">
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="card-item shadow">
                                <h1 className="title-informacoes-pessoais">METAS</h1>
                                <div className="card">
                                    <img className="card-img-top" alt="" src={imagemCard} />
                                    <div className="card-body">
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />
                    </div>
                    {/* ========================== */}
                    {/* INFORMAÇÕES PESSOAIS - {2} */}
                    {/* ========================== */}
                    <div className="col-sm-5 informacoes-extras ml-auto">
                        <div className="col-sm-12 mt-2 title-competencias">COMPETÊNCIAS</div>

                        <h3 className="mt-3 ml-3">HTML</h3>
                        <div className="col-12">
                            <div className="progress-bar bg-warning" style={{ width: '80%' }}>80%</div>
                        </div>

                        <h3 className="mt-5 ml-3">CSS</h3>
                        <div className="col-12">
                            <div className="progress-bar bg-primary" style={{ width: '70%' }}>70%</div>
                        </div>

                        <h3 className="mt-5 ml-3">JavaScript</h3>
                        <div className="col-12">
                            <div className="progress-bar bg-danger" style={{ width: '75%' }}>75%</div>
                        </div>

                        <h3 className="mt-5 ml-3">Bootstrap</h3>
                        <div className="col-12">
                            <div className="progress-bar" style={{ width: '60%', backgroundColor: "purple" }}>60%</div>
                        </div>

                        <h3 className="mt-5 ml-3">React</h3>
                        <div className="col-12">
                            <div className="progress-bar bg-success" style={{ width: '45%' }}>40%</div>
                        </div>

                        <div className="media-informacoes m-5 justify-content-center d-flex row">
                            <button className="btn mt-5"><i className="media-icons fa fa-envelope-square text-secondary fa-3x"></i></button>
                            <button className="btn mt-5"><i className="media-icons fa fa-instagram text-danger fa-3x"></i></button>
                            <button className="btn mt-5"><i className="media-icons fa fa-twitter text-info fa-3x"></i></button>
                            <button className="btn mt-5"><i className="media-icons fa fa-facebook text-primary fa-3x"></i></button>
                            <button className="btn mt-5"><i className="media-icons fa fa-github fa-3x"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;
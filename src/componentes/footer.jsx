import React from 'react'

export default function footer() {
  return (
    <footer className='container-fluid'>
        <div className="card">
            <div className="heading text-center">
                <div className="head1 ">Contactos</div>
                <p className="bdr mb-4"></p>
            </div>
            <div className="card-body">
                <div className="row m-0 pt-5 d-flex justify-content-center">
                    <div className="card col-12 col-md-3">
                        <div className="card-content">
                            <div className="card-title">
                                Mail
                            </div>
                            <p><small>tuki@gmail.com.uy.org.keloke</small></p>
                            <div className="learn-more">
                                <p>
                                    <small>
                                        Go!
                                    </small>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="card col-12 col-md-3">
                        <div className="card-content">
                            <i className="far fa-handshake fa-3x"></i>
                            <div className="card-title">
                                Soporte
                            </div>
                            <p><small>Atencion al cliente</small></p>
                            <div className="learn-more">
                                <p>
                                    <small>
                                        Go!
                                    </small>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="card col-12 col-md-3">
                        <div className="card-content">
                            <div className="card-title">
                                Redes
                            </div>
                            <p><small>Linkedn, Facebook, Instagram</small></p>
                            <div className="learn-more">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-footer row m-0 pt-4 mt-5">
                <div>
                    <p>
                        <small className="follow-text">Hecho para Matea 2022 por Valentin y Pablo</small> 
                    </p>

                </div>
            </div>
            
        </div>
    </footer>
  )
}

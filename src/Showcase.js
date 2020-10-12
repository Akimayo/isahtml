import React from 'react';
import Animation from './libs/p5/Animation';

import sketch from './showcaseSketch';
import webgl from './showcaseWebGL';

function Showcase() {
    return (
        <div className="container">
            <Animation sketch={sketch} />
            <Animation sketch={webgl} />
            <h1>This is a h1</h1>
            <h2>This is a h2</h2>
            <h3>This is a h3</h3>
            <h4>This is a h4</h4>
            <h5>This is a h5</h5>
            <h6>This is a h6</h6>

            <div className="alert alert-danger">
                Danger
            </div>
            <div className="alert alert-light">
                light
            </div>
            <div className="alert alert-gray">
                Gray
            </div>
            <div className="alert alert-success">
                Success
            </div>
            <div className="alert alert-primary">
                Primary
                <button type="button" className="close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>

            <hr></hr>

            <div className="w-md-50 w-100 bg-danger" style={{height: 100 + 'px'}}>
            </div>

            <hr></hr>

            <article>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin pede metus, vulputate nec,
                    fermentum
                    fringilla, vehicula vitae, justo. Integer imperdiet lectus quis justo. Etiam neque. Etiam
                    commodo dui
                    eget
                    wisi. Integer malesuada. Quisque porta. Nam sed tellus id magna elementum tincidunt. Aenean
                    placerat.
                    Donec
                    iaculis gravida nulla. Pellentesque pretium lectus id turpis. Fusce consectetuer risus a nunc.
                    Ut enim
                    ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Maecenas
                    sollicitudin. Nulla est. Duis ante orci, molestie vitae vehicula venenatis, tincidunt ac pede.
                    Pellentesque
                    arcu. Fusce aliquam vestibulum ipsum. Class aptent taciti sociosqu ad litora torquent per
                    conubia
                    nostra,
                    per inceptos hymenaeos. In sem justo, commodo ut, suscipit at, pharetra vitae, orci.</p>
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin pede metus, vulputate nec,
                    fermentum
                    fringilla, vehicula vitae, justo. Integer imperdiet lectus quis justo. Etiam neque. Etiam
                    commodo dui
                    eget
                    wisi. Integer malesuada. Quisque porta. Nam sed tellus id magna elementum tincidunt. Aenean
                    placerat.
                    Donec
                    iaculis gravida nulla. Pellentesque pretium lectus id turpis. Fusce consectetuer risus a nunc.
                    Ut enim
                    ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Maecenas
                    sollicitudin. Nulla est. Duis ante orci, molestie vitae vehicula venenatis, tincidunt ac pede.
                    Pellentesque
                    arcu. Fusce aliquam vestibulum ipsum. Class aptent taciti sociosqu ad litora torquent per
                    conubia
                    nostra,
                    per inceptos hymenaeos. In sem justo, commodo ut, suscipit at, pharetra vitae, orci.
                </p>
            </article>

            <hr></hr>

            <div>
                <button className="btn btn-primary">Primary button!</button>
                <button className="btn btn-secondary">Secondary button!</button>
                <button className="btn btn-danger">Danger button!</button>
                <button className="btn btn-dark">Dark button!</button>
                <button className="btn btn-light">Light button!</button>
            </div>
            <div className="mt-2">
                <button className="btn btn-outline-primary">Primary button!</button>
                <button className="btn btn-outline-secondary">Secondary button!</button>
                <button className="btn btn-outline-danger">Danger button!</button>
                <button className="btn btn-outline-dark">Dark button!</button>
                <button className="btn btn-outline-light">Light button!</button>
            </div>

            <div className="my-3">
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                    Launch demo modal
                </button>
            </div>

            <div className="d-flex mt-1">
                <div className="flex-grow-1 mx-2">
                    <form>
                        <h2>Login</h2>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1"
                                   aria-describedby="emailHelp"
                                   placeholder="Enter email"></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1"
                                   placeholder="Password"></input>
                        </div>
                        <div className="form-group">
                            <label>Are you gay?</label>
                            <select className="custom-select">
                                <option>Yes</option>
                                <option>No</option>
                                <option>Maybe</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
                <div className="flex-grow-1 mx-2">
                    <form>
                        <h2>Register</h2>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail2">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail2"
                                   placeholder="Enter email"></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword2">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword2"
                                   placeholder="Password"></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword3">Password confirmation</label>
                            <input type="password" className="form-control" id="exampleInputPassword3"
                                   placeholder="Password"></input>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>

            <div className="mt-2">
                <h2>Cards</h2>
                <div className="d-flex flex-wrap">
                    <div className="card m-1" style={{width: 250 + 'px'}}>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                            <p className="card-text">Some quick example text to build on the card title and make up
                                the bulk
                                of the
                                card's content.</p>
                            <a href="#" className="card-link">Card link</a>
                            <a href="#" className="card-link">Another link</a>
                        </div>
                    </div>
                    <div className="card m-1" style={{width: 250 + 'px'}}>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                            <p className="card-text">Some quick example text to build on the card title and make up
                                the bulk
                                of the
                                card's content.</p>
                            <a href="#" className="card-link">Card link</a>
                            <a href="#" className="card-link">Another link</a>
                        </div>
                    </div>
                    <div className="card m-1" style={{width: 250 + 'px'}}>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                            <p className="card-text">Some quick example text to build on the card title and make up
                                the bulk
                                of the
                                card's content.</p>
                            <a href="#" className="card-link">Card link</a>
                            <a href="#" className="card-link">Another link</a>
                        </div>
                    </div>
                    <div className="card m-1" style={{width: 250 + 'px'}}>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                            <p className="card-text">Some quick example text to build on the card title and make up
                                the bulk
                                of the
                                card's content.</p>
                            <a href="#" className="card-link">Card link</a>
                            <a href="#" className="card-link">Another link</a>
                        </div>
                    </div>
                    <div className="card m-1" style={{width: 250 + 'px'}}>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                            <p className="card-text">Some quick example text to build on the card title and make up
                                the bulk
                                of the
                                card's content.</p>
                            <a href="#" className="card-link">Card link</a>
                            <a href="#" className="card-link">Another link</a>
                        </div>
                    </div>
                    <div
                        className="card m-1"
                        style={{width: 250 + 'px'}}>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                            <p className="card-text">Some quick example text to build on the card title and make up
                                the bulk
                                of the
                                card's content.</p>
                            <a href="#" className="card-link">Card link</a>
                            <a href="#" className="card-link">Another link</a>
                        </div>
                    </div>
                    <div
                        className="card m-1"
                        style={{width: 250 + 'px'}}>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                            <p className="card-text">Some quick example text to build on the card title and make up
                                the bulk
                                of the
                                card's content.</p>
                            <a href="#" className="card-link">Card link</a>
                            <a href="#" className="card-link">Another link</a>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h2>Table:</h2>
                <table className="table table-light">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Phone number</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Monarezio</td>
                        <td>
                            <a href="#">samuel@kodytek.cz</a>
                        </td>
                        <td>
                            +420 724 371 430
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Alter</td>
                        <td>
                            <a href="#">alter@gmail.com</a>
                        </td>
                        <td>
                            +420 987 123 433
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Tester</td>
                        <td>
                            <a href="#">tester@seznam.cz</a>
                        </td>
                        <td>
                            +420 602 401 400
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>

            <div className="mb-3">
                <h2>Spinners:</h2>
                <div className="spinner-border ml-2"></div>
            </div>

            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog"
                 aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Showcase;
export const Modal = ({ launch }) => (
    <div className="modal fade" id={`popup${launch.flight_number}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel"> {launch.mission_name} </h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body"> 
                    <div id={`carousel${launch.flight_number}Controls`} class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src={launch.links.mission_patch} class="d-block w-100" alt="" />
                            </div>
                            <div class="carousel-item">
                                <img src={launch.links.mission_patch_small} class="d-block w-100" alt="" />
                            </div>
                        </div>
                        <a class="carousel-control-prev" href={`#carousel${launch.flight_number}Controls`} role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href={`#carousel${launch.flight_number}Controls`} role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>

                    <div className="row launch-info">
                        <div className="col-sm-4">
                            <h4>Flight Number</h4>
                            <p>Number {launch.flight_number} </p>
                        </div>
                        <div className="col-sm-4">
                            <h4>Launch Year</h4>
                            <p>Year {launch.launch_year} </p>
                        </div>
                        <div className="col-sm-4">
                            <h4>Rocket Name</h4>
                            <p>{launch.rocket.rocket_name}</p>
                        </div>
                        <div className="col-sm-4">
                            <h4>Rocket Id</h4>
                            <p>{launch.rocket.rocket_id}</p>
                        </div>
                        <div className="col-sm-4">
                            <h4>Rocket Type</h4>
                            <p>{launch.rocket.rocket_type} Type</p>
                        </div>
                        <div className="col-sm-4">
                            <h4>Launch Success?  </h4>
                            <p>{launch.launch_success ? `True`: `False`}  </p>
                        </div>
                     </div>
                     <p>{launch.details}</p>
                     <a href={launch.links.wikipedia} className="btn btn-primary btn-block"  rel="noneferrer">Learn More</a>
                     <a href={launch.links.video_link} className="btn btn-primary btn-block" rel="noneferrer">Watch Now</a>
                </div>
            </div>
        </div>
    </div>
);
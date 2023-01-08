export const Card = (prop) => (
    <div className="col-sm-3">
        <div className="card" key={prop.launch.flight_number}>
            <img src={prop.launch.links.mission_patch} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{prop.launch.mission_name}</h5>
                <p className="card-text">If you want to know more details about the SpaceX missions click the button below</p>
                <a 
                href="#" 
                className="btn btn-primary" 
                data-toggle="modal" 
                data-target={`#popup${prop.launch.flight_number}`}
                >
                View More
                </a> &nbsp;
                <a 
                href="#"
                className="btn btn-primary"
                data-toggle="modal"
                data-target={`#popup${prop.launch.mission_name}`}
                >
                Comment
                </a>
            </div>
        </div>
    </div>
);
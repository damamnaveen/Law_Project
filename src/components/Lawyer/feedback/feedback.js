
export function Feedback() {
    return (
        <div className="mx-auto mt-5">
            <div className="card mb-5" style={{backgroundColor:"#828bb2"}}>
                <div className="card-header py-3">
                    <h2>Client Feedback Form</h2>
                </div>
            </div>
            <img src={require('../../../images/9848264.jpg')} style={{ width: "400px", margin: "0px 550px", position:"absolute" }}></img>

            <div className="card-body m-5">
                <div className=" mb-4">
                    <div className="col-4">
                        <label>Name:</label>
                        <input type="text" className="form-control" placeholder="Your Name"></input>
                    </div>
                    <div className="col-4">
                        <label>Feedback:</label>
                        <textarea className="form-control" placeholder="Your Feedback Here"></textarea>
                    </div>
                </div>
            </div>
            <div className="col m-4 mb-5 col-2">
                <input type="submit" className="btn btn-outline-success" value="Submit"></input>
                <input type="reset" className="btn btn-outline-warning m-2" value="Reset"></input>
            </div>
        </div>
    )
}

export default Feedback;
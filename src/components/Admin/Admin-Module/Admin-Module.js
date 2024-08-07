import { useNavigate } from "react-router-dom"

export function AdminModule() {

    const navigate = useNavigate()

    function naviagteToTraining(){
        navigate("/training");
    }
    
    return (
        <div className="row">
            <div className="col-lg-3 col-md-6">
                <a href="/" className="d-block"></a>
                <div className="white-box single-summery">
                    <div className="d-flex justify-content-between">
                        <div>
                            <h3>
                                <button type="button" class="btn btn-primary-white" onClick={() => {
                                    naviagteToTraining()
                                }}>Training And Education</button>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
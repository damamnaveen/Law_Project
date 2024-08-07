import { useNavigate } from 'react-router-dom'
import '../Client-Module/Client-Module.css'

export function ClientModule(){

    const navigate = useNavigate()

    function navigateToDataPrivacy(){
        navigate("/dataprivacy");
    }

    function navigateToDocument(){
        navigate("/document");
    }

    function naviagetToReporting(){
        navigate("/reporting");
    }

    return(
        <div className="row">
            <div className="col-lg-3 col-md-6">
                <a href="/" className="d-block"></a>
                <div className="white-box single-summery">
                    <div className="d-flex justify-content-between">
                        <div>
                            <h3>
                            <button type="button" className="btn btn-primary-white" onClick={()=> {
                                navigateToDocument()
                            }}>Document Verification</button>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6">
                <a href="/" className="d-block"></a>
                <div className="white-box single-summery">
                    <div className="d-flex justify-content-between">
                        <div>
                            <h3>
                            <button type="button"  className="btn btn-primary-white" onClick={()=> {
                                navigateToDataPrivacy()
                            }}>Data Privacy Compilance</button>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6">
                <a href="/" className="d-block"></a>
                <div className="white-box single-summery">
                    <div className="d-flex justify-content-between">
                        <div>
                            <h3>
                            <button type="button" className="btn btn-primary-white" onClick={()=> {
                                naviagetToReporting()
                            }}>Reporting Misconduct</button>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
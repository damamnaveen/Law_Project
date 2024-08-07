import { useNavigate } from "react-router-dom"
import '../Lawyer-Module/Lawyer-Module.css'

export function LawyerModule(){

    const navigate = useNavigate() 

    function naviagetToclientFeedback(){
        navigate("/feedback");
    }

    function navigateToEthical(){
        navigate("/ethical");
    }

    function navigateToConflict(){
        navigate("/conflict");
    }

    function naviagetToBilling(){
        navigate("/billing");
    }

    function naviagetToaccountablity(){
        navigate("/accountability");
    }

    return(
        <div className="row" style={{transition:""}}>
            <div className="col-lg-3 col-md-6">
                <a href="/" className="d-block"></a>
                <div className="white-box single-summery">
                    <div className="d-flex justify-content-between">
                        <div>
                            <h3>
                            <button type="button" class="btn btn-primary-white" style={{textDecoration:"none"}} onClick={()=> {
                                navigateToEthical()
                            }}>Ethical Standards Compilance</button>
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
                                navigateToConflict()
                            }}>Conflict of Intrest Management</button>
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
                            <button type="button" class="btn btn-primary-white" onClick={()=> {
                                naviagetToBilling()
                            }}>Transperency in Billing</button>
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
                            <button type="button" class="btn btn-primary-white" onClick={()=> {
                                naviagetToaccountablity()
                            }}>Professional Accountability</button>
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
                            <button type="button" class="btn btn-primary-white" onClick={()=> {
                                naviagetToclientFeedback()
                            }}>Client Feedback Integration</button>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
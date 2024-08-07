import { useNavigate } from "react-router-dom";
import '../Users/Users.css';

export function Users() {

    const navigate = useNavigate()

    function navigateToClient(){
        navigate("/clientmodule");
    }

    function navigateToLawyer(){
        navigate("/lawyermodule");
    }

    function navigateToAdmin(){
        navigate("/adminmodule");
    }

    return (
        <div className="row">
            <div className="col-lg-3 col-md-6">
                <a href="/" className="d-block"></a>
                <div className="white-box single-summery">
                    <div className="d-flex justify-content-between">
                        <div>
                            <h3>
                            <button type="button" className="btn btn-primary-white" style={{fontSize:"50px"}} onClick={()=> {
                                navigateToClient()
                            }}>Client</button>
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
                            <button type="button"  className="btn btn-primary-white" style={{fontSize:"50px"}} onClick={()=> {
                                navigateToLawyer()
                            }}>Lawyer</button>
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
                            <button type="button" class="btn btn-primary-white" style={{fontSize:"50px"}} onClick={()=> {
                                navigateToAdmin()
                            }}>Admin</button>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
import { FaSearch } from "react-icons/fa";

export function Document() {
    return (
        <div style={{backgroundColor:"lightblue"}}>
            <br />
            <br />
            <h3 style={{ textAlign: 'center' }}>Document Verification</h3>
            <div className="container container-fluid container-lg container-sm client_filter_container w-75">
                {/* <form>
                    <div className="row"> */}
                        {/* <div className="col-6 client_date_filter">
                    <input type="date" className="form-control"></input>
                </div> */}
                        {/* <div className="col-6 client_transaction_search">
                            <span>
                                <input type="text" className="form-control"></input>
                            </span>
                        </div> */}

                    {/* </div> */}

                {/* </form> */}
            </div>
            <div className="container container-fluid container-lg container-sm client_transactions_list mt-4 w-150">
                <h3> Client Documents</h3>
                <hr/>
                <div>
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Full Name</th>
                                <th>Document</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1.

                                </td>
                                <td>James

                                </td>
                                <td>
                                    Passport
                                </td>
                                <td>
                                    <select type="text" className="text-black">
                                        <option>Select</option>
                                        <option>Verified</option>
                                        <option>Declined</option>
                                        <option>Hold</option>
                                    </select>
                                </td>
                            </tr>

                            <tr>
                                <td>2.
                                </td>
                                <td>Roshan
                                </td>
                                <td>
                                    PAN Card
                                </td>
                                <td>
                                    <select type="text" className="text-black">
                                        <option>Select</option>
                                        <option>Verified</option>
                                        <option>Declined</option>
                                        <option>Hold</option>
                                    </select>                </td>
                            </tr>
                            <tr>
                                <td>3.
                                </td>
                                <td>Siddharth

                                </td>
                                <td>
                                    Aadhar
                                </td>
                                <td>
                                    <select type="text" className="text-black">
                                        <option>Select</option>
                                        <option>Verified</option>
                                        <option>Declined</option>
                                        <option>Hold</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>4.

                                </td>
                                <td>Kumar

                                </td>
                                <td>
                                    Driving Licence
                                </td>
                                <td>
                                    <select type="text" className="text-black">
                                        <option>Select</option>
                                        <option>Verified</option>
                                        <option>Declined</option>
                                        <option>Hold</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>5.

                                </td>
                                <td>John
                                </td>
                                <td>
                                    Passport
                                </td>
                                <td>
                                    <select type="text" className="text-black">
                                        <option>Select</option>
                                        <option>Verified</option>
                                        <option>Declined</option>
                                        <option>Hold</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>6.
                                </td>
                                <td>Henrey
                                </td>
                                <td>
                                    License
                                </td>
                                <td>
                                    <select type="text" className="text-black">
                                        <option>Select</option>
                                        <option>Verified</option>
                                        <option>Declined</option>
                                        <option>Hold</option>
                                    </select>                                </td>
                            </tr>
                            <tr>
                                <td>7.

                                </td>
                                <td>Kishore
                                </td>
                                <td>
                                    Passport
                                </td>
                                <td>
                                    <select type="text" className="text-black">
                                        <option>Select</option>
                                        <option>Verified</option>
                                        <option>Declined</option>
                                        <option>Hold</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>8.

                                </td>
                                <td>Kumari
                                </td>
                                <td>
                                    Passport
                                </td>
                                <td>
                                    <select type="text" className="text-black">
                                        <option>Select</option>
                                        <option>Verified</option>
                                        <option>Declined</option>
                                        <option>Hold</option>
                                    </select>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default Document;

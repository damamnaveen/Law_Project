import { Route, Routes } from "react-router-dom";
import { Users } from "./components/Users/Users";
import { ClientModule } from "./components/Client/Client-Module/Client-Module";
import { LawyerModule } from "./components/Lawyer/Lawyer-Module/Lawyer-Module";
import { AdminModule } from "./components/Admin/Admin-Module/Admin-Module";
import { Training } from "./components/Admin/Training/Training";
import { Ethical } from "./components/Lawyer/Ethical/Ethical";
import { Conflict } from "./components/Lawyer/Conflict/Conflict";
import Document from "./components/Client/Document-Ver/Document-Ver";
import { DataPrivacy } from "./components/Client/Data-Privacy/Data-Privacy";
import { Reporting } from "./components/Client/Reporting/Reporting";
import FeedbackForm, { Feedback } from "./components/Lawyer/feedback/feedback";
import { Accountability } from "./components/Lawyer/Accountablility/Accountability";
import Billing from "./components/Lawyer/Billing/Billing";



export function AppRouter(){
    return(
        <Routes>
            <Route path="/" element={<Users></Users>}></Route>
            <Route path="/clientmodule" element={<ClientModule></ClientModule>}></Route>
            <Route path="/lawyermodule" element={<LawyerModule></LawyerModule>}></Route>
            <Route path="/adminmodule" element={<AdminModule></AdminModule>}></Route>
            <Route path="/training" element={<Training></Training>}></Route>
            <Route path="/ethical" element={<Ethical></Ethical>}></Route>
            <Route path="/conflict" element={<Conflict></Conflict>}></Route>
            <Route path="/document" element={<Document></Document>}></Route>
            <Route path="/dataprivacy" element={<DataPrivacy></DataPrivacy>}></Route>
            <Route path="reporting" element={<Reporting></Reporting>}></Route>
            <Route path="/feedback" element={<Feedback></Feedback>}></Route>
            <Route path="/accountability" element={<Accountability></Accountability>}></Route>
            <Route path="/billing" element={<Billing></Billing>}></Route>
        </Routes>
    )
}
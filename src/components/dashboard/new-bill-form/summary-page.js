import { height } from "@mui/system";
import SimpleListMenu from "./selected-menu";
import './summary-styles.css';

const courtsList = [
  "Courts",
  "The Chief Magistrate's Court of Mengo",
  "Buganda Road Court",
  "Nakawa High Court",
  "Court of Appeal",
  "Supreme Court",
  "Jinja High Court",
  "Mbale High Court",];
const divisions =["Divisions", "Civil Division", "Criminal Division"];
export default function SummaryPage() {
  //   const [courtsData, setCourtsData] = useState([]);
  //   setCourtsData(courtsList);
  return (
    <div>
      <label>Court</label>
      <SimpleListMenu courts={courtsList} />      
      <label>Division</label>
      <SimpleListMenu courts={divisions} orther={"Select Division"} />
      <div className="taxation-div"><label className="taxation-label">Taxation No.</label>
      <input type="number" placeholder="Number" className="taxation-field"></input> of <input type="number" placeholder="Year" className="taxation-year"></input></div>
      <div className="suit-div"> <label className="suit-label">From Civil Suit No.</label>
      <input type="number" placeholder="Number" className="suit-field"></input> of <input type="number" placeholder="Year" className="suit-year"></input></div>
      <div className="plaintiff-div"><label className="plaintiff-label">Plaintiff(s)</label><textarea type="text" className="plaintiff-field" placeholder="Plaintiff"></textarea> </div>
      <div className="defendant-div"><label className="defendant-label">Defendant(s)</label>
      <textarea type="text" className="defendant-field" placeholder="Defendant"></textarea></div>
      <div className="dated-div"><label className="dated-label">Dated at</label>
      <input type="text" placeholder="Location" className="location-field" ></input> <input type="date" className="date-picker"></input></div>      
      {/* <br><label>Counsel for the Plaintif|Defendant</label></br>
      <br><label>Drawn and Filed By</label></br>
      <br><label>To Be Served Upon</label></br> */}
      <div className="button-div"><input type="submit" value="Save and Continue" className="submit-button"></input></div>      
    </div>
  );
}
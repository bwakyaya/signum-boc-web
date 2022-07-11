import SimpleListMenu from "./selected-menu";

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
      <form>
      <label>Court</label>
      <SimpleListMenu courts={courtsList} />
      <label>Division</label>
      <br><SimpleListMenu courts={divisions} orther={"Select Division"} /></br>
      <br><label>Taxation No.</label></br>
      <br><input type="number" placeholder="Number"></input> of <input type="number" placeholder="Year"></input></br>
      <br><label>From Civil Suit No.</label></br>
      <br><input type="number" placeholder="Number"></input> of <input type="number" placeholder="Year"></input></br>
      <br><label>Plaintiff(s)</label></br>
      <br><input type="text"></input></br>
      <br><label>Defendant(s)</label></br>
      <br><input type="text"></input></br>
      <br><label>Dated at</label></br>
      <br><input type="text" placeholder="Location"></input> <input type="date"></input></br>
      {/* <br><label>Counsel for the Plaintif|Defendant</label></br>
      <br><label>Drawn and Filed By</label></br>
      <br><label>To Be Served Upon</label></br> */}
      <br><input type="submit" value="Save and Continue"></input></br>  
      </form>
    </div>
  );
}
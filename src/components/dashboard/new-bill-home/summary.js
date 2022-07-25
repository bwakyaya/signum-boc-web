import "./summary.css";
import SimpleListMenu from "./selected-menu";
import "./summary.css";
const courtsList = [
  "Courts",
  "The Chief Magistrate's Court of Mengo",
  "Buganda Road Court",
  "Nakawa High Court",
  "Court of Appeal",
  "Supreme Court",
  "Jinja High Court",
  "Mbale High Court",
];
const divisions = ["Divisions", "Civil Division", "Criminal Division"];
export default function SummaryPage() {
  //   const [courtsData, setCourtsData] = useState([]);
  //   setCourtsData(courtsList);
  return (
    <div className="summary-component">
      <div className="court-div">
        <label className="court-label">Court</label>
        <SimpleListMenu courts={courtsList} />
      </div>
      <div className="division-div">
        <label className="division-label">Division</label>
        <SimpleListMenu courts={divisions} orther={"Select Division"} />
      </div>
      <div className="taxation-div">
        <label className="taxation-label">Taxation Number</label>
        <input
          type="number"
          placeholder="Number"
          className="taxation-field"
          required
        ></input>
        <label className="taxation-year-label">Taxation Year</label>
        <input
          type="number"
          placeholder="Year"
          className="taxation-year"
        ></input>
      </div>
      <div className="suit-div">
        <label className="suit-label">Civil Suit Number</label>
        <input
          type="number"
          placeholder="Number"
          className="suit-field"
        ></input>
        <label className="suit-year-label">Civil Suit Year</label>
        <input type="number" placeholder="Year" className="suit-year"></input>
      </div>
      <div className="plaintiff-div">
        <label className="plaintiff-label">
          Plaintiff(Each Entitu Name on a new line)
        </label>
        <textarea
          type="text"
          className="plaintiff-field"
          placeholder="Plaintiff(s)"
        ></textarea>{" "}
      </div>
      <div className="defendant-div">
        <label className="defendant-label">
          Defendant(Each Entitu Name on a new line)
        </label>
        <textarea
          type="text"
          className="defendant-field"
          placeholder="Defendant(s)"
        ></textarea>
      </div>
      <div className="dated-div">
        <label className="location-label">Location</label>
        <input
          type="text"
          placeholder="Location"
          className="location-field"
        ></input>
        <label className="date-label">Date</label>
        <input type="date" className="date-picker"></input>
      </div>
    </div>
  );
}

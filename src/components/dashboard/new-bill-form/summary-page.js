import SimpleListMenu from "./selected-menu";

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
export default function SummaryPage() {
  //   const [courtsData, setCourtsData] = useState([]);
  //   setCourtsData(courtsList);
  return (
    <div>
      <div>
        <SimpleListMenu courts={courtsList} />
      </div>
      <div>Division</div>
      <div>Taxation Number... of...</div>
      <div>From Civil Suit Number... of ...</div>
      <div>Plaintiff(s)</div>
      <div>Defendant(s)</div>
      <div>Dated at</div>
      <div>Counsel for the Plaintif|Defendant</div>
      <div>Drawn and Filed By</div>
      <div>To Be Served Upon</div>
    </div>
  );
}

import * as React from "react";
import { useEffect } from "react";
import { useState } from "react";
import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";

let paragraphItem = "";
export default function ScheduleTree(props) {
  const [paragraph, setParagraph] = useState(paragraphItem);
  useEffect(() => {
    paragraphItem = paragraph;
    props.setParagraph(paragraphItem);
  });
  const renderTree = (nodes) => (
    <TreeItem
      key={nodes.id}
      nodeId={nodes.id}
      label={nodes.name}
      className="tree-item"
      onClick={() => {
        if (!nodes.children) {
          setParagraph(nodes.name);
        }
      }}
    >
      {Array.isArray(nodes.children)
        ? nodes.children.map((node) => renderTree(node))
        : null}
    </TreeItem>
  );

  return (
    <TreeView
      className="schedules-list"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpanded={["root"]}
      defaultExpandIcon={<ChevronRightIcon />}
      sx={{ flexGrow: 1, overflowY: "auto" }}
    >
      {renderTree(Scheduledata)}
    </TreeView>
  );
}
const Scheduledata = {
  id: "root",
  name: "Schedule",
  children: [
    {
      id: "s1",
      name: "FIRST SCHEDULE: Sales, Purchases, Mortgages, and Debentures",
      children: [
        {
          id: "s1s1",
          name: "FIRST SCALE: Scale of fees for advocate for the 1 end or or purchaser on sale and purchase of land",
          children: [
            {
              id: "s1s1p1",
              name: "PARAGRAPH 1: To the advocate for negotiating. preparing or completing a sale or purchase agreement for registered land ",
            },
            {
              id: "s1s1p2",
              name: "PARAGRAPH 2: To the advocate for effecting conveyance in a land registry or processing a certificate of title ",
            },
            {
              id: "s1s1p3",
              name: "PARAGRAPH 3: For purposes of items I and 2 of this scale, where the advocate has not h and led the negotiation , preparation or completion for registration",
            },
          ],
        },
        {
          id: "s1s2",
          name: "SECOND SCALE: ScaLe of fees for charges affecting land such as debentures and mortgages",
          children: [
            {
              id: "s1s2p1",
              name: "PARAGRAPH 1: The fees payable to the advocate of the chargee for negotiating and  preparing to completion, of a security shall be calculated cumulatively on the basis of the consideration or the value of the subject matter",
            },
            {
              id: "s1s2p2",
              name: "PARAGRAPH 2: To the same advocate of the chargee referred to in item I, for negotiating, preparing and completing a further charge in addition to the charge in item l ",
            },
            {
              id: "s1s2p3",
              name: "PARAGRAPH 3: To the advocate tor the charger for negotiating, preparing and completing a security",
            },
            {
              id: "s1s2p4",
              name: "PARAGRAPH 4: To advocate referred to in item 3 for negotiating. preparing and completing a further charge in addition to the charge in item 3",
            },
            {
              id: "s1s2p5",
              name: "PARAGRAPH 5: To the advocate tor the chargee or charger. for negotiating and preparing to completion. an assignment, redemption or discharge of a security",
            },
            {
              id: "s1s2p6",
              name: "PARAGRAPH 6: To the advocate tor the chargee for negotiating and preparing to completion, an equitable mortgage or memorandum of charge",
            },
            {
              id: "s1s2p7",
              name: "PARAGRAPH 7: To t e advocate for then charger for negotiating. preparing and completing an equitable mortgage or memorandum of charge by deposit of title",
            },
            {
              id: "s1s2p8",
              name: "PARAGRAPH 8: Where two or more securities are created, whether contemporaneously or subsequently, in favour of the same chargee to secure the same or a lower amount",
            },
            {
              id: "s1s2p9",
              name: "PARAGRAPH 9: Where a mortgage or charge comprises more than one immoveable property",
            },
            {
              id: "s1s2p10",
              name: "PARAGRAPH 10: Where a security is created in favour of two or more chargees",
            },
            {
              id: "s1s2p11",
              name: "PARAGRAPH 11: Where the advocate has not handled the negotiation and preparation to completion of a transaction",
            },
            {
              id: "s1s2p12",
              name: "PARAGRAPH 12: The fee on a single debenture of any nature where the debenture does not create a security, shall be calculated under the Fifth Schedule taking into account the time, complexity and responsibility",
            },
            {
              id: "s1s2p13",
              name: "PARAGRAPH 13: Where a security is created by more than one charger, no addition shall be made to the prescribed fee",
            },
          ],
        },
      ],
    },
    {
      id: "s2",
      name: "SECOND SCHEDULE: Scales o f charges for leases and agreements of leases at rack rent and for building leases, reserving rent, etc.",
      children: [
        {
          id: "s2s1",
          name: "FIRST SCALE: Scale of charges for leases and agreements for leases at rack rent",
          children: [
            {
              id: "s2s1p1",
              name: "PARAGRAPH 1: To the advocate for preparing. settling and completing a lease or agreement for a lease and counterpart lease or agreement for a lease",
            },
            {
              id: "s2s1p2",
              name: "PARAGRAPH 2: To the advocate for registering a lease or agreement for a lease",
            },
          ],
        },
        {
          id: "s2s2",
          name: "SECOND SCALE: Scale of charges for building leases, agreements for building leases and other long leases not at rack rent",
          children: [
            {
              id: "s2s2p1",
              name: "PARAGRAPH 1: To the advocate for preparing, settling, completing a lease and a counterpart lease",
            },
            {
              id: "s2s2p2",
              name: "PARAGRAPH 2: To the advocate registering a lease or agreement for a lease ",
            },
          ],
        },
      ],
    },
    {
      id: "s3",
      name: "THIRD SCHEDULE: Floatation of Companies",
      children: [
        {
          id: "s3s1",
          name: "FIRST SCALE: Registration of new Companies",
          children: [
            {
              id: "s3s1p1",
              name: "PARAGRAPH 1: Instruction fees for the formation and incorporation of a private company with limited liability and share capital",
            },
            {
              id: "s3s1p2",
              name: "PARAGRAPH 2: Fees for the formation and incorporation of a public company",
            },
            {
              id: "s3s1p3",
              name: "PARAGRAPH 3: Fees for the formation and incorporation of a new company without share capital",
            },
            {
              id: "s3s1p4",
              name: "PARAGRAPH 4: Fees for registering a foreign company",
            },
          ],
        },
        {
          id: "s3s2",
          name: "SECOND SCALE: Debentures",
          children: [
            {
              id: "s3s2p1",
              name: "PARAGRAPH 1: Fees for preparing a single debenture or series of debentures",
            },
            {
              id: "s3s2p2",
              name: "PARAGRAPH 2: Where security is given by way of a mortgage or other form of charge of immovable property, in addition to a floating charge",
            },
          ],
        },
        {
          id: "s3s3",
          name: "THIRD SCALE: Other Company Work",
          children: [
            {
              id: "s3s3p1",
              name: "PARAGRAPH 1: The fees for preparing a prospectus on issue of equity or debt instruments, obtaining regulatory approval, obtaining securities exchange listing, drafting and adjusting press advertisements, the reconstruction or amalgamating of companies or any other non-litigious work in relation to company matters not otherwise provided for",
            },
            {
              id: "s3s3p2",
              name: "PARAGRAPH 2: All work relating to company matters for which fees are specifically prescribed in a Schedule to these Regulations",
            },
          ],
        },
      ],
    },
    {
      id: "s4",
      name: "FOURTH SCHEDULE: Trademarks, Inventions, and Designs",
      children: [
        {
          id: "s4s1",
          name: "FIRST SCALE: Trademarks",
          children: [
            {
              id: "s4s1p1",
              name: "PARAGRAPH 1: Applications",
              children : [
              {id:"s4s1p1x1",
              name: "Instructions to register one trademark in one class and drawing form of authorization"
              },
              {
                id: "s4s1p1x2",
                name:"Instructions to register second and further trademarks in the name of the same propriator simultaneously per trademark in one class"
              },
              {
                id:"s4s1p1x3",
                name:"Drawing application for registeration and copies of representation on mark"
              }]
            },
            {
              id: "s4s1p2",
              name: "PARAGRAPH 2: Registered Users",

            },
            {
              id: "s4s1p3",
              name: "PARAGRAPH 3: Assignments",
            },
            {
              id: "s4s1p4",
              name: "PARAGRAPH 4: Renewals",
            },
            {
              id: "s4s1p5",
              name: "PARAGRAPH 5: Change of Name",
            },
            {
              id: "s4s1p6",
              name: "PARAGRAPH 6: Change of Address",
            },
            {
              id: "s4s1p7",
              name: "PARAGRAPH 7: Alterations of Ammendments",
            },
            {
              id: "s4s1p8",
              name: "PARAGRAPH 8: Searches ",
            },
            {
              id: "s4s1p9",
              name: "PARAGRAPH 9:Opposition and rectification proceedings",
            },
            {
              id: "s4s1p10",
              name: "PARAGRAPH 10: Miscellaneous Matters",
            },
          ],
        },
        {
          id: "s4s2",
          name: "SECOND SCALE: Patents, utility models, industrial designs, geographical indications, plant varieties and other intellectual property rights",
          children: [
            {
              id: "s4s2p1",
              name: "PARAGRAPH 1: Instructions to register",
            },
            {
              id: "s4s2p2",
              name: "PARAGRAPH 2: Processing Applications",
            },
            {
              id: "s4s2p3",
              name: "PARAGRAPH 3: Licenses",
            },
            {
              id: "s4s2p4",
              name: "PARAGRAPH 4: Instructions to file an application to register a subsequent proprietor of a pending application or registered right ",
            },
            {
              id: "s4s2p5",
              name: "PARAGRAPH 5: Instructions to pay the annual maintenance fee",
            },
            {
              id: "s4s2p6",
              name: "PARAGRAPH 6: Applications for extension of term of registration ",
            },
            {
              id: "s4s2p7",
              name: "PARAGRAPH 7: Instructions to file an application to restore a registration",
            },
            {
              id: "s4s2p8",
              name: "PARAGRAPH 8: Instruction to register a change of name or change of address of the registered proprietor and reviewing all the supporting documents",
            },
            {
              id: "s4s2p9",
              name: "PARAGRAPH 9: Searches at the registry and advice on the search ",
            },
            {
              id: "s4s2p10",
              name: "PARAGRAPH 10: Instructions to obtain from the registry certified copies of documents",
            },
            {
              id: "s4s2p11",
              name: "PARAGRAPH 11: Infringement, expungement, rectification, opposition proceedings and applications and appeals ",
            },
            {
              id: "s4s2p12",
              name: "PARAGRAPH 12: Miscellaneous Matters",
            },
          ],
        },
      ],
    },
    {
      id: "90450u348tierkgjnesbjfhjwer4oio",
      name: "FIFTH SCHEDULE: Scale of fees in respect of business the remuneration for which is not otherwise prescribed",
      children: [
        {
          id: "kfjfgndfglikriewufskvjds39583457",
          name: "PARAGRAPH 1: Instructions for drawing and perusing deeds, deed polls, constitutions, declarations, affidavits, proposals, contracts and other documents or other matters of a non-contentious nature",
        },
        {
          id: "kfjfgndfglikgfhg654tevjds39583457",
          name: "PARAGRAPH 2: Attendances or consultation in person or by electronic means. per 15 minutes or part of",
        },
        {
          id: "kfjfgndfglik245tgfsdfvfgdnhjkvjds39583457",
          name: "PARAGRAPH 3: Overnight journeys from home, per day",
        },
        {
          id: "kfjfgndfgl786uhfdvdsfewregjds39583457",
          name: "PARAGRAPH 4: Attendances where the fee is based on attendance and not on the time the advocate is engaged ",
        },
        {
          id: "kf2345ydfghjriewufskvjds39583457",
          name: "PARAGRAPH 5: Drawing and perusing correspondence and other documents not expressly provided for, including making copies of the documents and correspondences ",
        },
        {
          id: "kfjfgndfglikriewufs78yujhnbcfxsdfsewf4567",
          name: "PARAGRAPH 6: For formal written opinions ",
        },
        {
          id: "kfjfgndfglikri988yiujhfdsf454tujds39583457",
          name: "PARAGRAPH 7: Witnessing the execution of a document where that an advocate is not entitled to a fee for witnessing ",
        },
        {
          id: "kfjfgndfglikriewufskvjds39583457",
          name: "PARAGRAPH 8: Filing of any form with an appropriate authority",
        },
        {
          id: "kfjfgndfglikriewu34567ujhfdghrt83457",
          name: "PARAGRAPH 9: Immigration related applications",
        },
        {
          id: "kfjfgndfglikricvgdffngtr34ds39583457",
          name: "PARAGRAPH 10: For preparing and perfecting chattels securities",
        },
      ],
    },
    {
      id: "13klgjhoyfjshdbsegfvyeryeiu",
      name: "SIXTH SCHEDULE: Scale of fees in High Court, magistrate courts, tribunals and arbitration matters ",
      children: [
        {
          id: "1438497tyiejfbjsdfhbfu3g37t6",
          name: "PARAGRAPH 1: The fees for instructions to sue, claim, defend or oppose ",
        },
        {
          id: "150495twsjfvbfhbfjb",
          name: "PARAGRAPH 2: Insolvency proceedings",
        },
        {
          id: "1438497tyiejfbjvfgfhfdf",
          name: "PARAGRAPH 3: Matrimonial causes",
        },
        {
          id: "15049534rtgfvc",
          name: "PARAGRAPH 4: Adoption and guardianship",
        },
        {
          id: "143889uihjgfdsewr546dfhbfu3g37t6",
          name: "PARAGRAPH 5: Probate and letters of administration",
        },
        {
          id: "150495t89uijkhgfdsre5467fjb",
          name: "PARAGRAPH 6: Election petitions",
        },
        {
          id: "1438497t3edfghntug37t6",
          name: "PARAGRAPH 7: Judicial review and prerogative orders",
        },
        {
          id: "150495678ycgddsgsrdgrhbdffjb",
          name: "PARAGRAPH 8: Criminal cases ",
        },
        {
          id: "1438497tyiejfbjsdfhbfu3g37t6fvdfgrg4",
          name: "PARAGRAPH 9: Other Matters ",
        },
        {
          id: "150495twsjfvbfhbfjb234rfgdf",
          name: "PARAGRAPH 10: Drawing court papers",
        },
        {
          id: "1438497tyiejfbjsdfhbfu3g37t656yrgfse",
          name: "PARAGRAPH 11: Correspondence ",
        },
        {
          id: "150495twsjfvbfdfe4rferhbfjb",
          name: "PARAGRAPH 12: Attendance ",
        },
      ],
    },
  ],
};

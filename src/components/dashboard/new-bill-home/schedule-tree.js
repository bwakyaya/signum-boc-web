import * as React from "react";
import { useEffect } from "react";
import { useState } from "react";
import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";
import {Prompt} from "./model"
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

let paragraphItem = "";
export default function ScheduleTree(props) {
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [open, setOpen] = React.useState(false);
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
                children: [
                  {
                    id: "s4s1p1x1",
                    name: "Instructions to register one trademark in one class and drawing form of authorization",
                  },
                  {
                    id: "s4s1p1x2",
                    name: "Instructions to register second and further trademarks in the name of the same propriator simultaneously per trademark in one class",
                  },
                  {
                    id: "s4s1p1x3",
                    name: "Drawing application for registeration and copies of representation on mark",
                  },
                ],
              },
              {
                id: "s4s1p2",
                name: "PARAGRAPH 2: Registered Users",
                children: [
                  {
                    id: "s4s1p2x1",
                    name: "Instructions to file an application to enter one registered user of one registered trademark or same proprietor incorporated in the same set of documents and subject to the same conditions and restrictions in each case",
                    children: [
                      {
                        id: "s4s1p2x1a",
                        name: "for the first single registered trademark",
                      },
                      {
                        id: "s4s1p2x1b",
                        name: "For the second registered trademark",
                      },
                      {
                        id: "s4s1p2x1c",
                        name: "For the third registered trademark",
                      },
                      {
                        id: "s4s1p2x1d",
                        name: "For the fourth and each subsequent registered trademark where the applications are filed simultaneously",
                      },
                    ],
                  },
                  {
                    id: "s4s1p2x2",
                    name: "Drawing a statement of a case, a statutory declaration in support and application",
                  },
                  {
                    id: "s4s1p2x3",
                    name: "Drawing registered user agreement",
                  },
                  {
                    id: "s4s1p2x4",
                    name: "Instructions to file an application for variation or cancellation of a registered user in respect of one registered trademark of same proprietor",
                    children: [
                      {
                        id: "s4s1p2x4a",
                        name: "For the first or single registered trademark",
                      },
                      {
                        id: "s4s1p2x4b",
                        name: "For the second registered trademark",
                      },
                      {
                        id: "s4s1p2x4c",
                        name: "For the third registered trademark",
                      },
                      {
                        id: "s4s1p2x4d",
                        name: "For the fourth and each subsequent trademark, where the applications are filed simultaneously",
                      },
                    ],
                  },
                  {
                    id: "s4s1p2x5",
                    name: "Drawing application and statement of grounds",
                  },
                  {
                    id: "s4s1p2x6",
                    name: "For each subsequent trademark where the grounds for cancellation are the same",
                  },
                ],
              },
              {
                id: "s4s1p3",
                name: "PARAGRAPH 3: Assignments",
                children: [
                  {
                    id: "s4s1p3x1",
                    name: "Instructions to file an application to register a subsequent proprietor of one registered trademark(or more than one registered trademark standing in the same name under the same devolution of title and filed simultaneously with or without goodwill)",
                    children: [
                      {
                        id: "s4s1p3x1a",
                        name: "For the first registered trademark",
                      },
                      {
                        id: "s4s1p3x1b",
                        name: "For the second registered trademark",
                      },
                      {
                        id: "s4s1p3x1c",
                        name: "For each subsequent registered trademark",
                      },
                    ],
                  },
                  {
                    id: "s4s1p3x2",
                    name: "Instructions to file an application for directions by the registrar, for advertisement of the assigment of trademarks in use without goodwill and attending to the advertisement",
                    children: [
                      {
                        id: "s4s1p3x2a",
                        name: "For one registered trademark assigned",
                      },
                      {
                        id: "s4s1p3x2b",
                        name: "For every other registered trademark assigned under the same devolution of title where this is filed simultaneously",
                      },
                    ],
                  },
                  {
                    id: "s4s1p3x3",
                    name: "Instructions to apply for extension of time under section 53(4) of the Trademarks Act",
                  },
                ],
              },
              {
                id: "s4s1p4",
                name: "PARAGRAPH 4: Renewals",
                children: [
                  {
                    id: "s4s1p4x1",
                    name: "Instructions to renew the registration of one trademark in one class, including drawing the prescribed form and form of authorization",
                  },
                  {
                    id: "s4s1p4x2",
                    name: "Instructions to renew the registration of a second and further trademarks in the name of the same proprietor simultatneously, including drawing the prescribed form and form of authorization per mark in one class",
                  },
                  {
                    id: "s4s1p4x3",
                    name: "Instructions to restore the registration of one trademark in one class under regulation 51 of the Trademarks Regulations, including drawing the prescribed forms and form of authorization",
                  },
                ],
              },
              {
                id: "s4s1p5",
                name: "PARAGRAPH 5: Change of Name",
                children: [
                  {
                    id: "s4s1p5x1",
                    name: "Instructions to register change of name of the registered proprietor in respect of one trademark in one class, including drawring the prescribed form and form of authorization",
                  },
                  {
                    id: "s4s1p5x2",
                    name: "Instructions to register change of name of the registered proprietor in respect of the second and further trademarks simultaneously, including drawing the prescribed form and forms of authorization for each change of name per trademark",
                  },
                ],
              },
              {
                id: "s4s1p6",
                name: "PARAGRAPH 6: Change of Address",
                children: [
                  {
                    id: "s4s1p6x1",
                    name: "Instructions to register a change of address of the registered proprietor in respect of one trademark in one class, including drawing the prescribed form and form of authorization",
                  },
                  {
                    id: "s4s1p6x2",
                    name: "Instructions to register change of address for the registered proprietor in respect of second and further trademarks simultaneously, including the drawing of prescribed forms and form of authorization for each change of address per trademark in one class",
                  },
                ],
              },
              {
                id: "s4s1p7",
                name: "PARAGRAPH 7: Alterations of Ammendments",
                children: [
                  {
                    id: "s4s1p7x1",
                    name: "Instructions to ammend or alter one registered trademark in one class, including drawing the prescribed form and form of authorization",
                  },
                  {
                    id: "s4s1p7x2",
                    name: "Instructions to amend or alter second and further registered trademarks in one class, including drawing of the prescribed form and form of authorization for amendment of alteration per trademark in one class",
                  },
                ],
              },
              {
                id: "s4s1p8",
                name: "PARAGRAPH 8: Searches ",
                children: [
                  {
                    id: "s4s1p8x1",
                    name: "Instructions to search the register",
                  },
                  {
                    id: "s4s1p8x2",
                    name: "Instructions to advise on the registrability of proposed trademark in one class, including all corresspondence",
                  },
                  {
                    id: "s4s1p8x3",
                    name: "Instructions to obtain preliminary advice of the registra under section 6 of the Trademarks Act, including all correspondence related to the advice",
                  },
                  {
                    id: "s4s1p8x4",
                    name: "Instructions to search a trademark file for particulars of the trademark, per trademark in one class",
                  },
                ],
              },
              {
                id: "s4s1p9",
                name: "PARAGRAPH 9:Opposition and rectification proceedings",
                children: [
                  {
                    id: "s4s1p9x1",
                    name: "Instruction to enter opposition or to defend opposition proceedings, to apply for rectificatio, to defend rectification proceedings, where the opposition or proceddings are conducted before the registra",
                  },
                  {
                    id: "s4s1p9x2",
                    name: "Attendance before the registra conducting opposition or rectification proceedings",
                    children: [
                      {
                        id: "s4s1p9x1a",
                        name: "Every whole day",
                      },
                      {
                        id: "s4s1p9x1b",
                        name: "Every half day of part of",
                      },
                    ],
                  },
                  {
                    id: "s4s1p9x3",
                    name: "For Interlocutery matters, and taking rulings, per hour or part of an hour",
                  },
                ],
              },
              {
                id: "s4s1p10",
                name: "PARAGRAPH 10: Miscellaneous Matters",
                children: [
                  {
                    id: "s4s1p10x1",
                    name: "Attendances on the registrar for every hour or part of an hour",
                  },
                  {
                    id: "s4s1p10x2",
                    name: "Drawing and perusing correspondence and other documents not expressly provided for, and making copies of the documents",
                  },
                ],
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
                children: [
                  {
                    id: "s4s2p2x1",
                    name: "(1) Application for Ammendment",
                  },
                  {
                    id: "s4s2p2x2",
                    name: "(2) Application to convert pending application and preliminary advice on converting application",
                  },
                  {
                    id: "s4s2p2x3",
                    name: "(3) Application for substantive examination and preliminary advice on examination",
                  },
                ],
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
                childre: [
                  {
                    id: "s4s2p10x1",
                    name: "One Copy of any document",
                  },
                  {
                    id: "s4s2p10x2",
                    name: "additional copies of same document obtained simultaneously",
                  },
                ],
              },
              {
                id: "s4s2p11",
                name: "PARAGRAPH 11: Infringement, expungement, rectification, opposition proceedings and applications and appeals ",
                childre: [
                  {
                    id: "s4s2p11x1",
                    name: "Instructions to file infringement, expungement, rectification, caution and opposition proceedings or, applications for compulsory licenses, variation, transfer or cancellation of compulsory licences, entry of licenses as of right and to defend or contrst the proceedings or applications where the proceedings or applications are conducted before the registrar",
                  },
                  {
                    id: "s4s2p11x2",
                    name: "Attendance before the registrar in connection with proceedings or application referred to in 11",
                    children: [
                      {
                        id: "s4s2p11x2a",
                        name: "For a full day",
                      },
                      {
                        id: "s4s2p11x2b",
                        name: "For half a day or part of",
                      },
                    ],
                  },
                ],
              },
              {
                id: "s4s2p12",
                name: "PARAGRAPH 12: Miscellaneous Matters",
                children: [
                  {
                    id: "s4s2p12x1",
                    name: "Instructions to advise on whether a patent, indusrial design or other intellectual property right is registrable and to advise on a point of law or practice",
                  },
                  {
                    id: "s4s2p12x2",
                    name: "Instructions to request for reasons of refusal of an application ",
                  },
                  {
                    id: "s4s2p12x3",
                    name: "Instructions to register a surrender",
                  },
                  {
                    id: "s4s2p12x4",
                    name: "Instructions to have a caution or similar notice included or removed from the register",
                  },
                  {
                    id: "s4s2p12x5",
                    name: "Attendance on the registrar on routine matters",
                    children: [
                      {
                        id: "s4s2p12x5a",
                        name: "For a full day",
                      },
                      {
                        id: "s4s2p12x5b",
                        name: "For every half a day or part of",
                      },
                    ],
                  },
                  {
                    id: "s4s2p12x6",
                    name: "Correspondence, where charged seperately",
                    children: [
                      {
                        id: "s4s2p12x6a",
                        name: "Per letter",
                      },
                      {
                        id: "s4s2p12x6b",
                        name: "Per folio",
                      },
                    ],
                  },
                  {
                    id: "s4s2p12x7",
                    name: "Receiving and perusing letters, documents, pleadings, statutory declarations, etc.",
                    children: [
                      {
                        id: "s4s2p12x7a",
                        name: "Per letter",
                      },
                      {
                        id: "s4s2p12x7b",
                        name: "Per folio",
                      },
                    ],
                  },
                  {
                    id: "s4s2p12x8",
                    name: "Drawing the necessary documents associated with any of the applications or proceedings referred to in this scale, per folio",
                  },
                  {
                    id: "s4s2p12x9",
                    name: "Applying for an extension of time",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "s5",
        name: "FIFTH SCHEDULE: Scale of fees in respect of business the remuneration for which is not otherwise prescribed",
        children: [
          {
            id: "s5p1",
            name: "PARAGRAPH 1: Instructions for drawing and perusing deeds, deed polls, constitutions, declarations, affidavits, proposals, contracts and other documents or other matters of a non-contentious nature",
          },
          {
            id: "s5p2",
            name: "PARAGRAPH 2: Attendances or consultation in person or by electronic means. per 15 minutes or part of",
          },
          {
            id: "s5p3",
            name: "PARAGRAPH 3: Overnight journeys from home, per day",
          },
          {
            id: "s5p4",
            name: "PARAGRAPH 4: Attendances where the fee is based on attendance and not on the time the advocate is engaged ",
          },
          {
            id: "s5p5",
            name: "PARAGRAPH 5: Drawing and perusing correspondence and other documents not expressly provided for, including making copies of the documents and correspondences ",
          },
          {
            id: "s5p6",
            name: "PARAGRAPH 6: For formal written opinions ",
          },
          {
            id: "s5p7",
            name: "PARAGRAPH 7: Witnessing the execution of a document where that an advocate is not entitled to a fee for witnessing ",
            children: [
              {
                id: "s5p7x1",
                name: "Where the advocate has prepared, settled or approved the document and the advocate is being remunerated according to this order",
              },
              {
                id: "s5p7x2",
                name: "Where the advocate acts for one of the parties in a transaction and witnesses or attests the signature of the other party, for whom the advocate is not acting",
              },
            ],
          },
          {
            id: "s5p8",
            name: "PARAGRAPH 8: Filing of any form with an appropriate authority",
          },
          {
            id: "s5p9",
            name: "PARAGRAPH 9: Immigration related applications",
          },
          {
            id: "s5p10",
            name: "PARAGRAPH 10: For preparing and perfecting chattels securities",
          },
        ],
      },
      {
        id: "s6",
        name: "SIXTH SCHEDULE: Scale of fees in High Court, magistrate courts, tribunals and arbitration matters ",
        children: [
          {
            id: "s6p1",
            name: "PARAGRAPH 1: The fees for instructions to sue, claim, defend or oppose ",
            children: [
              {
                id: "s6p1x1",
                name: "To sue or defend any case, whether commenced by plaint, statement of claim, petition, originating summons or originating motion, or to present or oppose an appeal, where the claim or value of the subject matter can be determined from the pleadings, settlement, a valuation or the judgement",
              },
              {
                id: "s6p1x2",
                name: "To sue in an ordinary suit in which no defence is filed or in a summary suit where no application for leace to apear and defend is made.",
              },
              {
                id: "s6p1x3",
                name: "To sue or defend in a summary suit i which an application for leave to appear and defend was made and refused",
              },
              {
                id: "s6p1x4",
                name: "In a suit where settlement is reached prior to confirmation of the first hearing date of the suit",
              },
            ],
          },
          {
            id: "s6p2",
            name: "PARAGRAPH 2: Insolvency proceedings",
          },
          {
            id: "s6p3",
            name: "PARAGRAPH 3: Matrimonial causes",
            children: [
              {
                id: "s6p3x1",
                name: "For instructions to present a petition for dissolution or nullity of a marriage, judicial seperation, or restitution of conjugal rights",
                children: [
                  {
                    id: "s6p3x1a",
                    name: "Where the proceedings are not defended",
                  },
                  {
                    id: "s6p3x1b",
                    name: "Where the proceedings are defended, or an advocate has instructions to defend proceedings",
                  },
                ],
              },
              {
                id: "s6p3x2",
                name: "For instructions to apply for additional or ancillary relief, or for custody, or access or other relief under the children's Act",
                children: [
                  {
                    id: "s6p3x2a",
                    name: "In case the application is dealt with together with the petition or answer",
                  },
                  {
                    id: "s6p3x2b",
                    name: "In case the application is not dealt with together with the petition or answer",
                  },
                ],
              },
            ],
          },
          {
            id: "s6p4",
            name: "PARAGRAPH 4: Adoption and guardianship",
          },
          {
            id: "s6p5",
            name: "PARAGRAPH 5: Probate and letters of administration",
            children: [
              {
                id: "s6p5a",
                name: "For Instructions to apply for a grant of probate, proof of an oral will, or letters of administration with or without a will annexed. where the proceedings are not contested",
              },
              {
                id: "s6p5b",
                name: "For Instructions to apply for a grant of probate, proof of an oral will, or letters of administration with or without a will annexed. where the proceedings are contested",
              },
              {
                id: "s6p5c",
                name: "For instructions to apply for re-sealing a grant, where the proceedings are not contested",
              },
              {
                id: "s6p5d",
                name: "For instructions to apply for re-sealing a grant, where the proceedings are contested",
              },
              {
                id: "s6p5e",
                name: "for instructions to lodge a caveate, renunciation, objection to a grant, apply for citation or other applicaiton or proceedings under the law not otherwise provided for in this schedule",
              },
              {
                id: "s6p5f",
                name: "For instructions to render an inventory or account",
              },
              {
                id: "s6p5g",
                name: "For instructions to draw a will or a codcil",
              },
              {
                id: "s6p5h",
                name: "For Instructions to administer a testament, an estate or a trust",
              },
            ],
          },
          {
            id: "s6p6",
            name: "PARAGRAPH 6: Election petitions",
          },
          {
            id: "s6p7",
            name: "PARAGRAPH 7: Judicial review and prerogative orders",
          },
          {
            id: "s6p8",
            name: "PARAGRAPH 8: Criminal cases ",
            children: [
              {
                id: "s6p8x1",
                name: "For Instructions to defend or prosecute a criminal case",
              },
              {
                id: "s6p8x2",
                name: "For instructions to make or oppose a bail application",
              },
            ],
          },
          {
            id: "s6p9",
            name: "PARAGRAPH 9: Other Matters ",
            children: [
              {
                id: "s6p9x1",
                name: "For instructions to sue or defend in any case not provided for in this schedule",
              },
              {
                id: "s6p9x2",
                name: "For instructions to make or oppose interlocutory applications under items 1 to 9 in this schedule",
              },
            ],
          },
          {
            id: "s6p10",
            name: "PARAGRAPH 10: Drawing court papers",
            children: [
              {
                id: "s6p10x1",
                name: "For drawing a plaint, statement of claim, complaint, petition, memorandum of appeal, written statement of defence, reply and similar pleadings",
              },
              {
                id: "s6p10x2",
                name: "For Interlocutory application , notice of motion or chamber application, originating summons, affidavits, interrogatories, notice to admit and produce agreement for compromise, adjustment or satisfactionn of suit or for reference to arbitration",
              },
              {
                id: "s6p10x3",
                name: "For decrees, orders, and all other necessary court documents",
              },
              {
                id: "s6p10x4",
                name: "For Written submissions",
              },
              {
                id: "s6p10x5",
                name: "For bill of costs",
              },
            ],
          },
          {
            id: "s6p11",
            name: "PARAGRAPH 11: Correspondence ",
            children: [
              {
                id: "s6p11x1",
                name: "For a letter before action or other necessary letter",
              },
              {
                id: "s6p11x2",
                name: "Making copies of the letter",
              },
            ],
          },
          {
            id: "s6p12",
            name: "PARAGRAPH 12: Attendance ",
            children: [
              {
                id: "s6p12x1",
                name: "Attendance of court, tribunal, before an arbitrator, mediator, or concilliator conducting matter, to hear a judgement or ruling or to make any necessary application including taxation",
              },
              {
                id: "s6p12x2",
                name: "Attendance of court, tribunal, before an arbitrator or mediator or conciliator on routine matters",
                children: [
                  {
                    id: "s6p12x2a",
                    name: "By Advocate",
                  },
                  {
                    id: "s6p12x2b",
                    name: "By Clerk",
                  },
                ],
              },
              {
                id: "s6p12x3",
                name: "For instructions to review witnesses, deponents and experts, and any other necessary attendance outside the advocate's chambers",
              },
            ],
          },
        ],
      },
    ],
  };
  const [paragraph, setParagraph] = useState(paragraphItem);
  const [amount, setAmount] = useState();
  const [id, setId] = useState();

  useEffect(() => {
    paragraphItem = paragraph;
    props.setParagraph(paragraphItem);
    props.setComputedAmount(amount);
    props.setId(id);
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
          setId(nodes.id);
          handleClickOpen();
          import("./model").then((model) => {
            let nodeId = nodes.id;
            let amount = model.getAmount(nodeId);
            setAmount(amount);
          });
        }
      }}
    >
      {Array.isArray(nodes.children)
        ? nodes.children.map((node) => renderTree(node))
        : null}
    </TreeItem>
  );

  return (
  <>
    <TreeView
      className="schedules-list"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpanded={["root"]}
      defaultExpandIcon={<ChevronRightIcon />}
      sx={{ flexGrow: 1, overflowY: "auto" }}
    >
      {renderTree(Scheduledata)}
    </TreeView>
    <Dialog open={open} onClose={handleClose}>
        <DialogContent>
        <Prompt />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Ok</Button>
        </DialogActions>
      </Dialog>
  </>
  );
}

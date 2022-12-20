import React from "react";

const terms = [
  {
    title: "1. Your Booking",
    description: [
      "We need to be told by you what you would like to be moved and where it needs to go in the form of an inventory. Our Estimate is a guide only and will be based on what You have told Us at that point in time. After Our initial advice, Any lists given to Us will be taken as a guide and not a full inventory, unless otherwise stated. Traffic on the day, long access, stairs etc. can add significant time onto an Estimate and is the Client’s responsibility. There is a two hour Minimum on all bookings at the quoted price and then subsequently charged in 15 minute increments.",
    ],
  },
  {
    title: "2. Adequate Parking ",
    description: [
      "We will park anywhere that You designate that is safe and legal. If a parking spot is deemed as a risk, any agreement to cater for the Client is an agreement between You and the Driver, and We will not be liable. If a parking spot has a time limit, the Client is responsible to ensure adequate time is provided. If a parking fine occurs after being given instructions by the client it is the responsibility of said client to cover the cost of the fine.",
    ],
  },
  {
    title: "3. Moving Day ",
    description: [
      "You need to tell Us in writing prior to the move about any special precautions or fragile goods you would like us to take. We will cater for all items as directed by you and the inventory list provided but reserve the right to refuse to take any items for any reason at our discretion. You need to show us everything you need moved when we arrive at the pickup. You must check that nothing extra is taken, or items missed. Sometimes there are more items that were discussed during the booking. We will always try to fit it in for you, but we don’t always have time or space to do more than we were booked for.",
      "If that is the case, we will try to discuss alternative options to get it all done. If, after loading, we can’t deliver your goods for reasons outside our control, we will bring them back to our depot. You will then be responsible for any re-delivery charges. If this happens, we will do our best to contact You to work out any other way of solving the issue. We will not accept any claim for consequential loss or damage if we refuse, or are unable to move an item or items for any reason. We will not accept any claims for reimbursement or discounts based on lateness on the day that is beyond our control.",
    ],
  },
  {
    title: "4.Timing Specifics",
    description: [
      "Our total estimates are based on ‘door to door’ billing; meaning from when We arrive at Your first address, including any unforeseen waiting times, until We put everything into the new property exactly how You want it. Billing is always rounded up to the nearest 15 minutes  and the time ends once payment is completed. We may provide a discretionary couple of minutes, however, our increments are in firm 15 minute blocks after the 2 Hour minimum has been passed.",
      "Travel is usually billed as 30-60 minutes as standard on all jobs. Higher fees may be billed on jobs that require a callout outside Melbourne.",
      "Callouts are usually billed for distances over 40km from our office in Glen Iris. This will be calculated on the estimated time taken to travel from the Metro area. Callouts may also apply to special/specific requests that are booked outside of our usual booking windows I.e. Outside 7-8am, 10am-1pm, 1pm-4pm arrival windows.",
    ],
  },
  {
    title: "5. Payment",
    description: [
      "Please have Your payment ready (Cash, Card or EFTPOS - surcharges may apply to Card and eftpos) before our team is due to finish the job. Working time does not stop until payment is finalised. Before payment is also an ideal opportunity to inspect Your items before the Team leaves. This ensures any guarantee can be upheld.",
      "If You are unable to pay for Your job on completion, We may need to hold on to Your items as security until payment is made. In this case charges may apply to re-deliver those items. Unless a payment arrangement is made items may be disposed of or sold after 28 days",
    ],
  },
  {
    title: "6. Our Guarantee",
    description: [
      "We guarantee our work, as well as providing transit and public liability insurance. This means that as long as we’re told about any damage before our team leave the job, we can explore your options for compensation. These include: 1) Repairing the defect to as close as possible to its original condition or 2) Compensation up to the value of pre-damage market value. In this case, we would require an itemised receipt from the seller or manufacturer for the item, and we will work out the estimated value based on depreciation, as well as other factors.",
    ],
  },
  {
    title: "7. What we can't guarantee",
    description: [
      "We will cover physical damage that is caused by dropping, mis-handling or non securing of items, except in the following circumstances:",
      "1. Outdoor furniture including plants, pots, soil and similar items. ",
      "2.  Stone, granite, composite or similar items. We will take these items if they can be safely moved, however We do not cover these items under our guarantee due to their inherent susceptibility to suffer damage upon removal. ",
      "3.  TVs not packed in their original box, computer equipment, photocopiers, scientific instruments, musical instruments not in hard cases, architectural models, sculptural artwork and washing machines without travel bolts.",
      "4.  Pieces of glass not wrapped, or packed safely. This includes picture glass and table tops. ",
      "5.  Furniture designed to be flat packed, or made of pressed wood, such as IKEA, Fantastic Furniture, Custom made furniture, or similar. These items are inherently susceptible to suffer damage or disorder, no matter how carefully We move them. We recommend dis-assembly of such items before moving to reduce these risks (disassembly is offered at an extra service by Shepherd moves at an extra cost). ",
      "6.  Mobile Storage Customers. We will not cover any items packed into mobile storage containers without a waiver being signed by the client first stating that any damages after being loaded are not the responsibility of Shepherd Moves. ",
      "7.  We will not cover any internal faults where the item was not mis-handled by Us, and was secured properly in the vehicle. ",
      "8.  Retro, antiques or any items of age (usually exceeding 10 years) will not be covered. ",
      "9.  Cosmetic scratches, scuffs and dents to items and property.",
      "10. Linoleum defects will not be covered in any circumstances. ",
      "11. Any item deemed as a ‘Heavy Lift’ usually in excess of 80kg. ",
      "12. For any non professionals helping, that part of the move and associated items/property will not be covered. ",
      "13. Fabric and leather items including beds, mattresses, sofas, cushions and bedding should be appropriately wrapped/packed to avoid any unforeseen defects whilst in transit or loading/unloading (all items will be blanket wrapped by shepherd moves, we can also offer covers for most fabric items at an extra cost)",
    ],
  },
  {
    title: "8. Repairs",
    description: [
      "We will not reimburse for any repair works that We have not agreed to.",
      "We use our own, professional repairs team. If Your goods are covered and require reparation, We will repair them as close to their original condition as possible.",
      "We will not compensate for any consequential loss or loss of value.",
      "We will not pay repair costs where these are likely to exceed the pre-damage market value of the item - in these cases We will offer compensation to the market value.",
      "Where a replacement or compensation is offered, this is not a new item for old item service. The valuation will take into account the age, depreciation, and wear and tear of the item",
      "Any items that might be damaged during the removals process must be brought to the companies attention within 3 business days for compensation to be available.",
    ],
  },
];

function TermsOfService() {
  return (
    <>
      <div className=" p-8 sm:bg-white flex-col container max-w-xl mx-auto  justify-center max-h[100vh]">
        <h2 className="text-black text-2xl lg:text-3xl mt-8 font-bold text-center mb-4 md:mb-6">
          Terms of Services
        </h2>
        <div>
          <p className="max-w-screen-md text-black md:text-lg text-center mx-auto">
            At Shepherd Moves we are committed to making your move as easy as
            possible. We have therefore designed a short-hand version of our
            terms and conditions which make it easy for our clients to
            understand. You can easily see which parts of moving day we need to
            take care of, and which bits you are responsible for. Please see
            further down the page for our extended Ts & Cs, and for specific
            meanings.
          </p>
        </div>
        {terms.map((term) => (
          <div key={term.title}>
            <h3 className="text-black text-l lg:text-xl mt-8 font-bold  mb-4 md:mb-6 text-left">
              {term.title}
            </h3>
            <p className="max-w-screen-md text-black md:text-lg text-left mx-auto">
              {term.description.map((desc) => (
                <>
                  <p>{desc}</p>
                  <br />
                </>
              ))}
            </p>
          </div>
        ))}
        <div className="flex justify-center">
          <button
            className="btn mb-6 bg-black text-white "
            onClick={() => {
              window.open("/sm-tos-latest.pdf", "_blank");
            }}
          >
            Full Terms of Service
          </button>
        </div>
      </div>
    </>
  );
}

export default TermsOfService;

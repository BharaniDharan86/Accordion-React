/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useState } from "react";
import AccordianItem from "./AccordionItem";
function Accordion({ faqs }) {
  const [open, setOpen] = useState(null);

  function handleOpen(id) {
    setOpen((open) => (open === id ? null : id));
  }
  return (
    <div className="accordion">
      <h1 style={{ textAlign: "center" }}>Accordion</h1>
      {faqs.map((faq, i) => {
        return (
          <AccordianItem
            faq={faq}
            num={i}
            open={open}
            handleOpen={handleOpen}
          />
        );
      })}
    </div>
  );
}

export default Accordion;

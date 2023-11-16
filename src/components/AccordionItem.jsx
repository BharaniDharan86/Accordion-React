/* eslint-disable react/prop-types */
function AccordianItem({ faq, num, open, handleOpen }) {
  return (
    <div className="item">
      <p>{num + 1}</p>
      <h5 className="text">{faq.title}</h5>
      <p className="icon" onClick={() => handleOpen(num + 1)}>
        -
      </p>
      {open === num + 1 && (
        <div className="content-box">
          <p>{faq.text}</p>
        </div>
      )}
    </div>
  );
}

export default AccordianItem;

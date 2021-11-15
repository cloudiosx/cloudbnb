import React, { useState } from "react";
import "./DateFormModal.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router-dom";

function DateFormModal() {
  const history = useHistory();

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  };

  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  return (
    <div className="search">
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
      <h4 className="guests">
        Number of guests
        <FontAwesomeIcon icon={["far", "user"]} />
      </h4>
      <input className="input" min={0} defaultValue={2} type="number" />
      <button type="button" onClick={() => history.push("/search")}>
        Search cloudbnb
      </button>
    </div>
  );
}

export default DateFormModal;

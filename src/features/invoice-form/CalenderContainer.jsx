/* eslint-disable react/prop-types */
import { CalendarContainer } from "react-datepicker";

function CalenderBlock({ children }) {
  return (
    <div>
      <div style={{ padding: "16px", background: "#216ba5", color: "#fff" }}>
        <CalendarContainer>
          <div className="#f0f0f0">What is your favorite day?</div>
          <div className="relative">{children}</div>
        </CalendarContainer>
      </div>
    </div>
  );
}

export default CalenderBlock;

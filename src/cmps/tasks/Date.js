import closeIcon from "./assets/close.png";
import clock from "./assets/clock.png";

const Date = () => {
  const DATE_VALUE = [
    {
      value: "ללא",
    },
    {
      value: "בזמן תאריך היעד",
    },
    {
      value: "5 דקות לפני",
    },
    {
      value: "10 דקות לפני",
    },
    {
      value: "שעה לפני",
    },
    {
      value: "שעתיים לפני",
    },
    {
      value: "יום לפני תאריך הסיום",
    },
    {
      value: "יומיים לפני תאריך הסיום",
    },
  ];

  return (
    <div className="container pt-2 task-con">
      <div className="row" style={{ borderBottom: "1px solid gray" }}>
        <div className="col-md-2 text-left">
          <img src={closeIcon} />
        </div>
        <div className="col-md-10 text-center">
          תאריך יעד{" "}
          <img
            style={{ paddingLeft: "2px", paddingBottom: "2px" }}
            src={clock}
          />
        </div>
      </div>
      <div className="row text-end pt-2">
        <div
          className="col"
          style={{
            color: "#4A4A4A",
          }}
        >
          <label>תאריך התחלה</label>
        </div>
      </div>
      <div className="row text-end  pb-2">
        <div className="col">
          <input
            style={{
              color: "#4A4A4A",
              backgroundColor: "#F2F2F2",
              textAlign: "end",
              textTransform: "uppercase",
              width: "60%",
              height: "40px",
              border: "1px solid lightgray",
            }}
            type="date"
          />
        </div>
      </div>

      <div className="row text-end pt-2">
        <div
          className="col"
          style={{
            color: "#4A4A4A",
          }}
        >
          <label>תאריך יעד</label>
        </div>
      </div>
      <div className="row text-end  pb-2">
        <div className="col">
          <input
            style={{
              color: "#4A4A4A",
              backgroundColor: "#F2F2F2",
              textAlign: "end",
              textTransform: "uppercase",
              height: "40px",
              border: "1px solid lightgray",
            }}
            type="time"
          />
          <input
            style={{
              color: "#4A4A4A",
              backgroundColor: "#F2F2F2",
              textAlign: "end",
              textTransform: "uppercase",
              width: "60%",
              height: "40px",
              border: "1px solid lightgray",
            }}
            type="date"
          />
        </div>
      </div>

      <div className="row text-end pt-2">
        <div
          className="col"
          style={{
            color: "#4A4A4A",
          }}
        >
          <label>קבע תזכורת</label>
        </div>
      </div>
      <div className="row text-end  pb-2">
        <div className="col">
          <select
            style={{
              color: "#4A4A4A",
              backgroundColor: "#F2F2F2",
              textAlignLast: "right",
              width: "100%",
              height: "40px",
              border: "1px solid lightgray",
            }}
          >
            {DATE_VALUE.map((val) => (
              <option
                style={{
                  direction: "rtl",
                }}
                value={val.value}
              >
                {val.value}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="row">
        <div className="col text-center pt-3 pb-2">
          <button className="save-btn">שמור</button>
        </div>
      </div>
    </div>
  );
};

export default Date;

import React, { useEffect, useState } from "react";
// import "./AddNewEvent.scss";
import { useDispatch } from "react-redux";
import { addEvent } from "../../../../store/events";
import Categories from "../new_position/Categories";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript";

const initialEventData = {
  eventDate: [],
  /**
   * new eventDate key:
   *    {
   *    date: "dd/mm/yyyy",
   *     hour: "hh/mm"
   *    }
   */
  title: "Event of the yeear",
  categories: [],
  lector: "",
  inLink: "",
  details: "",
  detailsOnLector: "",
  registered: 0,
  eventLink: "",
  image: "",

};




function AddNewEvent({ toggleLinks, setToggleLinks }) {
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = useState(initialEventData);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
   
    setFormData({
      ...formData,
      [name]: value,
    // Trimming any whitespace
    });
  };

  const checkSubmit = (e) => {
    e.preventDefault();
    const values = Object.values(formData);// takes the values of the object
    values.some(val => val.length<1)
    ?
    console.log("some field is missing...")
    :
    handleSubmit();
  };

  const handleSubmit = () => {
    // e.preventDefault();
    console.log("on handleSubmit")
    dispatch(addEvent(formData));
    setToggleLinks((p) => !p);
    // setOpen(false);
    console.log("newEvent", formData);

  };

  useEffect(() => {
    setOpen((p) => !p);
    // setFormData(initialEventData);
  }, [toggleLinks]);

  return (
    <Modal
      open={open}
      onClose={() =>
        setToggleLinks((p) => ({
          ...p,
          toggleLinks: !p.toggleLinks,
        }))
      }
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="boxStyle">
        <div className="adding-job-container">
          <form action="adding-job">
            <label className="event-title">
              כותרת הארוע
              <br />
              <input
                required
                type="text"
                value={formData.title}
                name="title"
                onChange={handleChange}
              />
            </label>

            <label className="data-and-time">
              <br />
              מועד הארוע
              <br />
              <div className="data-and-time-input">
                <input
                  required
                  type="date"
                  name="eventDate"
                  value={formData.eventDate[3] + "/" + formData.eventDate[2]
                        +formData.eventDate[1] + "/" + formData.eventDate[0]
                      }
                  placeholder="dd/mm/yyyy"
                  onChange={handleChange}
                />
                <input
                  required
                  type="time"
                  name="eventDate"
                  value={formData.eventDate[5] + ":" + formData.eventDate[4]}
                  placeholder="00:00"
                  onChange={handleChange}
                />
              </div>
            </label>

            <label>
              תחום
              <br />
              <Categories setFormData={setFormData} />
              {/* <option value="1"><input type="checkbox" checked={} /></option>
            <option value="2">Test 2</option> */}
            </label>
            <br />

            <label className="Description">
              תיאור
              <br />
              <textarea
                required
                name="detailes"
                onChange={handleChange}
                id=""
                cols="40"
                rows="10"
              ></textarea>
            </label>
            <br />

            <label className="insert_presentor">
              {" "}
              מציג
              <input
                type="text"
                name="lector"
                onChange={handleChange}
                required
              />
            </label>

            <div id="dropZone" className="add-file">
              גרור לכאן קובץ
              <label className="chooseFromPC">
                בחר מהמחשב
                <input
                  required
                  type="file"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  style={{ display: "none" }}
                />
              </label>
            </div>
            <br />

            <label className="link-To-Linkedin">
              קישור לעמוד הלינקדאין של המרצה
              <br />
              <input
                required
                type="text"
                name="link"
                value={formData.inLink}
                onChange={handleChange}
                placeholder="www.linkedin//shaharpolak"
              />
            </label>
            <br />
            <div className="submit-btn">
              <button className="btn-save" onClick={e=> checkSubmit(e)}>
                שמור וסגור
              </button>
            </div>
          </form>
        </div>
      </Box>
    </Modal>
  );
}

export default AddNewEvent;

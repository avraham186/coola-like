import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { Box, Modal } from "@mui/material";
import Categories from "../../project_page/sideBarAdmin/new_position/Categories";
import { erase } from "../../../assets/images/icons";
import { deleteEventById } from '../../../store/events.js';

const AdminEditEvent = ({ event, openEdit, setOpenEdit }) => {

  const [ alertDelete, setAlertDelete ] = useState(false)
  const [ confirmDeleteInput, setConfirmDeleteInput ] = useState('')
  const dispatch = useDispatch()

  return (
  <Modal
          className="modals"
          open={openEdit}
          onClose={() => setOpenEdit(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className="boxStyle">
            <div className="adding-job-container">
              <form action="adding-job">
                <label className="event-title">
                  כותרת האירוע
                  <input type="text" value={event.subject} />
                </label>
                <div className="data-and-time-input">
                  <label htmlFor="">
                    מועד האירוע
                    <input
                      type="text"
                      value={event.eventDate}
                    />
                    <input
                      type="date"
                      name="eventDate"
                      value={event.eventDate.slice(-1,2)}
                    />
                  </label>
                </div>
                <label>

                  <br />
                  <Categories />
                </label>
                <br />

                <label htmlFor="">
                  מציג
                  <input type="text" value={event.lector} />
                </label>

                <label htmlFor="">
                  תיאור
                  <input type="text" value={event.subject} />
                </label>

                <label htmlFor="">
                  העלאת גרפיקה
                  <input type="text" />
                </label>

                <label htmlFor="">
                  קישור לעמוד לינקדאין של המרצה
                  <input
                    type="text"
                    className="link-To-Linkedin"
                    value={event.inLink}
                  />
                </label>

                <div className="card-btns">
                  <button
                    className="save-modal-button btn-save"
                    onClick={() => {
                      setOpenEdit(false);
                    }}
                  >
                    שמור וסגור
                  </button>
                  <button
                    className="save-modal-button btn-delete"
                    onClick={ e => {
                      e.preventDefault()
                      setAlertDelete(true)
                    }}
                  >
                    מחק אירוע
                    <img src={erase} alt="delete icon" />
                  </button>
                  {
                alertDelete &&
                <div>
                אתה בטוח שברצונך למחוק את האירוע?
                <input
                  type="text"
                  placeholder="רשום את כותרת האירוע"
                  value={confirmDeleteInput}
                  onChange={e => setConfirmDeleteInput(e.target.value)}
                />
                <button onClick={ e => {
                      e.preventDefault()
                      confirmDeleteInput === event.subject &&
                      dispatch(deleteEventById(event.id)) &&
                      setOpenEdit(false)
                  
                
                }} >כן, מחק</button>
              </div>
              }
                </div>
              </form>
            </div>
          </Box>
        </Modal>
  )
  
};

export default AdminEditEvent;

import axios from "axios";

const URI = process.env.REACT_APP_URI;

const getAllEvents = async () => await axios.get(URI + '/api/events/');

const createEvent = async (event) => { await axios.post(URI + '/api/events/', event) };

const deleteEvent = async (id) => { await axios.delete(URI + '/api/events/' + id); }

const editEvent = (event) => { axios.put(URI + '/api/events/', event) }

export default { getAllEvents, createEvent, deleteEvent, editEvent }
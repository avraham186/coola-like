// import { toyService } from "../../services/toy-service";

export function loadPersons() {
  // console.log('toys in action', filterBy);
  return (dispatch) => {
    try {
      // const persons = personsService.query(filterBy)
      const action = {
        type: "SET_PERSONS",
        persons,
      };
      dispatch(action);
    } catch (err) {
      console.log("error from catch loadToys", err);
    }
  };
}

export function removePerson(personName) {
  return (dispatch) => {
    try {
      personsService.remove(personName);
      const action = {
        type: "REMOVE_PERSON",
        personName,
      };
      dispatch(action);
    } catch (err) {
      console.log("error from catch remove toy", err);
    }
  };
}

export function addPerson(person) {
  // Action Creator
  const type = "ADD_PERSON";
  return (dispatch) => {
    try {
      const savedPerson = personsService.save(person);
      const action = {
        type,
        person: savedPerson,
      };
      dispatch(action);
    } catch (err) {
      console.log("error from catch save toy", err);
    }
  };
}
export function updatePerson(person) {
  // Action Creator
  const type = "UPDATE_PERSON";
  return (dispatch) => {
    try {
      const savedPerson = personsService.save(person);
      const action = {
        type,
        person: savedPerson,
      };
      dispatch(action);
    } catch (err) {
      console.log("error from catch save toy", err);
    }
  };
}

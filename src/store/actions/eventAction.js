
export function loadEvents(filterBy) {
    // console.log('toys in action', filterBy);
    return (dispatch) => {
        try {
            const events = eventService.query(filterBy)
            const action = {
                type: 'SET_events',
                events
            }
            dispatch(action)
        } catch (err) {
            console.log('error from catch event', err);
        }
    }
}

export function removeEvent(eventId) {
    return dispatch => {
        try {
            eventService.remove(eventId)
            const action = {
                type: 'REMOVE_event',
                eventId
            }
            dispatch(action)
        } catch (err) {
            console.log('error from catch remove event', err);
        }
    }
}


export function saveEvent(event) { // Action Creator
    const type = event._id ? 'UPDATE_event' : 'ADD_event'

    return (dispatch) => {
        try {
            const savedevent = eventService.save(event)
            const action = {
                type,
                event: savedevent
            }
            dispatch(action)
        } catch (err) {
            console.log('error from catch save event', err);
        }
    }
}

export const taskAssigned = (peoples) => {
    
}
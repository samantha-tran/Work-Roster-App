const selectAllEvents = (state: any) => state.event.allEvents;
const selectUserEvents = (state: any) => state.event.userEvents;

export default { selectAllEvents, selectUserEvents };

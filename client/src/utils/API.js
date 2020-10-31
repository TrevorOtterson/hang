import axios from "axios";

// Export an object containing methods we'll use for accessing the random user API
export default {
    getRecipes: function(query) {
        return axios.get("", { params: { q: query } });
      .then(res => {
        const events = res.data;
        return events.map(createEvent => {
          return {
            participants: createEvent.participants,
            event: createEvent.event,
            skill: createEvent.skill,
            time: createEvent.time,
            location: createEvent.location,
            details: createEvent.details
          };
        });
      });
  }
};
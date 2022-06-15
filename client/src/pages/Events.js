import React from "react";
import EventCard from "../components/Event/EventCard";
import { useQuery } from "@apollo/client";
import { GET_EVENTS } from "../utils/queries";
import defaultImage from "../assets/images/logo3.png";
import "../components/Event/event.css"

function Event() {
  const { loading, data } = useQuery(GET_EVENTS, {
    fetchPolicy: "no-cache",
  });

  let idCounter = 0;
  return (
    <div>
      <h1 className="h1-font" style={{backgroundColor:"white"}}>Upcoming Event</h1>
      {loading ? (
        <div>loading...</div>
      ) : (
        <div className="px-8">
          {/* mapping over all the data passed back making a card for each */}
          {data.events.map((event) => {
            // some time parsing for our string from the database
            const parseDate = new Date(Number.parseInt(event.time));
            const time = parseDate.toLocaleString();
            // constructing the return item
            const tmp = {
              key: idCounter,
              title: event.title,
              description: event.description,
              time,
            };
            // update the id counter
            idCounter++;
            if (event.image) {
              tmp.src = require("../assets/images/" + event.image);
              // in case the image name pulled from the database doesn't exist
              if (!tmp.src) tmp.src = defaultImage;
            } else {
              tmp.src = defaultImage;
            }
            return (
              <div className="mx-3">
                <EventCard info={tmp} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
export default Event;

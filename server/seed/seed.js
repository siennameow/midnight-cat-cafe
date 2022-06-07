const { User, Event } = require("../models");
const db = require("../config/connection");

// Constants
// How many users we want to have
const USER_COUNT = 50;
// how many events we want to generate
const EVENT_COUNT = 20;
// how many events each user will say they're going to
const EVENT_SUBSCRIPTION = 3;

const seed = () => {
  // seeding complete
  process.exit(0);
};

// run our seed
seed();

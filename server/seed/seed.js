const { User, Event } = require("../models");
const db = require("../config/connection");
const names = require("./names.json");
const websites = require("./websites.json");

// Constants
// How many users we want to have
const USER_COUNT = 50;
// how many events we want to generate
const EVENT_COUNT = 20;
// how many events each user will say they're going to
const EVENT_SUBSCRIPTION = 3;
// the password the dummy  users will all use are the same
const PASSWORD = "password";

/**
 * Gets a random member of an array
 * @param {Array} arr
 * @return
 */
const getRandom = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

/**
 * Generates an object useful for creating a user
 * @return {Object}
 */
const generateUser = () => {
  // random data to generate the user
  const firstName = getRandom(names);
  const lastName = getRandom(names);
  const website = getRandom(websites);

  // username and email are based off of their ficitonal names
  const email = firstName.toLowerCase() + "@" + website;
  const username = firstName[0].toLowerCase() + lastName;

  // return an object
  return { username, email, password: PASSWORD };
};

const seed = () => {
  // seeding complete
  process.exit(0);
};

// run our seed
seed();

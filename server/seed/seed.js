const { User, Event } = require("../models");
const db = require("../config/connection");
const names = require("./names.json");
const websites = require("./websites.json");

// ========================================================================== //
// Constants
// ========================================================================== //
// How many users we want to have
const USER_COUNT = 50;
// how many events we want to generate
const EVENT_COUNT = 20;
// how many events each user will say they're going to
const EVENT_SUBSCRIPTION = 3;
// the password the dummy  users will all use are the same
const PASSWORD = "password";

// ========================================================================== //
// Functions
// ========================================================================== //
/**
 * Gets a random member of an array
 * @param {Array} arr
 * @return
 */
const getRandom = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

/**
 * Gets a random date between the start dates and the end dates
 * https://stackoverflow.com/questions/9035627/elegant-method-to-generate-array-of-random-dates-within-two-dates
 * @param {Date} start
 * @param {Date} end
 * @returns {Date}
 */
function randomDate(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

const d = randomDate(new Date(2012, 0, 1), new Date());
console.log(d);

/**
 * Generates an object useful for creating a user
 * @param dict a dictionary object ensuring uniqueness
 * @return {Object}
 */
const generateUser = (dict) => {
  // random data to generate the user
  const firstName = getRandom(names);
  const lastName = getRandom(names);
  const website = getRandom(websites);

  // username and email are based off of their ficitonal names
  const email = firstName.toLowerCase() + "@" + website;
  const username = firstName[0].toLowerCase() + lastName;

  // check to make sure the values are unique
  if (dict[email] || dict[username]) {
    // not unique, try again
    return generateUser(dict);
  }
  // they are unique, update our table and return the users
  dict[username] = true;
  dict[email] = true;

  // return an object
  return { username, email, password: PASSWORD };
};

/**
 * Generates an array of unique users
 * @param {Number} count how many users to create
 * @returns {Object[]}
 */
const generateManyUsers = (count) => {
  // all the users must be unique, we will store their usernames and emails
  const dict = {};
  const ret = [];
  // make the appropriate number of users
  for (let i = 0; i < count; i++) {
    ret.push(generateUser(dict));
  }
  return ret;
};

// ========================================================================== //
// Seeding
// ========================================================================== //

// error handling
db.on("error", (err) => err);

db.once("open", async () => {
  // start by emptying the database
  await User.deleteMany({});
  await Event.deleteMany({});

  // generate the users we want
  const users = generateManyUsers(USER_COUNT);
  console.table(users);

  // insert them into the database
  await User.collection.insertMany(users);

  // seeding complete exit node
  process.exit(0);
});

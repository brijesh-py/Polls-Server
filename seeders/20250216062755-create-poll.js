"use strict";
const { v4: uuidv4 } = require("uuid");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("polls", [
      {
        id: uuidv4(),
        question: "What's your favorite color?",
        options: JSON.stringify([
          { text: "Red", votes: 10 },
          { text: "Blue", votes: 15 },
          { text: "Green", votes: 7 },
        ]),
      },
      {
        id: uuidv4(),
        question: "Which programming language do you prefer?",
        options: JSON.stringify([
          { text: "JavaScript", votes: 12 },
          { text: "Python", votes: 18 },
          { text: "C++", votes: 5 },
        ]),
      },
      {
        id: uuidv4(),
        question: "What's your favorite type of music?",
        options: JSON.stringify([
          { text: "Rock", votes: 20 },
          { text: "Pop", votes: 14 },
          { text: "Jazz", votes: 8 },
        ]),
      },
      {
        id: uuidv4(),
        question: "Which sport do you like the most?",
        options: JSON.stringify([
          { text: "Football", votes: 17 },
          { text: "Basketball", votes: 13 },
          { text: "Tennis", votes: 6 },
        ]),
      },
      {
        id: uuidv4(),
        question: "What's your favorite season?",
        options: JSON.stringify([
          { text: "Summer", votes: 22 },
          { text: "Winter", votes: 16 },
          { text: "Spring", votes: 10 },
        ]),
      },
      {
        id: uuidv4(),
        question: "Which social media platform do you use the most?",
        options: JSON.stringify([
          { text: "Instagram", votes: 19 },
          { text: "Twitter", votes: 11 },
          { text: "Facebook", votes: 9 },
        ]),
      },
      {
        id: uuidv4(),
        question: "What type of movies do you enjoy?",
        options: JSON.stringify([
          { text: "Action", votes: 21 },
          { text: "Comedy", votes: 14 },
          { text: "Drama", votes: 12 },
        ]),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("polls", null, {});
  },
};

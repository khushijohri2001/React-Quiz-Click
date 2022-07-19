import image1 from "../images/doraemon.jpg";
import image2 from "../images/riverdale.jpg";
import image3 from "../images/harry potter.jpg";

const data = [
  {
    name: "Doraemon ",
    subline: "the Robo Cat",
    image: image1,
    value: 1,
    questions: [
      {
        question: "From which century did Doraemon come from?",
        correctAnswer: "22nd",
        wrongAnswer: ["21st", "23rd"]
      },
      {
        question: "What is Doraemon most feared of?",
        correctAnswer: "Mice",
        wrongAnswer: ["Cockroachs", "Snakes"]
      },
      {
        question: "What is Doraemon's sister's name?",
        correctAnswer: "Doraemi",
        wrongAnswer: ["Domeri", "Dorami"]
      },
      {
        question: "What is the color of Any where door?",
        correctAnswer: "Pink",
        wrongAnswer: ["Blue", "Orange"]
      },
      {
        question: "What is Doraemon?",
        correctAnswer: "A Cat Robot",
        wrongAnswer: ["A Racoon Robot", "A Dog Robot"]
      }
    ]
  },
  {
    name: "Riverdale ",
    subline: "the Town of Mysteries",
    image: image2,
    value: 2,
    questions: [
      {
        question: " Which Riverdale character disappeared initially?",
        correctAnswer: "Jason Blossom",
        wrongAnswer: ["Jughead Jones", "Veronica Lodge"]
      },
      {
        question: " Who was writing a novel retelling the events of summer?",
        correctAnswer: "Jughead Jones",
        wrongAnswer: ["Veronica Lodge", "Betty Cooper"]
      },
      {
        question: " Where did Veronica move from?",
        correctAnswer: "New York",
        wrongAnswer: ["New Jersey", "London"]
      },
      {
        question: " What were the residents of South Side of the town called?",
        correctAnswer: "South Side Serpents",
        wrongAnswer: ["South Side Vixens", "South Side Tigers"]
      },
      {
        question: "What was Cheryl’s home called?",
        correctAnswer: "The Thornhill Mansion",
        wrongAnswer: [" The Maple Mansion", "The Riverdale Mansion"]
      }
    ]
  },
  {
    name: "Harry Potter ",
    subline: "the Magical Kid",
    image: image3,
    value: 3,
    questions: [
      {
        question:
          "Which Harry Potter word is now in the Oxford English Dictionary?",
        correctAnswer: "Muggle",
        wrongAnswer: ["Hogwarts", "Voldemort"]
      },
      {
        question: " Who were Harry's parents?",
        correctAnswer: "James and Lily Potter",
        wrongAnswer: ["William and Elizabeth Potter", "Henry and Maggie Potter"]
      },
      {
        question: "Which of these Hogwarts professors teaches Transfiguration?",
        correctAnswer: "McGonagall",
        wrongAnswer: ["Snape", "Sprout"]
      },
      {
        question: " Who was Tom Marvolo Riddle?",
        correctAnswer: "Voldemort",
        wrongAnswer: ["Ghost of Sirius Black", "Harry Potter"]
      },
      {
        question: `What Hogwarts student is killed in Little Hangleton graveyard at the
        end of "The Goblet of Fire"?`,
        correctAnswer: "Cedric Diggory",
        wrongAnswer: ["Neville Longbottom", "Draco Malfoy"]
      }
    ]
  }
];

export default data;

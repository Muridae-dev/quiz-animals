let score = 0;
let currentQuiz = 0;

const silhouetteImg = [
  {
    id: 0,
    img: './images/Luke.png',
    alt: 'SilhouetteImage',
  },
  {
    id: 1,
    img: './images/Ichigo.png',
    alt: 'SilhouetteImage',
  },
  {
    id: 2,
    img: './images/Naruto.png',
    alt: 'SilhouetteImage',
  },
  {
    id: 3,
    img: './images/Levi.png',
    alt: 'SilhouetteImage',
  },
];

const silhouetteQuestions = [
  {
    id: 0,
    question: 'Which guy is from Death Note?',
  },
  {
    id: 1,
    question: 'Who is a Shinigami who has a sword named Zangetsu?',
  },
  {
    id: 2,
    question: 'Who has a name which is a type of ramen toppings?',
  },
  {
    id: 3,
    question: 'Who fights against titans?',
  },
  {
    id: 0,
    question: 'Which is Luke?',
  },
  {
    id: 1,
    question: 'Which is a substitute Shinigami?',
  },
  {
    id: 2,
    question: 'He is a ninja',
  },
  {
    id: 3,
    question: 'His last name is ACKERMAN.',
  },
];

function initSilhouette() {
  containerBox.innerHTML = '';
  randomPicker = random(silhouetteQuestions);
  console.log(randomPicker);

  textBox.innerHTML = silhouetteQuestions[randomPicker].question;
  createCards(silhouetteImg);
}

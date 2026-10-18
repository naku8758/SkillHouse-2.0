// js/games/banco/ingles.js
// Banco de contenido de Ingles, alineado al Marco Curricular del MEN
// (pre-A1 en c1-c2 hasta B1+ en c5). Todo el item esta en ingles:
// enunciado, opciones, titulos y pasos de los retos.
// Regla fija: la opcion 0 es SIEMPRE la respuesta correcta; los demas son
// errores tipicos reales de hispanohablantes (is/are, he/she, falta de -s
// de tercera persona, do/does, cognados falsos, calcos como "have years").

export const BANCO = {
  "ingles--gramatica-ingles--c1": {
    nombre: "Verb to be, this/that and plurals (pre-A1)",
    preguntas: [
      { dificultad: 1, enunciado: "Look at one apple. Say: ... an apple.", opciones: ["This is", "These are", "They are", "I am"], correcta: 0 },
      { dificultad: 1, enunciado: "Point to two dogs. Say: They ... dogs.", opciones: ["are", "is", "am", "be"], correcta: 0 },
      { dificultad: 1, enunciado: "She ... Ana in the photo.", opciones: ["is", "are", "am", "be"], correcta: 0 },
      { dificultad: 2, enunciado: "One book, three ...", opciones: ["books", "bookes", "book", "bookss"], correcta: 0 },
      { dificultad: 2, enunciado: "... that your pen?", opciones: ["Is", "Are", "Am", "Do"], correcta: 0 },
      { dificultad: 2, enunciado: "Two children: one child becomes ...", opciones: ["children", "childs", "childes", "childrens"], correcta: 0 },
      { dificultad: 3, enunciado: "Pick the correct sentence:", opciones: ["These are my shoes.", "This are my shoes.", "These is my shoes.", "This my shoes."], correcta: 0 },
      { dificultad: 3, enunciado: "The picture shows a dog, not a cat. Say:", opciones: ["It is not a cat.", "It are not a cat.", "It not is a cat.", "Is not a cat it."], correcta: 0 },
      { dificultad: 3, enunciado: "Look: one woman, and two ...", opciones: ["women", "womans", "womenes", "woman"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Say this is or these are", descripcion: "Put the steps in the correct order.", pasos: ["Point to one thing or many things", "Count: one or more than one", "Say this is or these are"] },
      { dificultad: 2, titulo: "Make a word plural", descripcion: "Put the steps in the correct order.", pasos: ["Look at the noun", "Add -s or change the word", "Say the new plural word"] },
      { dificultad: 3, titulo: "Ask a yes-no question", descripcion: "Put the steps in the correct order.", pasos: ["Say the sentence with is or are", "Move is or are to the front", "Add a question mark"] }
    ]
  },

  "ingles--gramatica-ingles--c2": {
    nombre: "Present simple, there is/are (A1)",
    preguntas: [
      { dificultad: 1, enunciado: "She ... to school on foot.", opciones: ["walks", "walk", "walking", "is walk"], correcta: 0 },
      { dificultad: 1, enunciado: "... a park near the school?", opciones: ["Is there", "Are there", "There is", "Have there"], correcta: 0 },
      { dificultad: 1, enunciado: "They ... football on Saturdays.", opciones: ["play", "plays", "playing", "is play"], correcta: 0 },
      { dificultad: 2, enunciado: "He ... like broccoli.", opciones: ["doesn't", "don't", "isn't", "not"], correcta: 0 },
      { dificultad: 2, enunciado: "... there any books in the classroom?", opciones: ["Are", "Is", "Do", "Have"], correcta: 0 },
      { dificultad: 2, enunciado: "Tom ... to eat an apple after class.", opciones: ["has", "have", "having", "is have"], correcta: 0 },
      { dificultad: 3, enunciado: "Which sentence is correct?", opciones: ["There are two windows in the room.", "There is two windows in the room.", "There are two window in the room.", "There have two windows in the room."], correcta: 0 },
      { dificultad: 3, enunciado: "On Sundays, we ... lunch at Grandma's house.", opciones: ["have", "has", "having", "are has"], correcta: 0 },
      { dificultad: 3, enunciado: "Which question matches the answer: Yes, she does?", opciones: ["Does she read at night?", "Do she read at night?", "Is she read at night?", "Does she reads at night?"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Describe a place with there is and there are", descripcion: "Put the steps in the correct order.", pasos: ["Look around the classroom", "Count the objects one by one", "Say there is for one object", "Say there are for many objects"] },
      { dificultad: 2, titulo: "Write a sentence in present simple", descripcion: "Put the steps in the correct order.", pasos: ["Choose the subject and the verb", "Add -s when the subject is he, she or it", "Put time words at the end", "Read the sentence again to check"] },
      { dificultad: 3, titulo: "Make a question with does", descripcion: "Put the steps in the correct order.", pasos: ["Start with Does and the person", "Use the verb without -s", "Add the rest of the idea", "Finish with a question mark"] }
    ]
  },

  "ingles--gramatica-ingles--c3": {
    nombre: "Present vs. continuous and past simple (A1+/A2)",
    preguntas: [
      { dificultad: 1, enunciado: "Look! The dog ... in the garden right now.", opciones: ["is running", "runs", "run", "are running"], correcta: 0 },
      { dificultad: 1, enunciado: "We ... to the museum last Friday.", opciones: ["went", "go", "goed", "gone"], correcta: 0 },
      { dificultad: 1, enunciado: "She usually ... breakfast at seven.", opciones: ["has", "is having", "have", "having"], correcta: 0 },
      { dificultad: 2, enunciado: "Choose the correct question about now:", opciones: ["Are you listening to the teacher?", "Do you listening to the teacher?", "Are you listen to the teacher?", "You listening are to the teacher?"], correcta: 0 },
      { dificultad: 2, enunciado: "He ... his homework yesterday evening.", opciones: ["didn't finish", "doesn't finish", "didn't finished", "don't finished"], correcta: 0 },
      { dificultad: 2, enunciado: "There ... a concert at school last month.", opciones: ["was", "were", "is", "are"], correcta: 0 },
      { dificultad: 3, enunciado: "Choose the correct sentence:", opciones: ["I was doing my homework when the lights went out.", "I did doing my homework when the lights go out.", "I were doing my homework when the lights went out.", "I am doing my homework when the lights went out."], correcta: 0 },
      { dificultad: 3, enunciado: "Yesterday Marta ... up at six and ... out of the house.", opciones: ["got / went", "geted / good", "got / goed", "gets / went"], correcta: 0 },
      { dificultad: 3, enunciado: "Which sentence talks about a habit, not about now?", opciones: ["My father drives to work every day.", "My father is driving to work now.", "My father drove to work yesterday.", "My father is at the garage today."], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Say what is happening now", descripcion: "Put the steps in the correct order.", pasos: ["Choose the main verb", "Use the correct form of be", "Add the verb with -ing"] },
      { dificultad: 2, titulo: "Ask about a past event", descripcion: "Put the steps in the correct order.", pasos: ["Choose a Wh- word like What or Where", "Add did and the person", "Use the base verb after did", "End with a question mark"] },
      { dificultad: 3, titulo: "Tell a short story in the past", descripcion: "Put the steps in the correct order.", pasos: ["Order the events in your mind", "Put the main verbs in past simple", "Use connectors like then and after that", "Check the time expressions at the end"] }
    ]
  },

  "ingles--gramatica-ingles--c4": {
    nombre: "Present perfect, modals and comparatives (A2/B1)",
    preguntas: [
      { dificultad: 1, enunciado: "I ... my best friend since we were kids.", opciones: ["have known", "know", "knew", "have knew"], correcta: 0 },
      { dificultad: 1, enunciado: "A cheetah is ... than a horse.", opciones: ["faster", "more fast", "fast", "fastest"], correcta: 0 },
      { dificultad: 1, enunciado: "When I was five, I ... count to ten.", opciones: ["could", "can", "can to", "was can"], correcta: 0 },
      { dificultad: 2, enunciado: "... you ever ... a real typewriter?", opciones: ["Have / seen", "Did / see", "Has / saw", "Do / seen"], correcta: 0 },
      { dificultad: 2, enunciado: "She is the ... student in our class.", opciones: ["best", "goodest", "most good", "better"], correcta: 0 },
      { dificultad: 2, enunciado: "You ... use your phone during the test; it is forbidden.", opciones: ["mustn't", "don't have to", "needn't to", "must not to"], correcta: 0 },
      { dificultad: 2, enunciado: "Tom ... work in a bank, but now he works in a shop.", opciones: ["used to", "is used to", "was use to", "use to"], correcta: 0 },
      { dificultad: 3, enunciado: "Carlos ... in Medellin since 2019.", opciones: ["has lived", "lived in", "live", "has live"], correcta: 0 },
      { dificultad: 3, enunciado: "This exercise is ... than the last one.", opciones: ["more difficult", "difficulter", "most difficult", "much difficult"], correcta: 0 },
      { dificultad: 3, enunciado: "That was the ... interesting film I have ever seen.", opciones: ["most", "more", "much", "very"], correcta: 0 },
      { dificultad: 3, enunciado: "Select the correct sentence:", opciones: ["My mother has already cooked dinner.", "My mother already has cooked dinner yesterday.", "My mother have already cooked dinner.", "My mother cooked already dinner since noon."], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Form the present perfect", descripcion: "Put the steps in the correct order.", pasos: ["Choose the correct form of have", "Put the main verb in the past participle", "Add since or for if the sentence needs it"] },
      { dificultad: 2, titulo: "Compare two things", descripcion: "Put the steps in the correct order.", pasos: ["Look at the two nouns you compare", "Use a short adjective with -er", "Add than and the second noun", "Check if the adjective is irregular"] },
      { dificultad: 3, titulo: "Ask about life experience", descripcion: "Put the steps in the correct order.", pasos: ["Start with Have or Has", "Add the person and ever", "Put the verb in the past participle", "Finish with the object and a question mark"] }
    ]
  },

  "ingles--gramatica-ingles--c5": {
    nombre: "Conditionals, passive and reported speech (B1+)",
    preguntas: [
      { dificultad: 1, enunciado: "If it rains tomorrow, we ... at home.", opciones: ["will stay", "would stay", "stayed", "will staying"], correcta: 0 },
      { dificultad: 1, enunciado: "The bridge ... in 1890 by local workers.", opciones: ["was built", "is built", "builted", "were built"], correcta: 0 },
      { dificultad: 1, enunciado: "She said she ... very tired that day.", opciones: ["was", "is", "are", "has"], correcta: 0 },
      { dificultad: 2, enunciado: "If I ... you, I would apologize to her.", opciones: ["were", "would be", "am", "will be"], correcta: 0 },
      { dificultad: 2, enunciado: "Thousands of trees ... in that region every year.", opciones: ["are planted", "is planted", "planted", "are planting"], correcta: 0 },
      { dificultad: 2, enunciado: "He asked me ... Options for the reported question:", opciones: ["if I liked that city", "if I like this city", "did I like that city", "that I liked this city"], correcta: 0 },
      { dificultad: 3, enunciado: "If she had studied harder, she ... the exam.", opciones: ["would have passed", "will pass", "would pass", "had passed"], correcta: 0 },
      { dificultad: 3, enunciado: "English ... in many countries all over the world.", opciones: ["is spoken", "speaks", "is spoke", "are spoken"], correcta: 0 },
      { dificultad: 3, enunciado: "She suggested ... to the science park on Saturday.", opciones: ["going", "to go", "go", "we go"], correcta: 0 },
      { dificultad: 3, enunciado: "Which of these sentences is correct?", opciones: ["He told me he had finished the report the day before.", "He told me he has finished the report tomorrow.", "He said me he had finished the report yesterday.", "He told that he finished the report last week."], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Build a first conditional sentence", descripcion: "Put the steps in the correct order.", pasos: ["Think of a possible situation with if", "Use present simple after if", "Add will plus the base verb in the result"] },
      { dificultad: 2, titulo: "Change a sentence into the passive", descripcion: "Put the steps in the correct order.", pasos: ["Find the object of the active sentence", "Move it to the subject position", "Use the correct form of be in the same tense", "Put the main verb in the past participle"] },
      { dificultad: 3, titulo: "Report what someone said", descripcion: "Put the steps in the correct order.", pasos: ["Choose the reporting verb said or asked", "Shift the tense one step into the past", "Change the pronouns to match the new subject", "Change time and place words like now and here", "Remove the quotation marks", "Read the new sentence to check agreement"] }
    ]
  },

  "ingles--vocabulario-ingles--c1": {
    nombre: "Colours, numbers, family and animals",
    preguntas: [
      { dificultad: 1, enunciado: "Mix red and white paint. The colour is ...", opciones: ["pink", "purple", "brown", "black"], correcta: 0 },
      { dificultad: 1, enunciado: "Seven plus three is ...", opciones: ["ten", "nine", "eleven", "thirteen"], correcta: 0 },
      { dificultad: 1, enunciado: "A lion is a ...", opciones: ["wild animal", "pet", "farm animal", "bird"], correcta: 0 },
      { dificultad: 2, enunciado: "The mother of your mother is your ...", opciones: ["grandmother", "aunt", "sister", "cousin"], correcta: 0 },
      { dificultad: 2, enunciado: "The opposite of black is ...", opciones: ["white", "blue", "green", "brown"], correcta: 0 },
      { dificultad: 2, enunciado: "What is the colour of a banana?", opciones: ["yellow", "red", "purple", "gray"], correcta: 0 },
      { dificultad: 3, enunciado: "Count: 2, 4, 6, 8, ...", opciones: ["10", "12", "9", "14"], correcta: 0 },
      { dificultad: 3, enunciado: "A cow lives on a ...", opciones: ["farm", "sea", "forest", "tree"], correcta: 0 },
      { dificultad: 3, enunciado: "The children of your uncle are your ...", opciones: ["cousins", "brothers", "nephews", "grandsons"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Name a colour mix", descripcion: "Put the steps in the correct order.", pasos: ["Look at the two colours", "Say their names in English", "Say the new colour word"] },
      { dificultad: 2, titulo: "Count in twos", descripcion: "Put the steps in the correct order.", pasos: ["Start at the number two", "Add two each time", "Say the next number aloud"] },
      { dificultad: 3, titulo: "Sort the animals", descripcion: "Put the steps in the correct order.", pasos: ["Read each animal name", "Think about where it lives", "Put it in the farm, wild or sea group"] }
    ]
  },

  "ingles--vocabulario-ingles--c2": {
    nombre: "School, food and daily routines",
    preguntas: [
      { dificultad: 1, enunciado: "You write with a ...", opciones: ["pencil", "eraser", "ruler", "clock"], correcta: 0 },
      { dificultad: 1, enunciado: "In the morning I ... out of bed at six.", opciones: ["get", "make", "put", "take"], correcta: 0 },
      { dificultad: 1, enunciado: "We eat lunch in the school ...", opciones: ["canteen", "library", "playground", "hall"], correcta: 0 },
      { dificultad: 2, enunciado: "Which food goes with breakfast?", opciones: ["cereal with milk", "hamburger", "noodle soup", "ice cream"], correcta: 0 },
      { dificultad: 2, enunciado: "The opposite of enter is ...", opciones: ["leave", "open", "close", "climb"], correcta: 0 },
      { dificultad: 2, enunciado: "You borrow and return books in the ...", opciones: ["library", "canteen", "gym", "lab"], correcta: 0 },
      { dificultad: 3, enunciado: "The time between two classes is the ...", opciones: ["break", "term", "grade", "seat"], correcta: 0 },
      { dificultad: 3, enunciado: "Which sentence shows a morning routine in the correct order?", opciones: ["I wake up, get dressed and have breakfast.", "I have breakfast, wake up and get dressed.", "I go to bed, wake up and brush my teeth.", "I get dressed, have breakfast and wake up."], correcta: 0 },
      { dificultad: 3, enunciado: "A place that sells notebooks is the ...", opciones: ["stationery shop", "bakery", "pharmacy", "butcher"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Talk about your morning routine", descripcion: "Put the steps in the correct order.", pasos: ["Say the first action after you wake up", "Add two more actions in order", "Finish with the time you leave home"] },
      { dificultad: 2, titulo: "Sort school and food words", descripcion: "Put the steps in the correct order.", pasos: ["Read all the words", "Find the two groups: school and food", "Put each word in its group", "Check one more time"] },
      { dificultad: 3, titulo: "Describe your schoolbag", descripcion: "Put the steps in the correct order.", pasos: ["List the objects one by one", "Use there is or there are", "Add one detail about each object"] }
    ]
  },

  "ingles--vocabulario-ingles--c3": {
    nombre: "Health, free time and feelings",
    preguntas: [
      { dificultad: 1, enunciado: "My tooth hurts. I have a ...", opciones: ["toothache", "headache", "stomachache", "cough"], correcta: 0 },
      { dificultad: 1, enunciado: "In my free time I ... videos online.", opciones: ["watch", "look", "notice", "stare"], correcta: 0 },
      { dificultad: 1, enunciado: "She got a gift out of nowhere. She feels ...", opciones: ["surprised", "exhausted", "furious", "jealous"], correcta: 0 },
      { dificultad: 2, enunciado: "Which problem comes with a high temperature?", opciones: ["fever", "broken leg", "toothache", "sprained ankle"], correcta: 0 },
      { dificultad: 2, enunciado: "The opposite of bored is ...", opciones: ["interested", "tired", "angry", "scared"], correcta: 0 },
      { dificultad: 2, enunciado: "Which activity is a team sport?", opciones: ["volleyball", "swimming", "running", "cycling"], correcta: 0 },
      { dificultad: 3, enunciado: "My whole head ... after the long game.", opciones: ["aches", "is pain", "hurts to me", "sicks"], correcta: 0 },
      { dificultad: 3, enunciado: "Which feeling is closest to terrified?", opciones: ["very afraid", "very sad", "very proud", "very calm"], correcta: 0 },
      { dificultad: 3, enunciado: "Choose the correct sentence about free time:", opciones: ["I go swimming every weekend.", "I do swimming every weekend.", "I make swimming every weekend.", "I am swim every weekend."], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Say how you feel", descripcion: "Put the steps in the correct order.", pasos: ["Think about your emotion", "Use I am plus the adjective", "Give one reason for the feeling"] },
      { dificultad: 2, titulo: "Give health advice", descripcion: "Put the steps in the correct order.", pasos: ["Listen to the symptom", "Choose the advice verb should", "Suggest rest, water or the doctor"] },
      { dificultad: 3, titulo: "Sort free-time verbs", descripcion: "Put the steps in the correct order.", pasos: ["Read each activity phrase", "Separate the go, play and do groups", "Check each group one more time"] }
    ]
  },

  "ingles--vocabulario-ingles--c4": {
    nombre: "Word formation and phrasal verbs",
    preguntas: [
      { dificultad: 1, enunciado: "The noun form of decide is ...", opciones: ["decision", "decidation", "decisement", "decidment"], correcta: 0 },
      { dificultad: 1, enunciado: "Please ... your shoes before you enter.", opciones: ["take off", "take on", "take up", "take in"], correcta: 0 },
      { dificultad: 1, enunciado: "The noun form of happy is ...", opciones: ["happiness", "happyment", "unhappy", "happily"], correcta: 0 },
      { dificultad: 2, enunciado: "The meeting was ... until Monday because the room was busy.", opciones: ["put off", "put on", "put up", "put out"], correcta: 0 },
      { dificultad: 2, enunciado: "A person who acts in films is an ...", opciones: ["actor", "actner", "actionist", "acting"], correcta: 0 },
      { dificultad: 2, enunciado: "She ... her grandmother; they look exactly alike.", opciones: ["takes after", "takes off", "takes up", "takes on"], correcta: 0 },
      { dificultad: 3, enunciado: "The suffix -less turns hope into ...", opciones: ["hopeless", "unhopeful", "hopingless", "dis hope"], correcta: 0 },
      { dificultad: 3, enunciado: "He ... smoking two years ago and now he runs daily.", opciones: ["gave up", "gave in", "gave out", "gave away"], correcta: 0 },
      { dificultad: 3, enunciado: "Which of these words is NOT a real English noun?", opciones: ["understandment", "understanding", "misunderstanding", "understatement"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Turn a verb into a noun", descripcion: "Put the steps in the correct order.", pasos: ["Start with the base verb", "Choose a suffix like -tion or -ment", "Check the spelling change", "Say the new noun in a sentence"] },
      { dificultad: 2, titulo: "Guess the meaning of a phrasal verb", descripcion: "Put the steps in the correct order.", pasos: ["Read the whole sentence first", "Identify the main verb", "Think about the particle's meaning", "Replace it with one synonym to check"] },
      { dificultad: 3, titulo: "Build the opposite with a prefix", descripcion: "Put the steps in the correct order.", pasos: ["Find the root adjective", "Choose the right negative prefix", "Write the word without a space", "Confirm the spelling in a dictionary"] }
    ]
  },

  "ingles--vocabulario-ingles--c5": {
    nombre: "Academic vocabulary and collocations",
    preguntas: [
      { dificultad: 1, enunciado: "Words that naturally go together, like make a ..., are called collocations.", opciones: ["decision", "photo", "noise", "promise"], correcta: 0 },
      { dificultad: 1, enunciado: "A text that gives opinions and reasons is ...", opciones: ["argumentative", "narrative", "descriptive", "instructional"], correcta: 0 },
      { dificultad: 1, enunciado: "Groups of words that often appear together in academic texts are ...", opciones: ["collocations", "synonyms", "punctuation marks", "slang terms"], correcta: 0 },
      { dificultad: 2, enunciado: "Which connector signals contrast?", opciones: ["nevertheless", "therefore", "in addition", "as a result"], correcta: 0 },
      { dificultad: 2, enunciado: "In an exam, assess means to ...", opciones: ["evaluate", "abandon", "answer blindly", "arrange"], correcta: 0 },
      { dificultad: 2, enunciado: "The academic word for buy is ...", opciones: ["purchase", "sell", "borrow", "lend"], correcta: 0 },
      { dificultad: 3, enunciado: "The prefix pre- in predict means ...", opciones: ["before", "against", "again", "between"], correcta: 0 },
      { dificultad: 3, enunciado: "Which sentence uses an academic collocation correctly?", opciones: ["The study provides evidence for the theory.", "The study takes air around the theory.", "The study makes a photo of the theory.", "The study goes to bed with the theory."], correcta: 0 },
      { dificultad: 3, enunciado: "To ... into a problem means to study it deeply.", opciones: ["delve", "divide", "declare", "design"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Upgrade to academic words", descripcion: "Put the steps in the correct order.", pasos: ["Find a common everyday word", "Look for its academic synonym", "Write the new word in your sentence", "Read it aloud to check the style"] },
      { dificultad: 2, titulo: "Build a collocation", descripcion: "Put the steps in the correct order.", pasos: ["Identify the main noun", "Choose the verb that goes with it", "Test the pair in a full sentence", "Check the pair in a dictionary"] },
      { dificultad: 3, titulo: "Connect two paragraphs", descripcion: "Put the steps in the correct order.", pasos: ["Read the first paragraph again", "Decide the relation: contrast, cause or addition", "Choose the connector with that meaning", "Start the second paragraph with the connector", "Add the comma after the connector", "Check that both ideas still make sense"] }
    ]
  },

  "ingles--reading-ingles--c1": {
    nombre: "Signs, labels and short dialogues",
    preguntas: [
      { dificultad: 1, enunciado: "You see this sign: No running. It means:", opciones: ["do not run here", "you can run here", "run very fast", "jump here"], correcta: 0 },
      { dificultad: 1, enunciado: "A label says: Shake before use. What do you do?", opciones: ["move the bottle up and down first", "open it with a key", "put it in the sun", "throw it away"], correcta: 0 },
      { dificultad: 1, enunciado: "Tom: Hello! Ana says: ...", opciones: ["Hi Tom!", "Goodbye Tom", "Yes, I do", "Thank you, Tom"], correcta: 0 },
      { dificultad: 2, enunciado: "The library sign says: Quiet, please. You should:", opciones: ["talk very little", "sing loudly", "eat snacks", "run fast"], correcta: 0 },
      { dificultad: 2, enunciado: "A can says: Best before October 2026. You can use it ...", opciones: ["until October 2026", "only on October 26", "after 2027 forever", "never again"], correcta: 0 },
      { dificultad: 2, enunciado: "Bee: May I borrow your pencil? Ant: Sure. ... you are.", opciones: ["Here", "Where", "Yellow", "There is"], correcta: 0 },
      { dificultad: 3, enunciado: "A red sign says: No smoking. You must ...", opciones: ["not light cigarettes there", "smoke only inside", "buy cigarettes there", "run faster"], correcta: 0 },
      { dificultad: 3, enunciado: "Mom: Are you hungry? Lia says: Yes, ...", opciones: ["I want a sandwich", "I am sleeping", "I can write", "Thank you very much"], correcta: 0 },
      { dificultad: 3, enunciado: "The sign says: Exit this way. You should go ...", opciones: ["toward the door with the arrow", "under the table", "into the closet", "to your seat"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Read a sign", descripcion: "Put the steps in the correct order.", pasos: ["Look at the picture or symbol", "Read the short words", "Say what you must or must not do"] },
      { dificultad: 2, titulo: "Finish a dialogue", descripcion: "Put the steps in the correct order.", pasos: ["Read who speaks first", "Find the missing reply", "Choose the answer that fits"] },
      { dificultad: 3, titulo: "Follow a label", descripcion: "Put the steps in the correct order.", pasos: ["Read the label from top to bottom", "Find the important date or rule", "Do exactly what the label says"] }
    ]
  },

  "ingles--reading-ingles--c2": {
    nombre: "Short texts with pictures",
    preguntas: [
      { dificultad: 1, enunciado: "The picture shows a boy on a bike. What is he doing?", opciones: ["riding", "swimming", "cooking", "sleeping"], correcta: 0 },
      { dificultad: 1, enunciado: "Anna: I have a dog called Coco. Coco is brown. What colour is Coco?", opciones: ["brown", "black", "white", "gold"], correcta: 0 },
      { dificultad: 1, enunciado: "It is sunny; the children run in the park. The weather is ...", opciones: ["nice", "rainy", "stormy", "cold"], correcta: 0 },
      { dificultad: 2, enunciado: "Read: Pedro gets up at six and goes to school at seven. When does he go?", opciones: ["at seven", "at six", "at five", "at noon"], correcta: 0 },
      { dificultad: 2, enunciado: "The poster says: School show, 3 pm, in the hall. What can you see at school?", opciones: ["a performance", "a football match", "an exam", "a science lab"], correcta: 0 },
      { dificultad: 2, enunciado: "On the map, the bank is next to the park. Where is the bank?", opciones: ["beside the park", "inside the park", "far from the park", "under the park"], correcta: 0 },
      { dificultad: 3, enunciado: "The sign says: No visits on weekends. On Saturdays you ...", opciones: ["cannot go in", "can visit for free", "must run the whole way", "see the zoo doctors"], correcta: 0 },
      { dificultad: 3, enunciado: "Caption: The team won after extra time. The crowd clapped. How do people feel?", opciones: ["proud and glad", "angry and cold", "sleepy and bored", "hungry and lost"], correcta: 0 },
      { dificultad: 3, enunciado: "The club notice says: two meetings per week. How often does the club meet?", opciones: ["two times per week", "one time per week", "five times per week", "each single day"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Read a short text", descripcion: "Put the steps in the correct order.", pasos: ["Look at the picture first", "Read the text slowly", "Answer with words from the text"] },
      { dificultad: 2, titulo: "Find the idea in a poster", descripcion: "Put the steps in the correct order.", pasos: ["Read the big title", "Find the time and the place", "Match the answer with the poster", "Check the small extra details"] },
      { dificultad: 3, titulo: "Use a map and a caption", descripcion: "Put the steps in the correct order.", pasos: ["Find the key places on the map", "Read the caption once", "Compare both with the question", "Choose the place that fits"] }
    ]
  },

  "ingles--reading-ingles--c3": {
    nombre: "Short narratives and descriptions",
    preguntas: [
      { dificultad: 1, enunciado: "The story says Bruno waited by the door all night for his family. Bruno is:", opciones: ["faithful", "lazy", "afraid", "hungry"], correcta: 0 },
      { dificultad: 1, enunciado: "A text describes a market: shouts, smells, bright colors. Which sense is NOT mentioned?", opciones: ["touch", "hearing", "smell", "sight"], correcta: 0 },
      { dificultad: 1, enunciado: "At the end, the girl found the key. Found means she ... it.", opciones: ["discovered", "lost", "bought", "fixed"], correcta: 0 },
      { dificultad: 2, enunciado: "A story starts with Once upon a time. It is probably ...", opciones: ["a fairy tale", "a news report", "a recipe", "a timetable"], correcta: 0 },
      { dificultad: 2, enunciado: "In a narrative, the setting is ...", opciones: ["when and where the story happens", "who wrote the story", "the title of the book", "the last chapter"], correcta: 0 },
      { dificultad: 2, enunciado: "The word gloomy in a story is closest in meaning to ...", opciones: ["dark and sad", "bright and fun", "loud and fast", "warm and soft"], correcta: 0 },
      { dificultad: 3, enunciado: "A text follows one real person from birth to work. It is a ...", opciones: ["biography", "recipe", "advertisement", "comic strip"], correcta: 0 },
      { dificultad: 3, enunciado: "A round character in a story is one who ...", opciones: ["changes during the story", "is always the hero", "never speaks", "appears only once"], correcta: 0 },
      { dificultad: 3, enunciado: "In a narrative, the conflict is ...", opciones: ["the problem the characters face", "the name of the place", "the final full stop", "the cover design"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Order a short narrative", descripcion: "Put the steps in the correct order.", pasos: ["Read all four sentences", "Put the beginning first", "Put the problem and then the solution"] },
      { dificultad: 2, titulo: "Describe a character", descripcion: "Put the steps in the correct order.", pasos: ["Choose details about appearance", "Add two personality adjectives", "Give one example of what he or she does"] },
      { dificultad: 3, titulo: "Find the main idea of a paragraph", descripcion: "Put the steps in the correct order.", pasos: ["Read the whole paragraph once", "Cross out small details", "Say the idea in one short sentence", "Check that it covers most lines"] }
    ]
  },

  "ingles--reading-ingles--c4": {
    nombre: "Informational and mixed texts",
    preguntas: [
      { dificultad: 1, enunciado: "A text explains step by step how to run an experiment. It is ...", opciones: ["an instructional text", "a poem", "a novel", "a postcard"], correcta: 0 },
      { dificultad: 1, enunciado: "In a table about coffee, one cup says 95 mg. The 95 mg tells you ...", opciones: ["the amount of caffeine", "the price", "the country", "the color of the beans"], correcta: 0 },
      { dificultad: 1, enunciado: "The title, subheadings and photo of an article help you ...", opciones: ["predict the content", "count the pages", "choose the font", "translate the text"], correcta: 0 },
      { dificultad: 2, enunciado: "In an infographic about recycling, big numbers usually show ...", opciones: ["how much waste people produce", "the name of the author", "the school rules", "the paper size"], correcta: 0 },
      { dificultad: 2, enunciado: "Read: Although plastic is useful, it harms the oceans. Although signals ...", opciones: ["a contrast", "a cause", "a list", "a time order"], correcta: 0 },
      { dificultad: 2, enunciado: "Which text combines facts, graphs and short labels?", opciones: ["an infographic article", "a fairy tale", "a private diary", "a song"], correcta: 0 },
      { dificultad: 3, enunciado: "Two sources disagree about homework time. A good reader ...", opciones: ["compares both and checks the sources", "trusts only the first one", "skips both texts", "copies both without changes"], correcta: 0 },
      { dificultad: 3, enunciado: "In a line graph, an upward trend means the numbers ...", opciones: ["increase over time", "stay exactly equal", "fall over time", "stop forever"], correcta: 0 },
      { dificultad: 3, enunciado: "The writer says obviously, we all know this. This phrase shows ...", opciones: ["the author is persuading us, not proving", "exact research data", "a quotation from an expert", "the publication date"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Read a data table", descripcion: "Put the steps in the correct order.", pasos: ["Read the title of the table", "Find the column you need", "Read the value in the right row"] },
      { dificultad: 2, titulo: "Mix a text and a graph", descripcion: "Put the steps in the correct order.", pasos: ["Read the short text", "Study the labels of the graph", "Connect one idea from each", "Write one sentence that uses both"] },
      { dificultad: 3, titulo: "Judge a source", descripcion: "Put the steps in the correct order.", pasos: ["Look for who wrote the text", "Check when it was published", "Compare it with another source", "Decide if it is reliable"] }
    ]
  },

  "ingles--reading-ingles--c5": {
    nombre: "Authentic articles and literary texts",
    preguntas: [
      { dificultad: 1, enunciado: "A headline with strong verbs like slams or hails is typical of ...", opciones: ["a news article", "a novel chapter", "a cooking recipe", "a shopping list"], correcta: 0 },
      { dificultad: 1, enunciado: "In a poem, the repeated sounds at the end of lines are called ...", opciones: ["rhyme", "stanza", "punctuation", "title"], correcta: 0 },
      { dificultad: 1, enunciado: "An editorial in a newspaper mainly gives ...", opciones: ["the publication's opinion", "only raw data", "a fictional plot", "classified ads"], correcta: 0 },
      { dificultad: 2, enunciado: "The author quotes a study in paragraph two. Why?", opciones: ["to support the claim with evidence", "to fill the page", "to change the topic", "to amuse the readers"], correcta: 0 },
      { dificultad: 2, enunciado: "The word jargon in an article means ...", opciones: ["special language of a field", "a printing mistake", "a long headline", "the paper quality"], correcta: 0 },
      { dificultad: 2, enunciado: "A text that argues a position with sources, counterclaims and a conclusion is ...", opciones: ["an argumentative essay", "a lab manual", "a travel brochure", "a transcript of a chat"], correcta: 0 },
      { dificultad: 3, enunciado: "The article calls hope a feather. This figure of speech is a ...", opciones: ["metaphor", "simile", "slang word", "acronym"], correcta: 0 },
      { dificultad: 3, enunciado: "A report about a strike repeats only one side's words. A reader should ...", opciones: ["notice the bias and seek other reports", "accept it as neutral truth", "stop reading all news", "share it without checking"], correcta: 0 },
      { dificultad: 3, enunciado: "A narrator knows every character's thoughts. This point of view is ...", opciones: ["third-person omniscient", "first-person limited", "second person", "only dialogue"], correcta: 0 },
      { dificultad: 3, enunciado: "In a play, stage directions appear ...", opciones: ["in brackets to guide the actors", "as the final line of the play", "written in rhyme", "inside the spoken dialogue"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Read an article critically", descripcion: "Put the steps in the correct order.", pasos: ["Skim the headline and the lead", "Find the main claim", "List the evidence given"] },
      { dificultad: 2, titulo: "Interpret a figure of speech", descripcion: "Put the steps in the correct order.", pasos: ["Read the literal meaning first", "Find the two things being compared", "Explain the effect of the image"] },
      { dificultad: 3, titulo: "Analyze tone and bias", descripcion: "Put the steps in the correct order.", pasos: ["Read the full text twice", "Mark the loaded or emotional words", "Note which voices are missing", "Compare with a second article", "State the tone in one sentence"] }
    ]
  },

  "ingles--listening-ingles--c1": {
    nombre: "Letter and number sounds",
    preguntas: [
      { dificultad: 1, enunciado: "Which word starts with the sound of B?", opciones: ["ball", "cat", "dog", "sun"], correcta: 0 },
      { dificultad: 1, enunciado: "You hear: three. The number is ...", opciones: ["3", "13", "30", "10"], correcta: 0 },
      { dificultad: 1, enunciado: "Which word starts with the same sound as snake?", opciones: ["sun", "cat", "jug", "bed"], correcta: 0 },
      { dificultad: 2, enunciado: "When people speak fast, 15 sounds like ...", opciones: ["50", "13", "40", "7"], correcta: 0 },
      { dificultad: 2, enunciado: "Which word rhymes with cat?", opciones: ["hat", "bed", "pen", "sit"], correcta: 0 },
      { dificultad: 2, enunciado: "Which word has the hard G sound?", opciones: ["game", "giant", "page", "age"], correcta: 0 },
      { dificultad: 3, enunciado: "Which two words start with the same sound?", opciones: ["pen and park", "pen and book", "park and moon", "all the three"], correcta: 0 },
      { dificultad: 3, enunciado: "You hear: 19. You write ...", opciones: ["19", "90", "9", "900"], correcta: 0 },
      { dificultad: 3, enunciado: "The teacher says: light. You hear the ...", opciones: ["L sound", "R sound", "N sound", "M sound"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Say the alphabet in order", descripcion: "Put the steps in the correct order.", pasos: ["Start with the letter A", "Say the next letter", "Go on until the letter Z"] },
      { dificultad: 2, titulo: "Catch a phone number", descripcion: "Put the steps in the correct order.", pasos: ["Listen to the first part", "Write each number", "Listen one more time to check"] },
      { dificultad: 3, titulo: "Sort sounds", descripcion: "Put the steps in the correct order.", pasos: ["Listen to each word", "Find the first sound", "Group words with the same sound"] }
    ]
  },

  "ingles--listening-ingles--c2": {
    nombre: "Word stress and syllables",
    preguntas: [
      { dificultad: 1, enunciado: "Say pen once. This word has ...", opciones: ["one beat", "two beats", "three beats", "four beats"], correcta: 0 },
      { dificultad: 1, enunciado: "In bookshop, which part sounds stronger?", opciones: ["BOOK", "shop", "both are equal", "neither part"], correcta: 0 },
      { dificultad: 1, enunciado: "The word table has two beats: ta-ble. How many beats does pencil have?", opciones: ["two", "one", "three", "four"], correcta: 0 },
      { dificultad: 2, enunciado: "Which word puts the stress on the first part?", opciones: ["pencil", "begin", "today", "alone"], correcta: 0 },
      { dificultad: 2, enunciado: "Split it: wa-ter-mel-on. Watermelon has ...", opciones: ["four beats", "three beats", "two beats", "one beat"], correcta: 0 },
      { dificultad: 2, enunciado: "In open, where is the stress?", opciones: ["O-pen", "o-PEN", "both parts equally", "there is no stress"], correcta: 0 },
      { dificultad: 3, enunciado: "In computer, which part is the strongest?", opciones: ["PU in the middle", "COM at the start", "TER at the end", "all parts sound equal"], correcta: 0 },
      { dificultad: 3, enunciado: "Which word has three parts?", opciones: ["banana", "apple", "orange", "mango"], correcta: 0 },
      { dificultad: 3, enunciado: "In a sentence, small words like at and of sound ...", opciones: ["short and weak", "long and strong", "exactly the same as big words", "very loud"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Clap the beats of a word", descripcion: "Put the steps in the correct order.", pasos: ["Say the word slowly", "Clap one time per beat", "Count the claps aloud"] },
      { dificultad: 2, titulo: "Find the strong beat", descripcion: "Put the steps in the correct order.", pasos: ["Say the word two times", "Mark the part you stretch more", "Say it again with that stress"] },
      { dificultad: 3, titulo: "Group words by stress pattern", descripcion: "Put the steps in the correct order.", pasos: ["Listen to each word twice", "Decide where the strong part is", "Group words with the same pattern", "Check with a classmate"] }
    ]
  },

  "ingles--listening-ingles--c3": {
    nombre: "Listening for gist in conversations",
    preguntas: [
      { dificultad: 1, enunciado: "Two people talk about a bus that never came. Where are they?", opciones: ["at the bus stop", "in a cinema", "at the dentist", "on a plane"], correcta: 0 },
      { dificultad: 1, enunciado: "You hear: Sorry, we close in ten minutes. The shop ...", opciones: ["is about to close", "just opened", "is closed all day", "is moving town"], correcta: 0 },
      { dificultad: 1, enunciado: "Friends talk about weekend plans. What are they doing?", opciones: ["deciding what to do", "apologizing", "ordering food", "introducing strangers"], correcta: 0 },
      { dificultad: 2, enunciado: "A caller says: I would like to book a table for eight. Where does this happen?", opciones: ["in a restaurant, by phone", "in a hotel gym", "in a classroom", "at an airport gate"], correcta: 0 },
      { dificultad: 2, enunciado: "The gist of a conversation is ...", opciones: ["the general idea, not every word", "each single word", "the loudest part", "the spelling of the words"], correcta: 0 },
      { dificultad: 2, enunciado: "A boy lost his wallet and his friend helps him look. The boy feels ...", opciones: ["worried", "proud", "angry at the friend", "bored"], correcta: 0 },
      { dificultad: 3, enunciado: "Before listening, you read the task. Why is that useful?", opciones: ["it tells you what to listen for", "it gives you all the answers", "it stops the recording", "it reads the words aloud"], correcta: 0 },
      { dificultad: 3, enunciado: "The speakers say: We'll keep in touch. What is happening?", opciones: ["their conversation is ending", "they just met today", "they are arguing", "they are ordering lunch"], correcta: 0 },
      { dificultad: 3, enunciado: "A speaker says: Well, let me think... That pause means ...", opciones: ["he is choosing his words", "he is very angry", "the recording stopped", "he wants to leave"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Get the gist", descripcion: "Put the steps in the correct order.", pasos: ["Listen without stopping", "Ask what the people are doing", "Say the situation in one sentence"] },
      { dificultad: 2, titulo: "Use context before listening", descripcion: "Put the steps in the correct order.", pasos: ["Read the questions first", "Predict possible places or people", "Listen to confirm your guess", "Adjust the answer if needed"] },
      { dificultad: 3, titulo: "Read feeling from tone", descripcion: "Put the steps in the correct order.", pasos: ["Listen for the voice, not the words", "Notice if it sounds fast or slow", "Decide if it is positive or negative", "Choose the feeling word"] }
    ]
  },

  "ingles--listening-ingles--c4": {
    nombre: "Listening for specific information",
    preguntas: [
      { dificultad: 1, enunciado: "The report says: rain this afternoon, 18 degrees. What is the temperature?", opciones: ["18", "28", "8", "80"], correcta: 0 },
      { dificultad: 1, enunciado: "You hear the jacket price: forty-five. You write ...", opciones: ["45", "14", "54", "15"], correcta: 0 },
      { dificultad: 1, enunciado: "When you listen for one number, you should ...", opciones: ["focus on the digits and check them once more", "stop the audio and guess", "translate every single word", "write down all the words"], correcta: 0 },
      { dificultad: 2, enunciado: "An announcement: the flight to Lima leaves at 09:20 from gate B12. Which gate?", opciones: ["B12", "D21", "B21", "gate 20"], correcta: 0 },
      { dificultad: 2, enunciado: "To catch names and times, good listeners first ...", opciones: ["predict the word type they need", "translate every single word", "listen only to the last part", "count the speaker's pauses"], correcta: 0 },
      { dificultad: 2, enunciado: "A speaker says: meet me at half past four. The meeting is at ...", opciones: ["4:30", "4:15", "4:45", "4:00"], correcta: 0 },
      { dificultad: 3, enunciado: "The speaker spells the name letter by letter. Why?", opciones: ["letter sounds can be confused in speech", "names are always long", "the phone line is old", "spelling is a rule of grammar"], correcta: 0 },
      { dificultad: 3, enunciado: "You hear: the workshop costs 30 euros, half price for students. A student pays ...", opciones: ["15", "30", "60", "25"], correcta: 0 },
      { dificultad: 3, enunciado: "Note-taking while listening works best when you write ...", opciones: ["keywords, dates and numbers only", "full long sentences", "the whole alphabet", "just drawings"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Listen for a number", descripcion: "Put the steps in the correct order.", pasos: ["Read the question first", "Listen twice for the number", "Write digits, not words"] },
      { dificultad: 2, titulo: "Complete a form from a phone call", descripcion: "Put the steps in the correct order.", pasos: ["Look at each box and guess the word type", "Listen for those exact spots", "Spell names slowly if needed", "Check each entry once"] },
      { dificultad: 3, titulo: "Separate facts from extra talk", descripcion: "Put the steps in the correct order.", pasos: ["Keep the exact question in mind", "Listen for the answer phrase", "Ignore polite extra talk", "Note the answer in short words", "Verify with a second listen"] }
    ]
  },

  "ingles--listening-ingles--c5": {
    nombre: "Connected speech and inference",
    preguntas: [
      { dificultad: 1, enunciado: "In fast speech, want to often sounds like ...", opciones: ["wanna", "wan too", "want too with pauses", "wants to"], correcta: 0 },
      { dificultad: 1, enunciado: "Inference in listening means you understand ...", opciones: ["what is implied but not said", "each word aloud", "only the numbers", "the speaker's accent"], correcta: 0 },
      { dificultad: 1, enunciado: "In fast speech, the -g of going ...", opciones: ["often disappears", "turns into k", "gets doubled", "stays fully pronounced"], correcta: 0 },
      { dificultad: 2, enunciado: "You hear gonna. The standard form is ...", opciones: ["going to", "got to", "gone too", "give it to"], correcta: 0 },
      { dificultad: 2, enunciado: "Connected speech means speakers ...", opciones: ["join words together smoothly", "read with long pauses", "spell each word", "repeat every sentence"], correcta: 0 },
      { dificultad: 2, enunciado: "A speaker says: What a wonderful Monday... with a flat, tired tone. He probably ...", opciones: ["is being ironic", "is thrilled", "is asking a real question", "is agreeing loudly"], correcta: 0 },
      { dificultad: 3, enunciado: "In connected speech, that book can sound like ...", opciones: ["dat book", "that with a strong stress", "two separate words", "zat too"], correcta: 0 },
      { dificultad: 3, enunciado: "The phrase would have in fast speech often sounds like ...", opciones: ["woulda", "would have, both words full", "would of you", "wool hev two"], correcta: 0 },
      { dificultad: 3, enunciado: "If you miss one word while listening, you rebuild meaning with ...", opciones: ["context and speech links", "a dictionary right away", "only the first letter", "a random guess"], correcta: 0 },
      { dificultad: 3, enunciado: "In connected speech, linking happens when ...", opciones: ["a final consonant joins the next vowel", "every word is said with a pause", "the sentence loses its stress", "sounds are spelled aloud"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Decode fast speech", descripcion: "Put the steps in the correct order.", pasos: ["Listen to the whole phrase", "Find where the words join", "Say the standard form in your head"] },
      { dificultad: 2, titulo: "Read between the lines", descripcion: "Put the steps in the correct order.", pasos: ["Listen for the literal content", "Mark the tone and stress changes", "Ask what the speaker really means", "Choose the implied answer"] },
      { dificultad: 3, titulo: "Note weak forms", descripcion: "Put the steps in the correct order.", pasos: ["Listen to a short dialogue", "Find the unstressed small words", "Check how they blend with neighbors", "Write the standard transcription", "Listen one last time to confirm"] }
    ]
  },

  "ingles--writing-ingles--c1": {
    nombre: "Copy and say simple phrases",
    preguntas: [
      { dificultad: 1, enunciado: "Which sentence is written correctly?", opciones: ["My name is Ana.", "my name is ana.", "My Name Is Ana.", "mi name is ana."], correcta: 0 },
      { dificultad: 1, enunciado: "Copy this word in the correct way:", opciones: ["school", "scool", "skool", "shool"], correcta: 0 },
      { dificultad: 1, enunciado: "You say ... when you meet someone new.", opciones: ["nice to meet you", "see you later", "good night", "come back soon"], correcta: 0 },
      { dificultad: 2, enunciado: "Which sentence is copied best?", opciones: ["I have a blue pen.", "i have a blue pen.", "I hav a blue pen.", "I am have a pen."], correcta: 0 },
      { dificultad: 2, enunciado: "Put the words in order: is, this, a, cat", opciones: ["This is a cat.", "Cat a is this.", "A cat this is.", "Is a cat this."], correcta: 0 },
      { dificultad: 2, enunciado: "At the end of a sentence you write ...", opciones: ["a period", "a comma", "a number", "no mark"], correcta: 0 },
      { dificultad: 3, enunciado: "Which copy of the words is correct?", opciones: ["a big green ball", "big a green ball", "an big green ball", "a green big ball"], correcta: 0 },
      { dificultad: 3, enunciado: "You draw a gift for your mom and write a wish. You say:", opciones: ["Congratulations!", "Good night!", "See you tomorrow!", "Hurry up!"], correcta: 0 },
      { dificultad: 3, enunciado: "Copy the teacher's command with a capital and a period:", opciones: ["Stand up, please.", "stand up plese", "Stand up plees", "Standing please up."], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Copy a sentence", descripcion: "Put the steps in the correct order.", pasos: ["Read the sentence once", "Copy it letter by letter", "Check the capital and the period"] },
      { dificultad: 2, titulo: "Write a short greeting", descripcion: "Put the steps in the correct order.", pasos: ["Write a hello word", "Add your name", "Close with a short goodbye"] },
      { dificultad: 3, titulo: "Make a card for someone", descripcion: "Put the steps in the correct order.", pasos: ["Choose the person and the message", "Write the message in short words", "Check the spelling and decorate it"] }
    ]
  },

  "ingles--writing-ingles--c2": {
    nombre: "Sentences about yourself",
    preguntas: [
      { dificultad: 1, enunciado: "To say your name in writing, use:", opciones: ["My name is Laura.", "I name is Laura.", "Names is Laura.", "I call am Laura."], correcta: 0 },
      { dificultad: 1, enunciado: "She ... to music after school.", opciones: ["listens", "listen", "listenings", "listen is"], correcta: 0 },
      { dificultad: 1, enunciado: "Which sentence about age is correct?", opciones: ["I am eleven years old.", "I have eleven years.", "I am eleven year old.", "I years are eleven."], correcta: 0 },
      { dificultad: 2, enunciado: "Which sentence has a capital letter and a period?", opciones: ["Pepito lives in Cali.", "pepito lives in cali", "Pepito Lives In Cali", "pepito Lives in cali"], correcta: 0 },
      { dificultad: 2, enunciado: "Pick the best connector: I like football ... I do not like tennis.", opciones: ["but", "and", "because", "so"], correcta: 0 },
      { dificultad: 2, enunciado: "Which sentence is about your morning?", opciones: ["I get up at six.", "I go to bed at nine.", "I have dinner at eight.", "I watch the stars at night."], correcta: 0 },
      { dificultad: 3, enunciado: "Which sentence describes a classmate best?", opciones: ["He is tall and very friendly.", "He tall and very friendly.", "He are tall and very friendly.", "He am tall and friendly."], correcta: 0 },
      { dificultad: 3, enunciado: "Add a reason: I study English ... I like songs in English.", opciones: ["because", "but", "although", "while"], correcta: 0 },
      { dificultad: 3, enunciado: "The correct way to say what you own is:", opciones: ["I have two dogs.", "I am having two dogs.", "I has two dogs.", "There am two dogs."], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Write about who you are", descripcion: "Put the steps in the correct order.", pasos: ["Write your name and age", "Add where you live", "Say one thing you like"] },
      { dificultad: 2, titulo: "Fix a broken sentence", descripcion: "Put the steps in the correct order.", pasos: ["Find the person or thing", "Find the action word", "Put the subject first", "Add a period at the end"] },
      { dificultad: 3, titulo: "Add -s rules for he and she", descripcion: "Put the steps in the correct order.", pasos: ["Check who does the action", "If it is he or she, add -s to the verb", "Read both versions aloud", "Keep the version that sounds right"] }
    ]
  },

  "ingles--writing-ingles--c3": {
    nombre: "Short paragraphs about routines",
    preguntas: [
      { dificultad: 1, enunciado: "The first sentence of a paragraph is the ...", opciones: ["topic sentence", "conclusion", "title of the book", "question"], correcta: 0 },
      { dificultad: 1, enunciado: "First I get up, ... I brush my teeth.", opciones: ["then", "because", "although", "never"], correcta: 0 },
      { dificultad: 1, enunciado: "A routine paragraph mainly uses ...", opciones: ["present simple", "past perfect", "future continuous", "imperatives"], correcta: 0 },
      { dificultad: 2, enunciado: "Which phrase ends a routine paragraph best?", opciones: ["Finally, I go to bed at ten.", "Yesterday, I went to bed late.", "Tomorrow I might travel far.", "Look at my old bedroom."], correcta: 0 },
      { dificultad: 2, enunciado: "Why do we use connectors like first, next and finally?", opciones: ["to order the ideas clearly", "to make the text longer", "to change the tense", "to add rhymes"], correcta: 0 },
      { dificultad: 2, enunciado: "Which sentence does NOT belong in a routine paragraph?", opciones: ["My cat ate my homework last month.", "I wake up early on school days.", "I always do my homework after lunch.", "I play with my friends in the afternoon."], correcta: 0 },
      { dificultad: 3, enunciado: "The best title for a paragraph about your day is ...", opciones: ["My Typical Monday", "A Lost Wallet", "The Volcano Study", "Dream Vacations"], correcta: 0 },
      { dificultad: 3, enunciado: "How many sentences does a solid school paragraph usually have?", opciones: ["about four to six", "exactly one", "at least twenty", "none"], correcta: 0 },
      { dificultad: 3, enunciado: "Choose the best paragraph ending:", opciones: ["These routines help me feel organized every day.", "I forget my routine at school gate.", "My routine is starting now tomorrow.", "Routine what a fun word is."], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Build a routine paragraph", descripcion: "Put the steps in the correct order.", pasos: ["Write the topic sentence", "Add two or three routine details", "Close with a final comment"] },
      { dificultad: 2, titulo: "Order the day", descripcion: "Put the steps in the correct order.", pasos: ["List five actions of your day", "Put them in time order", "Add connectors like then and after that", "Read the chain aloud to check"] },
      { dificultad: 3, titulo: "Check your own paragraph", descripcion: "Put the steps in the correct order.", pasos: ["Read the paragraph silently", "Check every verb for -s in third person", "Look at capital letters and periods", "Rewrite the unclear parts"] }
    ]
  },

  "ingles--writing-ingles--c4": {
    nombre: "Emails and short descriptions",
    preguntas: [
      { dificultad: 1, enunciado: "A friendly email to a classmate opens with ...", opciones: ["Hi Carlos,", "Dear Sir or Madam,", "To whom it may concern,", "Over and out,"], correcta: 0 },
      { dificultad: 1, enunciado: "Before an adjective + noun pair like tall young man, the adjectives are in ...", opciones: ["the usual order: size, age, color", "any random order", "reverse order always", "alphabetical order"], correcta: 0 },
      { dificultad: 1, enunciado: "A short description focuses on ...", opciones: ["what someone or something looks like and feels like", "a list of dates and numbers", "only future plans", "a debate with sources"], correcta: 0 },
      { dificultad: 2, enunciado: "Which closing is right for an informal email?", opciones: ["See you soon!", "Yours faithfully,", "Respectfully submitted,", "End of message,"], correcta: 0 },
      { dificultad: 2, enunciado: "The subject line of an email should be ...", opciones: ["short and clear", "a whole essay", "left empty always", "written in caps only"], correcta: 0 },
      { dificultad: 2, enunciado: "Which sentence describes a place with senses?", opciones: ["The classroom smelled of chalk and the clock ticked softly.", "The classroom is a noun.", "I will describe the classroom later.", "Does the classroom have chairs?"], correcta: 0 },
      { dificultad: 3, enunciado: "The wrong sentence in the email body is:", opciones: ["I looking forward to see you next week.", "I am looking forward to seeing you next week.", "I hope to see you next week.", "Can we meet next week?"], correcta: 0 },
      { dificultad: 3, enunciado: "In a formal email you write:", opciones: ["Could you please send me the file?", "Hey, give me the file now!", "Pls send file ok?", "Wanna file? Tell me"], correcta: 0 },
      { dificultad: 3, enunciado: "A description paragraph should mainly use ...", opciones: ["vivid adjectives and precise nouns", "only numbers", "future forms", "text-message abbreviations"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Write a short informal email", descripcion: "Put the steps in the correct order.", pasos: ["Add the greeting and the subject", "Write the reason for your email", "Say thank you or see you soon", "Sign your name"] },
      { dificultad: 2, titulo: "Describe a person", descripcion: "Put the steps in the correct order.", pasos: ["Start with appearance facts", "Add two personality adjectives", "Give one example behavior", "Close with your opinion"] },
      { dificultad: 3, titulo: "Make an email formal", descripcion: "Put the steps in the correct order.", pasos: ["Replace hi with dear plus the name", "Change contractions into full forms", "Use polite requests like could you", "Remove slang and emojis", "Finish with yours sincerely"] }
    ]
  },

  "ingles--writing-ingles--c5": {
    nombre: "Argumentative texts and presentations",
    preguntas: [
      { dificultad: 1, enunciado: "An argumentative essay must include ...", opciones: ["a claim with supporting evidence", "only funny stories", "a list of vocabulary", "the plot of a film"], correcta: 0 },
      { dificultad: 1, enunciado: "In a presentation, a slide title should be ...", opciones: ["short and clear", "a full page of text", "written backwards", "left empty always"], correcta: 0 },
      { dificultad: 1, enunciado: "A counterargument is ...", opciones: ["the opposing view you answer", "your final signature", "a repeated joke", "the title of the essay"], correcta: 0 },
      { dificultad: 2, enunciado: "Which phrase introduces evidence formally?", opciones: ["According to a 2024 study,", "I think, maybe, you know,", "Obviously everybody feels,", "Duh, it is clear that"], correcta: 0 },
      { dificultad: 2, enunciado: "The conclusion of an essay should ...", opciones: ["restate the claim and the main reasons", "add a brand-new argument", "repeat the title twice", "apologize to the reader"], correcta: 0 },
      { dificultad: 2, enunciado: "Good note cards for a talk contain ...", opciones: ["key ideas and data in short lines", "the full script word by word", "only large drawings", "nothing at all"], correcta: 0 },
      { dificultad: 3, enunciado: "Choose the correct reported question for: Where is the museum?", opciones: ["He asked where the museum was.", "He asked where was the museum.", "He asked that where the museum is.", "He asked to where the museum."], correcta: 0 },
      { dificultad: 3, enunciado: "The strongest thesis statement is:", opciones: ["School gardens improve focus and should exist in every classroom.", "I like gardens maybe sometimes.", "Gardens are plants and people plant them.", "Do you like gardens at school?"], correcta: 0 },
      { dificultad: 3, enunciado: "When your evidence does not support your claim, you should ...", opciones: ["adjust the claim or find better sources", "invent numbers quietly", "hide the evidence forever", "quote the same source twice"], correcta: 0 }
    ],
    retos: [
      { dificultad: 1, titulo: "Plan an argument paragraph", descripcion: "Put the steps in the correct order.", pasos: ["Write one clear claim", "Add one piece of evidence", "Explain how it supports the claim"] },
      { dificultad: 2, titulo: "Handle a counterargument", descripcion: "Put the steps in the correct order.", pasos: ["State the other side fairly", "Say why some people believe it", "Refute it with your evidence", "Reaffirm your own claim"] },
      { dificultad: 3, titulo: "Open a spoken presentation", descripcion: "Put the steps in the correct order.", pasos: ["Greet the audience politely", "Give a hook: a question or a fact", "State your topic and your claim", "Preview your three main points", "Move to the first slide slowly", "Check the microphone and your notes"] }
    ]
  }
};

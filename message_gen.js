daily_card = ["The Fool: Go for it. Act boldly, think outside the box, and take risks.", 
               "The Magician: Wait for the idea to come to you in the near future. If you have an idea, implement it.",
               "The Empress: Invest in your energy in the current task, do what the Empress expects of you.",
               "The Pope: Learn, embrace the experience you are destined to get."]

daily_rune = ["Isa: If you got this rune, it's a sign that you should postpone any significant actions until a more favourable time and go with the flow.",
              "Fehu: Fehu is the rune that stands for property and wealth that a person has obtained and keeps accumulating throughout the years.",
              "Raidho: Raidho is the rune that signifies road, pathway, travel and generally any moment.",
              "Kenaz: Kenaz is the rune of fire, but not the wild, all-consuming flame - rather tamed."]

affirmations = ["My income is constantly increasing.",
                "I am confident in my skills and gifts.",
                "I see my goals clearly.",
                "I am stronger than I know"]

first_message = Math.floor(Math.random() * daily_card.length);
second_message = Math.floor(Math.random() * daily_rune.length);
third_message = Math.floor(Math.random() * affirmations.length);

message = `Your daily card is ${daily_card[first_message]}
           Your daily rune is ${daily_rune[second_message]}
           Your daily affirmation is ${[affirmations[third_message]]}`

console.log(message);

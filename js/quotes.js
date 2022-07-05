const quotes = [
  {englishQuote : "The road to success and the road to failure are almost exactly the same.",
   koreanQuote: "성공으로 가는 길과 실패로 가는 길을 거의 같다.",
   author : "Colin R. Davis",
  },
  {englishQuote : "It is better to fail in originality than to succeed in imitation.",
   koreanQuote: "창의적으로 실패하는 것이 모방해서 성공하는 것보다 낫다.",
   author : "Herman Melville",
  },
  {englishQuote : "Success is walking from failure to failure with no loss of enthusiasm.",
   koreanQuote: "성공이란 열정을 잃지 않고 실패에서 실패로 걸어가는 것이다. ",
   author : "Winston Churchill",
  },
  {englishQuote : "All progress takes place outside the comfort zone.",
   koreanQuote: "모든 성과는 요령을 피우지 않을 때 생긴다. ",
   author : "Michael John Bobak",
  },
  {englishQuote : "Success usually comes to those who are too busy to be looking for it.",
   koreanQuote: "성공은 주로 성공을 찾느라 바쁜 사람들에게 찾아온다.",
   author : "Henry David Thoreau",
  },
  {englishQuote : "The way to get started is to quit talking and begin doing.",
   koreanQuote: "무언가를 시작하려면 말은 멈추고 행동해야 한다.",
   author : "Walt Disney",
  },
  {englishQuote : "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
   koreanQuote: "성공은 행복을 여는 열쇠가 아니다. 행복이 성공을 여는 열쇠다. 당신이 하고 있는 것을 사랑하면, 당신은 성공할 것이다.",
   author : "Albert Schweitzer",
  },
  {englishQuote : "Success seems to be connected with action. Successful people keep moving.",
   koreanQuote: "성공은 행동과 연결되어 있다. 성공적인 사람들은 계속해서 움직인다.",
   author : "Conrad Hilton",
  },
  {englishQuote : "In order to succeed, we must first believe that we can.",
   koreanQuote: "성공하기 위해서, 우리는 먼저 우리 자신이 할 수 있다는 것을 믿어야 한다. ",
   author : "Nikos Kazantzakis",
  },
  {englishQuote : "The only place where success comes before work is in the dictionary.",
   koreanQuote: "노력 전에 성공이 나오는 곳은 사전뿐이다.",
   author : "Vidal Sassoon",
  },
];

const englishQuoteEl = document.querySelector("#quote span:nth-of-type(1)");
const koreanQuoteEl = document.querySelector("#quote span:nth-of-type(2)");
const authorEl = document.querySelector("#quote span:nth-of-type(3)");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

englishQuoteEl.innerText = `" ${todaysQuote.englishQuote} "`;
koreanQuoteEl.innerText = todaysQuote.koreanQuote;
authorEl.innerText = ` - ${todaysQuote.author} - `;
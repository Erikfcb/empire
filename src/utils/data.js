const getRandomNumber = () =>
  Math.floor(Math.random() * (1000 - 100) + 100) / 100;

export const data = {
  WEEK_1: [
    {
      time: "WEEK_1 1",
      USD: getRandomNumber(),
      EUR: getRandomNumber()
    },
    {
      time: "WEEK_1 2",
      USD: getRandomNumber(),
      EUR: getRandomNumber()
    },
    {
      time: "WEEK_1 3",
      USD: getRandomNumber(),
      EUR: getRandomNumber()
    },
    {
      time: "WEEK_1 4",
      USD: getRandomNumber(),
      EUR: getRandomNumber()
    },
    {
      time: "WEEK_1 5",
      USD: getRandomNumber(),
      EUR: getRandomNumber()
    },
    {
      time: "WEEK_1 6",
      USD: getRandomNumber(),
      EUR: getRandomNumber()
    },
    {
      time: "WEEK_1 7",
      USD: getRandomNumber(),
      EUR: getRandomNumber()
    }
  ],
  MIN_1: [
    {
      time: "MIN_1 1",
      USD: getRandomNumber(),
      EUR: getRandomNumber()
    },
    {
      time: "MIN_1 2",
      USD: getRandomNumber(),
      EUR: getRandomNumber()
    },
    {
      time: "MIN_1 3",
      USD: getRandomNumber(),
      EUR: getRandomNumber()
    },
    {
      time: "MIN_1 4",
      USD: getRandomNumber(),
      EUR: getRandomNumber()
    },
    {
      time: "MIN_1 5",
      USD: getRandomNumber(),
      EUR: getRandomNumber()
    },
    {
      time: "MIN_1 6",
      USD: getRandomNumber(),
      EUR: getRandomNumber()
    },
    {
      time: "MIN_1 7",
      USD: getRandomNumber(),
      EUR: getRandomNumber()
    }
  ],
  MIN_5: [
    {
      time: "MIN_5 1",
      USD: getRandomNumber(),
      EUR: getRandomNumber()
    },
    {
      time: "MIN_5 2",
      USD: getRandomNumber(),
      EUR: getRandomNumber()
    },
    {
      time: "MIN_5 3",
      USD: getRandomNumber(),
      EUR: getRandomNumber()
    },
    {
      time: "MIN_5 4",
      USD: getRandomNumber(),
      EUR: getRandomNumber()
    },
    {
      time: "MIN_5 5",
      USD: getRandomNumber(),
      EUR: getRandomNumber()
    },
    {
      time: "MIN_5 6",
      USD: getRandomNumber(),
      EUR: getRandomNumber()
    },
    {
      time: "MIN_5 7",
      USD: getRandomNumber(),
      EUR: getRandomNumber()
    }
  ],
  HOUR_1: [
    {
      time: "HOUR_1 1",
      USD: getRandomNumber(),
      EUR: getRandomNumber()
    },
    {
      time: "HOUR_1 2",
      USD: getRandomNumber(),
      EUR: getRandomNumber()
    },
    {
      time: "HOUR_1 3",
      USD: getRandomNumber(),
      EUR: getRandomNumber()
    },
    {
      time: "HOUR_1 4",
      USD: getRandomNumber(),
      EUR: getRandomNumber()
    },
    {
      time: "HOUR_1 5",
      USD: getRandomNumber(),
      EUR: getRandomNumber()
    },
    {
      time: "HOUR_1 6",
      USD: getRandomNumber(),
      EUR: getRandomNumber()
    },
    {
      time: "HOUR_1 7",
      USD: getRandomNumber(),
      EUR: getRandomNumber()
    }
  ]
};

export const tabs = [
  {
    title: "1 Minute",
    time: "MIN_1"
  },
  {
    title: "5 Minute",
    time: "MIN_5"
  },
  {
    title: "1 Hour",
    time: "HOUR_1"
  },
  {
    title: "1 Week",
    time: "WEEK_1"
  }
];

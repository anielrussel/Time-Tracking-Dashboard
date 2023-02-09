import work from '../assets/images/icon-work.svg'
import play from '../assets/images/icon-play.svg'
import study from '../assets/images/icon-study.svg'
import exercise from '../assets/images/icon-exercise.svg'
import social from '../assets/images/icon-social.svg'
import self from '../assets/images/icon-self-care.svg'

export default [
  {
    title: "Work",
    image: `${work}`,
    color: "#fcb073",
    timeframes: {
      daily: {
        current: 5,
        previous: 7
      },
      weekly: {
        current: 32,
        previous: 36
      },
      monthly: {
        current: 103,
        previous: 128
      }
    }
  },
  {
    title: "Play",
    image: `${play}`,
    color: "#00bfff",
    timeframes: {
      daily: {
        current: 1,
        previous: 2
      },
      weekly: {
        current: 10,
        previous: 8
      },
      monthly: {
        current: 23,
        previous: 29
      }
    }
  },
  {
    title: "Study",
    image: `${study}`,
    color: "rgb(255 50 92 / 80%)",
    timeframes: {
      daily: {
        current: 0,
        previous: 1
      },
      weekly: {
        current: 4,
        previous: 7
      },
      monthly: {
        current: 13,
        previous: 19
      }
    }
  },
  {
    title: "Exercise",
    image: `${exercise}`,
    color: "rgb(0 189 109 / 60%)",
    timeframes: {
      daily: {
        current: 1,
        previous: 1
      },
      weekly: {
        current: 4,
        previous: 5
      },
      monthly: {
        current: 11,
        previous: 18
      }
    }
  },
  {
    title: "Social",
    image: `${social}`,
    color: "rgb(97 24 185 / 60%)",
    timeframes: {
      daily: {
        current: 1,
        previous: 3
      },
      weekly: {
        current: 5,
        previous: 10
      },
      monthly: {
        current: 21,
        previous: 23
      }
    }
  },
  {
    title: "Self Care",
    image: `${self}`,
    color: "rgb(245 162 41 / 60%)",
    timeframes: {
      daily: {
        current: 0,
        previous: 1
      },
      weekly: {
        current: 2,
        previous: 2
      },
      monthly: {
        current: 7,
        previous: 11
      }
    }
  }
]
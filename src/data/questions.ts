import { CheckAnswer } from "../types.ts/chaeckAnswer";

export const dataQuestionEn = [
    [
        {
            ask: "What does the abbreviation JS mean in programming?",
            ans: [
                {
                    content: "JavaScript",
                    check: CheckAnswer.right
                },
                {
                    content: "Jason Statham ",
                    check: CheckAnswer.second
                },
                {
                    content: "Just second",
                    check: CheckAnswer.falsy
                },
                {
                    content: "Job sweat",
                    check: CheckAnswer.falsy
                }

            ]

        },
        {
            ask: "What is JavaScript?",
            ans: [
                {
                    content: "Programming language",
                    check: CheckAnswer.right
                },
                {
                    content: "The language of the peoples of the Byzantine Empire",
                    check: CheckAnswer.second
                },
                {
                    content: "Rock scratches",
                    check: CheckAnswer.falsy
                },
                {
                    content: "Dish",
                    check: CheckAnswer.falsy
                }

            ]

        },
        {
            ask: "Where is JavaScript used?",
            ans: [
                {
                    content: "In programming",
                    check: CheckAnswer.right
                },
                {
                    content: "In prison vocabulary",
                    check: CheckAnswer.second
                },
                {
                    content: "In a game of cards",
                    check: CheckAnswer.falsy
                },
                {
                    content: "Only in movies",
                    check: CheckAnswer.falsy
                }

            ]

        }
    ],
]
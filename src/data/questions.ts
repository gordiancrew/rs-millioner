import { CheckAnswer } from "../types.ts/chaeckAnswer";

export const dataQuestion = [

    [
        {
            ask: "Это вопрос 1 уровня сложности id1.1",
            ans: [
                {
                    content: "это 1 вариант ответа на вопрос id1.1(правильный)",
                    check: CheckAnswer.right
                },
                {
                    content: "это 2 вариант ответа на вопрос id1.1(неправильный)",
                    check: CheckAnswer.second
                },
                {
                    content: "это 3 вариант ответа на вопрос id1.1(неправильный)",
                    check: CheckAnswer.falsy
                },
                {
                    content: "это 4 вариант ответа на вопрос id1.1(неправильный)",
                    check: CheckAnswer.falsy
                }

            ]

        },
        {
            ask: "Это вопрос 1 уровня сложности id1.2",
            ans: [
                {
                    content: "это 1 вариант ответа на вопрос id1.2(правильный)",
                    check: CheckAnswer.right
                },
                {
                    content: "это 2 вариант ответа на вопрос id1.2(неправильный)",
                    check: CheckAnswer.second
                },
                {
                    content: "это 3 вариант ответа на вопрос id1.2(неправильный)",
                    check: CheckAnswer.falsy
                },
                {
                    content: "это 4 вариант ответа на вопрос id1.2неправильный)",
                    check: CheckAnswer.falsy
                }

            ]

        }
    ],
    [
        {
            ask: "Это вопрос 2 уровня сложности id2.1",
            ans: [
                {
                    content: "это 1 вариант ответа на вопрос id2.1(правильный)",
                    check: CheckAnswer.right
                },
                {
                    content: "это 2 вариант ответа на вопрос id2.1(неправильный)",
                    check: CheckAnswer.second
                },
                {
                    content: "это 3 вариант ответа на вопрос id2.1(неправильный)",
                    check: CheckAnswer.falsy
                },
                {
                    content: "это 4 вариант ответа на вопрос id2.1(неправильный)",
                    check: CheckAnswer.falsy
                }

            ]

        },
        {
            ask: "Это вопрос 2 уровня сложности id2.2",
            ans: [
                {
                    content: "это 1 вариант ответа на вопрос id2.2(правильный)",
                    check: CheckAnswer.right
                },
                {
                    content: "это 2 вариант ответа на вопрос id2.2(неправильный)",
                    check: CheckAnswer.second
                },
                {
                    content: "это 3 вариант ответа на вопрос id2.2(неправильный)",
                    check: CheckAnswer.falsy
                },
                {
                    content: "это 4 вариант ответа на вопрос id2.2неправильный)",
                    check: CheckAnswer.falsy
                }

            ]

        }
    ],
    [
        {
            ask: "Это вопрос 3 уровня",
            ans: [
                {
                    content: "a(TRUE)",
                    check: CheckAnswer.right
                },
                {
                    content: "b",
                    check: CheckAnswer.second
                },
                {
                    content: "c",
                    check: CheckAnswer.falsy
                },
                {
                    content: "d",
                    check: CheckAnswer.falsy
                }

            ]

        },
    ],
    [
        {
            ask: "Это вопрос 4 уровня",
            ans: [
                {
                    content: "aa(TRUE)",
                    check: CheckAnswer.right
                },
                {
                    content: "bb",
                    check: CheckAnswer.second
                },
                {
                    content: "cc",
                    check: CheckAnswer.falsy
                },
                {
                    content: "dd",
                    check: CheckAnswer.falsy
                }

            ]

        },
    ]

]





    //in this constant we write all questions as array objects
    // or 15 arrays, each array equals difficult level
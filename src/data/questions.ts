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
    [
        {
            ask: "How is HTML decoded?",
            ans: [
                {
                    content: "HyperText Markup Language",
                    check: CheckAnswer.right
                },
                {
                    content: "HyperText My Love",
                    check: CheckAnswer.second
                },
                {
                    content: "Hot Top Music List",
                    check: CheckAnswer.falsy
                },
                {
                    content: "Header Title Margin Li",
                    check: CheckAnswer.falsy
                }

            ]

        },
        {
            ask: "What is CSS?",
            ans: [
                {
                    content: "Cascading Style Sheets",
                    check: CheckAnswer.right
                },
                {
                    content: "Cool Style Sheets",
                    check: CheckAnswer.second
                },
                {
                    content: "Country School Shoes",
                    check: CheckAnswer.falsy
                },
                {
                    content: "Cazhetsja Stili Sleteli",
                    check: CheckAnswer.falsy
                }

            ]

        },
        {
            ask: "What is js engine?",
            ans: [
                {
                    content: "JavaScript processing program",
                    check: CheckAnswer.right
                },
                {
                    content: "Programmer writing code",
                    check: CheckAnswer.second
                },
                {
                    content: "New BMW engine",
                    check: CheckAnswer.falsy
                },
                {
                    content: "IT style party",
                    check: CheckAnswer.falsy
                }

            ]

        }
    ],
    [
        {
            ask: "What type of data is missing in JS?",
            ans: [
                {
                    content: "Char",
                    check: CheckAnswer.right
                },
                {
                    content: "Number",
                    check: CheckAnswer.second
                },
                {
                    content: "Boolean",
                    check: CheckAnswer.falsy
                },
                {
                    content: "Object",
                    check: CheckAnswer.falsy
                }

            ]

        },
        {
            ask: "What is the data type in JS?",
            ans: [
                {
                    content: "Symbol",
                    check: CheckAnswer.right
                },
                {
                    content: "Char",
                    check: CheckAnswer.second
                },
                {
                    content: "Integer",
                    check: CheckAnswer.falsy
                },
                {
                    content: "Mix",
                    check: CheckAnswer.falsy
                }

            ]

        }, 
        {
            ask: "What is the data type in JS?",
            ans: [
                {
                    content: "BigInt",
                    check: CheckAnswer.right
                },
                {
                    content: "BigFloat",
                    check: CheckAnswer.second
                },
                {
                    content: "BigString",
                    check: CheckAnswer.falsy
                },
                {
                    content: "BigObject",
                    check: CheckAnswer.falsy
                }

            ]

        }
    ],
    [
        {
            ask: "Which function declaration does not exist in JS?",
            ans: [
                {
                    content: "Function Progression",
                    check: CheckAnswer.right
                },
                {
                    content: "Function Expression",
                    check: CheckAnswer.second
                },
                {
                    content: "Function Decloration",
                    check: CheckAnswer.falsy
                },
                {
                    content: "Arrow Function",
                    check: CheckAnswer.falsy
                }

            ]

        },
        {
            ask: "Which operator is not a boolean operator in JS?",
            ans: [
                {
                    content: "$",
                    check: CheckAnswer.right
                },
                {
                    content: "&&",
                    check: CheckAnswer.second
                },
                {
                    content: "||",
                    check: CheckAnswer.falsy
                },
                {
                    content: "!",
                    check: CheckAnswer.falsy
                }

            ]

        }, 
        {
            ask: "What word can not be used to declare a variable in JS?",
            ans: [
                {
                    content: "get",
                    check: CheckAnswer.right
                },
                {
                    content: "const",
                    check: CheckAnswer.second
                },
                {
                    content: "var",
                    check: CheckAnswer.falsy
                },
                {
                    content: "let",
                    check: CheckAnswer.falsy
                }

            ]

        }

    ],
    [
        {
            ask: "What is the scope of a variable declared with the let word?",
            ans: [
                {
                    content: "The block scope",
                    check: CheckAnswer.right
                },
                {
                    content: "The functional scope",
                    check: CheckAnswer.second
                },
                {
                    content: "The string scope",
                    check: CheckAnswer.falsy
                },
                {
                    content: "The program scope",
                    check: CheckAnswer.falsy
                }

            ]

        },
        {
            ask: "What must a switch statement in js have?",
            ans: [
                {
                    content: "The case block",
                    check: CheckAnswer.right
                },
                {
                    content: "The default block",
                    check: CheckAnswer.second
                },
                {
                    content: "The break block",
                    check: CheckAnswer.falsy
                },
                {
                    content: "The finally block",
                    check: CheckAnswer.falsy
                }

            ]

        }, 
        {
            ask: "Which of these is a ternary operator?",
            ans: [
                {
                    content: "let res = a ? one : two",
                    check: CheckAnswer.right
                },
                {
                    content: "let res = a ? one / two",
                    check: CheckAnswer.second
                },
                {
                    content: "let res = a ? one",
                    check: CheckAnswer.falsy
                },
                {
                    content: "let res = a ! one : two",
                    check: CheckAnswer.falsy
                }

            ]

        }

    ],
    [
        {
            ask: "Which method removes the last element from an array and returns it?",
            ans: [
                {
                    content: "pop",
                    check: CheckAnswer.right
                },
                {
                    content: "push ",
                    check: CheckAnswer.second
                },
                {
                    content: "shift",
                    check: CheckAnswer.falsy
                },
                {
                    content: "unshift",
                    check: CheckAnswer.falsy
                }

            ]

        },
        {
            ask: "What does the shift method do with an array?",
            ans: [
                {
                    content: "Removes the first element",
                    check: CheckAnswer.right
                },
                {
                    content: "Removes the last element",
                    check: CheckAnswer.second
                },
                {
                    content: "Adds the first element",
                    check: CheckAnswer.falsy
                },
                {
                    content: "Adds an element to the end",
                    check: CheckAnswer.falsy
                }

            ]

        },
        {
            ask: "How can you not declare an array?",
            ans: [
                {
                    content: "let arr= [Array]",
                    check: CheckAnswer.right
                },
                {
                    content: "let arr= new Array() ",
                    check: CheckAnswer.second
                },
                {
                    content: "let arr=[]",
                    check: CheckAnswer.falsy
                },
                {
                    content: "let arr=[3,4,5] ",
                    check: CheckAnswer.falsy
                }

            ]
        }
    ],
];

export const dataQuestionBl = [
    [
        {
            ask: "Што азначае абрэвіятура JS у праграмаванні?",
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
            ask: "Што такое JavaScript?",
            ans: [
                {
                    content: "Мова праграмавання",
                    check: CheckAnswer.right
                },
                {
                    content: "Мова народаў Візантыйскай імперыі",
                    check: CheckAnswer.second
                },
                {
                    content: "Наскальныя іерогліфы",
                    check: CheckAnswer.falsy
                },
                {
                    content: "Блюда",
                    check: CheckAnswer.falsy
                }

            ]

        },
        {
            ask: "Дзе выкарыстоўваецца JavaScript",
            ans: [
                {
                    content: "У праграмаванні",
                    check: CheckAnswer.right
                },
                {
                    content: "У лексіцы вязняў",
                    check: CheckAnswer.second
                },
                {
                    content: "У гульні ў карты",
                    check: CheckAnswer.falsy
                },
                {
                    content: "Толькі ў кіно",
                    check: CheckAnswer.falsy
                }

            ]

        }
    ],
    [
        {
            ask: "Як расшыфроўваецца HTML",
            ans: [
                {
                    content: "HyperText Markup Language",
                    check: CheckAnswer.right
                },
                {
                    content: "HyperText My Love",
                    check: CheckAnswer.second
                },
                {
                    content: "Hot Top Music List",
                    check: CheckAnswer.falsy
                },
                {
                    content: "Header Title Margin Li",
                    check: CheckAnswer.falsy
                }

            ]

        },
        {
            ask: "Што такое CSS",
            ans: [
                {
                    content: "Cascading Style Sheets",
                    check: CheckAnswer.right
                },
                {
                    content: "Cool Style Sheets",
                    check: CheckAnswer.second
                },
                {
                    content: "Country School Shoes",
                    check: CheckAnswer.falsy
                },
                {
                    content: "Cazhetsja Stili Sleteli",
                    check: CheckAnswer.falsy
                }

            ]

        },
        {
            ask: "Што значыць js рухавік",
            ans: [
                {
                    content: "Праграма, якая апрацоўвае JavaScript",
                    check: CheckAnswer.right
                },
                {
                    content: "Праграміст, які піша код",
                    check: CheckAnswer.second
                },
                {
                    content: "Новы рухавік BMW",
                    check: CheckAnswer.falsy
                },
                {
                    content: "Вечарынка у стылі IT",
                    check: CheckAnswer.falsy
                }

            ]

        }
    ],
    [
        {
            ask: "Якога тыпу дадзеных няма ў JS",
            ans: [
                {
                    content: "Char",
                    check: CheckAnswer.right
                },
                {
                    content: "Number",
                    check: CheckAnswer.second
                },
                {
                    content: "Boolean",
                    check: CheckAnswer.falsy
                },
                {
                    content: "Object",
                    check: CheckAnswer.falsy
                }

            ]

        },
        {
            ask: "Які тып дадзеных ёсць у JS",
            ans: [
                {
                    content: "Symbol",
                    check: CheckAnswer.right
                },
                {
                    content: "Char",
                    check: CheckAnswer.second
                },
                {
                    content: "Integer",
                    check: CheckAnswer.falsy
                },
                {
                    content: "Mix",
                    check: CheckAnswer.falsy
                }

            ]

        }, {
            ask: "Які тып дадзеных ёсць у JS",
            ans: [
                {
                    content: "BigInt",
                    check: CheckAnswer.right
                },
                {
                    content: "BigFloat",
                    check: CheckAnswer.second
                },
                {
                    content: "BigString",
                    check: CheckAnswer.falsy
                },
                {
                    content: "BigObject",
                    check: CheckAnswer.falsy
                }

            ]

        }
    ],
    [
        {
            ask: "Якое аб'яўленне функцыі не існуе ў JS",
            ans: [
                {
                    content: "Function Progression",
                    check: CheckAnswer.right
                },
                {
                    content: "Function Expression",
                    check: CheckAnswer.second
                },
                {
                    content: "Function Decloration",
                    check: CheckAnswer.falsy
                },
                {
                    content: "Arrow Function",
                    check: CheckAnswer.falsy
                }

            ]

        },
        {
            ask: "Які аператар не адносіцца да лагічных у JS",
            ans: [
                {
                    content: "$",
                    check: CheckAnswer.right
                },
                {
                    content: "&&",
                    check: CheckAnswer.second
                },
                {
                    content: "||",
                    check: CheckAnswer.falsy
                },
                {
                    content: "!",
                    check: CheckAnswer.falsy
                }

            ]

        }, 
        {
            ask: "Праз якое слова нельга а'явіць пераменную ў JS",
            ans: [
                {
                    content: "get",
                    check: CheckAnswer.right
                },
                {
                    content: "const",
                    check: CheckAnswer.second
                },
                {
                    content: "var",
                    check: CheckAnswer.falsy
                },
                {
                    content: "let",
                    check: CheckAnswer.falsy
                }

            ]

        }

    ],
    [
        {
            ask: "Якую вобласць бачнасці мае пераменная аб'яўленная праз слова let",
            ans: [
                {
                    content: "Блочную",
                    check: CheckAnswer.right
                },
                {
                    content: "Функцыянальную",
                    check: CheckAnswer.second
                },
                {
                    content: "Строчную",
                    check: CheckAnswer.falsy
                },
                {
                    content: "Праграмную",
                    check: CheckAnswer.falsy
                }

            ]

        },
        {
            ask: "Што абавязкова павінна мець канструкцыя switch у js",
            ans: [
                {
                    content: "блок case",
                    check: CheckAnswer.right
                },
                {
                    content: "блок default",
                    check: CheckAnswer.second
                },
                {
                    content: "блок break",
                    check: CheckAnswer.falsy
                },
                {
                    content: "блок finally",
                    check: CheckAnswer.falsy
                }

            ]

        }, 
        {
            ask: "Што з гэтага з'яўляецца тэрнарным аператарам?",
            ans: [
                {
                    content: "let res = a ? one : two",
                    check: CheckAnswer.right
                },
                {
                    content: "let res = a ? one / two",
                    check: CheckAnswer.second
                },
                {
                    content: "let res = a ? one",
                    check: CheckAnswer.falsy
                },
                {
                    content: "let res = a ! one : two",
                    check: CheckAnswer.falsy
                }

            ]

        }

    ],
    [
        {
            ask: "Які з метадаў выдаляе апошні элемент масіва ды вяртае яго?",
            ans: [
                {
                    content: "pop",
                    check: CheckAnswer.right
                },
                {
                    content: "push ",
                    check: CheckAnswer.second
                },
                {
                    content: "shift",
                    check: CheckAnswer.falsy
                },
                {
                    content: "unshift",
                    check: CheckAnswer.falsy
                }

            ]

        },
        {
            ask: "Што робіць метад shift с масівам?",
            ans: [
                {
                    content: "Выдаляе першы элемент",
                    check: CheckAnswer.right
                },
                {
                    content: "Выдаляе апошні элемент",
                    check: CheckAnswer.second
                },
                {
                    content: "Дабаўляе першы элемент",
                    check: CheckAnswer.falsy
                },
                {
                    content: "Дабаўляе элемент у канец",
                    check: CheckAnswer.falsy
                }

            ]

        },
        {
            ask: "Як нельга аб'явіць масіў?",
            ans: [
                {
                    content: "let arr= [Array]",
                    check: CheckAnswer.right
                },
                {
                    content: "let arr= new Array() ",
                    check: CheckAnswer.second
                },
                {
                    content: "let arr=[]",
                    check: CheckAnswer.falsy
                },
                {
                    content: "let arr=[3,4,5] ",
                    check: CheckAnswer.falsy
                }

            ]
        }
    ],
];

export const dataQuestionRu = [

    [
        {
            ask: "Что означает аббревиатура JS в программировании?",
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
            ask: "Что такое JavaScript?",
            ans: [
                {
                    content: "Язык программирования",
                    check: CheckAnswer.right
                },
                {
                    content: "Язык народов Византийской Империи",
                    check: CheckAnswer.second
                },
                {
                    content: "Наскальные царапания",
                    check: CheckAnswer.falsy
                },
                {
                    content: "Блюдо",
                    check: CheckAnswer.falsy
                }

            ]

        },
        {
            ask: "Где используется JavaScript",
            ans: [
                {
                    content: "В программировании",
                    check: CheckAnswer.right
                },
                {
                    content: "В тюремной лексике ",
                    check: CheckAnswer.second
                },
                {
                    content: "В игре в карты",
                    check: CheckAnswer.falsy
                },
                {
                    content: "Только в кино ",
                    check: CheckAnswer.falsy
                }

            ]

        }
    ],
    [
        {
            ask: "Как расшифровывается HTML",
            ans: [
                {
                    content: "HyperText Markup Language",
                    check: CheckAnswer.right
                },
                {
                    content: "HyperText My Love",
                    check: CheckAnswer.second
                },
                {
                    content: "Hot Top Music List",
                    check: CheckAnswer.falsy
                },
                {
                    content: "Header Title Margin Li",
                    check: CheckAnswer.falsy
                }

            ]

        },
        {
            ask: "Что такое CSS",
            ans: [
                {
                    content: "Cascading Style Sheets",
                    check: CheckAnswer.right
                },
                {
                    content: "Cool Style Sheets",
                    check: CheckAnswer.second
                },
                {
                    content: "Country School Shoes",
                    check: CheckAnswer.falsy
                },
                {
                    content: "Cazhetsja Stili Sleteli",
                    check: CheckAnswer.falsy
                }

            ]

        },
        {
            ask: "Что такое js движок",
            ans: [
                {
                    content: "Программа, обрабатывающая JavaScript",
                    check: CheckAnswer.right
                },
                {
                    content: "Программист, пишущий код",
                    check: CheckAnswer.second
                },
                {
                    content: "Новый двигатель BMW",
                    check: CheckAnswer.falsy
                },
                {
                    content: "Вечеринка в стиле IT",
                    check: CheckAnswer.falsy
                }

            ]

        }
    ],
    [
        {
            ask: "Какого типа данных нет в JS",
            ans: [
                {
                    content: "Char",
                    check: CheckAnswer.right
                },
                {
                    content: "Number",
                    check: CheckAnswer.second
                },
                {
                    content: "Boolean",
                    check: CheckAnswer.falsy
                },
                {
                    content: "Object",
                    check: CheckAnswer.falsy
                }

            ]

        },
        {
            ask: "Какой тип данных есть в JS",
            ans: [
                {
                    content: "Symbol",
                    check: CheckAnswer.right
                },
                {
                    content: "Char",
                    check: CheckAnswer.second
                },
                {
                    content: "Integer",
                    check: CheckAnswer.falsy
                },
                {
                    content: "Mix",
                    check: CheckAnswer.falsy
                }

            ]

        }, {
            ask: "Какой тип данных есть в JS",
            ans: [
                {
                    content: "BigInt",
                    check: CheckAnswer.right
                },
                {
                    content: "BigFloat",
                    check: CheckAnswer.second
                },
                {
                    content: "BigString",
                    check: CheckAnswer.falsy
                },
                {
                    content: "BigObject",
                    check: CheckAnswer.falsy
                }

            ]

        }
    ],
    [
        {
            ask: "Какое обьявление функций не существуют в JS",
            ans: [
                {
                    content: "Function Progression",
                    check: CheckAnswer.right
                },
                {
                    content: "Function Expression",
                    check: CheckAnswer.second
                },
                {
                    content: "Function Decloration",
                    check: CheckAnswer.falsy
                },
                {
                    content: "Arrow Function",
                    check: CheckAnswer.falsy
                }

            ]

        },
        {
            ask: "Какой оператор не относится к логическим в JS",
            ans: [
                {
                    content: "$",
                    check: CheckAnswer.right
                },
                {
                    content: "&&",
                    check: CheckAnswer.second
                },
                {
                    content: "||",
                    check: CheckAnswer.falsy
                },
                {
                    content: "!",
                    check: CheckAnswer.falsy
                }

            ]

        }, {
            ask: "Через какое слово нельзя обьявить переменную в JS",
            ans: [
                {
                    content: "get",
                    check: CheckAnswer.right
                },
                {
                    content: "const",
                    check: CheckAnswer.second
                },
                {
                    content: "var",
                    check: CheckAnswer.falsy
                },
                {
                    content: "let",
                    check: CheckAnswer.falsy
                }

            ]

        }

    ],
    [
        {
            ask: "Какую область видимости имеет переменная обьявленная через слово let",
            ans: [
                {
                    content: "Блочную",
                    check: CheckAnswer.right
                },
                {
                    content: "Функциональную",
                    check: CheckAnswer.second
                },
                {
                    content: "Строчную",
                    check: CheckAnswer.falsy
                },
                {
                    content: "Програмную",
                    check: CheckAnswer.falsy
                }

            ]

        },
        {
            ask: "Что обязательно должна иметь конструкция switch в js",
            ans: [
                {
                    content: "блок case",
                    check: CheckAnswer.right
                },
                {
                    content: "блок default",
                    check: CheckAnswer.second
                },
                {
                    content: "блок break",
                    check: CheckAnswer.falsy
                },
                {
                    content: "блок finally",
                    check: CheckAnswer.falsy
                }

            ]

        }, {
            ask: "Что из этого является тернарным оператором?",
            ans: [
                {
                    content: "let res = a ? one : two",
                    check: CheckAnswer.right
                },
                {
                    content: "let res = a ? one / two",
                    check: CheckAnswer.second
                },
                {
                    content: "let res = a ? one",
                    check: CheckAnswer.falsy
                },
                {
                    content: "let res = a ! one : two",
                    check: CheckAnswer.falsy
                }

            ]

        }

    ],
    [
        {
            ask: "какой из методов удаляет последний элемент из массива и возвращает его?",
            ans: [
                {
                    content: "pop",
                    check: CheckAnswer.right
                },
                {
                    content: "push ",
                    check: CheckAnswer.second
                },
                {
                    content: "shift",
                    check: CheckAnswer.falsy
                },
                {
                    content: "unshift",
                    check: CheckAnswer.falsy
                }

            ]

        },
        {
            ask: "Что делает метод shift с массивом?",
            ans: [
                {
                    content: "Удаляет первый элемент",
                    check: CheckAnswer.right
                },
                {
                    content: "удаляет последний элемент",
                    check: CheckAnswer.second
                },
                {
                    content: "Добавляет первый элемент",
                    check: CheckAnswer.falsy
                },
                {
                    content: "Добавляет элемент в конец",
                    check: CheckAnswer.falsy
                }

            ]

        },
        {
            ask: "Как нельзя объявить массив",
            ans: [
                {
                    content: "let arr= [Array]",
                    check: CheckAnswer.right
                },
                {
                    content: "let arr= new Array() ",
                    check: CheckAnswer.second
                },
                {
                    content: "let arr=[]",
                    check: CheckAnswer.falsy
                },
                {
                    content: "let arr=[3,4,5] ",
                    check: CheckAnswer.falsy
                }

            ]
        }
    ],
    [
        {
            ask: "Какой из этих HTML элементов строчный?",
            ans: [
                {
                    content: "Input",
                    check: CheckAnswer.right
                },
                {
                    content: "Div",
                    check: CheckAnswer.second
                },
                {
                    content: "Ol",
                    check: CheckAnswer.falsy
                },
                {
                    content: "Li",
                    check: CheckAnswer.falsy
                }

            ]

        },
        {
            ask: "Какой из этих HTML элементов блочный?",
            ans: [
                {
                    content: "form",
                    check: CheckAnswer.right
                },
                {
                    content: "button",
                    check: CheckAnswer.second
                },
                {
                    content: "label",
                    check: CheckAnswer.falsy
                },
                {
                    content: "a",
                    check: CheckAnswer.falsy
                }

            ]

        },
        {
            ask: "К какому типу относится элемент <script>",
            ans: [
                {
                    content: "Строчный",
                    check: CheckAnswer.right
                },
                {
                    content: "Блочный",
                    check: CheckAnswer.second
                },
                {
                    content: "Не строчный и не блочный",
                    check: CheckAnswer.falsy
                },
                {
                    content: "Блочно-строчный",
                    check: CheckAnswer.falsy
                }

            ]

        }
    ],
    [
        {
            ask: "Какое значение не может иметь свойство display в CSS",
            ans: [
                {
                    content: "invisible",
                    check: CheckAnswer.right
                },
                {
                    content: "table-row",
                    check: CheckAnswer.second
                },
                {
                    content: "grid",
                    check: CheckAnswer.falsy
                },
                {
                    content: "contents",
                    check: CheckAnswer.falsy
                }

            ]

        },
        {
            ask: "Какое значение  может иметь свойство display в CSS",
            ans: [
                {
                    content: "ruby",
                    check: CheckAnswer.right
                },
                {
                    content: "python",
                    check: CheckAnswer.second
                },
                {
                    content: "java",
                    check: CheckAnswer.falsy
                },
                {
                    content: "c+",
                    check: CheckAnswer.falsy
                }

            ]

        },
        {
            ask: "Какое значение свойства display визуально удаляет бокс элемента и подменяет его содержимым в CSS?",
            ans: [
                {
                    content: "contents",
                    check: CheckAnswer.right
                },
                {
                    content: "none",
                    check: CheckAnswer.second
                },
                {
                    content: "block",
                    check: CheckAnswer.falsy
                },
                {
                    content: "inline",
                    check: CheckAnswer.falsy
                }

            ]

        }
    ],
    [
        {
            ask: "Что такое git",
            ans: [
                {
                    content: "Распределенная система управления версиями",
                    check: CheckAnswer.right
                },
                {
                    content: "Интегрированная среда разработки",
                    check: CheckAnswer.second
                },
                {
                    content: "Удаленное хранилище проектов",
                    check: CheckAnswer.falsy
                },
                {
                    content: "Программа настройки js",
                    check: CheckAnswer.falsy
                }

            ]

        },
        {
            ask: "Какая команда в git служит для отправки состояния на удаленный репозиторий?",
            ans: [
                {
                    content: "push",
                    check: CheckAnswer.right
                },
                {
                    content: "pull",
                    check: CheckAnswer.second
                },
                {
                    content: "set",
                    check: CheckAnswer.falsy
                },
                {
                    content: "patch",
                    check: CheckAnswer.falsy
                }

            ]

        }, {
            ask: "Как называется точка сохранения в git?",
            ans: [
                {
                    content: "commit",
                    check: CheckAnswer.right
                },
                {
                    content: "check",
                    check: CheckAnswer.second
                },
                {
                    content: "point",
                    check: CheckAnswer.falsy
                },
                {
                    content: "saver",
                    check: CheckAnswer.falsy
                }

            ]

        }
    ],
    [
        {
            ask: "Какого метода HTTP запроса не бывает?",
            ans: [
                {
                    content: "Update",
                    check: CheckAnswer.right
                },
                {
                    content: "Patch",
                    check: CheckAnswer.second
                },
                {
                    content: "Head",
                    check: CheckAnswer.falsy
                },
                {
                    content: "Post",
                    check: CheckAnswer.falsy
                }

            ]

        },
        {
            ask: "Какой код состояния HTTP запроса обозначает ошибку сервера?",
            ans: [
                {
                    content: "5XX",
                    check: CheckAnswer.right
                },
                {
                    content: "3XX",
                    check: CheckAnswer.second
                },
                {
                    content: "4XX",
                    check: CheckAnswer.falsy
                },
                {
                    content: "2XX",
                    check: CheckAnswer.falsy
                }

            ]

        }, {
            ask: "Как расшифровывается HTTP?",
            ans: [
                {
                    content: "HyperText Transfer Protocol",
                    check: CheckAnswer.right
                },
                {
                    content: "HyperText Transfer Pool",
                    check: CheckAnswer.second
                },
                {
                    content: "Hyper Transfer Text Process",
                    check: CheckAnswer.falsy
                },
                {
                    content: "Hyper Team Test Project",
                    check: CheckAnswer.falsy
                }

            ]

        }

    ],
   

     [
        {
            ask: "Какое из этих слов является зарезервированным в JS?",
            ans: [
                {
                    content: "public",
                    check: CheckAnswer.right
                },
                {
                    content: "undefined",
                    check: CheckAnswer.second
                },
                {
                    content: "react",
                    check: CheckAnswer.falsy
                },
                {
                    content: "news",
                    check: CheckAnswer.falsy
                }

            ]

        },
        {
            ask: "Какое из этих слов не является зарезервированным в JS?",
            ans: [
                {
                    content: "NaN",
                    check: CheckAnswer.right
                },
                {
                    content: "null",
                    check: CheckAnswer.second
                },
                {
                    content: "switch",
                    check: CheckAnswer.falsy
                },
                {
                    content: "try",
                    check: CheckAnswer.falsy
                }

            ]

        },
        {
            ask: "Какое из этих слов не зарезервировано в JS?",
            ans: [
                {
                    content: "get",
                    check: CheckAnswer.right
                },
                {
                    content: "void",
                    check: CheckAnswer.second
                },
                {
                    content: "else",
                    check: CheckAnswer.falsy
                },
                {
                    content: "with",
                    check: CheckAnswer.falsy
                }

            ]
        }
    ],

    [
        {
            ask: "Какой принцип реализует структура данных \"Стек\"?",
            ans: [
                {
                    content: "LIFO",
                    check: CheckAnswer.right
                },
                {
                    content: "FIFO",
                    check: CheckAnswer.second
                },
                {
                    content: "FIFA",
                    check: CheckAnswer.falsy
                },
                {
                    content: "IIFH",
                    check: CheckAnswer.falsy
                }

            ]

        },
        {
            ask: "Цепочечная структура данных, где каждый узел состоит из двух частей: данных узла и указателя на следующий узел это?",
            ans: [
                {
                    content: "Связный список",
                    check: CheckAnswer.right
                },
                {
                    content: "Стек",
                    check: CheckAnswer.second
                },
                {
                    content: "Сет",
                    check: CheckAnswer.falsy
                },
                {
                    content: "Дерево",
                    check: CheckAnswer.falsy
                }

            ]

        },
        {
            ask: "Какая особенность у структуры данных \"Set\"",
            ans: [
                {
                    content: "Содержит уникальные значения",
                    check: CheckAnswer.right
                },
                {
                    content: "Является упорядоченной структурой",
                    check: CheckAnswer.second
                },
                {
                    content: "Реализует принцип LIFO",
                    check: CheckAnswer.falsy
                },
                {
                    content: "Содержит только числа",
                    check: CheckAnswer.falsy
                }

            ]
        }
    ],
    [
        {
            ask: "Каким способом нельзя проверить наличие свойств обьекта?",
            ans: [
                {
                    content: "Используя оператор \"is\"",
                    check: CheckAnswer.right
                },
                {
                    content: "Используя оператор \"in\"",
                    check: CheckAnswer.second
                },
                {
                    content: " Используя индексную нотация массива",
                    check: CheckAnswer.falsy
                },
                {
                    content: "Используяь метод hasOwnProperty",
                    check: CheckAnswer.falsy
                }

            ]

        },
        {
            ask: "Что из этого не является примером работы с асинхронным кодом ?",
            ans: [
                {
                    content: "Arrow function",
                    check: CheckAnswer.right
                },
                {
                    content: "Promises.",
                    check: CheckAnswer.second
                },
                {
                    content: "Async/await.",
                    check: CheckAnswer.falsy
                },
                {
                    content: "Callbacks",
                    check: CheckAnswer.falsy
                }

            ]

        },
        {
            ask: "Прием создания функции, способной запоминать ранее вычисленные результаты или значения это?",
            ans: [
                {
                    content: "Мемоизация",
                    check: CheckAnswer.right
                },
                {
                    content: "Деструктуризация",
                    check: CheckAnswer.second
                },
                {
                    content: "Алгоритмизация",
                    check: CheckAnswer.falsy
                },
                {
                    content: "Структуризация",
                    check: CheckAnswer.falsy
                }

            ]
        }
    ],
    [
        {
            ask: "Какую область видимости имеет переменная обьявленная через слово let",
            ans: [
                {
                    content: "Блочную",
                    check: CheckAnswer.right
                },
                {
                    content: "Функциональную",
                    check: CheckAnswer.second
                },
                {
                    content: "Строчную",
                    check: CheckAnswer.falsy
                },
                {
                    content: "Програмную",
                    check: CheckAnswer.falsy
                }

            ]

        },
        {
            ask: "Что обязательно должна иметь конструкция switch в js",
            ans: [
                {
                    content: "блок case",
                    check: CheckAnswer.right
                },
                {
                    content: "блок default",
                    check: CheckAnswer.second
                },
                {
                    content: "блок break",
                    check: CheckAnswer.falsy
                },
                {
                    content: "блок finally",
                    check: CheckAnswer.falsy
                }

            ]

        }, {
            ask: "Что из этого является тернарным оператором?",
            ans: [
                {
                    content: "let res = a ? one : two",
                    check: CheckAnswer.right
                },
                {
                    content: "let res = a ? one / two",
                    check: CheckAnswer.second
                },
                {
                    content: "let res = a ? one",
                    check: CheckAnswer.falsy
                },
                {
                    content: "let res = a ! one : two",
                    check: CheckAnswer.falsy
                }

            ]

        }

    ],
    [
        {
            ask: "какой из методов удаляет последний элемент из массива и возвращает его?",
            ans: [
                {
                    content: "pop",
                    check: CheckAnswer.right
                },
                {
                    content: "push ",
                    check: CheckAnswer.second
                },
                {
                    content: "shift",
                    check: CheckAnswer.falsy
                },
                {
                    content: "unshift",
                    check: CheckAnswer.falsy
                }

            ]

        },
        {
            ask: "Что делает метод shift с массивом?",
            ans: [
                {
                    content: "Удаляет первый элемент",
                    check: CheckAnswer.right
                },
                {
                    content: "удаляет последний элемент",
                    check: CheckAnswer.second
                },
                {
                    content: "Добавляет первый элемент",
                    check: CheckAnswer.falsy
                },
                {
                    content: "Добавляет элемент в конец",
                    check: CheckAnswer.falsy
                }

            ]

        },
        {
            ask: "Как нельзя объявить массив",
            ans: [
                {
                    content: "let arr= [Array]",
                    check: CheckAnswer.right
                },
                {
                    content: "let arr= new Array() ",
                    check: CheckAnswer.second
                },
                {
                    content: "let arr=[]",
                    check: CheckAnswer.falsy
                },
                {
                    content: "let arr=[3,4,5] ",
                    check: CheckAnswer.falsy
                }

            ]
        }
    ],
    

]
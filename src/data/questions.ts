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
            ask: "Каким будет результат выполнения операции 1 / 0 ?",
            ans: [
                {
                    content: "Infinity",
                    check: CheckAnswer.right
                },
                {
                    content: "NaN",
                    check: CheckAnswer.second
                },
                {
                    content: "undefined",
                    check: CheckAnswer.falsy
                },
                {
                    content: "Выведет ошибку",
                    check: CheckAnswer.falsy
                }

            ]

        },
        {
            ask: "Оператор нахождения остатка от деления в JavaScript - это:",
            ans: [
                {
                    content: "%",
                    check: CheckAnswer.right
                },
                {
                    content: "/",
                    check: CheckAnswer.second
                },
                {
                    content: "**",
                    check: CheckAnswer.falsy
                },
                {
                    content: "--",
                    check: CheckAnswer.falsy
                }

            ]

        },
        {
            ask: "Какое значение будет содержать свойство length при вызове [1,2,3,4,5].length?",
            ans: [
                {
                    content: "5",
                    check: CheckAnswer.right
                },
                {
                    content: "0",
                    check: CheckAnswer.second
                },
                {
                    content: "4",
                    check: CheckAnswer.falsy
                },
                {
                    content: "undefined",
                    check: CheckAnswer.falsy
                }

            ]

        }
    ],
    [
        {
            ask: "Какие значения, как результат, нельзя получить при проверке типа данных с помощью typeof?",
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
                    content: "bigint",
                    check: CheckAnswer.falsy
                },
                {
                    content: "string",
                    check: CheckAnswer.falsy
                }

            ]

        },
        {
            ask: "Чему будет равен результат вычисления композиции операций (8 / 2 + 5 - -3 / 2)?",
            ans: [
                {
                    content: "10.5",
                    check: CheckAnswer.right
                },
                {
                    content: "7.5",
                    check: CheckAnswer.second
                },
                {
                    content: "5",
                    check: CheckAnswer.falsy
                },
                {
                    content: "13",
                    check: CheckAnswer.falsy
                }

            ]

        },
        {
            ask: "Какой результат вызова функции Math.pow(2, 4)?",
            ans: [
                {
                    content: "16",
                    check: CheckAnswer.right
                },
                {
                    content: "32",
                    check: CheckAnswer.second
                },
                {
                    content: "8",
                    check: CheckAnswer.falsy
                },
                {
                    content: "4",
                    check: CheckAnswer.falsy
                }

            ]

        }
    ],
    [
        {
            ask: "С какой целью используется символ \n?",
            ans: [
                {
                    content: "Перевод строки",
                    check: CheckAnswer.right
                },
                {
                    content: "Деление",
                    check: CheckAnswer.second
                },
                {
                    content: "Спецсимвол одиночной кавычки",
                    check: CheckAnswer.falsy
                },
                {
                    content: "Умножение",
                    check: CheckAnswer.falsy
                }

            ]

        },
        {
            ask: "Каким образом можно проверить, кратно ли число a числу b?",
            ans: [
                {
                    content: "a % b === 0",
                    check: CheckAnswer.right
                },
                {
                    content: "b % a === 0",
                    check: CheckAnswer.second
                },
                {
                    content: "a / b === 0",
                    check: CheckAnswer.falsy
                },
                {
                    content: "a % b > 0",
                    check: CheckAnswer.falsy
                }

            ]

        }, {
            ask: "Каков будет результат вызова Math.abs(Math.floor(-46.867));?",
            ans: [
                {
                    content: "47",
                    check: CheckAnswer.right
                },
                {
                    content: "46",
                    check: CheckAnswer.second
                },
                {
                    content: "-46",
                    check: CheckAnswer.falsy
                },
                {
                    content: "NaN",
                    check: CheckAnswer.falsy
                }

            ]

        }
    ],
    [
        {
            ask: "Выберите верную запись стрелочной функции show:",
            ans: [
                {
                    content: "const show = () => {}",
                    check: CheckAnswer.right
                },
                {
                    content: "function show() {}",
                    check: CheckAnswer.second
                },
                {
                    content: "const show = () {}",
                    check: CheckAnswer.falsy
                },
                {
                    content: "const show = function() {}",
                    check: CheckAnswer.falsy
                }

            ]

        },
        {
            ask: "Каким будет результат выполнения кода '\nHey!'[1]?",
            ans: [
                {
                    content: "H",
                    check: CheckAnswer.right
                },
                {
                    content: "\n",
                    check: CheckAnswer.second
                },
                {
                    content: "n",
                    check: CheckAnswer.falsy
                },
                {
                    content: "e",
                    check: CheckAnswer.falsy
                }

            ]

        }, {
            ask: "Каким будет результат выполнения операции '4' * '9'?",
            ans: [
                {
                    content: "число 36",
                    check: CheckAnswer.right
                },
                {
                    content: "строка 49",
                    check: CheckAnswer.second
                },
                {
                    content: "строка 36",
                    check: CheckAnswer.falsy
                },
                {
                    content: "SyntaxError",
                    check: CheckAnswer.falsy
                }

            ]

        }

    ],
    [
        {
            ask: "Каким будет результат выполнения Math.min(10, 222, -5, 0, '-33')?",
            ans: [
                {
                    content: "-33",
                    check: CheckAnswer.right
                },
                {
                    content: "10",
                    check: CheckAnswer.second
                },
                {
                    content: "222",
                    check: CheckAnswer.falsy
                },
                {
                    content: "-5",
                    check: CheckAnswer.falsy
                }

            ]

        },
        {
            ask: "Как в JavaScript можно вызвать функцию myFun?",
            ans: [
                {
                    content: "myFun()",
                    check: CheckAnswer.right
                },
                {
                    content: "function myFun()",
                    check: CheckAnswer.second
                },
                {
                    content: "myFun",
                    check: CheckAnswer.falsy
                },
                {
                    content: "function()",
                    check: CheckAnswer.falsy
                }

            ]

        }, {
            ask: "Каков результат выполнения кода 13%5?",
            ans: [
                {
                    content: "3",
                    check: CheckAnswer.right
                },
                {
                    content: "~0.38",
                    check: CheckAnswer.second
                },
                {
                    content: "2.6",
                    check: CheckAnswer.falsy
                },
                {
                    content: "2",
                    check: CheckAnswer.falsy
                }

            ]

        }

    ],
    [
        {
            ask: "Каким типом данных является Infinity (бесконечность)?",
            ans: [
                {
                    content: "number",
                    check: CheckAnswer.right
                },
                {
                    content: "undefined",
                    check: CheckAnswer.second
                },
                {
                    content: "boolen",
                    check: CheckAnswer.falsy
                },
                {
                    content: "string",
                    check: CheckAnswer.falsy
                }

            ]

        },
        {
            ask: "Каким будет результат выполнения операции 4 * 'five'?",
            ans: [
                {
                    content: "NaN",
                    check: CheckAnswer.right
                },
                {
                    content: "строка 4five",
                    check: CheckAnswer.second
                },
                {
                    content: "число 20",
                    check: CheckAnswer.falsy
                },
                {
                    content: "SyntaxError",
                    check: CheckAnswer.falsy
                }

            ]

        },
        {
            ask: "NaN имеет числовой тип. Каким будет результат выражения (NaN + 101)?",
            ans: [
                {
                    content: "NaN",
                    check: CheckAnswer.right
                },
                {
                    content: "0",
                    check: CheckAnswer.second
                },
                {
                    content: "101",
                    check: CheckAnswer.falsy
                },
                {
                    content: "102",
                    check: CheckAnswer.falsy
                }

            ]
        }
    ],
    [
        {
            ask: "Какие значения выведутся в консоль в цикле let i = 0; while (i <= 3) {console.log(i); i++;}?",
            ans: [
                {
                    content: "0, 1, 2, 3",
                    check: CheckAnswer.right
                },
                {
                    content: "0, 1, 2",
                    check: CheckAnswer.second
                },
                {
                    content: "0, 1, 2, 3, 4",
                    check: CheckAnswer.falsy
                },
                {
                    content: "1, 2, 3, 4",
                    check: CheckAnswer.falsy
                }

            ]

        },
        {
            ask: "Если a = true, b = true, какое выражение вернет true:",
            ans: [
                {
                    content: "a && b",
                    check: CheckAnswer.right
                },
                {
                    content: "!a && b",
                    check: CheckAnswer.second
                },
                {
                    content: "a && !b",
                    check: CheckAnswer.falsy
                },
                {
                    content: "!(a && b)",
                    check: CheckAnswer.falsy
                }

            ]

        },
        {
            ask: "Что будет в результате выполнения кода: let a += 10;",
            ans: [
                {
                    content: "Ошибка Uncaught SyntaxError:...",
                    check: CheckAnswer.right
                },
                {
                    content: "a присвоится значение 0",
                    check: CheckAnswer.second
                },
                {
                    content: "a присвоится значение 10",
                    check: CheckAnswer.falsy
                },
                {
                    content: "a присвоится значение 20",
                    check: CheckAnswer.falsy
                }

            ]
        }
    ]

]
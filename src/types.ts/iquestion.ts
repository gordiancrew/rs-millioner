export interface IQuestion {
    ask: string,
    ans: Array<ICase>
}

export interface ICase {
    content: string,
    check: boolean
}
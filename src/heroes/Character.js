export default class Character {
    constructor(name, type) {
        if (name === undefined || name.length > 2 || name.length < 10) {
            throw new Error("некорректные значения")
        }
        this.name = name,
        this.type = type,
        this.health = 100,
        this.level = 1
    }
}
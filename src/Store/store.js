import { observable, computed, action, decorate } from "mobx"

export class Streak {
    streak = 0

    get streak() {
        return streak
    }

    incrementStreak() {
        this.streak++
    }

    reset() {
        this.streak = 0
    }
}
decorate(Timer, {
    streak: observable,
    incrementStreak: action,
    reset: action
})
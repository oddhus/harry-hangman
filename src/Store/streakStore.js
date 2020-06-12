import { observable, action, decorate, computed } from "mobx"

export class streakStore {
    streak = 0

    incrementStreak() {
        this.streak++
    }

    reset() {
        this.streak = 0
    }
}

decorate(streakStore, {
    streak: observable,
    incrementStreak: action,
    reset: action
})
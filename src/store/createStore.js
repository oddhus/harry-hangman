export function createStore() {
  // note the use of this which refers to observable instance of the store
  return {
    streak: 0,
    incrementStreak: () => createStore.streak++,
    resetStreak: () => createStore.streak = 0
  }
}


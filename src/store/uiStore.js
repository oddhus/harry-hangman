export function uiStore(){
  return {
    statusColor: "white",
    streakColors: ["white", "#fffde7", "#fff9c4", "#fff59d", "#fff176", "#ffee58", "#ffeb3b", "#fdd835", "#fbc02d", "#f9a825", "#f57f17"],
    attemptColors: ["#ef5350","#ef5350","#ffca28","#d4e157","#d4e157","#9ccc65"],
    nyttOrdButton(win, loss){
      if(win || loss){
        return "primary"
      } else {
        return "default"
      }
    },
    getStreakColor(streak){
      if (streak < this.streakColors.length){
        return this.streakColors[streak]
      } else {
        return this.streakColors[this.streakColors.length-1]
      }
    },
    getAttemptColor(win, loss, attempts){
      if (win){
        return "#c6ff00"
      } else if (loss){
        return "#ff1744"
      } else {
        return this.attemptColors[attempts]
      }
    }
  }
}
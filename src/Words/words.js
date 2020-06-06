const ord = [
    "HARRY POTTER",
    "HERMINE",
    "SEVERUS SLUR",
    "AVADA KEDAVRA",
    "FORSVAR MOT SVARTEKUNSTER"
]

export default function(){
    const randomNum = Math.floor(Math.random()*ord.length)
    return ord[randomNum].toUpperCase().split('')
}
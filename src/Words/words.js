const ord = [
    "HARRY POTTER",
    "HERMINE",
    "SEVERUS SLUR",
    "AVADA KADAVRA",
    "FORSVAR MOT SVARTEKUNSTER",
    "GRIFFING",
    "SMYGARD",
    "HÅSBLÅS",
    "RAVNKLO",
    "TRYLLESTAV",
    "STASJON NI OG TRE KVART",
    "TOM VENSTER",
    "DRACO MALFANG",
    "UNGARNSK HORNSVANS",
    "VALGHATTEN",
    "FLIRGOTT",
    "TRANSFIGURASJON",
    "EXITARMUS",
    "ABSURDULUM",
    "APPORTO",
    "MARTYRIO",
    "FORGLEMMIARIUM",
    "HEXUS HISTORICUS",
    "NOX",
    "SECTUMSEMPER",
    "GOMP",
    "TROLLMANN",
    "GRUMS",
    "GOMPEFØDT",
    "FUTT",
    "HALVBLODS",
    "ALLSMAKSBØNNER",
    "SJOKOLADEFROSK",
    "ALBUS HUMLESNURR",
    "BASILLISK",
    "SONDRE POTTER"
]

export default function(){
    const randomNum = Math.floor(Math.random()*ord.length)
    return ord[randomNum].toUpperCase().split('')
}
const ord = [
    "HARRY POTTER",
    "HERMINE GRANG",
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
    "SONDRE POTTER",
    "HOGG",
    "HEDVIG",
    "DEN TRINNE DAME",
    "NESTEN HODELØSE NIKK",
    "STØNNESTINA",
    "DUDLEIF DUMLING",
    "LILLY POTTER",
    "HUSNISSE",
    "NOLDUS",
    "REMUS LUPUS",
    "CHO CHANG",
    "FREDRIK DJERVELL",
    "NILUS LANGBALLE",
    "RONNY WILTERSEN",
    "BELLATRIX DEMONS",
    "DIAGONALLMENNINGEN",
    "GALTVORT",
    "GALTVANG",
    "GNOM",
    "RUMPELDUNK",
    "OLDSTAVEN",
    "AZKABAN",
    "BEFALIO",
    "GYGRID",
    "MALACRUXER",
    "NAGINI",
    "USYNLIGHETSKAPPEN",
    "GULLSNOPP",
    "FØNIKSORDENEN",
    "LUMOS",
    "VINGARDIUM LEVIOSA",
    "PROFESSOR KRENGLE",
    "MINERVA MCSNURP",
    "MYSTERIEKAMMERET",
    "ILDBEGERET",
    "SALAZAR SMYGARD",
    "OLIVANDER",
    "RITA SLITA",
    "ANIMAGUS",
    "VIKTOR KRUMM",
    "KARKAOFF",
    "NØDVENDIGHETSROMMET",
    "DOLOROSA UFFERT",
    "EXPLOSIO",
    "PETRIFICUS TOTALIS",
    "LAMSTIVOSLØVUS",
    "ST MUNGOS HOSPITAL",
    "NOLDUS",
    "KRYNKEL",
    "MAGIDEPARTEMENTET",
    "INKVISITORIALTROPPEN",
    "VINCENT KRABBE",
    "GRYLIUS GURGEL",
    "DØDSETER",
    "TANKETANK",
    "GRIFFINGS SVERD",
    "UKRUTTKARTET",
    "SOPELIM",
    "FLUMPULVER",
    "FNATTBUSSEN",
    "SNIKOSKOP",
    "BRØLER",
    "GUDRIK GRIFFING",
    "HELGA HÅSBLÅS",
    "RASLA RAVNKLO",
    "ALASTOR BISTER",
    "ELIKSIRER",
    "MAGIHISTORIE",
    "ASTRONOMI",
    "IMMIVERE",
    "GOMPOLOGI",
    "JØTUL",
    "HIPPOGRIFF",
    "STELL AV MAGISKE VESENER",
    "URTOLOGI",
    "TRETROLLMANNSTURNERINGEN",
    "PREFEKT",
    "PROFESSOR KISTE",
    "KENTAUR",
    "VARULV",
    "GNURRG",
    "VAKTMESTER NASK",
    "MADAM POMFRIT"
]

export default function(){
    const randomNum = Math.floor(Math.random()*ord.length)
    return ord[randomNum].toUpperCase().split('')
}
const db = connect('mongodb://localhost/ecommerce')
    //db.restaurants.insertMany(parsedData)

// 1) Crear la BD 'ecommerce' con las colecciones 'mensajes' y 'productos' y agregar 10 pruductos distintos a cada uno.
//use ecommerce

db.createCollection('mensajes')
db.createCollection('productos')

const messagesData = [{
        id: 1,
        email: "Sergio77@gmail.com",
        text: "Holaa",
        time: "2:36 PM"
    },
    {
        id: 2,
        email: "carmen-cita@gmail.com",
        text: "Hola, como vas?",
        time: "2:340PM"
    },
    {
        id: 3,
        email: "Sergio77@gmail.com",
        text: "bien y vos?",
        time: "2:41 PM"
    },
    {
        id: 4,
        email: "carmen-cita@gmail.com",
        text: "Bien bien, estudiando programacion",
        time: "2:41 PM"
    },
    {
        id: 5,
        email: "Sergio77@gmail.com",
        text: "eso sabía, que tan avanzado estás?",
        time: "2:42 PM"
    },
    {
        id: 6,
        email: "carmen-cita@gmail.com",
        text: "Estudio hace un año. Pero va a mil.",
        time: "2:42 PM"
    },
    {
        id: 7,
        email: "Sergio77@gmail.com",
        text: "Si seguro esta dificil.",
        time: "2:43 PM"
    },
    {
        id: 8,
        email: "carmen-cita@gmail.com",
        text: "excelente, segui asi",
        time: "2:43 PM"
    },
]
const productsData = [{
        "id": 1,
        "code": 1,
        "timestamp": 1646618974209,
        "name": "Shure SM57",
        "desc": "The Shure SM57 unidirectional dynamic microphone is exceptional for musical instrument pickup or for vocals.",
        "price": 26000,
        "image": "https://http2.mlstatic.com/D_NQ_NP_780014-MLA31062609678_062019-O.webp",
        "stock": 5
    },
    {
        "id": 2,
        "code": 2,
        "timestamp": 1646618983235,
        "name": "Neumann U 87",
        "desc": "A definitive legend for decades, the nickel Neumann U 87 Ai Studio Set is a large-diaphragm condenser microphone offering the timeless and special sound that remains highly coveted for singers, voice-over artists, announcers, producers, and recording engineers.",
        "price": 791981,
        "image": "https://http2.mlstatic.com/D_NQ_NP_867836-MLA32553351878_102019-O.webp",
        "stock": 10
    },
    {
        "id": 3,
        "code": 3,
        "timestamp": 1646618994386,
        "name": "AKG C414 ",
        "desc": "The AKG C414 is a classic large-diaphragm condenser microphone, standard equipment in many recording studios around the world.",
        "price": 438000,
        "image": "https://http2.mlstatic.com/D_NQ_NP_747230-MLA43319575663_082020-O.webp",
        "stock": 10
    },
    {
        "id": 4,
        "code": 4,
        "timestamp": 1646619011618,
        "name": "Rode Nt1a",
        "desc": "The NT1-A is a classic large-diaphragm true-condenser microphone that exhibits stunning warmth and clarity, making it ideal for recording vocals of all types.",
        "price": 100000,
        "image": "https://http2.mlstatic.com/D_NQ_NP_661645-MLA25825250252_072017-O.webp",
        "stock": 5
    },
    {
        "id": 5,
        "code": 5,
        "timestamp": 1646619021562,
        "name": "Sennheiser Me62 K6",
        "desc": "The ME 62 is an omni-directional microphone head suitable for K6 and K6P powering modules. It can be used for reporting, discussions and interviews.",
        "price": 135000,
        "image": "https://http2.mlstatic.com/D_NQ_NP_859709-MLA44816239710_022021-O.webp",
        "stock": 20
    }
]

db.mensajes.insertMany(messagesData)
db.productos.insertMany(productsData)

db.mensajes.find()
db.productos.find()

db.mensajes.estimatedDocumentCount()
db.productos.estimatedDocumentCount()

db.productos.insertOne({
    id: 11,
    code: 11,
    timestamp: 1646618974351,
    name: "Musicman Sterling Bass",
    desc: "The Sterling delivers comfort, functionality, and the precision craftsmanship and attention to detail ",
    price: 2600,
    image: "https://s3-us-west-2.amazonaws.com/static.music-man.com/website/images/instruments/instrument-44.png?1561908969",
    stock: 7
})

db.productos.find({ price: { $gte: 1000, $lte: 3000 } })
db.productos.find({ price: { $gt: 3000 } })
db.productos.find().skip(2).limit(1).sort({ price: 1 });

db.productos.updateMany({}, { $set: { stock: 100 } })
db.productos.updateMany({ price: { $gt: 4000 } }, { $set: { stock: 0 } })
db.productos.deleteMany({ price: { $lt: 1000 } })

db.createUser({
    user: "Sergio",
    pwd: "qwe321",
    roles: [{ role: "read", db: "ecommerce" }]
})

//VERIFICACION DE ROL "LECTURA"

// mongosh --port 27017  --authenticationDatabase "pepe" -u "ecommerce"
//use ecommerce

db.productos.find()
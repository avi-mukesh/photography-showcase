class Image {
    constructor(src, alt, location, story, title) {
        this.src = src
        this.alt = alt
        this.location = location
        this.story = story
        this.title = title
    }
}

function importAll(r) {
    let images = {}
    r.keys().forEach((item) => {
        images[item.replace("./", "")] = r(item)
    })
    return images
}
const imagePaths = importAll(
    require.context("./images/web", false, /\.(webp)$/)
)

const imageAlts = [
    "A pheasant",
    "Water flowing in a fountain",
    "Streetlight, river with reflections of building",
    "Tiltshifted image of top of building",
    "Art sculpture of walking legs",
    "Squirrel on all fours",
    "Lake, with trees in background",
    "Black and white photo of a G-Wagon",
    "A bird standing on a rock with sea in background",
    "Person standing on road in a light trail photo",
    "Person driving an Audi. Car in focus, rest of image blurred",
    "6 sushi rolls",
    "Mixed grill with chicken, spring onions, kebab",
    "A chicken burger",
    "Salmon pasta",
    "Boats and sea",
]

const imageLocations = [
    { lat: 53.2, lng: -1.8 },
    { lat: 52.4, lng: -1.5 },
    { lat: 52.475, lng: -2.24 },
    { lat: 51.51, lng: -0.08 },
    { lat: 53.8, lng: -1.55 },
    { lat: 52.59, lng: -2.14 },
    { lat: 51.36, lng: 0.55 },
    { lat: 51.5, lng: -0.02 },
    { lat: 50.06, lng: -5.71 },
    { lat: 51.38, lng: 0.57 },
    { lat: 51.18, lng: 1.2 },
    { lat: 51.44, lng: 0.27 },
    { lat: 52.5, lng: -1.93 },
    { lat: 52.19, lng: -2.21 },
    { lat: 45.45, lng: 12.33 },
    { lat: 45.43, lng: 12.34 },
]

const imageStories = [
    "While walking in the Peak District, my friend Joe spotted a pheasant. It was blending in with the surrounds so my blindass couldn't see it. Eventually, I managed to get a nice photo of it.",
    "While walking around Coventry, I found this water flow.",
    "In Manchester, on Oxford Road, on the bridge with love locks. The night before we watched the incredible Star Wars Episode 6 with a live orchestra.",
    "Simply a picture of a garden in the sky, from the top of Sky Garden.",
    "An interesting sculpture in Leeds, erected in 2001 by a man called Kenneth Armitage.",
    "I was chasing this squirrel around for ages to get a good shot. I'll take it.",
    "A photo I took in Capstone Park. Just a nice nature picture.",
    "Just a wild G Wagon in Canary Wharf.",
    "Along the beautiful cliff and rock formations at Land's End, I luckily managed to perfectly capture this seagull standing.",
    "My cousin and I went out one evening to try out light trail photography. This was one of the photos.",
    "Mukesh zooming around the Lydenn Hill Race Circuit in an Audi R8. By zooming, I mean going at 30mph",
    "First time I had sushi. Failed to use chopsticks, but got a decent photo.",
    "Peng mixed grill at Soho Tavern. The picture says it all.",
    "Best burger place. Hanbou. Try it.",
    "Salmon pasta in Venice. Bit pricey but was sick.",
    "From the top of St Mark's Campanile, captured a stunning image of where land meets water in the coast of Venice.",
]

const imageTitles = [
    "A pheasant surprise", // A pheasant surprise
    "H20",
    "Spooky manny",
    "Garden from sky garden",
    "Leeds legs", //bird on rock
    "SQRL",
    "Mother nature",
    "G, wagan",
    "Birdie",
    "Quicksilver", //light trail
    "Mukesh", //dad audi
    "Sushi", //sushi
    "Soho mixy", //mixed grill
    "Hanbou hanbou hanbou", //hanbou
    "Peng pasta", //
    "Denis in Venice",
]

export const images = new Array(imageAlts.length).fill(0).map(
    (_, i) =>
        new Image(
            imagePaths[
                `${(i + 1).toLocaleString(undefined, {
                    minimumIntegerDigits: 2,
                })}.webp`
            ],
            imageAlts[i],
            imageLocations[i],
            imageStories[i],
            imageTitles[i]
        )
)

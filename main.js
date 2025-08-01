const quotes = [
    "It's very hard to take yourself too seriously when you look at the world from outer space.",
    "Good habits, which bring our lower passions and appetites under automatic control, leave our natures free to explore the larger experiences of life.",
    "I have been truthful all along the way. The truth is more interesting, and if you tell the truth you never have to cover your tracks.",
    "They used to photograph Shirley Temple through gauze. They should photograph me through linoleum.",
    "Humor is just another defense against the universe.",
    "Laughter is an instant vacation.",
    "Part of the secret of success in life is to eat what you like and let the food fight it out inside.",
    "When we try to pick out anything by itself, we find it hitched to everything else in the Universe.",
    "An ounce of loyalty is worth a pound of cleverness.",
    "Absolute faith corrupts as absolutely as absolute power.",
]

const usedIndexes = new Set()
const quoteElement = document.getElementById("quote")

function generateQuote() {
    // quoteElement.innerHTML = "hello world" goes inside p tag and appear what's inside there
    if(usedIndexes.size >= quotes.length){
        usedIndexes.clear()
    }
    
    while (true){
    const randomIdx = Math.floor(Math.random() * quotes.length) //Получаем случайный индекс
    
    if (usedIndexes.has(randomIdx)) continue // Проверяем не использовали ли уже этот индекс

    const quote = quotes[randomIdx] //Берём цитату
    quoteElement.innerHTML = quote; //Отображаем её в HTML
    usedIndexes.add(randomIdx); //Добавляем индекс в usedIndexes
    break //Выходим из цикла
    }
}
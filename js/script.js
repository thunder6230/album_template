const cardArray = []
let nav_bar_open = false
$('#nav_btn').click(()=> {
    nav_bar_open = !nav_bar_open

    if (!nav_bar_open) {
         $('.navbar_hidden').slideUp("400")
    } else {
        $('.navbar_hidden').slideDown("400")
    }
})


const createCardArray = (count) => {
    
    let card = `<div class="card">
                        <svg width="100%" height="225">
                            <rect width="100%" height="225" style="fill: #55595C"/>
                            <text fill="#fff" font-size="20" dy="10.5" x="50%" y="50%" text-anchor="middle">Thumbnail</text>
                        </svg>
                        <div class="content">
                            <div class="text">
                                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                            </div>
                            <div class="card_footer">
                                <div class="footer_buttons">
                                    <button class="footer_button left">View</button>
                                    <button class="footer_button right">Edit</button>
                                </div>
                                <p>9 mins</p>
                            </div>
                        </div>
                    </div>`
    for (let i = 0; i < count; i++){
        cardArray.push(card)
    }
}

const appendElementsToDOM = () => {
    cardArray.forEach((card) => {
        let album = document.getElementById('main_album_flexbox')
        album.innerHTML = album.innerHTML + card
    })
}
const updateDOM = (count) => {
    createCardArray(count)
    appendElementsToDOM(count)
}

updateDOM(9)
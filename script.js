

/// HTML...
/// Make bar bg
/// H1 "You miss every shot you don't take... maybe today is the day..."
/// H2 "click for pickup line to try"

/// In modal
/// Default modal
/// Populate pickup like on top
/// css drew-reads.png
/// Populate waifu img under curtain
/// Modal click "Let's see if she liked that..."
/// css activate curtain translation
/// 1 sec delay change left to drew-laugh.png

/// Modal close
/// Appear buttons after reveal waifu click
/// onlclick close Modal "pretend to go to the restroom"
/// onlclick close Modal "make an awkward and sudden exit from the conversation"
/// onlclick close Modal "pretend to your roommate has an emergency"
/// Hidden press ESC to close Modal

// Get the modal
let modal = document.querySelector(".modal");
// Get the button that opens the modal
let hatButton = document.querySelector(".hatButton")
hatButton.addEventListener("click", () => { modal.style.display = "block" })

// How to close modal
let exitButtons = document.querySelectorAll(".close")
exitButtons.addEventListener("click", () => { modal.style.display = "none" })

// let unimpressedWaifu = document.q
// /// fetch random waifu from sfw/cringe and make into call-abled image
// let waifuStage = document.querySelector(".modalRight")
// /// Define where waifu image appears, RIGHT SIDE OF MODAL

// let pickUpLine =
//   fetch('https://getpickuplines.herokuapp.com/lines/random').then((response) => {
//     return response.json()
//   }).then((result) => {
//     console.log(result)
//   })
// /// fetch pickup line
// let speechBubble = document.querySelector(".speechBubble")
// /// Define where fetched line will go, HEADER BLOCK OF MODAL

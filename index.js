kaboom({
    global: true,
	width: 1600,
	height: 800,
	stretch: true,
	letterbox: true,
})
// SmokeAlert()
loadRoot("sprites/");
loadSprite("bean", "/sprites/bean.png")
loadSprite("ghosty", "/sprites/ghosty.png")

const player = add([
	sprite("Bean"),   // sprite() component makes it render as a sprite
	pos(120, 80),     // pos() component gives it position, also enables movement
//	rotate(0),        // rotate() component gives it rotation
	origin("center"), // origin() component defines the pivot point (defaults to "topleft")
])

// add([
//     sprite("red"),
//     pos(1500,100)
// ])
function colorKey () {
	
}
scene.setBackgroundColor(1)
let red = sprites.create(img`
. . . . . . . . f f f f f f f f f f 
. . . . . . . f f f f 2 2 2 f f f f 
. . . . . f f f 2 2 2 2 2 2 f f f f 
. . . . f f f 2 2 2 2 2 2 2 f f f f 
. . . f f 2 2 2 2 2 2 2 2 2 f f f f 
. . f f 2 2 2 2 2 2 2 2 2 2 f f f f 
. f f 2 2 2 2 2 2 2 2 2 2 2 f f f f 
f f 2 2 2 2 2 2 2 2 2 2 2 2 f f f f 
f f 2 2 2 2 2 2 2 2 2 2 2 2 f f f f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f 
f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f 
`, SpriteKind.Player)
red.setPosition(50, 44)
let blue = sprites.create(img`
f f f f f f f f f f f f f f f . 
f 8 8 8 8 8 8 8 8 8 8 8 8 8 f . 
f 8 8 8 8 8 8 8 8 8 8 8 8 8 f . 
f 8 8 8 8 8 8 8 8 8 8 8 8 8 f . 
f 8 8 8 8 8 8 8 8 8 8 8 8 8 f . 
f 8 8 8 8 8 8 8 8 8 8 8 8 8 f . 
f 8 8 8 8 8 8 8 8 8 8 8 8 f . . 
f 8 8 8 8 8 8 8 8 8 8 8 8 f . . 
f 8 8 8 8 8 8 8 8 8 8 8 f . . . 
f 8 8 8 8 8 8 8 8 8 8 f . . . . 
f 8 8 8 8 8 8 8 8 8 f . . . . . 
f 8 8 8 8 8 8 8 8 f . . . . . . 
f 8 8 8 8 8 8 f f . . . . . . . 
f 8 8 8 8 8 f . . . . . . . . . 
f 8 8 f f f . . . . . . . . . . 
f f f . . . . . . . . . . . . . 
`, SpriteKind.Player)
blue.setPosition(66, 60)
let green = sprites.create(img`
f f f f . . . . . . . . . . . . 
f 7 7 7 f f f . . . . . . . . . 
f 7 7 7 7 7 7 f . . . . . . . . 
f 7 7 7 7 7 7 7 f f . . . . . . 
f 7 7 7 7 7 7 7 7 7 f . . . . . 
f 7 7 7 7 7 7 7 7 7 7 f . . . . 
f 7 7 7 7 7 7 7 7 7 7 7 f . . . 
f 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
f 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 f . 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 f . 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 f . 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 f . 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 f . 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 f . 
f f f f f f f f f f f f f f f . 
f f f f f f f f f f f f f f f . 
f f f f f f f f f f f f f f f . 
f f f f f f f f f f f f f f f . 
`, SpriteKind.Player)
green.setPosition(66, 44)
let yellow = sprites.create(img`
f f f f f f f f f f f f f f f f f f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f 
. f 5 5 5 5 5 5 5 5 5 5 5 5 f f f f 
. f 5 5 5 5 5 5 5 5 5 5 5 5 f f f f 
. f 5 5 5 5 5 5 5 5 5 5 5 5 f f f f 
. . f 5 5 5 5 5 5 5 5 5 5 5 f f f f 
. . . f 5 5 5 5 5 5 5 5 5 5 f f f f 
. . . f 5 5 5 5 5 5 5 5 5 5 f f f f 
. . . . f 5 5 5 5 5 5 5 5 5 f f f f 
. . . . . f 5 5 5 5 5 5 5 5 f f f f 
. . . . . . f 5 5 5 5 5 5 5 f f f f 
. . . . . . . f 5 5 5 5 5 5 f f f f 
. . . . . . . . f f 5 5 5 5 f f f f 
. . . . . . . . . f f f f f f f f f 
. . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
yellow.setPosition(50, 60)
let simon = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . f f f f f . . . . . . 
. . . f f f f f f f f f . . . . 
. . f f f f f f f f f f f . . . 
. . f f f f f f f f f f f . . . 
. f f f f 1 f f f 1 f f f f . . 
. f f f f f f f f f f f f f . . 
. f f f f f f f f f f f f f . . 
. f f f 1 f f f f f 1 f f f . . 
. f f f f 1 f f f 1 f f f f . . 
. . f f f f 1 1 1 f f f f . . . 
. . f f f f f f f f f f f . . . 
. . . f f f f f f f f f . . . . 
. . . . . f f f f f . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
simon.setPosition(58, 52)

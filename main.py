def on_up_pressed():
    if mySprite.vy == 0:
        mySprite.vy = -175
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

def on_a_pressed():
    if mySprite.vy == 0:
        mySprite.vy = -175
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

textSprite2: TextSprite = None
Random_Number2 = 0
Random_number = 0
mySprite: Sprite = None
tiles.set_current_tilemap(tilemap("""
    level5
"""))
mySprite = sprites.create(img("""
        . . . . f f f f f . . . . . . . 
            . . . f e e e e e f . . . . . . 
            . . f d d d d e e e f . . . . . 
            . c d f d d f d e e f f . . . . 
            . c d f d d f d e e d d f . . . 
            c d e e d d d d e e b d c . . . 
            c d d d d c d d e e b d c . f f 
            c c c c c d d d e e f c . f e f 
            . f d d d d d e e f f . . f e f 
            . . f f f f f e e e e f . f e f 
            . . . . f e e e e e e e f f e f 
            . . . f e f f e f e e e e f f . 
            . . . f e f f e f e e e e f . . 
            . . . f d b f d b f f e f . . . 
            . . . f d d c d d b b d f . . . 
            . . . . f f f f f f f f f . . .
    """),
    SpriteKind.player)
controller.move_sprite(mySprite, 100, 0)
scene.camera_follow_sprite(mySprite)
mySprite.ay = 300
LIFE = 6

def on_update_interval():
    global Random_number, Random_Number2
    for index in range(2):
        Random_number = randint(0, 15)
        Random_Number2 = randint(0, 15)
        tiles.set_tile_at(tiles.get_tile_location(Random_number, Random_Number2),
            sprites.builtin.forest_tiles1)
        tiles.set_tile_at(tiles.get_tile_location(Random_number + 1, Random_Number2),
            sprites.builtin.forest_tiles2)
        tiles.set_tile_at(tiles.get_tile_location(Random_number + 2, Random_Number2),
            sprites.builtin.forest_tiles3)
        tiles.set_wall_at(tiles.get_tile_location(Random_number, Random_Number2), True)
        tiles.set_wall_at(tiles.get_tile_location(Random_number + 1, Random_Number2),
            True)
        tiles.set_wall_at(tiles.get_tile_location(Random_number + 2, Random_Number2),
            True)
game.on_update_interval(5000, on_update_interval)

def on_forever():
    global LIFE
    LIFE += -1
    pause(1000)
    textSprite2.destroy()
forever(on_forever)

def on_update_interval2():
    global textSprite2
    textSprite2 = textsprite.create(convert_to_text(LIFE), 6, 2)
    textSprite2.set_flag(SpriteFlag.RELATIVE_TO_CAMERA, True)
    textSprite2.set_position(150, 8)
    textSprite2.set_border(1, 6)
game.on_update_interval(500, on_update_interval2)

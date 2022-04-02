enum RadioMessage {
    message1 = 49434
}
namespace SpriteKind {
    export const AI = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile0`)
    tiles.setCurrentTilemap(tilemap`Level3`)
    Start_Finished = 1
    DELETE = 1
    Random_Number2 = 200
    LIFE = 0
    lEVEL_DETECT = 1
    Level_done = 1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    spriteutils.setVelocityAtAngle(mySprite9, spriteutils.angleFrom(mySprite9, sprite), 55)
    SCORE += Times_Hit
    Times_Hit += 1
})
sprites.onOverlap(SpriteKind.AI, SpriteKind.Projectile, function (sprite, otherSprite) {
    spriteutils.setVelocityAtAngle(mySprite9, spriteutils.angleFrom(mySprite9, sprite), 55)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    SCORE += 100
})
controller.combos.attachCombo("Up Down Down Left Left Left Right Up Up Down Down", function () {
    Start_Finished = 0
    Times_Hit = 1
    for (let index = 0; index < 10; index++) {
        pause(1000)
        LIFE = 1
        SCORE = 0
    }
    mySprite.destroy()
    mySprite2.destroy()
    mySprite4.destroy()
    mySprite6.destroy()
    mySprite7 = sprites.create(img`
        222.............................
        232.............................
        232.............................
        232.............................
        232.............................
        232.............................
        232.............................
        232.............................
        232.............................
        232.............................
        232.............................
        232.............................
        232.............................
        232.............................
        232.............................
        232.............................
        232.............................
        232.............................
        232.............................
        232.............................
        232.............................
        232.............................
        232.............................
        232.............................
        232.............................
        232.............................
        232.............................
        232.............................
        232.............................
        232.............................
        232.............................
        222.............................
        `, SpriteKind.Player)
    mySprite7.setFlag(SpriteFlag.StayInScreen, true)
    mySprite7.setPosition(16, 50)
    controller.player1.moveSprite(mySprite7, 0, 100)
    mySprite8 = sprites.create(img`
        .............................222
        .............................232
        .............................232
        .............................232
        .............................232
        .............................232
        .............................232
        .............................232
        .............................232
        .............................232
        .............................232
        .............................232
        .............................232
        .............................232
        .............................232
        .............................232
        .............................232
        .............................232
        .............................232
        .............................232
        .............................232
        .............................232
        .............................232
        .............................232
        .............................232
        .............................232
        .............................232
        .............................232
        .............................232
        .............................232
        .............................232
        .............................222
        `, SpriteKind.AI)
    mySprite8.setFlag(SpriteFlag.StayInScreen, true)
    mySprite8.setPosition(150, 50)
    mySprite9 = sprites.create(img`
        . 4 4 . 
        4 4 4 4 
        4 4 4 4 
        . 4 4 . 
        `, SpriteKind.Projectile)
    mySprite9.setBounceOnWall(true)
    mySprite9.setVelocity(50, 50)
    mySprite9.setFlag(SpriteFlag.StayInScreen, true)
    tiles.setCurrentTilemap(tilemap`level12`)
    Game_found = 1
})
let Random_number = 0
let Ball_Y = 0
let Random_Number_For_Yellow_and_Red_detections = 0
let High_Score_Name = ""
let High_Score = 0
let Name_of_Player = ""
let People_that_completed_game = 0
let Game_found = 0
let mySprite8: Sprite = null
let mySprite7: Sprite = null
let Times_Hit = 0
let SCORE = 0
let mySprite9: Sprite = null
let LIFE = 0
let Level_done = 0
let lEVEL_DETECT = 0
let DELETE = 0
let Random_Number2 = 0
let mySprite: Sprite = null
let Start_Finished = 0
let mySprite6: Sprite = null
let mySprite4: Sprite = null
let mySprite2: Sprite = null
mySprite2 = sprites.create(img`
    a 
    `, SpriteKind.Projectile)
mySprite2.setFlag(SpriteFlag.RelativeToCamera, true)
mySprite4 = sprites.create(img`
    a 
    `, SpriteKind.Projectile)
mySprite4.setFlag(SpriteFlag.RelativeToCamera, true)
let mySprite5 = sprites.create(img`
    a 
    `, SpriteKind.Projectile)
mySprite5.setFlag(SpriteFlag.RelativeToCamera, true)
let mySprite3 = sprites.create(img`
    a 
    `, SpriteKind.Projectile)
mySprite3.setFlag(SpriteFlag.RelativeToCamera, true)
mySprite6 = sprites.create(img`
    a 
    `, SpriteKind.Player)
mySprite6.setFlag(SpriteFlag.RelativeToCamera, true)
controller.combos.setTriggerType(TriggerType.Continuous)
controller.combos.setExtendedComboMode(true)
let Pause = 0
Start_Finished = 0
mySprite = sprites.create(assets.image`Player`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
scene.cameraFollowSprite(mySprite)
mySprite.ay = 300
tiles.setCurrentTilemap(tilemap`Level3`)
game.setDialogTextColor(6)
game.showLongText("To start playing doodle jump you first must learn the controls!", DialogLayout.Full)
game.showLongText("The controls are simple. To move you must hit left or right To jump just hit space or up arrow.", DialogLayout.Full)
game.showLongText("Some cool things you can do is warp to the other side of the screen just by moving to the opposite side", DialogLayout.Full)
game.showLongText("To progress you must get to the Red Block, You can also jump inside of a block to get more hight. ", DialogLayout.Full)
game.showLongText("You have to beat the stage before the timer hits a number based off of your level, That number will be told to you when on that stage", DialogLayout.Full)
game.showLongText("And there's a Cool thing that happens at the end of the game! Good Luck!", DialogLayout.Full)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile0`)
Random_Number2 = 200
Start_Finished = 1
DELETE = 1
let Level = 0
Level += 1
let Time_Till_Lose = 150
let K = 0
scene.setBackgroundColor(10)
color.setColor(10, color.__rgb(151, 216, 240))
let Timer = 150
lEVEL_DETECT = 1
Level_done = 1
game.onUpdate(function () {
    if (lEVEL_DETECT == 1) {
        game.showLongText("Your On Level " + Level, DialogLayout.Bottom)
        Level += 1
    }
    lEVEL_DETECT = 0
})
game.onUpdateInterval(1000, function () {
    if (Start_Finished == 1) {
        SCORE += 1
        LIFE += -1
    }
    if (Level == 5) {
        Timer = 130
    }
    if (Level == 10) {
        Timer = 110
    }
    if (Level == 15) {
        Timer = 90
    }
    if (Level == 20) {
        Timer = 70
    }
    if (Level == 25) {
        Timer = 50
    }
    if (Level == 30) {
        Timer = 30
    }
    if (Level == 35) {
        People_that_completed_game += 1
        blockSettings.writeNumber("People that Beat the game", People_that_completed_game)
        Name_of_Player = game.askForString("Your Name?", 3)
        game.splash("You Won", "Your the " + blockSettings.readNumber("People that Beat the game") + "person")
        SCORE = 1000 * K
        SCORE += 100000
        if (High_Score < SCORE) {
            High_Score = SCORE
            blockSettings.writeString(High_Score_Name, Name_of_Player)
            blockSettings.writeNumber("Number_HIGH", High_Score)
        }
        game.splash("Your Score " + SCORE, "High Score" + blockSettings.readNumber("Number_HIGH") + " Set By " + blockSettings.readString(High_Score_Name))
        game.over(true)
    }
})
forever(function () {
    if (Start_Finished == 1) {
        if (DELETE == 1) {
            for (let index = 0; index < 10; index++) {
                pause(1000)
                SCORE += -1
                LIFE += 1
            }
            DELETE = 0
        }
    }
})
forever(function () {
    if (Level_done == 1) {
        LIFE = Timer
        Level_done = 0
    }
})
forever(function () {
    if (Start_Finished == 1) {
        if (mySprite.x <= 10) {
            mySprite.x = 146
        }
        if (mySprite.x >= 149) {
            mySprite.x = 12
        }
    }
})
forever(function () {
    if (controller.A.isPressed() || controller.up.isPressed()) {
        if (mySprite.vy == 0) {
            mySprite.vy = -175
            mySprite.setFlag(SpriteFlag.GhostThroughWalls, true)
            pause(500)
            mySprite.setFlag(SpriteFlag.GhostThroughWalls, false)
        }
    }
})
forever(function () {
    if (controller.left.isPressed()) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . f f f f f f . . . 
            . . . . . . f 1 1 1 1 1 1 f . . 
            . . . . . f 1 1 1 1 1 1 1 1 f . 
            . . . . . f 1 1 1 1 1 1 1 1 f . 
            . f . . f 1 1 f 1 f 1 1 1 1 1 f 
            f 1 f f 1 1 1 1 1 1 1 1 1 1 1 f 
            f 1 f f 1 1 1 1 1 1 1 1 1 1 1 f 
            . f . . f 1 1 1 1 1 1 1 1 1 1 f 
            . . . . f 1 1 1 1 1 1 1 1 1 1 f 
            . . . . f 1 1 1 1 1 1 1 1 1 1 f 
            . . . . f f f f f f f f f f f f 
            . . . . f d d d d d d d d d d f 
            . . . . f f f f f f f f f f f f 
            . . . . f d d d d d d d d d d f 
            . . . . f f f f f f f f f f f f 
            . . . . . f . . f . . f . . f . 
            `],
        500,
        false
        )
    }
    if (controller.right.isPressed()) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . f f f f f f . . . . . . . 
            . . f 1 1 1 1 1 1 f . . . . . . 
            . f 1 1 1 1 1 1 1 1 f . . . . . 
            . f 1 1 1 1 1 1 1 1 f . . . . . 
            f 1 1 1 1 1 f 1 f 1 1 f . . f . 
            f 1 1 1 1 1 1 1 1 1 1 1 f f 1 f 
            f 1 1 1 1 1 1 1 1 1 1 1 f f 1 f 
            f 1 1 1 1 1 1 1 1 1 1 f . . f . 
            f 1 1 1 1 1 1 1 1 1 1 f . . . . 
            f 1 1 1 1 1 1 1 1 1 1 f . . . . 
            f f f f f f f f f f f f . . . . 
            f d d d d d d d d d d f . . . . 
            f f f f f f f f f f f f . . . . 
            f d d d d d d d d d d f . . . . 
            f f f f f f f f f f f f . . . . 
            . f . . f . . f . . f . . . . . 
            `],
        500,
        false
        )
    }
})
forever(function () {
    if (Start_Finished == 1) {
        Random_Number_For_Yellow_and_Red_detections = randint(0, 10)
        if (tiles.tileAtLocationEquals(tiles.getTileLocation(Random_Number_For_Yellow_and_Red_detections, 0), assets.tile`myTile1`)) {
        	
        } else {
            tiles.setTileAt(tiles.getTileLocation(Random_Number_For_Yellow_and_Red_detections, 0), assets.tile`myTile1`)
        }
    }
})
game.onUpdateInterval(500, function () {
    if (SCORE > 1000) {
        K += 1
        SCORE = 0
    }
    if (LIFE == 0) {
        Name_of_Player = game.askForString("Your Name?", 10)
        game.splash("You Lost", "Time Ran Out")
        SCORE = 1000 * K
        if (High_Score < SCORE) {
            High_Score = SCORE
            blockSettings.writeString(High_Score_Name, Name_of_Player)
            blockSettings.writeNumber("Number_HIGH", High_Score)
        }
        game.splash("Your Score " + SCORE, "High Score " + blockSettings.readNumber("Number_HIGH") + " Set By " + blockSettings.readString(High_Score_Name))
        game.reset()
    }
})
game.onUpdateInterval(500, function () {
    mySprite4.sayText("Timer")
    mySprite2.sayText(LIFE)
    mySprite3.sayText("Score")
    mySprite5.sayText("" + SCORE)
    mySprite6.sayText("" + K + "K")
})
game.onUpdateInterval(500, function () {
    mySprite2.setPosition(150, 15)
    mySprite4.setPosition(125, 15)
    mySprite5.setPosition(45, 15)
    mySprite3.setPosition(20, 15)
    mySprite6.setPosition(64, 15)
})
game.onUpdateInterval(500, function () {
    if (Game_found == 1) {
        Ball_Y = mySprite9.y
        mySprite8.setPosition(150, Ball_Y)
    }
})
game.onUpdateInterval(200, function () {
    if (Start_Finished == 1) {
        for (let index = 0; index < 1; index++) {
            Random_Number2 += -2
            Random_number = randint(1, 9)
            tiles.setTileAt(tiles.getTileLocation(Random_number, Random_Number2), sprites.builtin.forestTiles4)
            tiles.setWallAt(tiles.getTileLocation(Random_number, Random_Number2), true)
            if (randint(0, 10) == 10) {
                tiles.setTileAt(tiles.getTileLocation(Random_number, Random_Number2), sprites.builtin.forestTiles1)
                tiles.setWallAt(tiles.getTileLocation(Random_number, Random_Number2), true)
                tiles.setTileAt(tiles.getTileLocation(Random_number + 1, Random_Number2), sprites.builtin.forestTiles3)
                tiles.setWallAt(tiles.getTileLocation(Random_number + 1, Random_Number2), true)
            }
            if (randint(0, 20) == 10) {
                tiles.setTileAt(tiles.getTileLocation(Random_number, Random_Number2), sprites.builtin.forestTiles1)
                tiles.setWallAt(tiles.getTileLocation(Random_number, Random_Number2), true)
                tiles.setTileAt(tiles.getTileLocation(Random_number + 1, Random_Number2), sprites.builtin.forestTiles2)
                tiles.setWallAt(tiles.getTileLocation(Random_number + 1, Random_Number2), true)
                tiles.setTileAt(tiles.getTileLocation(Random_number + 2, Random_Number2), sprites.builtin.forestTiles3)
                tiles.setWallAt(tiles.getTileLocation(Random_number + 2, Random_Number2), true)
            }
            if (randint(0, 10) == 5) {
                if (tiles.tileAtLocationEquals(tiles.getTileLocation(Random_number, Random_Number2 - 1), sprites.builtin.forestTiles2)) {
                	
                } else {
                    tiles.setTileAt(tiles.getTileLocation(Random_number, Random_Number2 - 1), assets.tile`myTile2`)
                }
            }
        }
    }
})

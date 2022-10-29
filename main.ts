music.setTempo(120)
basic.forever(function () {
    music.setVolume(225)
    music.playTone(262, music.beat(BeatFraction.Half))
    basic.showIcon(IconNames.Heart)
    music.setVolume(50)
    music.playTone(392, music.beat(BeatFraction.Half))
    basic.showIcon(IconNames.SmallHeart)
})

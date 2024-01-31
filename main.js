document.addEventListener("DOMContentLoaded", function () {
  const drumSounds = {
    kick: "_Tzl-awesome-kick-drum-41824.mp3",
    snare: "WqsF-bongo-drum-roll-1-184062.mp3",
    hihat: "XUR_-failure-drum-sound-effect-2-7184.mp3",
    clap: "lZgS-fresh_snap-37385.mp3",
    openhat:
      "HCTu-hit-drum-superclasher-cinematic-trailer-sound-effects-124759.mp3",
    boom: "zcto-orch-006-cymbal-rollwav-14781.mp3",
    ride: "sqWK-punch-boxing-02wav-14897.mp3",
    tom: "wPbF-tada-military-1-183974.mp3",
    tink: "_jkQ-tada-military-2-183973.mp3",
  };

  const audioElements = {};
  for (const drum in drumSounds) {
    audioElements[drum] = new Audio(drumSounds[drum]);
  }

  function playSound(sound) {
    if (sound && audioElements[sound]) {
      audioElements[sound].currentTime = 0;
      audioElements[sound].play();
    }
  }

  const drums = document.querySelectorAll(".drum");
  drums.forEach((drum) => {
    drum.addEventListener("click", function () {
      const sound = this.dataset.sound;
      playSound(sound);
      highlightDrum(this);
      setTimeout(() => removeHighlight(this), 200);
    });
  });

  document.addEventListener("keydown", function (event) {
    const keySounds = {
      KeyA: "kick",
      KeyS: "snare",
      KeyD: "hihat",
      KeyF: "clap",
      KeyG: "openhat",
      KeyH: "boom",
      KeyJ: "ride",
      KeyK: "tom",
      KeyL: "tink",
    };

    const sound = keySounds[event.code];
    playSound(sound);
  });

  document.addEventListener("click", function () {
    playSound("defaultSound");
  });
});

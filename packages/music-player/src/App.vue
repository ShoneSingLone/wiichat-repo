<template>
  <div class="flex vertical middle center height100">
    <ACard>
      <audio controls :src="audioSrc">
        Your browser does not support the
        <code>audio</code> element.
      </audio>
    </ACard>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import "@ventose/ui/src/styles/common.scss";
import { loadLib } from "@ventose/ui/src/utils/loader";
import { URL_SOUNDJS } from "@ventose/ui/src/utils/libList";
import $ from "jquery";

export default defineComponent({
  mounted(props) {
    (async () => {
      const createjs = await loadLib(URL_SOUNDJS);
      var src = `https://www.ventose.xyz/static/media/demo1.m4a`;

      var instance;
      var positionInterval;
      var seeking = false;

      $("#position").css("display", "none");
      $("#playPauseBtn").attr("disabled", true);
      $("#stopBtn").attr("disabled", true);
      $("#track").css("display", "none");

      function handleLoadComplete(event) {
        examples.hideDistractor();

        $("#track").css("display", "block");
        $("#loading").css("display", "none");
        $("#progress").css("display", "none");
        $("#position").css("display", "block");

        instance = createjs.Sound.play("music");
        instance.addEventListener("complete", function () {
          clearInterval(positionInterval);
          $("#playBtn").removeClass("pauseBtn").addClass("playBtn");
          $("#stopBtn").attr("disabled", true);
        });
        $("#playPauseBtn").attr("disabled", false);
        $("#playBtn").removeClass("playBtn").addClass("pauseBtn");
        $("#playBtn").click(function (event) {
          if (instance.playState == createjs.Sound.PLAY_FINISHED) {
            instance.play();
            $("#playBtn").removeClass("playBtn").addClass("pauseBtn");
            trackTime();
            return;
          } else {
            instance.paused
              ? (instance.paused = false)
              : (instance.paused = true);
          }

          if (instance.paused) {
            $("#playBtn").removeClass("pauseBtn").addClass("playBtn");
          } else {
            $("#playBtn").removeClass("playBtn").addClass("pauseBtn");
          }
        });
        $("#stopBtn").click(function (event) {
          instance.stop();
          //console.log("stop");
          clearInterval(positionInterval);
          $("#playBtn").removeClass("pauseBtn").addClass("playBtn");
          $("#thumb").css("left", 0);
        });
        $("#stopBtn").attr("disabled", false);

        trackTime();

        // http://forums.mozillazine.org/viewtopic.php?f=25&t=2329667
        $("#thumb").mousedown(function (event) {
          //console.log("mousedown");
          var div = $();
          $("#player").append($("<div id='blocker'></div>"));
          seeking = true;
          $("#player").mousemove(function (event) {
            // event.offsetX is not supported by FF, hence the following from http://bugs.jquery.com/ticket/8523
            if (typeof event.offsetX === "undefined") {
              // || typeof event.offsetY === "undefined") {
              var targetOffset = $(event.target).offset();
              event.offsetX = event.pageX - targetOffset.left;
              //event.offsetY = event.pageY - targetOffset.top;
            }
            $("#thumb").css(
              "left",
              Math.max(
                0,
                Math.min(
                  $("#track").width() - $("#thumb").width(),
                  event.offsetX - $("#track").position().left
                )
              )
            );
          });
          $("#player").mouseup(function (event) {
            //console.log("mouseup");
            seeking = false;
            $(this).unbind("mouseup mousemove");
            var pos = $("#thumb").position().left / $("#track").width();
            instance.position = pos * instance.duration;
            $("#blocker").remove();
          });
        });
      }

      var dragOffset;
      function trackTime() {
        positionInterval = setInterval(function (event) {
          if (seeking) {
            return;
          }
          $("#thumb").css(
            "left",
            (instance.position / instance.duration) * $("#track").width()
          );
        }, 30);
      }

      const tag_music_demo = "TAG_MUSIC_DEMO";
      createjs.Sound.alternateExtensions = ["mp3"]; // add other extensions to try loading if the src file extension is not supported
      createjs.Sound.addEventListener(
        "fileload",
        createjs.proxy(handleLoadComplete, this)
      ); // add an event listener for when load is completed
      createjs.Sound.registerSound(src, tag_music_demo, true);
    })();
  },
  data() {
    return {
      audioSrc: `https://www.ventose.xyz/static/media/demo1.m4a`,
    };
  },
});
</script>


<style>
#player {
  width: 451px;
  height: 101px;
  background-image: url("./assets/player.png");

  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
}

#blocker {
  background-color: #f00;
  opacity: 0;
  width: 451px;
  height: 101px;
  cursor: pointer;
}

#player DIV {
  position: absolute;
}

.button {
  width: 64px;
  height: 64px;
  top: 31px;
}

#playBtn {
  left: 324px;
}

.playBtn {
  background-image: url("./assets/buttonPlay.png");
}

.playBtn:hover {
  background-image: url("./assets/buttonPlayHover.png");
}

.pauseBtn {
  background-image: url("./assets/buttonPause.png");
}

.pauseBtn:hover {
  background-image: url("./assets/buttonPauseHover.png");
}

#stopBtn {
  left: 387px;
}

.stopBtn {
  background-image: url("./assets/buttonStop.png");
}

.stopBtn:hover {
  background-image: url("./assets/buttonStopHover.png");
}

#labels {
  top: 35px;
  left: 37px;
  position: absolute;
}

#player LABEL {
  color: #336666;
}

#song {
}

#assetsist {
  top: 52px;
  left: 37px;
}

#track {
  width: 262px;
  height: 5px;
  top: 78px;
  left: 40px;
  background-image: url("./assets/scubberBar.png");
}

#thumb {
  cursor: pointer;
  background-image: url("./assets/scrubberPlayhead.png");
  width: 16px;
  height: 16px;
  top: -5px;
}

.disabled {
  opacity: 0.5;
}
</style>

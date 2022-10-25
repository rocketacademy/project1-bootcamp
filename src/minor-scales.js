import "./App.css";
import "./table-style.css";
import { Howl } from "howler";

const MinorScales = () => {
  const audioClipsMinor = [
    "https://d33wubrfki0l68.cloudfront.net/67277d07acfa080610ee1c20f3469050c6c9c34a/b49f6/mp3/a-natural-minor-scale.mp3",
    "https://d33wubrfki0l68.cloudfront.net/2ded38bfb34d5e5a4c488babeedc7df8156c500d/f5f95/mp3/b-natural-minor-scale.mp3",
    "https://d33wubrfki0l68.cloudfront.net/f83514072671a20d33daeb79e2a3225e2463879b/2666a/mp3/c-natural-minor-scale.mp3",
    "https://d33wubrfki0l68.cloudfront.net/07efc8c000f0e540e04396e87e7f72e320b980f5/6e5a5/mp3/d-natural-minor-scale.mp3",
    "https://d33wubrfki0l68.cloudfront.net/4e37de1f2cfd58325808d97fcd7e2137f13064df/87019/mp3/e-natural-minor-scale.mp3",
    "https://d33wubrfki0l68.cloudfront.net/26443cdd6a41ec0ba77bf7ef97aee9f5907586ca/32398/mp3/f-natural-minor-scale.mp3",
    "https://d33wubrfki0l68.cloudfront.net/a365fc96c75ea9dd8e13052c98aef61be3400737/568c7/mp3/g-natural-minor-scale.mp3",
    "https://d33wubrfki0l68.cloudfront.net/a33b68d134d80ec652bf5b744d7c29ffb65efa04/6dd38/mp3/c-sharp-natural-minor-scale.mp3",
    "https://d33wubrfki0l68.cloudfront.net/26019784371f38f49df526ddf51fb3b63455482b/82e3f/mp3/d-sharp-natural-minor-scale.mp3",
    "https://d33wubrfki0l68.cloudfront.net/5d9bc083aa116ae5aece1be6030685f088b3e6e3/321ae/mp3/f-sharp-natural-minor-scale.mp3",
    "https://d33wubrfki0l68.cloudfront.net/0e6862425ca02c3f119fcbe256cc40d09f263fdb/049e1/mp3/g-sharp-natural-minor-scale.mp3",
    "https://d33wubrfki0l68.cloudfront.net/1fb9020889e9b32f9d675b1ced47d86fec50b0aa/f17b0/mp3/b-flat-natural-minor-scale.mp3",
  ];

  const soundPlay = (src) => {
    const sound = new Howl({
      src,
      html5: true,
      preload: true,
    });
    sound.play();
  };
  return (
    <>
      <div className="padding-container" id="minor-scales-section">
        <div className="scales-table">
          <div className="scales-table-title">
            <h1>Minor Scales ♫</h1>
            <p className="fine-text">
              ♪ Click on the bold notes to know how a specific scale sounds like
              ♪
            </p>
          </div>
          <div className="flex">
            <h4>W H W W H W W</h4>
            <h5>Accidentals</h5>
          </div>

          <div className="scales-table-main">
            <div className="flex-row">
              <div className="flex-left">
                <button
                  className="note-button"
                  onClick={() => soundPlay(audioClipsMinor[0])}
                >
                  Am:
                </button>
              </div>
              <div className="flex-text">
                <div>A B C D E F G A</div>
              </div>
              <div className="flex-accidentals">
                <div className="box"></div>
              </div>
            </div>

            <div className="flex-row">
              <div className="flex-left">
                <button
                  className="note-button"
                  onClick={() => soundPlay(audioClipsMinor[1])}
                >
                  Bm:
                </button>
              </div>
              <div className="flex-text">
                <div>B C# D E F# G A B</div>
              </div>
              <div className="flex-accidentals">
                <div>2 Sharps</div>
              </div>
            </div>

            <div className="flex-row">
              <div className="flex-left">
                <button
                  className="note-button"
                  onClick={() => soundPlay(audioClipsMinor[2])}
                >
                  Cm:
                </button>
              </div>
              <div className="flex-text">
                <div>C D Eb F G Ab Bb C</div>
              </div>
              <div className="flex-accidentals">
                <div>3 Flats</div>
              </div>
            </div>

            <div className="flex-row">
              <div className="flex-left">
                <button
                  className="note-button"
                  onClick={() => soundPlay(audioClipsMinor[3])}
                >
                  Dm:
                </button>
              </div>
              <div className="flex-text">
                <div>D E F G A Bb C D</div>
              </div>
              <div className="flex-accidentals">
                <div>1 Flat</div>
              </div>
            </div>

            <div className="flex-row">
              <div className="flex-left">
                <button
                  className="note-button"
                  onClick={() => soundPlay(audioClipsMinor[4])}
                >
                  Em:
                </button>
              </div>
              <div className="flex-text">
                <div>E F# G A B C D E</div>
              </div>
              <div className="flex-accidentals">
                <div>1 Sharp</div>
              </div>
            </div>

            <div className="flex-row">
              <div className="flex-left">
                <button
                  className="note-button"
                  onClick={() => soundPlay(audioClipsMinor[5])}
                >
                  Fm:
                </button>
              </div>
              <div className="flex-text">
                <div>F G Ab Bb C Db Eb F</div>
              </div>
              <div className="flex-accidentals">
                <div>4 Flats</div>
              </div>
            </div>

            <div className="flex-row">
              <div className="flex-left">
                <button
                  className="note-button"
                  onClick={() => soundPlay(audioClipsMinor[6])}
                >
                  Gm:
                </button>
              </div>
              <div className="flex-text">
                <div>G A Bb C D Eb F G</div>
              </div>
              <div className="flex-accidentals">
                <div>2 Flats</div>
              </div>
            </div>

            <div className="flex-row">
              <div className="flex-left">
                <button
                  className="note-button"
                  onClick={() => soundPlay(audioClipsMinor[7])}
                >
                  C#m:
                </button>
              </div>
              <div className="flex-text">
                <div>C# D# E F# G# A B C#</div>
              </div>
              <div className="flex-accidentals">
                <div>5 Sharps</div>
              </div>
            </div>

            <div className="flex-row">
              <div className="flex-left">
                <button
                  className="note-button"
                  onClick={() => soundPlay(audioClipsMinor[8])}
                >
                  D#m:
                </button>
              </div>
              <div className="flex-text">
                <div>D# F F# G# A# B C# D#</div>
              </div>
              <div className="flex-accidentals">
                <div>6 Sharps</div>
              </div>
            </div>

            <div className="flex-row">
              <div className="flex-left">
                <button
                  className="note-button"
                  onClick={() => soundPlay(audioClipsMinor[9])}
                >
                  F#m:
                </button>
              </div>
              <div className="flex-text">
                <div>F# G# A B C# D E F#</div>
              </div>
              <div className="flex-accidentals">
                <div>4 Sharps</div>
              </div>
            </div>

            <div className="flex-row">
              <div className="flex-left">
                <button
                  className="note-button"
                  onClick={() => soundPlay(audioClipsMinor[10])}
                >
                  G#m:
                </button>
              </div>
              <div className="flex-text">
                <div>G# A# B C# D# E F# G#</div>
              </div>
              <div className="flex-accidentals">
                <div>6 Sharps</div>
              </div>
            </div>

            <div className="flex-row">
              <div className="flex-left">
                <button
                  className="note-button"
                  onClick={() => soundPlay(audioClipsMinor[11])}
                >
                  Bb:
                </button>
              </div>
              <div className="flex-text">
                <div>Bb C Db Eb F Gb Ab Bb</div>
              </div>
              <div className="flex-accidentals">
                <div>5 Flats</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MinorScales;

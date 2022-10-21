import "./App.css";
import "./table-style.css";
import { Howl } from "howler";

const MajorScales = () => {
  const audioClipsMajor = [
    "https://d33wubrfki0l68.cloudfront.net/076d85706126547b668e9159d819af5c59a18b34/905dd/mp3/c-major-scale.mp3",
    "https://d33wubrfki0l68.cloudfront.net/691be0b59b5fb32c809e340106cf415e2a7a3cb4/2430f/mp3/d-major-scale.mp3",
    "https://d33wubrfki0l68.cloudfront.net/b7f2350a13d0fcf980c0a1e2ee05ad6f2b7dc6f5/70797/mp3/e-major-scale.mp3",
    "https://d33wubrfki0l68.cloudfront.net/e314ca6e6d8372ed1f801d24b7e04d590757d525/26046/mp3/f-major-scale.mp3",
    "https://d33wubrfki0l68.cloudfront.net/e441a986a0ec6ed8858022a211428bc02fdd6402/38614/mp3/g-major-scale.mp3",
    "https://d33wubrfki0l68.cloudfront.net/3c3a78f0ce2a01f89251d28bcb701d770fb236e8/5dbaf/mp3/a-major-scale.mp3",
    "https://d33wubrfki0l68.cloudfront.net/10f8a86cc491151d4e5eed5894a0cbee63d93d46/66805/mp3/b-major-scale.mp3",
    "https://d33wubrfki0l68.cloudfront.net/599410fbcdff4197ad76a53612a096e85bcf8305/58afd/mp3/f-sharp-major-scale.mp3",
    "https://d33wubrfki0l68.cloudfront.net/3b23f58e7e385f379ef721cf6e66b0a1c8056499/2f5f1/mp3/d-flat-major-scale.mp3",
    "https://d33wubrfki0l68.cloudfront.net/cd8d345a1fd315968cf68fb52a92e3caa36e0bc2/ee4ed/mp3/a-flat-major-scale.mp3",
    "https://d33wubrfki0l68.cloudfront.net/386e761c7af8c7febe9f3984c24c0e810be70a6a/d03e4/mp3/e-flat-major-scale.mp3",
    "https://d33wubrfki0l68.cloudfront.net/d929e4b14e8d8f7ded2762174514fed7bbae5de2/2743f/mp3/b-flat-major-scale.mp3",
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
      <div className="padding-container" id="major-scales-section">
        <div className="scales-table">
          <div className="scales-table-title">
            <h1>Major Scales ♫</h1>
            <p className="fine-text">
              ♪ Click on the bold notes to know how a specific scale sounds like
              ♪
            </p>
          </div>
          <div className="flex">
            <h4>W W H W W W H</h4>
            <h5>Accidentals</h5>
          </div>

          <div className="scales-table-main">
            <div className="flex-row">
              <div className="flex-left">
                <button
                  className="note-button"
                  onClick={() => soundPlay(audioClipsMajor[0])}
                >
                  C:
                </button>
              </div>
              <div className="flex-text">
                <div>C D E F G A B C</div>
              </div>
              <div className="flex-accidentals">
                <div className="box"></div>
              </div>
            </div>

            <div className="flex-row">
              <div className="flex-left">
                <button
                  className="note-button"
                  onClick={() => soundPlay(audioClipsMajor[1])}
                >
                  D:
                </button>
              </div>
              <div className="flex-text">
                <div>D E F# G A B C# D</div>
              </div>
              <div className="flex-accidentals">
                <div>2 Sharps</div>
              </div>
            </div>

            <div className="flex-row">
              <div className="flex-left">
                <button
                  className="note-button"
                  onClick={() => soundPlay(audioClipsMajor[2])}
                >
                  E:
                </button>
              </div>
              <div className="flex-text">
                <div>E F# G# A B C# D# E</div>
              </div>
              <div className="flex-accidentals">
                <div>4 Sharps</div>
              </div>
            </div>

            <div className="flex-row">
              <div className="flex-left">
                <button
                  className="note-button"
                  onClick={() => soundPlay(audioClipsMajor[3])}
                >
                  F:
                </button>
              </div>
              <div className="flex-text">
                <div>F G A Bb C D E F</div>
              </div>
              <div className="flex-accidentals">
                <div>1 Flat</div>
              </div>
            </div>

            <div className="flex-row">
              <div className="flex-left">
                <button
                  className="note-button"
                  onClick={() => soundPlay(audioClipsMajor[4])}
                >
                  G:
                </button>
              </div>
              <div className="flex-text">
                <div>G A B C D E F# G</div>
              </div>
              <div className="flex-accidentals">
                <div>1 Sharp</div>
              </div>
            </div>

            <div className="flex-row">
              <div className="flex-left">
                <button
                  className="note-button"
                  onClick={() => soundPlay(audioClipsMajor[5])}
                >
                  A:
                </button>
              </div>
              <div className="flex-text">
                <div>A B C# D E F# G# A</div>
              </div>
              <div className="flex-accidentals">
                <div>3 Sharps</div>
              </div>
            </div>

            <div className="flex-row">
              <div className="flex-left">
                <button
                  className="note-button"
                  onClick={() => soundPlay(audioClipsMajor[6])}
                >
                  B:
                </button>
              </div>
              <div className="flex-text">
                <div>B C# D# E F# G# A# B</div>
              </div>
              <div className="flex-accidentals">
                <div>5 Sharps</div>
              </div>
            </div>

            <div className="flex-row">
              <div className="flex-left">
                <button
                  className="note-button"
                  onClick={() => soundPlay(audioClipsMajor[7])}
                >
                  F#:
                </button>
              </div>
              <div className="flex-text">
                <div>F# G# A# B C# D# F F#</div>
              </div>
              <div className="flex-accidentals">
                <div>6 Sharps</div>
              </div>
            </div>

            <div className="flex-row">
              <div className="flex-left">
                <button
                  className="note-button"
                  onClick={() => soundPlay(audioClipsMajor[8])}
                >
                  Db:
                </button>
              </div>
              <div className="flex-text">
                <div>Db Eb F Gb Ab Bb C Db</div>
              </div>
              <div className="flex-accidentals">
                <div>5 Flats</div>
              </div>
            </div>

            <div className="flex-row">
              <div className="flex-left">
                <button
                  className="note-button"
                  onClick={() => soundPlay(audioClipsMajor[9])}
                >
                  Ab:
                </button>
              </div>
              <div className="flex-text">
                <div>Ab Bb C Db Eb F G Ab</div>
              </div>
              <div className="flex-accidentals">
                <div>5 Flats</div>
              </div>
            </div>

            <div className="flex-row">
              <div className="flex-left">
                <button
                  className="note-button"
                  onClick={() => soundPlay(audioClipsMajor[10])}
                >
                  Eb:
                </button>
              </div>
              <div className="flex-text">
                <div>Eb F G Ab Bb C D Eb</div>
              </div>
              <div className="flex-accidentals">
                <div>4 Flats</div>
              </div>
            </div>

            <div className="flex-row">
              <div className="flex-left">
                <button
                  className="note-button"
                  onClick={() => soundPlay(audioClipsMajor[11])}
                >
                  Bb:
                </button>
              </div>
              <div className="flex-text">
                <div>Bb C D Eb F G A Bb</div>
              </div>
              <div className="flex-accidentals">
                <div>3 Flats</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MajorScales;

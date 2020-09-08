export function youtube_parser(url: String) {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return match && match[7].length == 11  ? match[7] : false;
  }

export async function getSongInfo(VideoURL:String) {

    const id = youtube_parser(VideoURL)
    console.log(id);
    console.log(`https://www.yt-mp3s.com/@api/json/mp3/${id}`);
    const res = await fetch(
      `https://www.yt-mp3s.com/@api/json/mp3/${id}`,
      {
        method: "GET",
        mode: 'cors',
        headers: {}
      }
    );
    const json = await res.json();
    const parsedUrl = await json.vidInfo[0].dloadUrl;
    const name = await json.vidTitle
    const thumb = await json.vidThumb
    const info = {parsedUrl,name,thumb,VideoURL}
    console.log(info);
    return info;
}

export async function play(element) {
    console.log("playing....");
    
    return element.play().then(
      () =>
        new Promise((res, rej) => {
          function ended() {
            element.removeEventListener('error', error);
            res();
          }

          function error() {
            element.removeEventListener('ended', ended);
            //@ts-ignore
            rej(err);
          }
          element.addEventListener('ended', ended, {
            once: true
          });
          element.addEventListener('error', error, {
            once: true
          });
        })
    );
  }

export function Audioifer(url) {
    return new Audio(url)
}
import { useEffect, useState, useRef } from 'react';
import liff from '@line/liff';
import './App.css';
import { videoFlexMessage, flexMessageLandspace } from './flex-message';

type Unpack<T extends Array<any>> = T extends Array<infer U> ? U : never;
type Message = Unpack<Parameters<typeof liff.shareTargetPicker>[0]>;

function App() {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [logined, setLogined] = useState(false);
  const [agent, setAgent] = useState('');

  useEffect(() => {
    liff
      .init({
        liffId: import.meta.env.VITE_LIFF_ID,
        withLoginOnExternalBrowser: true,
      })
      .then(() => {
        const views = Number(localStorage.getItem('views') || 0);
        setMessage(`you have views: ${views}`);
        setLogined(true);
        localStorage.setItem('views', `${views + 1}`);
        setAgent(`${location.href}: ${navigator.userAgent}`);
      })
      .catch((e: Error) => {
        setMessage('LIFF init failed.');
        setError(`${e}`);
      });
  }, []);

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // videoRef.current?.setAttribute('autoPictureInPicture', '');
    // videoRef.current?.setAttribute('autopictureinpicture', '');
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        videoRef.current?.requestPictureInPicture();
      } else if (document.pictureInPictureElement) {
        document.exitPictureInPicture();
      }
    });
  }, []);
  const [height, setHeight] = useState(1);
  const [width, setWidth] = useState(1);
  const [creator, setCreator] = useState('作者名字，随便改改');
  const [description, setDescription] = useState('分享出去的 desc，随便改改');

  return (
    <div className="App">
      <h1>Flex Message Test</h1>
      <style>
        {`
        p {
          margin: 0;
        }
        label {
          display: flex;
          flex-direction:column;
          align-items: center;
        }
        form {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 15px;
        }
        `}
      </style>
      {message && <p>{message}</p>}
      {error && (
        <p>
          <code>{error}</code>
        </p>
      )}
      {agent && <p>{agent}</p>}
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label>
          <p>* 宽高比</p>
          <div>
            <input
              value={width}
              onChange={(event) => setWidth(Number(event.target.value))}
              style={{ width: 50 }}
              type="tel"
            />
            <span style={{ margin: '0 4px' }}>:</span>
            <input
              value={height}
              style={{ width: 50 }}
              onChange={(event) => setHeight(Number(event.target.value))}
              type="tel"
            />
          </div>
        </label>
        <label>
          * Creator name:
          <input
            value={creator}
            required
            onChange={(event) => setCreator(event.target.value)}
          />
        </label>
        <label>
          <p>* Video Description: </p>
          <textarea
            required
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </label>
        <button
          disabled={!logined}
          onClick={() => {
            if (!liff.isInClient()) {
              liff.openWindow({
                url: 'https://liff.line.me/1657095357-Pxnv77e7',
              });
              return;
            }

            const messageJSON = videoFlexMessage({
              avatar:
                'https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip13.jpg',
              cover:
                'https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip7.jpg',
              creator,
              description,
              ratio: `${width}:${height}`,
            });
            liff
              .shareTargetPicker(
                [
                  {
                    type: 'flex',
                    altText: 'flex message',
                    contents: messageJSON as any,
                  },
                ],
                {
                  isMultiple: true,
                },
              )
              .then(() => {
                liff.closeWindow();
              })
              .catch((e: Error) => {
                setError(`${e}`);
              });
          }}
        >
          Share to Friends
        </button>
      </form>
    </div>
  );
}

export default App;

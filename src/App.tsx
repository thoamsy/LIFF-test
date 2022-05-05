import { useEffect, useState, MouseEventHandler, SyntheticEvent } from 'react';
import liff from '@line/liff';
import './App.css';

type Unpack<T extends Array<any>> = T extends Array<infer U> ? U : never;
type Message = Unpack<Parameters<typeof liff.shareTargetPicker>[0]>;

const messageLayouts = {
  social: {
    type: 'bubble',
    body: {
      type: 'box',
      layout: 'vertical',
      contents: [
        {
          type: 'box',
          layout: 'horizontal',
          contents: [
            {
              type: 'image',
              url: 'https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip7.jpg',
              size: '5xl',
              aspectMode: 'cover',
              aspectRatio: '150:196',
              gravity: 'center',
              flex: 1,
              action: {
                type: 'uri',
                uri: 'https://www.tiktok.com/@taylorswift',
              },
            },
            {
              type: 'box',
              layout: 'vertical',
              contents: [
                {
                  type: 'image',
                  url: 'https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip8.jpg',
                  size: 'full',
                  aspectMode: 'cover',
                  aspectRatio: '150:98',
                  gravity: 'center',
                  action: {
                    type: 'uri',
                    uri: 'https://www.tiktok.com/@taylorswift',
                  },
                },
                {
                  type: 'image',
                  url: 'https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip9.jpg',
                  size: 'full',
                  aspectMode: 'cover',
                  aspectRatio: '150:98',
                  gravity: 'center',
                  action: {
                    type: 'uri',
                    uri: 'https://www.tiktok.com/@taylorswift',
                  },
                },
              ],
              flex: 1,
            },
          ],
        },
        {
          type: 'box',
          layout: 'horizontal',
          contents: [
            {
              type: 'box',
              layout: 'vertical',
              contents: [
                {
                  type: 'image',
                  url: 'https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip13.jpg',
                  aspectMode: 'cover',
                  size: 'full',
                },
              ],
              cornerRadius: '100px',
              width: '72px',
              height: '72px',
            },
            {
              type: 'box',
              layout: 'vertical',
              contents: [
                {
                  type: 'text',
                  contents: [
                    {
                      type: 'span',
                      text: 'brown_05',
                      weight: 'bold',
                      color: '#000000',
                    },
                    {
                      type: 'span',
                      text: '     ',
                    },
                    {
                      type: 'span',
                      text: 'I went to the Brown&Cony cafe in Tokyo and took a picture',
                    },
                  ],
                  size: 'sm',
                  wrap: true,
                },
                {
                  type: 'box',
                  layout: 'baseline',
                  contents: [
                    {
                      type: 'text',
                      text: '1,140,753 Like',
                      size: 'sm',
                      color: '#bcbcbc',
                    },
                  ],
                  spacing: 'sm',
                  margin: 'md',
                },
              ],
            },
          ],
          spacing: 'xl',
          paddingAll: '20px',
        },
      ],
      paddingAll: '0px',
    },
  },
  shopping: {
    type: 'carousel',
    contents: [
      {
        type: 'bubble',
        hero: {
          type: 'image',
          size: 'full',
          aspectRatio: '20:13',
          aspectMode: 'cover',
          url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_5_carousel.png',
        },
        body: {
          type: 'box',
          layout: 'vertical',
          spacing: 'sm',
          contents: [
            {
              type: 'text',
              text: 'Arm Chair, White',
              wrap: true,
              weight: 'bold',
              size: 'xl',
            },
            {
              type: 'box',
              layout: 'baseline',
              contents: [
                {
                  type: 'text',
                  text: '$49',
                  wrap: true,
                  weight: 'bold',
                  size: 'xl',
                  flex: 0,
                },
                {
                  type: 'text',
                  text: '.99',
                  wrap: true,
                  weight: 'bold',
                  size: 'sm',
                  flex: 0,
                },
              ],
            },
          ],
        },
        footer: {
          type: 'box',
          layout: 'vertical',
          spacing: 'sm',
          contents: [
            {
              type: 'button',
              style: 'primary',
              action: {
                type: 'uri',
                label: 'Add to Cart',
                uri: 'https://linecorp.com',
              },
            },
            {
              type: 'button',
              action: {
                type: 'uri',
                label: 'Add to wishlist',
                uri: 'https://linecorp.com',
              },
            },
          ],
        },
      },
      {
        type: 'bubble',
        hero: {
          type: 'image',
          size: 'full',
          aspectRatio: '20:13',
          aspectMode: 'cover',
          url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_6_carousel.png',
        },
        body: {
          type: 'box',
          layout: 'vertical',
          spacing: 'sm',
          contents: [
            {
              type: 'text',
              text: 'Metal Desk Lamp',
              wrap: true,
              weight: 'bold',
              size: 'xl',
            },
            {
              type: 'box',
              layout: 'baseline',
              flex: 1,
              contents: [
                {
                  type: 'text',
                  text: '$11',
                  wrap: true,
                  weight: 'bold',
                  size: 'xl',
                  flex: 0,
                },
                {
                  type: 'text',
                  text: '.99',
                  wrap: true,
                  weight: 'bold',
                  size: 'sm',
                  flex: 0,
                },
              ],
            },
            {
              type: 'text',
              text: 'Temporarily out of stock',
              wrap: true,
              size: 'xxs',
              margin: 'md',
              color: '#ff5551',
              flex: 0,
            },
          ],
        },
        footer: {
          type: 'box',
          layout: 'vertical',
          spacing: 'sm',
          contents: [
            {
              type: 'button',
              flex: 2,
              style: 'primary',
              color: '#aaaaaa',
              action: {
                type: 'uri',
                label: 'Add to Cart',
                uri: 'https://linecorp.com',
              },
            },
            {
              type: 'button',
              action: {
                type: 'uri',
                label: 'Add to wish list',
                uri: 'https://linecorp.com',
              },
            },
          ],
        },
      },
      {
        type: 'bubble',
        body: {
          type: 'box',
          layout: 'vertical',
          spacing: 'sm',
          contents: [
            {
              type: 'button',
              flex: 1,
              gravity: 'center',
              action: {
                type: 'uri',
                label: 'See more',
                uri: 'https://linecorp.com',
              },
            },
          ],
        },
      },
    ],
  },
  video: {
    type: 'bubble',
    size: 'mega',
    hero: {
      type: 'video',
      url: 'https://v16-web-prime.tiktokcdn.com/8c143dbc5a6b546f5fd0fc4390bf0b23/62dbf3f2/video/tos/maliva/tos-maliva-ve-0068c799-us/2e89ff7616304f839f7595c9f174fce7/?a=1233&br=2486&bt=1243&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=stgC~3E7nz7Thp0X5lXq&l=20220124131312010223117079218827FF&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=anI1dGc6ZnE6OjMzZzczNEApNjRoM2U8MztlNzM5OWU5aWdeNmQ2cjRnNGtgLS1kMS9zc2MvMzY2YTYtYi5eMF42NTY6Yw%3D%3D&vl=&vr=',
      previewUrl:
        'https://p16-sign-sg.tiktokcdn.com/tos-alisg-p-0037/7e9071617ee5412bb982b74af8297dbf_1637481405~tplv-tiktokx-share-play.jpeg?x-expires=1637676000&x-signature=4sO9RHgTv%2B3hhyS1%2BBj%2FPUNfykU%3D',
      altContent: {
        type: 'image',
        size: 'full',
        aspectRatio: '9:16',
        aspectMode: 'cover',
        url: 'https://p16-sign-sg.tiktokcdn.com/tos-alisg-p-0037/7e9071617ee5412bb982b74af8297dbf_1637481405~tplv-tiktokx-share-play.jpeg?x-expires=1637676000&x-signature=4sO9RHgTv%2B3hhyS1%2BBj%2FPUNfykU%3D',
      },
      aspectRatio: '9:16',
    },
  },
};

function App() {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [logined, setLogined] = useState(false);

  useEffect(() => {
    liff
      .init({
        liffId: import.meta.env.VITE_LIFF_ID,
      })
      .then(() => {
        setMessage('LIFF init succeeded.');
        setLogined(true);
      })
      .catch((e: Error) => {
        setMessage('LIFF init failed.');
        setError(`${e}`);
      });
  });
  const [messageType, setMessageType] =
    useState<keyof typeof messageLayouts>('video');
  const chooseRadio = (name: keyof typeof messageLayouts) => () => {
    setMessageType(name);
  };

  const shareToFriend = () => {
    setError('');
    if (liff.isApiAvailable('shareTargetPicker')) {
      liff
        .shareTargetPicker(
          [
            {
              type: 'flex',
              altText: 'flex message',
              contents: messageLayouts[messageType] as any,
            },
          ],
          {
            isMultiple: true,
          },
        )
        .catch((e: Error) => {
          setError(`${e}`);
        });
    } else {
      setError('不支持 shareTargetPicker');
    }
  };

  return (
    <div className="App">
      <h1>create-liff-app</h1>
      {message && <p>{message}</p>}
      {error && (
        <p>
          <code>{error}</code>
        </p>
      )}
      <a
        href="https://developers.line.biz/ja/docs/liff/"
        target="_blank"
        rel="noreferrer"
      >
        LIFF Documentation
      </a>
      {logined && (
        <>
          <div>
            <label onClick={chooseRadio('social')}>
              <input
                checked={messageType === 'social'}
                type="radio"
                name="social"
              />{' '}
              social
            </label>
            <label onClick={chooseRadio('video')}>
              <input
                checked={messageType === 'video'}
                type="radio"
                name="video"
              />{' '}
              video
            </label>
            <label onClick={chooseRadio('shopping')}>
              <input
                checked={messageType === 'shopping'}
                type="radio"
                name="shopping"
              />{' '}
              shoppint
            </label>
          </div>
          <button
            style={{ display: 'block', padding: '8px 15px' }}
            type="button"
            onClick={shareToFriend}
          >
            Share to Friends
          </button>
        </>
      )}
    </div>
  );
}

export default App;

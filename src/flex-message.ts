const LOGO =
  'https://p16-crawlerpic-sign-sg.ibyteimg.com/tos-alisg-i-vr8s64j1wk-sg/tiktok-logo.png~tplv-vr8s64j1wk-image.image?x-expires=1656556702&x-signature=JeceYwcnGjdofkcp0vONSzMo%2B74%3D';
const PLAY_BUTTON =
  'https://p16-crawlerpic-sign-sg.ibyteimg.com/tos-alisg-i-vr8s64j1wk-sg/LINE-play-button.png~tplv-vr8s64j1wk-image.image?x-expires=1683968073&x-signature=qr79iDvxqCrJxnpLJ2y7rUBwCic%3D';

const VideoHero = (cover: string, videoSrc: string, ratio: string) => ({
  hero: {
    type: 'video',
    url: videoSrc,
    previewUrl: cover,
    altContent: {
      type: 'image',
      size: 'full',
      aspectRatio: ratio,
      aspectMode: 'cover',
      url: cover,
    },
    aspectRatio: ratio,
  },
});

const ImageHero = (cover: string, ratio: string) => ({
  hero: {
    type: 'box',
    layout: 'horizontal',
    contents: [
      {
        type: 'image',
        url: cover,
        aspectRatio: ratio,
        gravity: 'center',
        flex: 1,
        aspectMode: 'cover',
        size: 'full',
      },
      {
        type: 'image',
        url: LOGO,
        size: '44px',
        offsetBottom: '8px',
        offsetEnd: '8px',
        position: 'absolute',
      },
      {
        type: 'image',
        url: PLAY_BUTTON,
        size: '80px',
        animated: true,
        aspectMode: 'fit',
        position: 'absolute',
        align: 'center',
      },
    ],
    justifyContent: 'center',
    alignItems: 'center',
    action: {
      type: 'uri',
      label: 'action',
      uri: 'https://www.tiktok.com/@eight_life_counseling/video/7092380726213070081?is_copy_url=1&is_from_webapp=v1&_r=1',
    },
  },
});

export const videoFlexMessage = ({
  cover,
  avatar,
  creator,
  description = '',
  videoURL,
  ratio = '1:1',
}: {
  cover: string;
  avatar: string;
  description?: string;
  creator: string;
  videoURL?: string;
  ratio: string;
}) => ({
  type: 'bubble',
  ...(videoURL ? VideoHero(cover, videoURL, ratio) : ImageHero(cover, ratio)),
  body: {
    type: 'box',
    layout: 'vertical',
    contents: [
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
                url: avatar,
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
                    text: creator,
                    weight: 'bold',
                    color: '#161823',
                  },
                  {
                    type: 'span',
                    text: '     ',
                  },
                  {
                    type: 'span',
                    text: description,
                  },
                ],
                size: 'sm',
                wrap: true,
              },
              {
                type: 'box',
                layout: 'vertical',
                contents: [
                  {
                    type: 'text',
                    text: '1,140,753 Like',
                    size: 'sm',
                    color: '#16182357',
                  },
                  {
                    type: 'text',
                    text: '100,000 comments',
                    size: 'sm',
                    color: '#16182357',
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
  footer: {
    type: 'box',
    layout: 'vertical',
    contents: [
      {
        type: 'button',
        action: {
          type: 'uri',
          label: 'SEE MORE',
          uri: 'https://www.tiktok.com/@eight_life_counseling/video/7092380726213070081?is_copy_url=1&is_from_webapp=v1&_r=1',
        },
        color: '#FE2C55',
      },
    ],
  },
  styles: {
    hero: {
      separator: true,
    },
    footer: {
      separator: true,
    },
  },
});

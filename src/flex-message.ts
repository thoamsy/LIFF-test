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
      uri: 'https://liff.line.me/1657202989-vQLpD8Xl/@eight_life_counseling/video/7092380726213070081?is_copy_url=1&is_from_webapp=v1&_r=1',
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
  size: videoURL ? 'mega' : undefined,
  ...(videoURL ? VideoHero(cover, videoURL, ratio) : {}),
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
            aspectRatio: '9:16',
            gravity: 'center',
            flex: 1,
            aspectMode: 'cover',
            size: 'full',
          },
          {
            type: 'image',
            url: 'https://p16-crawlerpic-sign-sg.ibyteimg.com/tos-alisg-i-vr8s64j1wk-sg/tiktok-logo.png~tplv-vr8s64j1wk-image.image?x-expires=1656556702&x-signature=JeceYwcnGjdofkcp0vONSzMo%2B74%3D',
            size: '44px',
            offsetBottom: '8px',
            offsetEnd: '8px',
            position: 'absolute',
          },
          {
            type: 'image',
            url: 'https://p16-crawlerpic-sign-sg.ibyteimg.com/tos-alisg-i-vr8s64j1wk-sg/play.png~tplv-vr8s64j1wk-image.image?x-expires=1664455959&x-signature=O5%2BJVnhZ3VG7XWdhUcsjWSoaFe0%3D',
            size: '64px',
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
                aspectRatio: '1:1',
                size: 'full',
              },
            ],
            cornerRadius: '8px',
            width: '36px',
            height: '36px',
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
                    color: '#ffffff',
                  },
                ],
                size: '13px',
                wrap: true,
                weight: 'bold',
              },
              {
                type: 'text',
                text: description,
                size: '13px',
                weight: 'regular',
                color: '#FFFFFFBF',
                maxLines: 2,
              },
            ],
            flex: 1,
          },
          {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'text',
                text: 'See more',
                weight: 'bold',
                size: '12px',
                color: '#161823',
              },
            ],
            width: '72px',
            height: '32px',
            borderWidth: '1px',
            borderColor: '#1618231F',
            backgroundColor: '#ffffff',
            cornerRadius: '32px',
            justifyContent: 'center',
            alignItems: 'center',
          },
        ],
        spacing: '8px',
        position: 'absolute',
        backgroundColor: '#00000099',
        paddingTop: '16px',
        paddingBottom: '16px',
        paddingStart: '12px',
        paddingEnd: '12px',
        offsetBottom: '0px',
        offsetEnd: '0px',
        offsetStart: '0px',
      },
    ],
    paddingAll: '0px',
  },
  styles: {
    footer: {
      separator: true,
    },
  },
});

export const flexMessageLandspace = ({
  cover,
  avatar,
  creator,
  description = '',
}: {
  cover: string;
  avatar: string;
  description?: string;
  creator: string;
}) => ({
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
            url: cover,
            aspectRatio: '9:16',
            gravity: 'center',
            flex: 1,
            aspectMode: 'cover',
            size: 'full',
          },
          {
            type: 'image',
            url: 'https://p16-crawlerpic-sign-sg.ibyteimg.com/tos-alisg-i-vr8s64j1wk-sg/tiktok-logo.png~tplv-vr8s64j1wk-image.image?x-expires=1656556702&x-signature=JeceYwcnGjdofkcp0vONSzMo%2B74%3D',
            size: '44px',
            offsetBottom: '8px',
            offsetEnd: '8px',
            position: 'absolute',
          },
          {
            type: 'image',
            url: 'https://p16-crawlerpic-sign-sg.ibyteimg.com/tos-alisg-i-vr8s64j1wk-sg/play.png~tplv-vr8s64j1wk-image.image?x-expires=1664455959&x-signature=O5%2BJVnhZ3VG7XWdhUcsjWSoaFe0%3D',
            size: '56px',
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
        height: '168px',
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
                aspectRatio: '1:1',
                size: 'full',
              },
            ],
            cornerRadius: '8px',
            width: '36px',
            height: '36px',
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
                    color: '#ffffff',
                  },
                ],
                size: '13px',
                wrap: true,
                weight: 'bold',
              },
              {
                type: 'text',
                text: description,
                size: '13px',
                weight: 'regular',
                color: '#FFFFFFBF',
                maxLines: 2,
              },
            ],
            flex: 1,
          },
          {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'text',
                text: 'See more',
                weight: 'bold',
                size: '12px',
                color: '#161823',
              },
            ],
            width: '72px',
            height: '32px',
            borderWidth: '1px',
            borderColor: '#1618231F',
            backgroundColor: '#ffffff',
            cornerRadius: '32px',
            justifyContent: 'center',
            alignItems: 'center',
          },
        ],
        spacing: '8px',
        backgroundColor: '#00000099',
        offsetBottom: '0px',
        offsetEnd: '0px',
        offsetStart: '0px',
        paddingAll: '12px',
      },
    ],
    paddingAll: '0px',
  },
  styles: {
    footer: {
      separator: true,
    },
  },
});

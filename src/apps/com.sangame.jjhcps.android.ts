import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sangame.jjhcps.android',
  name: '金投网',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches:
            '@ImageView[vid="iv_close"][clickable=true] - ImageView[vid="iv_circle_header_ad"]',
          snapshotUrls: 'https://i.gkd.li/i/25548192',
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-首页右下角广告',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.MainActivity',
          matches:
            '@ImageView[clickable=true][vid="iv_float_close"] + ImageView[clickable=true][vid="iv_float_ad"]',
          snapshotUrls: 'https://i.gkd.li/i/25548284',
        },
      ],
    },
    {
      key: 3,
      name: '分段广告-资讯页中部广告',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'activity',
      rules: [
        {
          activityIds:
            'com.sangame.jjhcps.quote.view.activity.QuoteDetailActivity',
          matches: '@ImageView[vid="iv_center_text_ad_close"]',
          snapshotUrls: 'https://i.gkd.li/i/25548395',
        },
      ],
    },
    {
      key: 4,
      name: '分段广告-资讯页信息流广告',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'activity',
      rules: [
        {
          activityIds:
            'com.sangame.jjhcps.quote.view.activity.QuoteDetailActivity',
          matches:
            '@ImageView[vid="iv_close_img"] - LinearLayout >3 TextView[text = "广告"]',
          snapshotUrls: 'https://i.gkd.li/i/25548395',
        },
      ],
    },
  ],
});

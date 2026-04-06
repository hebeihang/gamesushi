const BLOG = {
  API_BASE_URL: process.env.API_BASE_URL || 'https://www.notion.so/api/v3',

  NOTION_PAGE_ID:
    process.env.NOTION_PAGE_ID ||
    '02ab3b8678004aa69e9e415905ef32a5,en:7c1d570661754c8fbc568e00a01fd70e',

  THEME: process.env.NEXT_PUBLIC_THEME || 'simple',
  LANG: process.env.NEXT_PUBLIC_LANG || 'zh-CN',
  SINCE: process.env.NEXT_PUBLIC_SINCE || 2024,

  PSEUDO_STATIC: process.env.NEXT_PUBLIC_PSEUDO_STATIC || false,
  NEXT_REVALIDATE_SECOND: process.env.NEXT_PUBLIC_REVALIDATE_SECOND || 60,
  APPEARANCE: process.env.NEXT_PUBLIC_APPEARANCE || 'light',
  APPEARANCE_DARK_TIME:
    process.env.NEXT_PUBLIC_APPEARANCE_DARK_TIME || [18, 6],

  // ✅ 品牌信息（关键）
  AUTHOR: process.env.NEXT_PUBLIC_AUTHOR || 'GameSushi',
  BIO:
    process.env.NEXT_PUBLIC_BIO ||
    'GameSushi is a digital platform providing game industry insights, AI tools, and in-depth analysis.',
  LINK: process.env.NEXT_PUBLIC_LINK || 'https://gamesushi.cn',
  KEYWORDS:
    process.env.NEXT_PUBLIC_KEYWORD ||
    'game industry, gaming news, AI tools, game analysis, digital content',
  BLOG_FAVICON:
    process.env.NEXT_PUBLIC_FAVICON || '/favicon.ico',

  BEI_AN: process.env.NEXT_PUBLIC_BEI_AN || '',
  BEI_AN_LINK:
    process.env.NEXT_PUBLIC_BEI_AN_LINK ||
    'https://beian.miit.gov.cn/',
  BEI_AN_GONGAN:
    process.env.NEXT_PUBLIC_BEI_AN_GONGAN || '',

  ENABLE_RSS: process.env.NEXT_PUBLIC_ENABLE_RSS || true,

  // 引入配置
  ...require('./conf/comment.config'),
  ...require('./conf/contact.config'),
  ...require('./conf/post.config'),
  ...require('./conf/analytics.config'),
  ...require('./conf/image.config'),
  ...require('./conf/font.config'),
  ...require('./conf/right-click-menu'),
  ...require('./conf/code.config'),
  ...require('./conf/animation.config'),
  ...require('./conf/widget.config'),
  ...require('./conf/ad.config'),
  ...require('./conf/plugin.config'),
  ...require('./conf/performance.config'),

  ...require('./conf/layout-map.config'),
  ...require('./conf/notion.config'),
  ...require('./conf/dev.config'),

  CUSTOM_EXTERNAL_JS: [''],
  CUSTOM_EXTERNAL_CSS: [''],

  CUSTOM_MENU: process.env.NEXT_PUBLIC_CUSTOM_MENU || true,

  CAN_COPY: process.env.NEXT_PUBLIC_CAN_COPY || true,

  LAYOUT_SIDEBAR_REVERSE:
    process.env.NEXT_PUBLIC_LAYOUT_SIDEBAR_REVERSE || false,

  // ✅ 欢迎语（专业版）
  GREETING_WORDS:
    process.env.NEXT_PUBLIC_GREETING_WORDS ||
    'Welcome to GameSushi,Game Industry Insights & Analysis,AI Tools for Creators,Stay Ahead in Gaming',
  
// 页脚链接（合规页面）
FOOTER_TEXT: `
<a href="/legal">特定商取引法に基づく表記</a> |
<a href="/terms">利用規約</a> |
<a href="/privacy">プライバシーポリシー</a>
`,
  UUID_REDIRECT: process.env.UUID_REDIRECT || false
  
}

module.exports = BLOG

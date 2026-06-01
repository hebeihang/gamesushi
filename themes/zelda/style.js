/* eslint-disable react/no-unknown-property */
/**
 * 此处样式只对当前主题生效
 * 此处不支持tailwindCSS的 @apply 语法
 * @returns
 */
const Style = () => {
  return (
    <style jsx global>{`
      :root {
        --zelda-tan: #E2DED3;
        --zelda-dark-bg: #66645D;
        --zelda-text-main: #E9E1D1;
        --zelda-sheikah-blue: #3CD3FC;
        --zelda-bg-page: #0b111e;
        --zelda-bg-card: rgba(0, 0, 0, 0.6);
        --zelda-border: rgba(226, 222, 211, 0.3);
      }

      body {
        background-color: var(--zelda-bg-page) !important;
        color: var(--zelda-text-main) !important;
        font-family: 'Roboto', -apple-system, sans-serif !important;
      }

      /* 基础字体样式 */
      #theme-zelda {
        font-family: 'Roboto', -apple-system, sans-serif;
        font-weight: 500;
        font-style: italic;
      }

      h1, h2, h3, h4, h5, h6 {
        font-family: 'Hylia Serif', 'Cinzel', serif !important;
        font-style: normal !important;
      }

      ::-webkit-scrollbar-thumb {
        background: rgba(60, 211, 252, 0.3);
        border-radius: 8px;
        border: 2px solid transparent;
        background-clip: padding-box;
      }

      ::-webkit-scrollbar-thumb:hover {
        background: rgba(60, 211, 252, 0.5);
        background-clip: padding-box;
      }

      ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
      }

      /* 按钮装饰 */
      .menu-link {
        font-style: italic;
      }

      /* Notion 页面样式适配 */
      .notion {
        color: var(--zelda-text-main) !important;
      }
      
      .notion-title, .notion-h1, .notion-h2, .notion-h3 {
        color: var(--zelda-tan) !important;
      }
      
      .notion-page-content {
        font-style: italic;
      }

      /* 自定义双层边框容器基础 */
      .zelda-container {
        position: relative;
        background: rgba(0, 0, 0, 0.6);
        border-radius: 4px;
        transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .zelda-container::after {
        content: '';
        position: absolute;
        inset: 3px;
        border: 1px solid rgba(226, 222, 211, 0.2);
        border-radius: 2px;
        pointer-events: none;
      }
    `}</style>
  )
}

export { Style }

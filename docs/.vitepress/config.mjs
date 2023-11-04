import { defineConfig } from 'vitepress'
import markdownItKatex from '@traptitech/markdown-it-katex'
import markdownItFootnote from 'markdown-it-footnote'
import markdownItQc from '../js/qcmd'

const customElements = [
  'math',
  'maction',
  'maligngroup',
  'malignmark',
  'menclose',
  'merror',
  'mfenced',
  'mfrac',
  'mi',
  'mlongdiv',
  'mmultiscripts',
  'mn',
  'mo',
  'mover',
  'mpadded',
  'mphantom',
  'mroot',
  'mrow',
  'ms',
  'mscarries',
  'mscarry',
  'mscarries',
  'msgroup',
  'mstack',
  'mlongdiv',
  'msline',
  'mstack',
  'mspace',
  'msqrt',
  'msrow',
  'mstack',
  'mstack',
  'mstyle',
  'msub',
  'msup',
  'msubsup',
  'mtable',
  'mtd',
  'mtext',
  'mtr',
  'munder',
  'munderover',
  'semantics',
  'math',
  'mi',
  'mn',
  'mo',
  'ms',
  'mspace',
  'mtext',
  'menclose',
  'merror',
  'mfenced',
  'mfrac',
  'mpadded',
  'mphantom',
  'mroot',
  'mrow',
  'msqrt',
  'mstyle',
  'mmultiscripts',
  'mover',
  'mprescripts',
  'msub',
  'msubsup',
  'msup',
  'munder',
  'munderover',
  'none',
  'maligngroup',
  'malignmark',
  'mtable',
  'mtd',
  'mtr',
  'mlongdiv',
  'mscarries',
  'mscarry',
  'msgroup',
  'msline',
  'msrow',
  'mstack',
  'maction',
  'semantics',
  'annotation',
  'annotation-xml'
]

export default defineConfig({
  title: "量子计算 101",
  description: "从零开始的量子世界计算。",
  lang: 'zh-CN',
  sitemap: {
    hostname: 'https://qc101.axton.im'
  },
  head: [
    [
      'link',
      { href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.9/katex.min.css', integrity: 'sha512-fHwaWebuwA7NSF5Qg/af4UeDx9XqUpYpOGgubo3yWu+b2IQR4UeQwbb42Ti7gVAjNtVoI/I9TEoYeu9omwcC6g==', crossorigin: 'anonymous', referrerpolicy: 'no-referrer', rel: 'stylesheet' }
    ],
  ],
  markdown: {
    config: (md) => {
      md.use(markdownItKatex, {
        macros: {
          '\\q': '\\left\\lvert{#1}\\right\\rangle',
          '\\qr': '\\left\\langle{#1}\\right\\rvert',
          '\\qrq': '\\left\\langle{#1}\\middle\\vert\\mathopen{}{#2}\\right\\rangle',
          '\\qrrq': '\\left\\langle{#1}\\middle\\vert\\mathopen{}{#2}\\middle\\vert\\mathopen{}{#3}\\right\\rangle',
          '\\rqr': '\\left\\lvert{#1}\\middle\\rangle\\middle\\langle{#2}\\right\\rvert',
          '\\qp': '\\oplus',
          '\\qt': '\\otimes',
          '\\qgh': '\\fbox{$H$}',
          '\\qgz': '\\fbox{$Z$}',
          '\\qgx': '\\fbox{$X$}',
          '\\qgu': '\\fbox{$U$}',
          '\\qguf': '\\fbox{$U_f$}',
          '\\qv': '\\begin{bmatrix}{#1}\\\\{#2}\\end{bmatrix}',
          '\\qvt': '\\begin{bmatrix}{#1}&{#2}\\end{bmatrix}',
          '\\qm': '\\begin{bmatrix}{#1}&{#2}\\\\{#3}&{#4}\\end{bmatrix}',
          '\\qmm': '\\begin{bmatrix}{#1}&{#2}&{#3}\\\\{#4}&{#5}&{#6}\\\\{#7}&{#8}&{#9}\\end{bmatrix}',
          '\\abs': '\\left\\lvert{#1}\\right\\rvert',
          '\\norm': '\\left\\lVert{#1}\\right\\rVert',
        }
      }),
      md.use(markdownItQc),
      md.use(markdownItFootnote)
    },
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息'
    }
    // math: true
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => customElements.includes(tag)
      }
    }
  },
  themeConfig: {
    nav: [
      {
        text: '首页',
        link: '/',
        activeMatch: '/$'
      },
      {
        text: '量子计算',
        link: '/qc/intro',
        activeMatch: '/qc/'
      },
      {
        text: '数学参考',
        link: '/math/test',
        activeMatch: '/math/'
      }
    ],
    footer: {
      copyright: 'Copyright © Axton Yao'
    },
    lastUpdated: {
      text: '更新于 ',
    },
    sidebar: [
      {
        text: '量子计算',
        items: [
          { text: '量子计算简介', link: '/qc/intro' },
          { text: '狄拉克符号及量子电路', link: '/qc/braket' }
        ]
      },
      {
        text: '数学参考',
        items: [
          { text: 'Markdown Examples', link: '/math/test' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],
    outlineTitle: '本页目录',
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    externalLinkIcon: true,
    returnToTopLabel: '返回页首',
    sidebarMenuLabel: '总览目录',
    darkModeSwitchLabel: '深色模式',
    search: {
      provider: 'local',
      options: {
        detailedView: true,
        locales: {
          root: {
            translations: {
              placeholder: '搜索文档',
              button: {
                buttonText: '搜索文档…',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '没有找到结果：',
                resetButtonTitle: '清空输入',
                displayDetails: '显示详细结果',
                footer: {
                  selectText: '选定',
                  navigateText: '浏览',
                  closeText: '关闭'
                }
              }
            }
          }
        }
      }
    },
    notFound: {
      title: '测量不到页面',
      quote: '彷徨于希尔伯特空间，线性叠加隐约。本征值求解未果，比特观测不知。',
      linkText: '坍缩至首页',
      linkLabel: '返回首页'
    },
    editLink: {
      pattern: 'https://github.com/yrccondor/quantum-computing-101/edit/main/docs/:path',
      text: '通过 Github 帮助编辑此页'
    }
  }
})

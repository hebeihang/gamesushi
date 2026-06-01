import { ArrowSmallRight, PlusSmall } from '@/components/HeroIcons'
import LazyImage from '@/components/LazyImage'
import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import SmartLink from '@/components/SmartLink'
import { useRouter } from 'next/router'
import { useImperativeHandle, useRef, useState, useEffect } from 'react'
import CONFIG from '../config'

// 导入塞尔达传说组件库组件
import {
  HealthBar,
  StaminaWheel,
  RupeeCounter,
  SheikahSymbol,
  SheikahBackground,
  SheikahScanlines,
  TitleOrnament
} from '@/lib/zelda-hyrule-ui/es/index.js'

/**
 * 顶部英雄区 (Zelda 版)
 * 左右布局
 */
const Hero = props => {
  const HEO_HERO_REVERSE = siteConfig('HEO_HERO_REVERSE', false, CONFIG)
  return (
    <div
      id='hero-wrapper'
      className='recent-top-post-group w-full overflow-hidden select-none px-5 mb-4'
    >
      <div
        id='hero'
        style={{ zIndex: 1 }}
        className={`${HEO_HERO_REVERSE ? 'xl:flex-row-reverse' : ''}
           recent-post-top rounded-[12px] 2xl:px-5 recent-top-post-group max-w-[86rem] overflow-x-scroll w-full mx-auto flex-row flex-nowrap flex relative`}
      >
        {/* 左侧banner组 */}
        <BannerGroup {...props} />

        {/* 中间留白 */}
        <div className='px-1.5 h-full'></div>

        {/* 右侧置顶文章组 */}
        <TopGroup {...props} />
      </div>
    </div>
  )
}

/**
 * 英雄区左侧banner组
 */
function BannerGroup(props) {
  return (
    <div
      id='bannerGroup'
      className='flex flex-col justify-between flex-1 mr-2 max-w-[42rem]'
    >
      {/* 塞尔达风格 Banner */}
      <Banner {...props} />
      {/* 导航分类 */}
      <GroupMenu />
    </div>
  )
}

/**
 * 塞尔达核心科技 Banner
 */
function Banner(props) {
  const router = useRouter()
  const { allNavPages } = props
  const [health, setHealth] = useState(0)
  const [stamina, setStamina] = useState(0)

  // 页面加载时的生命值和精力跳动特效
  useEffect(() => {
    const timerH = setTimeout(() => {
      setHealth(12)
    }, 400)
    const timerS = setTimeout(() => {
      setStamina(0.85)
    }, 800)
    return () => {
      clearTimeout(timerH)
      clearTimeout(timerS)
    }
  }, [])

  function handleClickBanner() {
    if (allNavPages && allNavPages.length > 0) {
      const randomIndex = Math.floor(Math.random() * allNavPages.length)
      const randomPost = allNavPages[randomIndex]
      router.push(`${siteConfig('SUB_PATH', '')}/${randomPost?.slug}`)
    }
  }

  const coverTitle = siteConfig('HEO_HERO_COVER_TITLE')

  return (
    <div
      id='banners'
      onClick={handleClickBanner}
      className='hidden xl:flex xl:flex-col group h-full bg-[#0a1428] rounded-xl border border-[#3cd3fc4d] dark:border-gray-700 mb-3 relative overflow-hidden min-h-[260px]'
    >
      {/* 希卡之石动画背景与扫描线 */}
      <div className='absolute inset-0 z-0 pointer-events-none'>
        <SheikahBackground bgColor='darkBlue'>
          <SheikahScanlines animated={true} />
        </SheikahBackground>
      </div>

      {/* 希卡之眼标志装饰 */}
      <div className='absolute right-8 top-1/2 -translate-y-1/2 z-0 opacity-20 pointer-events-none select-none'>
        <SheikahSymbol variant='outline' style={{ width: '180px', height: '180px', color: '#3cd3fc' }} />
      </div>

      {/* 塞尔达 HUD HUD信息 (血量红心 & 精力轮) */}
      <div className='absolute top-4 left-6 flex items-center space-x-4 z-10 p-2 rounded bg-black/30 backdrop-blur-sm border border-[#3cd3fc22]'>
        <div className='flex flex-col gap-1.5'>
          <div className='text-[10px] text-[#3cd3fc] font-bold tracking-widest uppercase opacity-80'>Link's Status</div>
          <HealthBar current={health} max={15} bonus={3} />
        </div>
        <div className='h-8 w-[1px] bg-[#3cd3fc22] self-end mb-1'></div>
        <StaminaWheel value={stamina} size={48} />
      </div>

      {/* Banner 标题文字 */}
      <div
        id='banner-title'
        className='z-10 flex flex-col absolute bottom-6 left-6 text-white'
      >
        <div className='text-3xl font-extrabold mb-1.5 tracking-wide text-[#e2ded3] drop-shadow-md'>
          {siteConfig('HEO_HERO_TITLE_1', null, CONFIG)}
          <br />
          {siteConfig('HEO_HERO_TITLE_2', null, CONFIG)}
        </div>
        <div className='text-xs text-[#3cd3fc] font-semibold tracking-wider drop-shadow'>
          {siteConfig('HEO_HERO_TITLE_3', null, CONFIG)}
        </div>
      </div>

      {/* 鼠标悬浮遮罩 (探索荒野之息氛围) */}
      <div
        id='banner-cover'
        style={{ backdropFilter: 'blur(10px)' }}
        className='z-20 rounded-xl overflow-hidden opacity-0 group-hover:opacity-100 duration-300 transition-all bg-[#0a1428f2] border border-[#3cd3fc] cursor-pointer absolute w-full h-full top-0 flex justify-start items-center'
      >
        <div className='ml-12 -translate-x-32 group-hover:translate-x-0 duration-300 transition-all ease-in flex flex-col gap-2'>
          <div className='text-5xl text-[#fcc413] font-bold tracking-wider drop-shadow-lg'>{coverTitle || 'Let\'s Adventure'}</div>
          <div className='flex items-center text-[#3cd3fc] text-lg font-bold gap-2'>
            <span>ENTER HYRULE SITE</span>
            <ArrowSmallRight className='w-8 h-8 stroke-2 animate-pulse' />
          </div>
        </div>
      </div>
    </div>
  )
}

/**
 * 导航分类 (带卢比计数器样式)
 */
function GroupMenu() {
  const url_1 = siteConfig('HEO_HERO_CATEGORY_1', {}, CONFIG)?.url || ''
  const title_1 = siteConfig('HEO_HERO_CATEGORY_1', {}, CONFIG)?.title || ''
  const url_2 = siteConfig('HEO_HERO_CATEGORY_2', {}, CONFIG)?.url || ''
  const title_2 = siteConfig('HEO_HERO_CATEGORY_2', {}, CONFIG)?.title || ''
  const url_3 = siteConfig('HEO_HERO_CATEGORY_3', {}, CONFIG)?.url || ''
  const title_3 = siteConfig('HEO_HERO_CATEGORY_3', {}, CONFIG)?.title || ''

  return (
    <div className='h-[165px] select-none xl:h-20 flex flex-col justify-between xl:space-y-0 xl:flex-row w-28 lg:w-48 xl:w-full xl:flex-nowrap xl:space-x-3'>
      {/* 绿卢比快捷键 */}
      <SmartLink
        href={url_1}
        className='group relative overflow-hidden bg-gradient-to-r from-emerald-900 to-emerald-950 border border-emerald-500/30 flex h-20 justify-start items-center text-white rounded-xl xl:hover:w-1/2 xl:w-1/3 transition-all duration-500 ease-in'
      >
        <div className='font-bold lg:text-lg pl-5 relative z-10'>
          {title_1}
          <span className='absolute -bottom-0.5 left-5 w-5 h-0.5 bg-emerald-400 rounded-full'></span>
        </div>
        <div className='absolute right-4 z-0 opacity-40 group-hover:opacity-90 duration-500 transition-all scale-[0.8] group-hover:scale-100'>
          <RupeeCounter amount={100} color='green' showLabel={false} />
        </div>
      </SmartLink>

      {/* 红卢比快捷键 */}
      <SmartLink
        href={url_2}
        className='group relative overflow-hidden bg-gradient-to-r from-rose-950 to-orange-950 border border-rose-500/30 flex h-20 justify-start items-center text-white rounded-xl xl:hover:w-1/2 xl:w-1/3 transition-all duration-500 ease-in'
      >
        <div className='font-bold lg:text-lg pl-5 relative z-10'>
          {title_2}
          <span className='absolute -bottom-0.5 left-5 w-5 h-0.5 bg-rose-400 rounded-full'></span>
        </div>
        <div className='absolute right-4 z-0 opacity-40 group-hover:opacity-90 duration-500 transition-all scale-[0.8] group-hover:scale-100'>
          <RupeeCounter amount={300} color='red' showLabel={false} />
        </div>
      </SmartLink>

      {/* 金卢比快捷键 (大屏) */}
      <SmartLink
        href={url_3}
        className='group relative overflow-hidden bg-gradient-to-r from-amber-950 to-yellow-950 border border-amber-500/30 hidden h-20 xl:flex justify-start items-center text-white rounded-xl xl:hover:w-1/2 xl:w-1/3 transition-all duration-500 ease-in'
      >
        <div className='font-bold text-lg pl-5 relative z-10'>
          {title_3}
          <span className='absolute -bottom-0.5 left-5 w-5 h-0.5 bg-amber-400 rounded-full'></span>
        </div>
        <div className='absolute right-4 z-0 opacity-40 group-hover:opacity-90 duration-500 transition-all scale-[0.8] group-hover:scale-100'>
          <RupeeCounter amount={9999} color='gold' showLabel={false} />
        </div>
      </SmartLink>
    </div>
  )
}

/**
 * 右侧置顶推荐卡片组 (带塞尔达饰文边框)
 */
function TopGroup(props) {
  const { latestPosts, allNavPages, siteInfo } = props
  const { locale } = useGlobal()
  const todayCardRef = useRef()
  function handleMouseLeave() {
    todayCardRef.current.coverUp()
  }

  const topPosts = getTopPosts({ latestPosts, allNavPages })

  return (
    <div
      id='hero-right-wrapper'
      onMouseLeave={handleMouseLeave}
      className='flex-1 relative w-full'
    >
      <div
        id='top-group'
        className='w-full flex space-x-3 xl:space-x-0 xl:grid xl:grid-cols-3 xl:gap-3 xl:h-[342px]'
      >
        {topPosts?.map((p, index) => {
          return (
            <SmartLink href={`${siteConfig('SUB_PATH', '')}/${p?.slug}`} key={index}>
              <div className='cursor-pointer h-[164px] group relative flex flex-col w-52 xl:w-full overflow-hidden shadow bg-black/60 border border-amber-500/10 hover:border-amber-400/50 rounded-xl transition-all duration-300'>
                <LazyImage
                  priority={index === 0}
                  className='h-24 object-cover opacity-80 group-hover:opacity-100 transition-opacity'
                  alt={p?.title}
                  src={p?.pageCoverThumbnail || siteInfo?.pageCover}
                />
                
                {/* 塞尔达边框饰文分割线 */}
                <div className='px-2 -mt-1 opacity-70'>
                  <TitleOrnament />
                </div>

                <div className='group-hover:text-[#fcc413] text-[#e2ded3] line-clamp-2 overflow-hidden mx-3 my-1 font-semibold text-sm'>
                  {p?.title}
                </div>
                
                <div className='opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 duration-200 transition-all absolute -top-2 -left-2 bg-[#fcc413] text-black font-bold rounded-xl overflow-hidden pr-2 pb-2 pl-4 pt-4 text-[10px]'>
                  QUEST
                </div>
              </div>
            </SmartLink>
          )
        })}
      </div>
      <TodayCard cRef={todayCardRef} siteInfo={siteInfo} />
    </div>
  )
}

/**
 * 获取推荐置顶文章
 */
function getTopPosts({ latestPosts, allNavPages }) {
  if (
    !siteConfig('HEO_HERO_RECOMMEND_POST_TAG', null, CONFIG) ||
    siteConfig('HEO_HERO_RECOMMEND_POST_TAG', null, CONFIG) === ''
  ) {
    return latestPosts
  }

  let sortPosts = []
  if (
    JSON.parse(
      siteConfig('HEO_HERO_RECOMMEND_POST_SORT_BY_UPDATE_TIME', null, CONFIG)
    )
  ) {
    sortPosts = Object.create(allNavPages).sort((a, b) => {
      const dateA = new Date(a?.lastEditedDate)
      const dateB = new Date(b?.lastEditedDate)
      return dateB - dateA
    })
  } else {
    sortPosts = Object.create(allNavPages)
  }

  const topPosts = []
  for (const post of sortPosts) {
    if (topPosts.length === 6) {
      break
    }
    if (
      post?.tags?.indexOf(
        siteConfig('HEO_HERO_RECOMMEND_POST_TAG', null, CONFIG)
      ) >= 0
    ) {
      topPosts.push(post)
    }
  }
  return topPosts
}

/**
 * 英雄区右侧，今日推荐卡片
 */
function TodayCard({ cRef, siteInfo }) {
  const router = useRouter()
  const link = siteConfig('HEO_HERO_TITLE_LINK', null, CONFIG)
  const { locale } = useGlobal()
  const coverEnable = siteConfig('HEO_HERO_RECOMMEND_COVER_ENABLE', true, CONFIG)
  const [isCoverUp, setIsCoverUp] = useState(coverEnable)

  useImperativeHandle(cRef, () => {
    return {
      coverUp: () => {
        if (coverEnable) {
          setIsCoverUp(true)
        }
      }
    }
  })

  function handleClickShowMore(e) {
    e.stopPropagation()
    setIsCoverUp(false)
  }

  function handleCardClick(e) {
    router.push(link)
  }

  if (!coverEnable) {
    return null
  }

  return (
    <div
      id='today-card'
      className={`${
        isCoverUp ? ' ' : 'pointer-events-none'
      } overflow-hidden absolute hidden xl:flex flex-1 flex-col h-full top-0 w-full`}
    >
      <div
        id='card-body'
        onClick={handleCardClick}
        className={`${
          isCoverUp
            ? 'opacity-100 cursor-pointer'
            : 'opacity-0 transform scale-110 pointer-events-none'
        } shadow transition-all duration-200 today-card h-full bg-[#050a12] border border-[#3cd3fc4d] rounded-xl relative overflow-hidden flex items-end`}
      >
        {/* 卡片文字信息 */}
        <div
          id='today-card-info'
          className='flex justify-between w-full relative text-white p-10 items-end z-10 bg-gradient-to-t from-black/80 to-transparent'
        >
          <div className='flex flex-col'>
            <div className='text-xs font-semibold text-[#3cd3fc] tracking-widest mb-1'>
              {siteConfig('HEO_HERO_TITLE_4', null, CONFIG) || 'FEATURED QUEST'}
            </div>
            <div className='text-3xl font-bold text-[#e2ded3] drop-shadow'>
              {siteConfig('HEO_HERO_TITLE_5', null, CONFIG)}
            </div>
          </div>
          {/* 查看更多按钮 */}
          <div
            onClick={handleClickShowMore}
            className={`${isCoverUp ? '' : 'hidden pointer-events-none'} z-10 group flex items-center px-4 h-10 justify-center rounded-3xl
            glassmorphism transition-colors duration-100 bg-black/40 border border-[#3cd3fc4d] text-[#3cd3fc] hover:bg-[#3cd3fc1a]`}
          >
            <PlusSmall
              className='group-hover:rotate-180 duration-500 transition-all w-6 h-6 mr-2 bg-[#3cd3fc] rounded-full stroke-black'
            />
            <div id='more' className='select-none font-bold text-sm'>
              {locale.COMMON.RECOMMEND_POSTS}
            </div>
          </div>
        </div>

        {/* 封面图 */}
        <img
          src={siteInfo?.pageCover}
          id='today-card-cover'
          className={`${
            isCoverUp ? '' : ' pointer-events-none'
          } hover:scale-110 duration-1000 object-cover cursor-pointer today-card-cover absolute w-full h-full top-0 opacity-70`}
        />
      </div>
    </div>
  )
}

export default Hero

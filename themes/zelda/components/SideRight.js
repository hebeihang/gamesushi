import Live2D from '@/components/Live2D'
import dynamic from 'next/dynamic'
import { AnalyticsCard } from './AnalyticsCard'
import Card from './Card'
import Catalog from './Catalog'
import { InfoCard } from './InfoCard'
import LatestPostsGroupMini from './LatestPostsGroupMini'
import TagGroups from './TagGroups'
import TouchMeCard from './TouchMeCard'

const FaceBookPage = dynamic(
  () => {
    let facebook = <></>
    try {
      facebook = import('@/components/FacebookPage')
    } catch (err) {
      console.error(err)
    }
    return facebook
  },
  { ssr: false }
)

/**
 * Zelda主题右侧栏
 * @param {*} props
 * @returns
 */
export default function SideRight(props) {
  const { post, lock, tagOptions, currentTag, rightAreaSlot } = props

  // 只摘取标签的前60个，防止右侧过长
  const sortedTags = tagOptions?.slice(0, 60) || []

  return (
    <div id='sideRight' className='hidden xl:block w-72 space-y-4 h-full'>
      <div className="wow fadeInUp">
        <InfoCard {...props} />
      </div>

      <div className='sticky top-20 space-y-4'>
        {/* 文章页显示目录（上锁文章不显示） */}
        {!lock && post && post.toc && post.toc.length > 0 && (
          <Card className='wow fadeInUp' variant="sheikah">
            <Catalog toc={post.toc} />
          </Card>
        )}

        {/* 联系交流群 */}
        <div className='wow fadeInUp'>
          <TouchMeCard />
        </div>

        {/* 最新文章列表 */}
        <Card className='wow fadeInUp hidden lg:block' variant="sheikah">
          <LatestPostsGroupMini {...props} />
        </Card>

        {rightAreaSlot}

        <FaceBookPage />
        <Live2D />

        {/* 标签和成绩 */}
        <Card className='wow fadeInUp' variant="sheikah">
          <TagGroups tags={sortedTags} currentTag={currentTag} />
          <hr className='mx-1 flex border-[#3cd3fc22] border-dashed relative my-4' />
          <AnalyticsCard {...props} />
        </Card>
      </div>
    </div>
  )
}

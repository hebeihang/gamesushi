import { SheikahSymbol } from '@/lib/zelda-hyrule-ui/es/index.js'
import LazyImage from '@/components/LazyImage'
import { siteConfig } from '@/lib/config'
import SmartLink from '@/components/SmartLink'

const Logo = props => {
  const { siteInfo } = props
  return (
    <SmartLink href='/' passHref legacyBehavior>
      <div className='flex flex-nowrap items-center cursor-pointer font-extrabold'>
        <LazyImage
          src={siteInfo?.icon}
          width={24}
          height={24}
          alt={siteConfig('AUTHOR')}
          className='mr-4 hidden md:block'
        />
        <div id='logo-text' className='group rounded-2xl flex-none relative'>
          <div className='logo group-hover:opacity-0 opacity-100 visible group-hover:invisible text-lg my-auto rounded dark:border-white duration-200'>
            {siteConfig('TITLE')}
          </div>
          <div className='flex justify-center items-center rounded-2xl group-hover:bg-[#fcc413] w-full group-hover:opacity-100 opacity-0 invisible group-hover:visible absolute top-0 py-1 duration-200'>
            <SheikahSymbol size={20} />
          </div>
        </div>
      </div>
    </SmartLink>
  )
}
export default Logo

import classNames from 'classnames'

/**
 * Zelda 风格卡片组件
 * 实现双层边框结构
 */
const Card = ({ children, headerSlot, className, variant = 'default' }) => {
  const isSheikah = variant === 'sheikah'
  
  return (
    <div className={classNames(
      'zelda-container p-4 lg:p-6 overflow-hidden',
      isSheikah ? 'bg-[#0a1428cc] border-none' : 'bg-black/60 border-none',
      className
    )}>
      {/* Sheikah 变体顶部装饰线 */}
      {isSheikah && (
        <div className="absolute top-0 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-[#3CD3FC] to-transparent opacity-60 z-20"></div>
      )}
      
      {/* 内层边框通过 global style 中的 .zelda-container::after 实现，
          但此处为了更精确控制，可以直接在组件内微调 */}
      <style jsx>{`
        .zelda-container::after {
          border-color: ${isSheikah ? 'rgba(60, 211, 252, 0.3)' : 'rgba(226, 222, 211, 0.2)'};
        }
        .zelda-container:hover::after {
          border-color: ${isSheikah ? '#3CD3FC' : 'rgba(226, 222, 211, 0.5)'};
        }
      `}</style>

      {headerSlot && (
        <div className="mb-4 relative z-10">
          {headerSlot}
        </div>
      )}
      
      <section className="relative z-10 text-[#E9E1D1]">
        {children}
      </section>
    </div>
  )
}

export default Card

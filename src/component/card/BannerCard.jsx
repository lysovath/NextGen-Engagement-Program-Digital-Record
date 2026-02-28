import Icon from "../ui/Icon";

/* How to Use:
<BannerCard>
    <BannerCard.Icon><svg>...</svg></BannerCard.Icon>
    <BannerCard.Title>Title Here</BannerCard.Title>
</BannerCard>
*/

function BannerCard({ children, className = "" }) {
  return (
    <div
      className={`
        reveal-item
        opacity-0
        -translate-x-5
        duration-700
        delay-300
        flex
        items-center
        gap-5
        p-5
        bg-white/5
        rounded-2xl
        border
        border-white/5
        hover:bg-white/8
        hover:translate-x-2
        transition-all
        group
        cursor-pointer
        ${className}
      `}
    >
      {children}
    </div>
  );
}


function Title({ children }) {
  return (
    <span className="text-gray-200 font-bold tracking-wide uppercase text-xs md:text-sm">
      {children}
    </span>
  );
}

BannerCard.Icon = Icon;
BannerCard.Title = Title;

export default BannerCard;
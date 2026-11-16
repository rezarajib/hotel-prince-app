import { ArrowUpRight } from 'lucide-react';

const ItemCard = ({
  image,
  code,
  title,
  badgeText,
  specs = [],
  footerContent,
  onClick,
  onImageError,
}) => {
  const specColumns = specs.length === 1
    ? 'grid-cols-1'
    : specs.length === 2
      ? 'grid-cols-2'
      : 'grid-cols-3';

  return (
    <article className="flex h-full flex-col justify-between rounded-[20px] bg-[#F8F7F2] p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-5">
      <div className="group relative mb-3 overflow-hidden rounded-xl">
        {onClick ? (
          <button
            type="button"
            onClick={onClick}
            aria-label={`View ${title}`}
            className="block h-52 w-full cursor-pointer"
          >
            <img
              src={image}
              alt={title}
              onError={onImageError}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </button>
        ) : (
          <img
            src={image}
            alt={title}
            onError={onImageError}
            loading="lazy"
            decoding="async"
            className="h-52 w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        )}
        <span className="pointer-events-none absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-lg bg-white shadow-sm">
          <ArrowUpRight aria-hidden="true" className="h-4 w-4 text-[#111111]" />
        </span>
      </div>

      <div className="flex min-w-0 items-center justify-between gap-2 pt-4">
        {code && <span className="min-w-0 wrap-break-word text-[#7D827E]">{code}</span>}
        {badgeText && (
          <span className="shrink-0 rounded-full border border-[#C6EED6] bg-[#E8F8EE] px-2.5 py-0.5 text-xs font-medium text-[#1D8F4E]">
            {badgeText}
          </span>
        )}
      </div>

      <h3 className="mt-1 wrap-break-word font-serif text-xl text-[#111111]">{title}</h3>

      {specs.length > 0 && (
        <div className={`mt-4 grid ${specColumns} gap-2 border-b border-[#E8E6DF] pb-4 font-medium text-[#111111]`}>
          {specs.map(({ value, label }) => (
            <div key={label} className="min-w-0">
              <p className="wrap-break-word text-sm">{value}</p>
              <span className="mt-0.5 block text-xs font-normal text-[#7D827E]">{label}</span>
            </div>
          ))}
        </div>
      )}

      {footerContent && <div className="mt-auto pt-4">{footerContent}</div>}
    </article>
  );
};

export default ItemCard;

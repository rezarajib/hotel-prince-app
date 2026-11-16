const SectionHeader = ({ subtitle, title, description, className = '' }) => (
  <div className={`mx-auto max-w-2xl text-center ${className || 'mb-12'}`}>
    {subtitle && <p className="mb-2 text-sm text-[#666666]">{subtitle}</p>}
    <h2 className="mb-4 font-serif text-4xl font-normal leading-tight text-[#18392B] md:text-5xl lg:text-[54px]">
      {title}
    </h2>
    {description && (
      <p className="text-sm leading-relaxed text-[#666666] md:text-base">{description}</p>
    )}
  </div>
);

export default SectionHeader;

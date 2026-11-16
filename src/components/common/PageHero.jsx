const PageHero = ({ subtitle, title, description, children }) => (
  <section className="overflow-visible bg-[#F4F5EE] px-6 pt-32 pb-16 md:px-16 md:pt-36 md:pb-20 lg:px-24">
    <div className="mx-auto max-w-5xl text-center">
      {subtitle && <p className="mb-2 text-sm md:text-base text-[#666666]">{subtitle}</p>}
      <h1 className="mb-3 font-serif text-4xl font-normal leading-tight text-[#18392B] md:text-5xl lg:text-[54px]">
        {title}
      </h1>
      {description && (
        <p className="mx-auto mb-10 max-w-xl text-sm md:text-lg leading-relaxed text-[#666666]">
          {description}
        </p>
      )}
      {children && <div className="text-left">{children}</div>}
    </div>
  </section>
);

export default PageHero;

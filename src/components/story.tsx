function Story({
  image,
  alt,
  name,
  text,
  position = "",
}: {
  image: string;
  alt: string;
  name: string;
  text: string;
  position?: string;
}) {
  return (
    <article className="bg-[#faf9f6] p-5 md:p-7">
      <img
        src={image}
        alt={alt}
        className={`aspect-[1.48/1] w-full object-cover ${position}`}
      />
      <p className="mt-6 text-[11px] text-[#71665f]">{name}</p>
      <div className="mt-3 flex items-start justify-between gap-5">
        <p className="font-serif text-[15px] leading-7">“{text}”</p>
        <span className="shrink-0 text-[10px] text-[#b76650]">입양 후기</span>
      </div>
    </article>
  );
}

export default Story;

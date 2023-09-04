import Image from "next/image";

export default function SectionWithRightImg({
  data
}: {
  data: {imgSrc: string,
  altText: String,
  subTitle: String,
  title: String,
  paragraphs: String[]}
}) {
  return (
    <>
      <section className="text-primary bg-white flex flex-col-reverse md:flex-row md:gap-x-10 justify-center items-center">
        <div className="md:w-2/5">
          <Image
            src={`${data.imgSrc}`}
            alt={`${data.altText}`}
            width={500}
            height={500}
            sizes="(max-width: 768px) 100vw"
          />
        </div>
        <div className="md:w-3/5">
          <h3 className="text-xl md:text-3xl font-bold text-accent">
            {data.subTitle}
          </h3>
          <h2 className="text-2xl md:text-6xl font-extrabold text-primary">
            {data.title}
          </h2>
          {data.paragraphs.map((paragraph) => (
            <p key={`${paragraph}`} className="text-base mb-3">
              {paragraph}
            </p>
          ))}
        </div>
      </section>
    </>
  );
}
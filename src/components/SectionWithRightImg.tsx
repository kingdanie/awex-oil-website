import Image from "next/image";
import Link from "next/link";

export default function SectionWithRightImg({
  data
}: {
  data: {imgSrc: string,
  altText: String,
  subTitle?: String,
  title: String,
  paragraphs: String[],
  CTA?: {
    text: String,
    link: String
  }
}
}) {
  return (
    <>
      <section
        style={{
          backgroundImage: "url('/section-bg.jpg')",
        }}
        className="text-primary bg-white flex flex-col-reverse md:flex-row md:gap-x-10 justify-center items-center"
      >
        <div className="md:w-3/5">
          {data.subTitle && (
            <h3 className="text-xl md:text-xl font-bold text-accent">
              {data.subTitle}
            </h3>
          )}
          <h2 className="text-2xl md:text-6xl mb-10 md:leading-none font-extrabold text-primary">
            {data.title}
          </h2>
          <div className=" mb-10">
            {data.paragraphs.map((paragraph) => (
              <p key={`${paragraph}`} className="text-base">
                {paragraph}
              </p>
            ))}
          </div>
          {data.CTA && (
            <Link
              className="bg-accent p-5 text-white font-bold hover:font-extrabold"
              href={`${data.CTA.link}`}
            >
              {data.CTA.text}
            </Link>
          )}
        </div>
        <div className="md:w-2/5">
          <Image
            src={`${data.imgSrc}`}
            alt={`${data.altText}`}
            width={500}
            height={500}
            sizes="(max-width: 768px) 100vw"
          />
        </div>
      </section>
    </>
  );
}
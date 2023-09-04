export default function ContainedSection({ data, alt = '' }) {
  return (
    <section
      className={`text-center ${
        alt === 'accent' ? 'bg-accent' : alt === 'white' ? 'bg-white' : ''
      }`}
    >
      <div className="max-w-[900px] mx-auto p-4">
        <h2
          className={`text-3xl sm:text-4xl font-extrabold mb-4 ${
            alt === 'accent' ? 'text-white' : 'text-primary'
          }`}
        >
          {data.title}
          <span className={alt === 'accent' ? 'text-black' : 'text-accent'}>
            {data?.spantitle}
          </span>
        </h2>
        {data.paragraphs &&
          data.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className={`text-base sm:text-lg ${
                alt === 'accent' ? 'text-white' : 'text-primary'
              }`}
            >
              {paragraph}
            </p>
          ))}
        {data.paragraph && (
          <p
            className={`text-base sm:text-lg ${
              alt === 'accent' ? 'text-white' : 'text-primary'
            }`}
          >
            {data.paragraph}
          </p>
        )}
      </div>

      <style jsx>{`
        @media (max-width: 640px) {
          h2 {
            font-size: 2rem;
            margin-bottom: 2rem;
          }
        }
      `}</style>
    </section>
  );
}

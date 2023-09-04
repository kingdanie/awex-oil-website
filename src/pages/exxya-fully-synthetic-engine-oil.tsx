import SectionWithRightImg from '@/components/SectionWithRightImg';
import Layout from '@/components/layout';
import AwexContent from '../../data';
import WhyExxya from '@/components/WhyExxya';

export default function ExxyaSyntheticOil() {
  return (
    <Layout>
      <SectionWithRightImg
        data={AwexContent.ExxyaDescription}
      ></SectionWithRightImg>
      <section className="text-primary flex flex-col justify-center items-center">
        <h2 className="text-2xl md:text-4xl text-primary font-extrabold md:w-[60vw] text-center mb-10">
          Why Choose{' '}
          <span className="text-accent">EXxYA Synthetic Engine Oil?</span>
        </h2>
        <WhyExxya />
      </section>
    </Layout>
  );
}

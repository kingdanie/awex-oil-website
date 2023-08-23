import ExxyaProduct from '@/components/ExxyaPoducts';
import Layout from '@/components/layout';

export default function Services() {
  return (
    <Layout>
      <section className="text-center">
        <h2 className="text-4xl text-primary font-extrabold text-center mb-10">
          Product <span className="text-accent">Range</span>
        </h2>
        <p className="text-black">
          AWE.X Industries lubricants product range is designed to meet
          requirements of various markets and applications, ranging from
          Industrial, automotive , Construction and Marine.
        </p>
        <p className="text-black">
          We offer a dynamic range of engine oils, gear oils, brake fluids,
          coolants and greases for motorbikes, cars, trucks and other heavy duty
          vehicles. The product mix is constantly reviewed to ensure that the
          specifications are of the latest standards.
        </p>

        <div className="mt-20">
          <ExxyaProduct />
        </div>
      </section>
      <section className="bg-white">
        <h2 className="text-2xl text-primary font-extrabold text-center mb-10">
          Marketing and Sales Support - <br />
          <span className="text-accent"> Dealer Opportunities </span>
        </h2>
        <p className="text-primary">
          Take your partnership with{' '}
          <span className="text-accent font-bold">AWE.X Industries</span> one
          step further by partnering with{' '}
          <span className="text-accent font-bold">AWE.X Industries</span> to
          build the brand into your current marketing portfolio. From production
          to massive distribution of our products, our staffs are readily
          available to help you build more than just a product line in the field
          – they are available to help you build additional value with your
          customers by finding ways to help them improve their operations
          through educational resources.
        </p>
      </section>
    </Layout>
  );
}

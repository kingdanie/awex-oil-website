import SectionWithRightImg from '@/components/SectionWithRightImg';
import Layout from '@/components/layout';
import AwexContent from '../../data';

export default function ExxyaSyntheticOil() {
  return (
    <Layout>
      <div>
        <SectionWithRightImg
          data={AwexContent.ExxyaDescription}
        ></SectionWithRightImg>
      </div>
    </Layout>
  );
}

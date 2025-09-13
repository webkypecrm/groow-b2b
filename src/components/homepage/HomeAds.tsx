import Image from "next/image";
import Link from "next/link";

const HomeAds = () => {
  return (
    <div className="ps-home-ads">
      <div className="ps-container">
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
            <Link className="ps-collection" href="#">
              <Image
                src="/images/banner1.jpeg"
                alt="banner1"
                width={400}
                height={250}
              />
            </Link>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
            <Link className="ps-collection" href="#">
              <Image
                src="/images/banner2.jpeg"
                alt="banner2"
                width={400}
                height={250}
              />
            </Link>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
            <Link className="ps-collection" href="#">
              <Image
                src="/images/banner3.jpeg"
                alt="banner3"
                width={400}
                height={250}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeAds;

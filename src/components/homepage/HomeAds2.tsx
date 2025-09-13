import Image from "next/image";
import Link from "next/link";

export default function HomeAds2() {
  return (
    <div className="ps-home-ads">
      <div className="ps-container">
        <div className="row">
          <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
            <Link href="#" className="ps-collection">
              <Image
                src="/images/banner6.jpeg"
                alt="Groow"
                width={1200}
                height={600}
                style={{ width: "100%", height: "auto" }}
                priority
              />
            </Link>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
            <Link href="#" className="ps-collection">
              <Image
                src="/images/banner7.jpeg"
                alt="Groow"
                width={600}
                height={600}
                style={{ width: "100%", height: "auto" }}
                priority
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

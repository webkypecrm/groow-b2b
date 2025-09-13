import Image from "next/image";

const features = [
  {
    icon: "/images/free-delivery.png",
    alt: "Free Delivery",
    title: "Free Delivery",
    text: "For all orders over $99",
  },
  {
    icon: "/images/return-box.png",
    alt: "90 Days Return",
    title: "90 Days Return",
    text: "If goods have problems",
  },
  {
    icon: "/images/credit-card (1).png",
    alt: "Secure Payment",
    title: "Secure Payment",
    text: "100% secure payment",
  },
  {
    icon: "/images/24-hours.png",
    alt: "24/7 Support",
    title: "24/7 Support",
    text: "Dedicated support",
  },
  {
    icon: "/images/gift-card.png",
    alt: "Gift Service",
    title: "Gift Service",
    text: "Support gift service",
  },
];

export default function SiteFeatures() {
  return (
    <section className="ps-site-features py-8">
      <div className="ps-container">
        <div className="ps-block--site-features grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="ps-block__item flex items-center">
              {/* Left (icon) */}
              <div className="ps-block__left mr-4">
                <Image
                  src={feature.icon}
                  alt={feature.alt}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              {/* Right (text) */}
              <div className="ps-block__right">
                <h4 className="font-semibold text-lg">{feature.title}</h4>
                <p className="text-sm text-gray-600">{feature.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

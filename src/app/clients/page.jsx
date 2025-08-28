// app/about-us/page.jsx

import { ClientsComponents } from "@/components/pages/clients/ClientsComponents";
import { SharedBanner } from "@/components/shared/SharedBanner";
import banner_image from "@/resource/contact-backgeound.jpg";

export default function ClientsPage() {
  const bannerData = {
    title: "Clients",
    image: banner_image,
  };

  return (
    <div>
      <SharedBanner
        title={bannerData?.title}
        description={bannerData?.description}
        bgImage={bannerData?.image.src}
      />

      <ClientsComponents />
    </div>
  );
}

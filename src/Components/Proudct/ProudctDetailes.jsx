import { ProudctGallery } from "./ProudctGallery";
import { ProudctText } from "./ProudctText";

export const ProudctDetailes = () => {
  return (
    <div className="container" style={{ display: "flex", flexWrap: "wrap" }}>
      <div style={{ flex: 1 }}>
        <ProudctGallery />
      </div>
      <div style={{ flex: 2 }}>
        <ProudctText />
      </div>
    </div>
  );
};

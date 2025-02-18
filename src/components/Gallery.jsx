function Gallery({ isMobile }) {
  return (
    <section className="agency__gallery">
      <div className="gallery gallery--1">
        <img
          className="gallery__img--1 gallery__img"
          src={`./assets/images/${
            isMobile ? "mobile" : "desktop"
          }/image-gallery-milkbottles.jpg`}
          alt="Milk bottles"
        />
      </div>
      <div className="gallery gallery--2">
        <img
          className="gallery__img--2 gallery__img"
          src={`./assets/images/${
            isMobile ? "mobile" : "desktop"
          }/image-gallery-orange.jpg`}
          alt="Half an orange"
        />
      </div>
      <div className="gallery gallery--3">
        <img
          className="gallery__img--3 gallery__img"
          src={`./assets/images/${
            isMobile ? "mobile" : "desktop"
          }/image-gallery-cone.jpg`}
          alt="Ice cream cone"
        />
      </div>
      <div className="gallery gallery--4">
        <img
          className="gallery__img--4 gallery__img"
          src={`./assets/images/${
            isMobile ? "mobile" : "desktop"
          }/image-gallery-sugar-cubes.jpg`}
          alt="Half an orange"
        />
      </div>
    </section>
  );
}

export default Gallery;

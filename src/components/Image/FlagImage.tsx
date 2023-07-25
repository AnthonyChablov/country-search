
interface IFlagImage {
    src: string;
    alt: string;
}

const FlagImage = ({ src, alt,  }:IFlagImage) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`w-full h-auto max-w-md shadow-2xl`}
    />
  );
};

export default FlagImage;

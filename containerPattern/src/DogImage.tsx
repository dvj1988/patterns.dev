const DogImage = ({ url }: { url: string }) => {
  return <img src={url} alt="A Random Dog" className="dogImage" />;
};

export default DogImage;


const ImgContainer = ({ imgs }) => {

    

  return (
    <div className="img-container">
      {imgs.map((item, i) => (
        <div key={i} className="img-container-item">
          <img src={item.src} alt="" />
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default ImgContainer;

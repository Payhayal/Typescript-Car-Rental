type InfoType = {
  title: string;
  icon: string;
};

const CarInfo = ({ title, icon }: InfoType) => {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <img height={25} width={25} src={icon} alt="icon" />
      <p className="text-[14px]">{title}</p>
    </div>
  );
};

export default CarInfo;

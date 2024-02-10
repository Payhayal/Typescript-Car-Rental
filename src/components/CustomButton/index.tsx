import { IButtonProps } from "../../types/index";

const CustomButton = ({
  title,
  designs,
  handleClick,
  isDisabled,
  btnType,
  rIcon,
}: IButtonProps) => {
  return (
    <button
      type={btnType || "button"}
      disabled={isDisabled}
      onClick={handleClick}
      className={`custom-btn ${designs} bg-primary-blue rounded-full text-white transition hover:bg-blue-800`}
    >
      <span className="flex-1">{title}</span>
      {rIcon && (
        <div className="relative w-6 h-6">
          <img src={rIcon} alt="r-icon" />
        </div>
      )}
    </button>
  );
};

export default CustomButton;

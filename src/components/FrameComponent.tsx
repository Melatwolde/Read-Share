import { FunctionComponent } from "react";
import "../styles/FrameComponent.module.css"
import '../styles/global2.css'
import { Search, ShoppingCart } from "@mui/icons-material";
import profile from '../assets/profile.png'

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <header
      className={`w-[1350px] h-[70px] flex flex-row items-start justify-between py-0 pr-5 pl-0 box-border gap-[20px] max-w-full text-left text-xl text-normal-search-txt font-authore-name ${className}`}
    >
      <div className="self-stretch w-[95px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border">
        <img
          className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
          loading="lazy"
          alt=""
          src="../assets/logo.png"
        />
      </div>
      <div className="w-[604px] flex flex-row items-end justify-start gap-[272px] max-w-full mq750:gap-[136px] mq450:gap-[68px]">
        <div className="flex-1 shadow-[2px_2px_4px_rgba(0,_0,_0,_0.25)] rounded-xl bg-whitesmoke flex flex-row items-start justify-start pt-[13.9px] pb-[13.8px] pr-[21px] pl-[13px] gap-[98px]">
          <div className="flex flex-col items-start justify-start pt-[2.6px] px-0 pb-0">
            <div className="relative inline-block min-w-[66px]">Search</div>
          </div>
          
          <Search className='h-[29.3px] w-[29px] relative min-h-[29px]' />
        </div>
        <div className="flex flex-row items-end justify-start gap-[15px]">
          <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[6.2px]">
            
            
          <ShoppingCart className='w-10 h-[37.5px] relative' />
          </div>
          <img
            className="h-[50px] w-[50px] relative rounded-[50%] object-cover"
            loading="lazy"
            alt=""
            src={profile}
          />
        </div>
      </div>
    </header>
  );
};

export default FrameComponent;

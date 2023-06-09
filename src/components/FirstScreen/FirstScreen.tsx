import React from "react";
import oneZeroLogo from "../../assets/onezero-logo.svg";
import IconParagraph from "./IconParagraph";
import firstScreenIllustration from "../../assets/firstscreen-illustration.png";
import firstScreenIllustrationDesktop from "../../assets/firstscreen-illustration-desktop.png";

type Props = {};
export default function FirstScreen({}: Props) {
  return (
    <div className=" bg-blue w-full h-full flex flex-col gap-3 md:gap-[1.5625rem] text-white p-5 px-6 pb-6 md:px-20 md:py-6 md:pb-0 md:items-stretch">
      <img
        className="self-end object-contain w-26 h-[1.4rem] mt-2 md:mt-0  md:w-30 md:h-7"
        src={oneZeroLogo}
        alt="לוגו"
      />
      <div className="md:flex md:my- md:gap-[9.125rem] md:justify-between ">
        <div className="flex flex-col gap-4 md:gap-12 font-Digibank-Regular 3xl:self ">
          <h2 className="text-3xl md:text-5xl md:whitespace-nowrap 3xl:text-6xl ">
            בנק <span className="font-Digibank-Apparat-Book ">ONE ZERO</span>
            <br />
            חווית שירות מדהימה.
          </h2>
          <div>
            <IconParagraph text="שירות 24/6 שעובד בשבילך" />
            <IconParagraph text="מנהלי כספים שעושים את זה עבורכם" />
            <IconParagraph text="0% עמלת המרת מט״ח בכרטיס" />
          </div>

          <p className="font-Digibank-Medium md:my-3 md:text-2xl md:mt-12 3xl:text-3xl">
            ועכשיו עם חודשיים התנסות חינם <br />
            במסלול המוביל שלנו.
          </p>
        </div>
        <img
          className="md:hidden h-[175px] w-full object-contain"
          src={firstScreenIllustration}
          alt="המחשה מסך ראשון"
        />
        <img
          className="hidden md:flex w-[35rem] h-3/5 3xl:w-fit 3xl:h-[35rem]"
          src={firstScreenIllustrationDesktop}
          alt="המחשה מסך ראשון"
        />
      </div>
    </div>
  );
}

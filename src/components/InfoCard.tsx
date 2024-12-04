import { cn } from "@/utils/cn";

type Props = {
  index: number;
  image: ImageData | string;
  text: JSX.Element;
  icon: string;
};

function InfoCard({ index, image, text, icon }: Props) {
  return (
    <div className="rounded-custom-large bg-primary-blue px-4 py-6 flex flex-col justify-evenly gap-2 h-[389px] text-5xl  text-primary-white">
      <div className="index-wrapper text-center">
        <p className="font-serenity-thin pb-2 text-lg font-[300]">{index}</p>
      </div>
      <div className="w-full grid place-items-center">
        <img
          className={cn("w-[100px] h-[80px]", {
            "h-[100px]": icon == "printIcon",
          })}
          alt="camera"
          src={image as string}
          width={100}
          height={80}
        />
      </div>
      <div className="text-wrapper text-center break-words w-96">
        <pre className="font-serenity-thin text-base font-[300] leading-[55px] text-pretty">
          {text}
        </pre>
      </div>
    </div>
  );
}

export default InfoCard;

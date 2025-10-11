import NextImage from "@/components/ui/NextImage";

const SkillIconWIthLabel = ({ icon, label }: any) => {
  return (
    <div className="items-center gap-1.5 relative h-[100px] w-[80px] flex flex-col">
      <NextImage src={icon} height={70} width={70} alt={label} />
      <p className="font-medium absolute text-gray-300 text-xs bottom-0">{label}</p>
    </div>
  );
};

export default SkillIconWIthLabel;

import { Container } from "@mantine/core";

interface TabProps {
  description: string;
  color: string;

}


const Tab = ({ description, color }: TabProps) => {
  return (
    <div>

      <hr className="border-3"></hr>
      <h2
        className={` relative w-[120px] bottom-[37px] sm:min-w-[180px] sm:bottom-[41px]  md:min-w-[208px] md:bottom-[53px] px-4 py-1 ${color} rounded-t-lg ml-[5vw] w-[40vw] border-[5px] border-softblack border-b-0 sm:text-xl md:text-4xl font-bold text-center`}
      >
        {description}
      </h2>
    </div>

  );
};

export default Tab;
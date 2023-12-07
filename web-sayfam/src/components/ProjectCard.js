import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { ProductCardData } from "../mocks/ProductCardData";
import { useSelector } from "react-redux";

const ProjectCard = () => {
  const ProductCardData = useSelector((store) => store.projectData);
  return (
    <div className="flex flex-wrap justify-between  md:flex-row flex-col container gap-2 mx-auto">
      {ProductCardData?.map((data) => (
        <Card  className="mt-6 w-full md:w-[340px] mx-auto py-10 pt-12 dark:bg-[#252128] flex-shrink-0">
          <CardHeader color="blue-gray" className="relative">
            <img src={data.resim} alt="card-image" />
          </CardHeader>
          <CardBody>
            <Typography
              variant="h5"
              color="blue-gray"
              className="font-medium text-3xl dark:text-[#CFCBFF] dark:bg-[#252128] pb-6 mb-2"
            >
              {data.baslik}
            </Typography>
            <Typography className="dark:text-white text-[#6B7280] pb-4">
              
              {data.aciklama}
            </Typography>
          </CardBody>
          <CardFooter className="flex gap-3 pt-0">
            {data.kutuphaneler.map((kutuphane) => (
              <p className=" border-solid border border-[#3730A3] flex items-center justify-center gap-2 text-[#3730A3] dark:bg-[#383838] dark:text-[#E1E1FF] text-sm font-medium px-4 py-2 rounded-md w-[131px]">
                {kutuphane}
              </p>
            ))}
            <div className="flex-grow"></div>
          </CardFooter>
          <div className="hidden md:flex justify-between px-8 text-[#3730A3] dark:text-white underline mt-4">
            <a href="https://github.com/" target="_blank">
              Github
            </a>
            <a href="https://www.linkedin.com/" target="_blank">
              View Site
            </a>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default ProjectCard;

import { FC } from "react";
import { Link, Outlet } from "react-router-dom";
export const Page1: FC = () => {
  return (
    <>
      <div>
        <h1 className="h1-base">This is the Page1</h1>
      </div>
      <div className="flex flex-col justify-center items-center">
        <Link className="link-base m-5" to="detailA">
          DetailA
        </Link>
        <Link className="link-base m-5" to="detailB">
          DetailB
        </Link>
        <Outlet />
      </div>
    </>
  );
};

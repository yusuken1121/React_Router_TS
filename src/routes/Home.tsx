import { FC } from "react";
import { useLocation } from "react-router-dom";

export const Home: FC = () => {
  const location = useLocation();
  const { state } = location;
  console.log(state);

  return (
    <>
      <div>
        <h1 className="h1-base">This is the Home page</h1>
      </div>
      {state ? (
        <div>
          <p>Name : {state.name}</p>
          <p>Age : {state.age}</p>
        </div>
      ) : (
        <div>
          <h1 className="h1-base">Not found Statement</h1>
        </div>
      )}
    </>
  );
};

import { InfinitySpin } from "react-loader-spinner";
import css from "./Loader.module.css";
export const Loader = () => {
  return (
    <div className={css.loader}>
      <InfinitySpin width="200" color="#5f0faa" />
    </div>
  );
};

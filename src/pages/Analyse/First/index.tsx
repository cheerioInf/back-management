import { useDispatch, useSelector } from "react-redux";

const AnalyseFirst = () => {
  const { arr } = useSelector((state: any) => ({
    arr: state.ArrReducer.arr,
  }));

  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch({
      type: "push",
      value: 3,
    });
  };

  return (
    <div>
      分析1{arr} <button onClick={clickHandler}>push</button>
    </div>
  );
};

export default AnalyseFirst;

import { useSelector, useDispatch } from "react-redux";

const Abstract = () => {
  const { num } = useSelector((state: any) => {
    return {
      num: state.numReducer.num,
    };
  });

  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch({
      type: "add",
      num: 1,
    });
  };

  return (
    <div>
      首页{num}
      <button onClick={clickHandler}>add</button>
    </div>
  );
};

export default Abstract;

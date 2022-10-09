import "./ProgressCircles.css";

function ProgressCircles({ info }) {
  console.log(info);
  return <>
    {
      [...Array(10).keys()].map((num) => (
        <div className="circle"> {num} </div>
      ))
    }
  </>;
}

export default ProgressCircles;

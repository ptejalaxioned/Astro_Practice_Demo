export default function SaleCountdown() {
  return (
    <>
      <div className="sale-countdown-up">
        <h3 className="first-letter-caps">sale countdown!</h3>
        <ul className="count-list">
          <li className="days">
            <span className="number"> 00 </span>
            <span className="period"> days </span>
          </li>
          <li className="hours">
            <span className="number"> 00 </span>
            <span className="period"> hours </span>
          </li>
          <li className="minutes">
            <span className="number"> 00 </span>
            <span className="period"> minutes </span>
          </li>
          <li className="seconds">
            <span className="number"> 00 </span>
            <span className="period"> seconds </span>
          </li>
        </ul>
      </div>
    </>
  );
}

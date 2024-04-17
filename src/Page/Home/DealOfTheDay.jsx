/* eslint-disable react/prop-types */
import { useTimer } from "react-timer-hook";

const DealOfTheDay = ({ expiryTimestamp }) => {
    const {
        seconds,
        minutes,
        hours,
        days,
      
    } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });

    return (
        <div className="py-5 px-2 md:py-28 flex flex-col-reverse md:flex-row items-center justify-between">

            {/* title */}

            <div>
                <h3 className="text-3xl font-bold">Deal of the day</h3>
                <p>Contrary to popular belief, is not simply random text. It has roots in a piece of classical <br /> Latin literature from 45 BC, making it over 2000 years old.</p>
            </div>

            {/* countdown */}
            <div>
                <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '60px' }}>

                        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span> <br />
                        
                    </div>
                                      
                </div>
            </div>

        </div>
    );
}
export default function App() {
    const time = new Date();
    time.setSeconds(time.getSeconds() + 1000000); // 10 minutes timer
    return (
        <div>
            <DealOfTheDay expiryTimestamp={time} />
        </div>
    );
}

export { DealOfTheDay }
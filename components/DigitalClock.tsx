import dayjs from 'dayjs'
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

interface ClockNum {
    time: number
}

dayjs.extend(utc)
dayjs.extend(timezone)

const DigitalClock: React.VFC<ClockNum> = ({ time }) => {
  return <div>{dayjs(time).tz("Asia/Tokyo").format('HH:mm:ss')}</div>
}

export default DigitalClock
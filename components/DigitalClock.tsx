import dayjs from 'dayjs'
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

interface ClockNum {
    time?: number
}

dayjs.extend(utc)
dayjs.extend(timezone)

const DigitalClock = ({ time }: ClockNum) => {
  const timeString = time
    ? dayjs(time).tz("Asia/Tokyo").format('HH:mm:ss')
    : '00:00:00'

  return <div>{timeString}</div>
}

export default DigitalClock
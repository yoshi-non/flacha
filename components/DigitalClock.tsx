import dayjs from 'dayjs'

interface ClockNum {
    time: number
}

const DigitalClock: React.FC<ClockNum> = ({ time }) => {
  return <div>{dayjs(time).format('HH:mm:ss')}</div>
}

export default DigitalClock
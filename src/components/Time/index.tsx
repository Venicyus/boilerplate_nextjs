import { useStore } from '@app/stores/useStore'

const TimeComponent = () => {
  const { time } = useStore()

  const formatTime = (time: number): string => {
    const date = new Date(time)

    return date.toLocaleString('pt-br').split(' ')[1]
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

        margin: '5px',
        padding: '20px',

        border: '1px dashed  #ccc',
        borderRadius: '10px',
        width: 200
      }}
    >
      <div>Time: {formatTime(time.value)}</div>
      <div>
        <button disabled={time.isInProgress} onClick={() => time.onPlay()}>
          Play
        </button>

        {time.value === 0 || time.isInProgress ? (
          <button disabled={!time.isInProgress} onClick={() => time.onStop()}>
            Stop
          </button>
        ) : (
          <button onClick={() => time.onReset()}>Reset</button>
        )}
      </div>
    </div>
  )
}

export default TimeComponent

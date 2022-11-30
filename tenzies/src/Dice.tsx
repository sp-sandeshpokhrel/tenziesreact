export default function Dice(props) {
    return (
        <button className={`dice-square ${props.stop && "free"}`} onClick={() => props.setFreeze(props.index)}>
            {props.number}
        </button>
    )
}
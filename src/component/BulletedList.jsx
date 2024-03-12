export default function BulletedList({ list }) {
    return (
        <li style={{
            listStyleType: "disc",
            color: "#464646",
            fontSize: "1em",
            padding: "5px",
            marginLeft: "25px"
        }}>{list}</li>
    )
}
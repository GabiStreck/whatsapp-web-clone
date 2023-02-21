import { Circle } from "better-react-spinkit";

export default function Loading() {
    return (
        <center style={{
            display: "grid",
            height: "100vh",
            placeItems: "center"
        }}
        >
            <div>
                <Circle color="#3cb328" size={65} />
            </div>
        </center>
    );
}


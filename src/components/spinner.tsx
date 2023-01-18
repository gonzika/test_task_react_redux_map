import { CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override: CSSProperties = {
    position: "absolute",
    top: "50%",
    left: "50%",
    zIndex: 99999,
    transform: 'translate(-50%, -50%)',
};

export default function Spinner({ loading }) {
    if (!loading) return <></>
    return (
        <div style={override}>
            <ClipLoader
                color="blue"
                cssOverride={{ borderWidth: 4 }}
                loading={true}
                size={50}
                speedMultiplier={1}
            />
        </div>
    )
}

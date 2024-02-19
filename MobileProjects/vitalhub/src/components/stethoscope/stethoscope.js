import { StethosImage, FixedButtton } from "./styles"

const Stethoscope = () => {

    return (
        <FixedButtton>
            <StethosImage source={require("../../assets/img/estetoscopio.png")} />
        </FixedButtton>
    )
}

export default Stethoscope
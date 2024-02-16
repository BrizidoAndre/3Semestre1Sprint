import { IconWatch, StatusCard, StatusCardGray, StatusCardGreen } from "./styles"

import GrayWatch from '../../assets/img/mingcute_time-fill.png'
import GreenWatch from '../../assets/img/Vector.png'
import { Sand14600Gray, Sand14600Green } from "../title/title"

export const StatusGreen = ({time}) => {
    return (
        <StatusCardGreen>
            <IconWatch source={GreenWatch}/>
            <Sand14600Green>-</Sand14600Green>
            <Sand14600Green>{time}</Sand14600Green>
        </StatusCardGreen>
    )
}

export const StatusGray = ({time}) => {
    return (
        <StatusCardGray>
            <IconWatch source={GrayWatch}/>
            <Sand14600Gray>-</Sand14600Gray>
            <Sand14600Gray>{time}</Sand14600Gray>
        </StatusCardGray>
    )
}


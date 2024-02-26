import { ScrollView } from "react-native";
import { Title } from "../title/title";
import { DateBox, DateSelectedBox, TextDate, TextDateSelected, TextNumberDate, TextNumberDateSelected } from "./style";
import { RowContainer } from "../container/style";


export const ProduceDate = ({i, selected = false, onPress = null}) => {

    var data = new Date()
    data.setDate(data.getDate() + i)

    var dataNumber = data.toLocaleDateString('default', { day: '2-digit' });

    var dataWeek = data.toLocaleDateString('default', { weekday: 'short' });
    dataWeek = dataWeek.slice(0, -1)


    if (selected === true) {
        return (
            <DateSelectedBox >
                <TextDateSelected>{dataWeek}</TextDateSelected>
                <TextNumberDateSelected>{dataNumber}</TextNumberDateSelected>
            </DateSelectedBox>
        )

    }
    else {
        return (
            <DateBox onPress={onPress}>
                <TextDate>{dataWeek}</TextDate>
                <TextNumberDate>{dataNumber}</TextNumberDate>
            </DateBox>
        )
    }
}
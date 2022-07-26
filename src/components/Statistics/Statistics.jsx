import propTypes from "prop-types";
import { StatHeader, StatisticsList, StatSection, StatisticsItem } from './index';

const getRandomHexColor = ()=> {
        return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    };



export const Statistics = ({ stats , title}) => {
    return (
            <StatSection class="statistics">
            {title&&(<StatHeader class="title">{title}</StatHeader>)}
                <StatisticsList>
                    {stats.map( item  => (
                        <StatisticsItem
                            class="item"
                            key={item.id}
                            style={{
                                width: `calc(100%/${stats.length})`,
                                backgroundColor:`${getRandomHexColor()}`}}>
                            <span class="label">{item.label}</span>
                            <span class="percentage">{item.percentage}</span>
                        </StatisticsItem>
                    )
                        
                    )}
                </StatisticsList>
        </StatSection>

    )
};

Statistics.propTypes = {
    title: propTypes.string,
    stats: propTypes.array.isRequired,
};
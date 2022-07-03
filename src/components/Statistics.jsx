import propTypes from "prop-types";

import { StatHeader } from "./ui/Statistics/StatHeader"
import { StatisticsList } from "./ui/Statistics/StatisticsList"
import { StatSection } from "./ui/Statistics/StatSection"
import { StatisticsItem } from "./ui/Statistics/StatisticsItem"



export const Statistics = ({ stats , title}) => {
    return (
            <StatSection class="statistics">
            {title&&(<StatHeader class="title">{title}</StatHeader>)}
                <StatisticsList>
                    {stats.map( item  => (
                        <StatisticsItem class="item" key={item.id}>
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
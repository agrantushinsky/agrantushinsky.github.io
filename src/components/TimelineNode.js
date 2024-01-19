import { VerticalTimelineElement } from "react-vertical-timeline-component";
import AnimatedShowMore from "react-animated-show-more"
import MoreLessButton from "./MoreLessButton";

function TimelineNode(props) {
    return (
        <VerticalTimelineElement 
            date={props.date}
            contentStyle={{ background: props.colour, color: '#fff' }}
            contentArrowStyle={{ borderRight: `7px solid ${props.colour}` }}
            iconStyle={{ background: props.colour, color: '#fff' }}
        >
            <AnimatedShowMore
                height={100}
                toggle={MoreLessButton}
                speed={250}
                shadowColor={props.colour}
            >
                {props.children}
            </AnimatedShowMore>
        </VerticalTimelineElement>
    );
}

export default TimelineNode;
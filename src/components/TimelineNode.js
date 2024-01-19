import { VerticalTimelineElement } from "react-vertical-timeline-component";
import AnimatedShowMore from "react-animated-show-more"
import MoreLessButton from "./MoreLessButton";

function TimelineNode(props) {
    return (
        <VerticalTimelineElement 
            date={props.date}
            className    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
            <AnimatedShowMore
                height={100}
                toggle={MoreLessButton}
                speed={250}
                shadowColor="#000"
            >
                {props.children}
            </AnimatedShowMore>
        </VerticalTimelineElement>
    );
}

export default TimelineNode;
import { VerticalTimelineElement } from "react-vertical-timeline-component";

function TimelineNode(props) {
    return (
        <VerticalTimelineElement 
            date={props.date}
            className    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
            {props.children}
        </VerticalTimelineElement>
    );
}

export default TimelineNode;
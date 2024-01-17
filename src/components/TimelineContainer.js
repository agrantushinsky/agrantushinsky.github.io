import { VerticalTimeline } from "react-vertical-timeline-component";

function TimelineContainer({children}) {
    return (
        <VerticalTimeline layout="1-column-left" lineColor="white">
            {children}
        </VerticalTimeline>
    );
}

export default TimelineContainer;
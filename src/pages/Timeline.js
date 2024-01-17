import TimelineNode from "../components/TimelineNode";
import TimelineTitle from "../components/TimelineTitle";
import TimelineContainer from "../components/TimelineContainer";
import TimelineSubtitle from "../components/TimelineSubtitle";

// Import for all the timeline styling.
import 'react-vertical-timeline-component/style.min.css';

function Timeline() {
    return <>
        <h1>Marx timeline!</h1>

        <TimelineContainer>
            <TimelineNode date="1990-1995">
                <TimelineTitle>This is a title.</TimelineTitle>
                <TimelineSubtitle>And this is a subtitle.</TimelineSubtitle>
                <p>Some other text...</p>
            </TimelineNode>
            <TimelineNode date="1990-1995">
                <TimelineTitle>Number two</TimelineTitle>
                <TimelineSubtitle>Woah.</TimelineSubtitle>
                <p>Even more other text...</p>
            </TimelineNode>
        </TimelineContainer>
    </>
}

export default Timeline;
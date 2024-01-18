import TimelineNode from "../components/TimelineNode";
import TimelineTitle from "../components/TimelineTitle";
import TimelineContainer from "../components/TimelineContainer";
import TimelineSubtitle from "../components/TimelineSubtitle";

// Import for all the timeline styling.
import 'react-vertical-timeline-component/style.min.css';
import References from "../components/References";

function Timeline() {
    return <>
        <h1>The Cuban Revolution</h1>

        <TimelineContainer>
            <TimelineNode date="1901">
                <TimelineTitle>Platt Amendment</TimelineTitle>
                <TimelineSubtitle>Limiting Cuba's power</TimelineSubtitle>
                <p>
                    The amendment stipulated the conditions for the withdrawal of the U.S. following the Spanish-American War. It required that Cuba would not transfer
                    land to any power other than the U.S. and the naval base Guantánamo Bay must be handed over to the United States.
                    On the 1901, the articles were incorporated in the constitution. Upon the removal of U.S. troops, Cuba became a republic. ("Platt Amendment")
                </p>

                <p>
                    The Cuban people viewed the admendment as an infringement of their sovereignty. ("Platt Amendment")
                </p>
            </TimelineNode>

            <TimelineNode date="1905-1906">
                <TimelineTitle>Estrada Palma's administration</TimelineTitle>
                <TimelineSubtitle>Conversative party, later to be known as the Moderates</TimelineSubtitle>
                <p>
                    Palma planned to implement progressive policies, however he was plagued by instability. Upon being accused of rigging the election,
                    and commiting pension fraud and failure to deliver on his promises, a revolution was triggered forcing him to resign ("Cuban Revolution").
                </p>
            </TimelineNode>

            <TimelineNode date="1913-1921">
                <TimelineTitle>Corruption in Cuba</TimelineTitle>
                <TimelineSubtitle>Something about needing reform</TimelineSubtitle>
                <p>
                    Menocal's government made material progress, however new charges of government corruption came with it and accusations of nepotism.
                    Menocal later secured his reelection through the means of fraud and violence ("Cuban Revolution").  
                </p>
                <p>
                    Power imbalance...
                </p>
            </TimelineNode>

            <TimelineNode date="1953">
                <TimelineTitle>The rise of Fidel Castro</TimelineTitle>
                <p>
                    Throughout Fidel Castro's time as a student, he participated in numerous revolutionary activities. In 1952, he was the candidate for the
                    people's party, however Batista's coup stopped the election. In 1953, Castro led 160 men in an unsuccessful raid hoping to spark an uprising against
                    Batista's dictatorship ("Cuban Revolution") ("Fulgencio Batista").
                </p>
            </TimelineNode>

            <TimelineNode date="">
                <TimelineTitle>The revolution</TimelineTitle>
                <p>
                    Castro returned to Cuba in 1956, 
                </p>
            </TimelineNode>
        </TimelineContainer>

        <References/>
    </>
}

export default Timeline;
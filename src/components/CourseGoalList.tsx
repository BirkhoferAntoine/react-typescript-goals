import {type FC, ReactNode} from "react";
import {type CourseGoal as CGType} from "../App.tsx";
import CourseGoal from "./CourseGoal";
import Infobox from "./Infobox.tsx";

type CourseGoalListProps = {
    goals: CGType[];
    onDeleteGoal: (id: number) => void;
};

const CourseGoalList: FC<CourseGoalListProps> = ({goals, onDeleteGoal}) => {
    let warningBox: ReactNode;

    if (goals.length >= 4) {
        warningBox = (
            <Infobox mode={"warning"} severity={'medium'}>
                You're collecting a lot of Goals, don't overdo it !
            </Infobox>
        )
    }

    return (
        <>
            {warningBox}
            <ul>
                {goals.map(({id, title, description}): ReactNode => {
                    return (
                        <li key={id}>
                            <CourseGoal id={id} title={title} onDelete={onDeleteGoal}>
                                <p>{description}</p>
                            </CourseGoal>
                        </li>
                    );
                })}
            </ul>
        </>
    );

};

export default CourseGoalList;
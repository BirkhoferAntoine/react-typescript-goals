import {type FC, ReactNode} from "react";
import {type CourseGoal as CGType} from "../App.tsx";
import CourseGoal from "./CourseGoal";

type CourseGoalListProps = {
    goals: CGType[];
    onDeleteGoal: (id: number) => void;
};

const CourseGoalList: FC<CourseGoalListProps> = ({goals, onDeleteGoal}) => {
    return (
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
    );
};

export default CourseGoalList;
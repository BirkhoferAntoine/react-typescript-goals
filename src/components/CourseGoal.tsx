//rfct
/*import {type ReactNode} from "react";

interface CourseGoalProps {
    title: string,
    children: ReactNode
}*/

import {type FC, type PropsWithChildren} from "react";

type CourseGoalListProps = PropsWithChildren<{
    title: string,
    id: number,
    onDelete: (id: number) => void;
}>;

const CourseGoal: FC<CourseGoalListProps> = ({title, id, onDelete, children}) =>
    {
        return <article>
            <div>
                <h2>{title}</h2>
                {children}
            </div>
            <button onClick={() => onDelete(id)}>DELETE</button>
        </article>
    }
;
export default CourseGoal;

/*
export default function CourseGoal ({title, children}: CourseGoalProps)
    {
        return <article>
            <div>
                <h2>{title}</h2>
                {children}
            </div>
            <button>DELETE</button>
        </article>
    }
;*/

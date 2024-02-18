import {type FC, type FormEvent, useRef} from "react";

type NewGoalProps = { onAddGoal: (goal: string, summary: string) => void }

const NewGoal: FC<NewGoalProps> = ({onAddGoal}) => {

    const goalRef       = useRef<HTMLInputElement>(null);
    const summaryRef    = useRef<HTMLInputElement>(null);
    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const inputGoal = goalRef.current!.value;
        const inputSummary = summaryRef.current!.value;

        event.currentTarget.reset();
        onAddGoal(inputGoal, inputSummary);
        //new FormData(event.currentTarget);
    }



    return (
        <form onSubmit={handleSubmit}>
            <p>
                <label htmlFor={"goal"}>Your goal</label>
                <input type="text" id="goal" ref={goalRef}/>
            </p>
            <p>
                <label htmlFor={"summary"}>Short Summary</label>
                <input type="text" id="summary" ref={summaryRef}/>
            </p>
            <p>
                <button>Add Goal</button>
            </p>
        </form>
    );
};

export default NewGoal;
import "../styles/GuessForm.css"

interface GuessFormProps {
    MIN: number;
    MAX: number;
    HandleGuess(): void;
    HandleInput(e: React.ChangeEvent<HTMLInputElement>): void;
}

export function GuessForm({ MIN, MAX, HandleGuess, HandleInput }: GuessFormProps) {
    return (
        <div className="guess-form-wrapper">
            <input className="guess-form-input" id="input" onChange={(e) => HandleInput(e)} type="number" min={MIN} max={MAX}/>
            <button className="guess-form-button" onClick={HandleGuess}>Spėti</button>
        </div>
    );

    
}
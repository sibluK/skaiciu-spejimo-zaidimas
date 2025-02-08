import { useState } from "react"
import { GuessForm } from "./GuessForm"
import { Message } from "./Message"
import "../styles/GuessGame.css"

export function GuessGame() {
    const MIN = 0;
    const MAX = 100;
    const [guessedNumbers, setGuessedNumbers] = useState<number[]>([])
    const [guess, setGuess] = useState<number>()
    const [message, setMessage] = useState<string>("")
    const [randomNumber, setRandomNumber] = useState(GenerateRandomNumber())

    function GenerateRandomNumber() {
        var randomNumber = Math.floor(Math.random() * MAX) + 1;
        return randomNumber
    }

    function HandleInput(e: React.ChangeEvent<HTMLInputElement>) {
        setGuess(parseInt(e.target.value))
    }
    
    function HandleGuess() {

        if(isNaN(guess)) {
            setMessage("Įveskite skaičių")
            return
        }

        if(guessedNumbers.includes(guess)) {
            setMessage("Jau spėjote šį skaičių")
            return
        }

        if(guess < MIN || guess > MAX) {
            setMessage(`Skaičius turi būti tarp ${MIN} ir ${MAX}`)
            return
        }

        if(guess === randomNumber) {
            setMessage("Atspėjote skaičių. Įveskite naują skaičių jei norite žaisti dar kartą")
            setGuessedNumbers([])
            setRandomNumber(GenerateRandomNumber())
            return
        }

        if(guess < randomNumber) {
            setMessage("Bandyk didesnį skaičių")
            setGuessedNumbers([...guessedNumbers, guess])
            return
        }

        if(guess > randomNumber) {
            setMessage("Bandyk mažesnį skaičių")
            setGuessedNumbers([...guessedNumbers, guess])
            return
        }

        setGuessedNumbers([...guessedNumbers, guess])
    } 

    return (
        <div className="guess-game-wrapper">
            <h1 className="game-name">Skaičių spėjimo žaidimas</h1>
            <p className="game-description">Atspėk skaičių nuo {MIN} iki {MAX}</p>
            <GuessForm MIN={MIN} MAX={MAX} HandleGuess={HandleGuess} HandleInput={HandleInput}/>
            <Message message={message} />
            <div className="guessed-numbers-wrapper">
                <h2>Spėti numeriai ({guessedNumbers.length}): </h2>
                <div className="guessed-numbers-list">
                    {guessedNumbers.map((number, index) => {
                        return <div className="guessed-number" key={index}>{number}</div>
                    })}
                </div>
            </div>
        </div>
    )
}
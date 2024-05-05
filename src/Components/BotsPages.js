import { useEffect, useState } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
import BotSpecs from "./BotSpecs";
import SortBar from "./SortBar";


export default function Botpages() {
    const [bots, setBots] = useState([]);
    const [enlistedBots, setEnlistedBots] = useState([]);
    const [selectedBots, setSelectedBots] = useState(null);

    function fetchBots() {
        fetch("https://bot-battlr-jkc6.onrender.com/bots")
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error("Failed to fetch the bots");
            })
            .then((bots) => setBots(bots))
            .catch((error) => console.error(error));
    }
    useEffect(() => {
        fetchBots();
    }, []);

    function showBot(id) {
        setSelectedBots(id);
    }
    function enlistBot(id) {
        const botToEnlist = bots.find((bots) => bots.id === id);

        const EnlistedBotExists = enlistedBots.find(
            (bots) => bots.bot_class === botToEnlist.bot_class
        );
        if (botToEnlist && !EnlistedBotExists) {
            setEnlistedBots((prevEnlistedBots) => [...prevEnlistedBots, botToEnlist]);
            setBots((prevBots) => prevBots.filter((bots) => bots.id !== id));
            setSelectedBots(null);
        } else {
            alert(` A ${botToEnlist.bot_class} bot has already enlisted to your army`);
            setSelectedBots(null);
        }
    }

    function removeBot(id) {
        const removedBot = enlistedBots.find((bots) => bots.id === id);
        setEnlistedBots((prevEnlistedBots) =>
            prevEnlistedBots.filter((bots) => bots.id !== id)
        );
        if (removedBot) {
            alert(` ${removedBot.name} has been removed from your army!`);
            setSelectedBots(null);
            setBots((prevBots) => [removedBot, ...prevBots])
        }
    }
    return (
        <div>
            <SortBar bots={bots} setBots={setBots} />
            {selectedBots === null ? (
                <>
                    <YourBotArmy bots={enlistedBots} handleClick={removeBot} />
                    <BotCollection bots={bots} handleClick={showBot} />
                </>
            ) : (
                <>
                    <YourBotArmy bots={enlistedBots} handleClick={removeBot} />
                    <BotSpecs bot={bots.find((bots) => bots.id === selectedBots)}
                        onBackClick={() => setSelectedBots(null)}
                        onEnlistClick={enlistBot}
                    />
                    <BotCollection bots={bots} handleClick={showBot} />
                </>
            )}
        </div>
    );
}
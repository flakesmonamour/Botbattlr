import React from "react";

function YourBotArmy({ bots, handleClick }) {
    function removeCard(id) {
        handleClick(id);
    }

    const botCollection = bots.map((bots) => (
        <div className="col-md-2 mb-3" key={bots.id}>
            <div
                className="card"
                style={{
                    justifyContent: "space-between",
                    marginLeft: "40px",
                    marginTop: "20px",
                }}
            >
                <div className="bot-image">
                    <img className="card-img-top" src={bots.avatar_url} alt={bots.name} />
                </div>
                <div className="card-body">
                    <h5 className="card-title">
                        <i>{bots.name}</i>
                    </h5>
                    <h6>{bots.bot_class}</h6>
                    <div className="card-text">
                        <p>{bots.catchphrase}</p>
                    </div>
                    <div className="card-text">
                        <span>
                            <i
                                className="bi bi-heart-pulse"
                                style={{
                                    color: "red",
                                    paddingRight: "4px",
                                }}
                            />
                            {bots.health}
                        </span>
                        <span>
                            <i
                                class="bi bi-lightning-fill"
                                style={{
                                    color: "gold",
                                    marginLeft: "12px",
                                    paddingRight: "4px",
                                }}
                            />
                            {bots.damage}
                        </span>
                        <span>
                            <i
                                class="bi bi-shield-shaded"
                                style={{
                                    color: "silver",
                                    marginLeft: "12px",
                                    paddingRight: "4px",
                                }}
                            />
                            {bots.armor}
                        </span>
                    </div>
                    <button
                        className="btn btn-danger"
                        style={{ marginTop: "5px" }}
                        onClick={() => removeCard(bots.id)}
                    >
                        Remove Bot
                    </button>
                </div>
            </div>
        </div>
    ));
    return (
        <div>
            <h3 style={{ marginTop: "10px", marginBottom: "10px" }}>YOUR BOT ARMY</h3>
            <div className="row bot-army-row"
                style={{ background: "olive", marginTop: "20px" }}
            >
                {botCollection}
            </div>
        </div>
    );
}

export default YourBotArmy;
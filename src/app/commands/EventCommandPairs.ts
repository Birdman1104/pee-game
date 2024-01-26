import { lego } from "@armathai/lego";
import Head from "../../models/HeadModel";

const increaseScoreCommand = (): void => {
    Head.gameModel.score++;
};

const initGameModelCommand = (): void => {
    Head.initGameModel();
};

const initHeadModelCommand = (): void => {
    Head.init();
};

export const initModelsCommand = (): void => {
    lego.command
        //
        .execute(initHeadModelCommand)
        .execute(initGameModelCommand);
};

const eventCommandPairs: { event: any; command: any }[] = [
    {
        event: "BkgClick",
        command: increaseScoreCommand,
    },
];

export const unmapCommands = (): void => {
    eventCommandPairs.forEach((pair) => {
        lego.command.off(pair.event, pair.command);
    });
};

export const mapCommands = (): void => {
    eventCommandPairs.forEach((pair) => {
        lego.command.on(pair.event, pair.command);
    });
};

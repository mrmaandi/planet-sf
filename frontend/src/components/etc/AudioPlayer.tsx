import React, { FC } from 'react';
import ReactJkMusicPlayer from 'react-jinke-music-player';
import { observer } from 'mobx-react';
import { useRootStore } from '../section/Wrapper';

const AudioPlayer: FC = () => {
    const { audioPlayerStore } = useRootStore();
    const { audioList } = audioPlayerStore;

    if (!audioList[0]) {
        return <></>;
    }

    return (
        <div className="audio-player">
            <div key={audioList[0].cover}>
                <ReactJkMusicPlayer
                    audioLists={audioList}
                    mode="full"
                    showMediaSession
                    remove={false}
                    showThemeSwitch={false}
                    showLyric={false}
                    playMode={audioPlayerStore.playMode()}
                    showDownload={false}
                    theme="auto"
                    showReload={false}
                    showDestroy={false}
                    onPlayModeChange={audioPlayerStore.onPlayModeChange}
                />
            </div>
        </div>
    );
};

const getRndInteger = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min)) + min;
};

export default observer(AudioPlayer);

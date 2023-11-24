import globalStyles from '../Global.module.css';
import LevelThree from './LevelThree';

const LevelTwo = () => {
    return (
        <>
        <div className={globalStyles.column}>
            <div className={globalStyles.componentBubble}>
                <h1>LevelTwo</h1>
            </div>
            <div className={globalStyles.levelOrder}>
                <LevelThree />
                <LevelThree />
            </div>
        </div>
        </>
    );
}

export default LevelTwo;

import styles from './LevelTwo.module.css';
import globalStyles from '../Global.module.css';

const LevelThree = () => {
    return (
        <div className={globalStyles.column}>
            <div className={globalStyles.componentBubble}>
                <h1>Level 3</h1>
            </div>
            <div className={globalStyles.levelOrder}>
                <div className={globalStyles.componentBubble}>
                    <h1>Level 4</h1>
                </div>
                <div className={globalStyles.componentBubble}>
                    <h1>Level 4</h1>
                </div>   
            </div>
        </div>
    );
}

export default LevelThree;

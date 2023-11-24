import globalStyles from '../Global.module.css';
import LevelTwo from './LevelTwo';

const LevelOne = () => {
    return (
        <>
        <div className={globalStyles.componentBubble}>
            <h1>Level One</h1>
        </div>
        <div className={globalStyles.levelOrder}>
            <LevelTwo />
            <LevelTwo />  
        </div>
        
        </>
    );
}

export default LevelOne;

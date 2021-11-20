import './Progress.css';
import loading_process from '../../assets/images/loading/loading_process.gif';

export default function Progress({ isShow, msg }){
    const showHideClassName = isShow ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <div id="overlayDiv" >
                <div id="messageDiv">
                    <p>{msg}</p>
                    <p><img src={loading_process} alt="progress bar" width="24" height="24"/></p>
                </div>
            </div>
        </div>
    );
};
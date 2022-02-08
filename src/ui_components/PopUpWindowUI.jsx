import React from 'react';

export const PopUpWindowUI = (props) => {
    return (
        <div className={`${props.classes.popUpWindow} ${props.isMobileDeviceBoolean ? props.classes.popUpWindow_mobileDevice : null}`}>
            <p className={`${props.classes.popUpWindowQuestion} ${props.isMobileDeviceBoolean ? props.classes.popUpWindowQuestion_mobileDevice : null}`}>Удалить безвозвратно чат "{props.openContact.name}" со всеми сообщениями?</p>
            <div className={props.classes.popUpWindowAction}>
                <button className={`${props.classes.popUpWindowBtn} ${props.isMobileDeviceBoolean ? props.classes.popUpWindowBtn_mobileDevice : null}`} onClick={props.deleteChat}>Удалить</button>
                <button className={`${props.classes.popUpWindowBtn} ${props.isMobileDeviceBoolean ? props.classes.popUpWindowBtn_mobileDevice : null}`} onClick={props.closePopUpWindow}>Отмена</button>
            </div>
        </div>
    )
};

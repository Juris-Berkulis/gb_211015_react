import React from 'react';
import { APP_THEMES_NAMES } from '../../data/consts';
import { isMobileDevice } from '../../helper/helper';
import { useStyles } from '../../styles/Style';
import { HomeUI } from '../../ui_components/HomeUI';
import logoRectangle from '../../img/logo/logoRectangle.png';
import logoCircle from '../../img/logo/logoCircle.png';
import logoEnvelope from '../../img/logo/logoEnvelope.png';
import { useSelector } from 'react-redux';
import { getStatusesInTheAppappThemeIsSelector } from '../../store/AppSwitches/Selectors';

export const Home = () => {
    const classes = useStyles();

    const appThemeSel = useSelector(getStatusesInTheAppappThemeIsSelector);

    const isMobileDeviceBoolean = isMobileDevice();

    return (
        <HomeUI classes={classes} isMobileDeviceBoolean={isMobileDeviceBoolean} APP_THEMES_NAMES={APP_THEMES_NAMES} logoRectangle={logoRectangle} logoCircle={logoCircle} logoEnvelope={logoEnvelope} appThemeSel={appThemeSel}></HomeUI>
    )
};

import React from "react";

const types = {
    semibold_36 : {
        fontFamily : "BioSans-SemiBold",
        fontSize : "36px",
        color : "#212121"
    },
    semibold_28 : {
        fontFamily : "BioSans-SemiBold",
        fontSize : "28px",
        color : "#212121"
    },
    semibold_26 : {
        fontFamily : "BioSans-SemiBold",
        fontSize : "26px",
        color : "#212121"
    },
    semibold_24 : {
        fontFamily : "BioSans-SemiBold",
        fontSize : "24px",
        color : "#212121"
    },
    semibold_22 : {
        fontFamily : "BioSans-SemiBold",
        fontSize : "22px",
        color : "#212121"
    },
    semibold_19 : {
        fontFamily : "BioSans-SemiBold",
        fontSize : "19px",
        color : "#212121"
    },
    semibold_18 : {
        fontFamily : "BioSans-SemiBold",
        fontSize : "18px",
        color : "#212121"
    },
    semibold_17 : {
        fontFamily : "BioSans-SemiBold",
        fontSize : "17px",
        color : "#212121"
    },
    semibold_16 : {
        fontFamily : "BioSans-SemiBold",
        fontSize : "16px",
        color : "#212121"
    },
    semibold_15 : {
        fontFamily : "BioSans-SemiBold",
        fontSize : "15px",
        color : "#212121"
    },
    semibold_14 : {
        fontFamily : "BioSans-SemiBold",
        fontSize : "14px",
        color : "#212121"
    },
    semibold_13 : {
        fontFamily : "BioSans-SemiBold",
        fontSize : "13px",
        color : "#212121"
    },
    semibold_12 : {
        fontFamily : "BioSans-SemiBold",
        fontSize : "12px",
        color : "#212121"
    },
    semibold_9 : {
        fontFamily : "BioSans-SemiBold",
        fontSize : "9px",
        color : "#212121"
    },
    regular_10 : {
        fontFamily : "BioSans-Regular",
        fontSize : "10px",
        color : "#212121"
    },
    regular_12 : {
        fontFamily : "BioSans-Regular",
        fontSize : "12px",
        color : "#212121"
    },
    regular_13 : {
        fontFamily : "BioSans-Regular",
        fontSize : "13px",
        color : "#212121"
    },
    regular_14 : {
        fontFamily : "BioSans-Regular",
        fontSize : "14px",
        color : "#212121"
    },
    regular_15 : {
        fontFamily : "BioSans-Regular",
        fontSize : "15px",
        color : "#212121"
    },
    regular_16 : {
        fontFamily : "BioSans-Regular",
        fontSize : "16px",
        color : "#212121"
    },
    bold_35 : {
        fontFamily : "BioSans-Bold",
        fontSize : "35px",
        color : "#212121"
    },
    bold_24 : {
        fontFamily : "BioSans-Bold",
        fontSize : "24px",
        color : "#212121"
    },
    bold_18 : {
        fontFamily : "BioSans-Bold",
        fontSize : "18px",
        color : "#212121"
    },
    bold_12 : {
        fontFamily : "BioSans-Bold",
        fontSize : "12px",
        color : "#212121"
    },
    overflowStyle : {
        textOverflow : "ellipsis",
        overflow : "hidden",
        whiteSpace : "nowrap"
    }
}

const CustomText = (props) => {
    const {textType, styles, text, overflow} = props;
    const predefinedStyles = types[textType ? textType : "regular_16"]
    return (
        <div title = {overflow ? text : ""} style={overflow ? {...predefinedStyles, ...styles, ...types["overflowStyle"]} : {...predefinedStyles, ...styles}}>{text}</div>
    )
}

export default CustomText
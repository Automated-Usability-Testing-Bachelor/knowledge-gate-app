import React from "react";
import {Text, View} from "react-native";
import BackgroundTemplate from "../components/BackgroundTemplate";
import InvoiceCards from "../components/invoiceComponents/InvoiceCards";

const InvoiceScreen = () => (
    <BackgroundTemplate
        body={InvoiceCards()}
    />
)

export default InvoiceScreen;
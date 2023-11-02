function montoF(monto) {

    if (monto < 500){
        return "No hay descuento"
    }else if (monto > 500 && monto < 1000){
        descuento = monto*.05
        return monto - descuento
    }else if (monto > 1000 && monto < 7000){
        descuento = monto * .11
        return monto - descuento        
    }else if (monto > 7000 && monto < 15000){
        descuento = monto * .10
        return monto - descuento
    }else if (monto >= 15000){
        descuento = monto * .25
        return monto - descuento
    }
}
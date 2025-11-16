"use client"

import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/cart-store";
import Link from "next/link";
import { useEffect } from "react";


export default function SuccessPage() {
    const {clearCart} = useCartStore();

    useEffect(() => {
        clearCart()
    },[clearCart])
    return(
        <div className="container mx-auto px-4 py-8 text-center">
            <h1 className="text-3xl font-bold mb-4">Payment Successful!</h1>
            <p className="mb-4">Thank You for Shopping with us</p>
            <Button><Link href={"/product"}> Continue Shopping with us</Link></Button>  
        </div>
    )
}
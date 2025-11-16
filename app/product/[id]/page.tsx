import { stripe } from "@/lib/stripe"
import { ProductDetails } from "@/component/product-detail";
import { json } from "stream/consumers";


export default async function productPage({ params }: { params: { id: string } }) {

    const product = await stripe.products.retrieve(params.id, {
        expand: ["default_price"]
    });
    const plainProduct = JSON.parse(JSON.stringify(product))
    return (
        <ProductDetails product={plainProduct} />
    );
}
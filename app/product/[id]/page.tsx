import { stripe } from "@/lib/stripe"
import { ProductDetails } from "@/component/product-detail";

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params

    const product = await stripe.products.retrieve(id, {
        expand: ["default_price"]
    });

    const plainProduct = JSON.parse(JSON.stringify(product))

    return (
        <ProductDetails product={plainProduct} />
    );
}
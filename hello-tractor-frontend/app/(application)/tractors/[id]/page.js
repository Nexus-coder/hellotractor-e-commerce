import TractorDetailsPage from "@/components/pages/tractor-details";
export default async function TractorDetails({ params }) {
    let { id } = await params
    console.log(id)
    const products = await fetch(`${process.env.URL}/api/tractor/${id}`);
    let { tractor, relatedTractors } = await products.json();

    let {
        tractor_id,
        make,
        model,
        price,
        engine_power = 60,
        hours_used,
        fuel_type,
        year_of_manufacturing,
        image_url,

    } = tractor
    return (
        <TractorDetailsPage
            id={tractor_id}
            make={make}
            model={model}
            price={price}
            engine_power={engine_power}
            hours_used={hours_used}
            fuel_type={fuel_type}
            year_of_manufacturing={year_of_manufacturing}
            image_url={image_url}
            relatedTractors={relatedTractors}
        />
    )
}
